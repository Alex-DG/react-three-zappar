import * as ZapparThree from '@zappar/zappar-threejs'

import Experience from '.'

export default class Camera {
  private experience: Experience

  public instance!: ZapparThree.Camera

  constructor() {
    this.experience = new Experience()

    this.setInstance()
  }

  private setInstance() {
    this.instance = new ZapparThree.Camera()
  }

  public start(value = true) {
    this.instance.start(value)
  }

  public update() {
    if (this.experience.renderer) {
      this.instance.updateFrame(this.experience.renderer.instance)
    }
  }
}
