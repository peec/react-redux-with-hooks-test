import React from 'react'

export function useMousePosition() {
  const [position, setMousePosition] = React.useState({ x: 0, y: 0 })
  function handleMouseMove(e) {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return position
}
