import React, { useRef, useEffect } from 'react'

import Experience from '../../experience'

const Scene = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const experience = new Experience({ targetElement: ref.current })
    return () => experience.destroy()
  }, [ref])

  return <div id="experience" ref={ref}></div>
}

export default Scene
