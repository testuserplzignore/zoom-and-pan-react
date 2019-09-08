import React, { useState } from 'react';
import { useSpring, animated} from 'react-spring';

const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'

const style = {
  backgroundImage: `url(${src})`,

  overflow: "hidden"
}

export default function Zoom() {
  const [scale, setScale] = useState(1)

  const [animatedStyle, setAnimatedStyle] = useSpring(() => (
    { 
      transform: `scale(${1})`,
      backgroundPosition: '0% 0%'
    }
  ))

  const handleClick = e => {
    e.preventDefault()
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    setAnimatedStyle({
      transform: `scale(${scale + .1})`,
      backgroundPosition: `${x}% ${y}%`
    })
    setScale(scale + .1)
  }

  const calculatedStyles = { ...style, ...animatedStyle}
  console.log(calculatedStyles);
  
  return (
    <div onClick={handleClick} style={{overflow: "hidden", height: "600px", width: "800px"}}>
      <animated.div className="image" style={calculatedStyles} >
      </animated.div>
    </div>
  )
}
