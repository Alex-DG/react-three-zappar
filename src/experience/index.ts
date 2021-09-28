import * as ZapparThree from '@zappar/zappar-threejs'
import * as THREE from 'three'

import faceTextureTemplate from '../assets/faceMeshTemplate.png'

class Experience {
  private camera!: ZapparThree.Camera

  private faceTrackerGroup!: ZapparThree.FaceAnchorGroup
  private faceMeshMesh!: THREE.Mesh
  private faceMaterial!: THREE.MeshStandardMaterial
  private faceBufferGeometry!: ZapparThree.FaceBufferGeometry

  private directionalLight!: THREE.DirectionalLight
  private ambientLight!: THREE.AmbientLight

  private renderer!: THREE.WebGLRenderer
  private scene!: THREE.Scene

  private targetElement!: HTMLDivElement | null

  constructor() {
    if (ZapparThree.browserIncompatible()) {
      ZapparThree.browserIncompatibleUI()
      throw new Error('Unsupported browser')
    }

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.scene = new THREE.Scene()
    this.camera = new ZapparThree.Camera()
    this.camera.start(true)
    this.scene.background = this.camera.backgroundTexture
  }

  private setResize() {
    this.targetElement?.addEventListener('resize', () => {
      const width = this.targetElement?.offsetWidth || window.innerWidth
      const height = this.targetElement?.offsetHeight || window.innerHeight

      this.renderer.setSize(width, height)
    })
  }

  private setLight() {
    this.directionalLight = new THREE.DirectionalLight('white', 0.8)
    this.directionalLight.position.set(0, 5, 0)
    this.directionalLight.lookAt(0, 0, 0)

    this.ambientLight = new THREE.AmbientLight('white', 0.4)

    this.scene.add(this.directionalLight, this.ambientLight)
  }

  private setFace() {
    const manager = new ZapparThree.LoadingManager()

    // Tracker
    const faceTracker = new ZapparThree.FaceTrackerLoader(manager).load()
    // Tracker group
    this.faceTrackerGroup = new ZapparThree.FaceAnchorGroup(
      this.camera,
      faceTracker
    )
    this.scene.add(this.faceTrackerGroup)

    // Face Mesh
    const faceMesh = new ZapparThree.FaceMeshLoader(manager).load()
    this.faceBufferGeometry = new ZapparThree.FaceBufferGeometry(faceMesh)

    const textureLoader = new THREE.TextureLoader(manager)
    const faceTexture = textureLoader.load(faceTextureTemplate)
    faceTexture.flipY = true

    this.faceMaterial = new THREE.MeshStandardMaterial({
      map: faceTexture,
      transparent: true,
    })

    // Construct a THREE Mesh object from our geometry and texture, and add it to our tracker group
    this.faceMeshMesh = new THREE.Mesh(
      this.faceBufferGeometry,
      this.faceMaterial
    )

    this.faceTrackerGroup.add(this.faceMeshMesh)

    this.faceTrackerGroup.faceTracker.onVisible.bind(() => {
      this.faceTrackerGroup.visible = true
    })
    this.faceTrackerGroup.faceTracker.onNotVisible.bind(() => {
      this.faceTrackerGroup.visible = false
    })
  }

  private setRenderer() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.targetElement?.appendChild(this.renderer.domElement)

    ZapparThree.glContextSet(this.renderer.getContext())
  }

  private render() {
    this.camera.updateFrame(this.renderer)

    this.faceBufferGeometry.updateFromFaceAnchorGroup(this.faceTrackerGroup)

    this.renderer.render(this.scene, this.camera)

    requestAnimationFrame(this.render.bind(this))
  }

  public dispose() {
    const shouldDispose =
      !!this.faceMaterial &&
      !!this.faceBufferGeometry &&
      !!this.scene &&
      !!this.directionalLight &&
      !!this.ambientLight

    if (shouldDispose) {
      this.faceMaterial.dispose()
      this.faceBufferGeometry.dispose()

      this.faceTrackerGroup.remove(this.faceMeshMesh)
      this.scene.remove(this.directionalLight, this.ambientLight)
    }
  }

  public init(targetElement: HTMLDivElement | null) {
    if (!targetElement) throw new Error("Missing 'targetElement' property")
    this.targetElement = targetElement

    this.setRenderer()
    this.setFace()
    this.setLight()
    this.setResize()
    this.render()
  }
}

const _instance = new Experience()
export default _instance
