import React from 'react'

const BlurCircle = ({ top, right, bottom, left }) => {
  return (
    <div 
      className="absolute w-[200px] h-[200px] rounded-full bg-primary opacity-30 blur-[70px]"
      style={{ top, right, bottom, left }}
    />
  )
}

export default BlurCircle