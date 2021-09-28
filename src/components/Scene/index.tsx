import { useRef, useEffect } from 'react'

import Experience from '../../experience'

const Scene = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref) Experience.init(ref.current)
  }, [ref])

  return <div id="experience" ref={ref}></div>
}

export default Scene
