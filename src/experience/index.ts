import * as ZapparThree from '@zappar/zappar-threejs'
import * as THREE from 'three'

import Camera from './camera'
import Renderer from './renderer'
import World from './world'

type Options = {
  targetElement: HTMLDivElement | null | undefined
}

type Configuration = {
  pixelRatio: number
  width: number
  height: number
}

class Experience {
  static instance: Experience

  private isRunning = false

  public targetElement!: HTMLDivElement | null | undefined
  public config!: Configuration
  public scene!: THREE.Scene
  public renderer!: Renderer
  public camera!: Camera
  public world!: World

  constructor(options?: Options) {
    // :: AR compatibility check ::.
    if (ZapparThree.browserIncompatible()) {
      ZapparThree.browserIncompatibleUI()
      throw new Error('Unsupported browser')
    }

    // :: Singleton pattern ::
    if (Experience.instance) {
      return Experience.instance
    }
    Experience.instance = this

    // :: DOM ::
    this.targetElement = options?.targetElement

    if (!this.targetElement) {
      console.warn("Missing 'targetElement' property")
      return
    }

    // :: Intialising experience ::
    this.setScene()
    this.setCamera()
    this.setConfig()
    this.setRenderer()
    this.setWorld()
    this.setResize()

    this.isRunning = true

    console.log('Starting experience...')
    this.update()
  }

  private setWorld() {
    this.world = new World()
  }

  private setCamera() {
    this.camera = new Camera()
    this.camera.instance.start(true)
    this.scene.background = this.camera.instance.backgroundTexture
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

  private setScene() {
    this.scene = new THREE.Scene()
  }

  private setResize() {
    window.addEventListener('resize', () => {
      const boundings = this.targetElement?.getBoundingClientRect()
      this.config.width = boundings?.width || window.innerWidth
      this.config.height = boundings?.height || window.innerHeight

      this.world.resize()
      this.renderer.resize()
    })
  }

  private setRenderer() {
    this.renderer = new Renderer()
    this.targetElement?.appendChild(this.renderer.instance.domElement)
    ZapparThree.glContextSet(this.renderer.instance.getContext())
  }

  private update() {
    if (this.isRunning) {
      this.camera?.update()
      this.world?.update()
      this.renderer?.update()

      requestAnimationFrame(this.update.bind(this))
    }
  }

  public destroy() {
    this.stop()
    this.world?.destroy()
  }

  public stop() {
    this.isRunning = false
  }
}

export default Experience
