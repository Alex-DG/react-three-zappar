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
    // const parent = document.getElementById('experience')
    // const child = document.querySelector('canvas')
    // parent && child && parent.removeChild(child)

    this.face.destroy()
  }
}
