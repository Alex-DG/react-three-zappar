import { useState } from 'react'
import * as ZapparThree from '@zappar/zappar-threejs'

import Scene from './components/Scene'
import Button from './components/Button'

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
    <div className="landing-screen">
      <Button onClick={handleZapparPermission}>Allow Camera</Button>
    </div>
  )
}
export default App
