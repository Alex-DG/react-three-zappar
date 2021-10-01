import { useRef, useEffect } from 'react'

import Experience from '../../experience'

const Scene = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  let experience = useRef<Experience>()

  useEffect(() => {
    experience.current = new Experience({
      targetElement: targetRef.current,
    })

    return () => experience.current?.stop()
  }, [targetRef])

  return <div id="experience" ref={targetRef}></div>
}

export default Scene
