import { useRef, useEffect } from 'react'

import Experience from '../../experience'

const Scene = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    Experience.init(ref.current)
    return () => Experience.dispose()
  }, [ref])

  return <div id="experience" ref={ref}></div>
}

export default Scene
