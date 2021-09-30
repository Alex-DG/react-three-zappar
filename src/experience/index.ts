import * as ZapparThree from '@zappar/zappar-threejs'
import * as THREE from 'three'

import Camera from './camera'
import Renderer from './renderer'
import World from './world'

type Options = {
  targetElement: HTMLDivElement | null | undefined
}

export type Configuration = {
  pixelRatio: number
  width: number
  height: number
}
export default class Experience {
  static instance: Experience

  public targetElement!: HTMLDivElement | null | undefined
  public config!: Configuration
  public scene!: THREE.Scene
  public camera!: Camera
  public renderer!: Renderer
  public world!: World

  constructor(options?: Options) {
    if (ZapparThree.browserIncompatible()) {
      ZapparThree.browserIncompatibleUI()
      throw new Error('Unsupported browser')
    }

    if (Experience.instance) {
      return Experience.instance
    }
    Experience.instance = this

    this.targetElement = options?.targetElement

    if (!this.targetElement) throw new Error("Missing 'targetElement' property")

    console.log('Start experience....')

    this.setConfig()
    this.setResize()
    this.setScene()
    this.setCamera()
    this.setRenderer()
    this.setWorld()

    this.update()
  }

  private setConfig() {
    this.config = {
      pixelRatio: 0,
      width: 0,
      height: 0,
    }

    // Pixel ratio
    this.config.pixelRatio = Math.min(Math.max(window.devicePixelRatio, 1), 2)

    // Width and height
    const boundings = this.targetElement?.getBoundingClientRect()
    this.config.width = boundings?.width || window.innerWidth
    this.config.height = boundings?.height || window.innerHeight
  }

  private setResize() {
    this.targetElement?.addEventListener('resize', () => {
      const boundings = this.targetElement?.getBoundingClientRect()
      this.config.width = boundings?.width || window.innerWidth
      this.config.height = boundings?.height || window.innerHeight

      this.world.resize()
      this.renderer.resize()
    })
  }

  private setScene() {
    this.scene = new THREE.Scene()
  }

  private setCamera() {
    this.camera = new Camera()
  }

  private setRenderer() {
    this.renderer = new Renderer()
    this.targetElement?.appendChild(this.renderer.instance.domElement)
    ZapparThree.glContextSet(this.renderer.instance.getContext())
  }

  private setWorld() {
    this.world = new World()
  }

  private update() {
    if (this.camera) this.camera.update()
    if (this.world) this.world.update()
    if (this.renderer) this.renderer.update()

    requestAnimationFrame(this.update.bind(this))
  }

  public destroy() {
    this.world.destroy()
  }
}
