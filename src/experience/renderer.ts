import * as THREE from 'three'

import Experience from '.'

export default class Renderer {
  private experience: Experience
  public instance!: THREE.WebGLRenderer

  constructor() {
    this.experience = new Experience()
    this.setInstance()
  }

  private setInstance() {
    this.instance = new THREE.WebGLRenderer({ antialias: true })
    this.instance.setSize(
      this.experience.config.width,
      this.experience.config.height
    )
    this.instance.setPixelRatio(this.experience.config.pixelRatio)
  }

  public resize() {
    this.instance.setSize(
      this.experience.config.width,
      this.experience.config.height
    )
    this.instance.setPixelRatio(this.experience.config.pixelRatio)
  }

  public update() {
    this.instance.render(this.experience.scene, this.experience.camera.instance)
  }
}
