import React, { useState } from 'react'

function ColorChange() {
    const [color,setColor] = useState("")

    const handleChange  =  (event) => {
        setColor(event.target.value)
    }
  return (
<>
<div style={{
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : "center"

}}>
   
    <div style= {{
        backgroundColor : color,
        height: "400px ",
        width : "400px",
        border : "2px solid black"


    }}>

    </div>
    <div>
        <input 
        style={{
            height: "40px"
        }}
        type="text"
        value={color}
        placeholder='Enter color name or hexcode'
        onChange={handleChange}
        />
    </div>
    </div>
    </>

  )
}

export default ColorChange