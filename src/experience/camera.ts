import * as ZapparThree from '@zappar/zappar-threejs'
import Experience from '.'
import Renderer from './renderer'

export default class Camera {
  private experience: Experience
  private renderer: Renderer

  public instance!: ZapparThree.Camera

  constructor() {
    this.experience = new Experience()
    this.renderer = this.experience.renderer
    this.setInstance()
  }

  private setInstance() {
    this.instance = new ZapparThree.Camera()
    this.start()
  }

  public start(value = true) {
    this.instance.start(value)
  }

  public update() {
    if (this.renderer) {
      this.instance.updateFrame(this.renderer.instance)
    }
  }
}
