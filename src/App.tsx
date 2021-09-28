import { useState } from 'react'
import * as ZapparThree from '@zappar/zappar-threejs'

import Scene from './components/Scene'

const App = () => {
  const [granted, setGranted] = useState(false)

  const handleClick = () => {
    ZapparThree.permissionRequest().then((granted) => {
      if (granted) setGranted(true)
      else ZapparThree.permissionDeniedUI()
    })
  }

  if (granted) return <Scene />

  return (
    <div className="splash-screen">
      <button onClick={handleClick}>Allow Camera</button>
    </div>
  )
}
export default App
