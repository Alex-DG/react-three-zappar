import * as THREE from 'three'

import Experience, { Configuration } from '.'
import Camera from './camera'

export default class Renderer {
  private experience: Experience
  private config: Configuration
  private camera: Camera
  private scene: THREE.Scene

  public instance!: THREE.WebGLRenderer

  constructor() {
    this.experience = new Experience()
    this.config = this.experience.config
    this.scene = this.experience.scene
    this.camera = this.experience.camera

    this.setInstance()
  }

  private setInstance() {
    this.instance = new THREE.WebGLRenderer({ antialias: true })
    this.instance.setSize(this.config.width, this.config.height)
    this.instance.setPixelRatio(this.config.pixelRatio)
  }

  public resize() {
    this.instance.setSize(this.config.width, this.config.height)
    this.instance.setPixelRatio(this.config.pixelRatio)
  }

  public update() {
    if (this.instance) {
      this.instance.render(this.scene, this.camera.instance)
    }
  }
}
