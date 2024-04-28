import React, { useState } from 'react'
import './Ball.css'
function Ball() {

    const [pressed,setPressed] = useState(false)

    const toggle = () => {
        setPressed(!pressed)
    }

  return (
    <>
   <div className={`ball ${pressed ? "jump" : ""}`}></div>
   <button onClick={toggle}>{pressed ? "Stop" : "Start"}</button>
   </>
  )
}

export default Ball