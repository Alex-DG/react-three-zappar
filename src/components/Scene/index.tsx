import { useRef, useEffect } from 'react'

import Experience from '../../experience'

const Scene = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  let experience = useRef<Experience>()

  useEffect(() => {
    // 🚧 WIP: Fix hot reloading
    if (!experience.current) {
      experience.current = new Experience({
        targetElement: containerRef.current,
      })
    }
  }, [containerRef])

  return <div id="experience" ref={containerRef}></div>
}

export default Scene
