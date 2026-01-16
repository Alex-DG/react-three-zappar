import Face from './Face'

export default class World {
  private face!: Face

  constructor() {
    this.setFace()
  }

  setFace() {
    this.face = new Face()
  }

  resize() {}

  update() {
    this.face.update()
  }

  destroy() {
    this.face.destroy()
  }
}
