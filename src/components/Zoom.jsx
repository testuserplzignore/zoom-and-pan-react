import React, { useState, useRef } from 'react';
import { useSpring, animated} from 'react-spring';

const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'

const style = {
  // backgroundImage: `url(${src})`,

  overflow: "hidden"
}

export default function Zoom() {
  const [scale, setScale] = useState(1)
  const clickyDiv = useRef();

  const [animatedStyle, setAnimatedStyle] = useSpring(() => (
    { 
      transform: `scale(${1}) translate(0%, 0%)`
    }
  ))

  const handleClick = e => {
    console.log(e.target, clickyDiv);
    
    const { left, top, width, height } = clickyDiv.current.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    console.log(x, y)
    setAnimatedStyle({
      transform: `scale(${scale + 1}) translate(${x * -0.5}%, ${y * -0.5}%)`
    })
    setScale(scale + 1)
  }

  const calculatedStyles = { ...style, ...animatedStyle}
  console.log(calculatedStyles);
  
  return (
    <div onClick={handleClick} ref={clickyDiv} style={{overflow: "hidden", height: "500px", width: "750px"}}>
      <animated.div className="image" style={calculatedStyles} >
        <img src={src} />
      </animated.div>
    </div>
  )
}
