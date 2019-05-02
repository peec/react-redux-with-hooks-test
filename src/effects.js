import React from 'react'

export function useMousePosition() {
  const [position, setMousePosition] = React.useState({ x: 0, y: 0 })
  function handleMouseMove(e) {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  // useEffect runs only once depending on the "deps" which is empty array.
  React.useEffect(() => {
    // Same as: componentDidMount + componentDidUpdate
    window.addEventListener('mousemove', handleMouseMove)

    // The cleanup function is same as: componentWillUnmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return position
}
