import React from 'react'
import { useMousePosition } from '../effects'

export function MouseRender() {
  const mouse = useMousePosition()
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px' }}>
      x: {mouse.x} y: {mouse.y}
    </div>
  )
}
