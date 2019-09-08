import React, { useState } from 'react'

const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'

const style = {
  backgroundImage: `url(${src})`,
  transform: 'scale(1)',
  overflow: "hidden"
}

export default function Zoom() {
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%')
  const [scale, setScale] = useState(1)

  const handleClick = e => {
    e.preventDefault()
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    setScale(scale + .1)
    setBackgroundPosition(`${x}% ${y}%`)
  }

  const calculatedStyles = { ...style, backgroundPosition, transform: `scale(${scale})`}
  console.log(calculatedStyles);
  
  return (
    <div onClick={handleClick} style={{overflow: "hidden", height: "600px", width: "800px"}}>
      <div className="image" style={calculatedStyles} >
      </div>
    </div>
  )
}
