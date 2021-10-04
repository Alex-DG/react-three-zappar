import { useState } from 'react'
import * as ZapparThree from '@zappar/zappar-threejs'

import Scene from '../components/Scene'
import Button from '../components/Button'

const App = () => {
  const [granted, setGranted] = useState(false)

  const handleZapparPermission = () => {
    ZapparThree.permissionRequest().then((granted) => {
      if (granted) setGranted(true)
      else ZapparThree.permissionDeniedUI()
    })
  }

  if (granted) return <Scene />

  return (
    <div className="app">
      <Button onClick={handleZapparPermission}>Allow Camera</Button>

      <a
        href="https://www.zappar.com/"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        Zappar: Augmented, Virtual & Mixed Reality Solution
      </a>
    </div>
  )
}
export default App
