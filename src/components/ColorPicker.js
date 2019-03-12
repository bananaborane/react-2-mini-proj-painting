import React, { Component } from 'react'

function ColorPicker(props) {
    return (
      <div>
        <button onClick={()=>props.handleColorClick('blue')}>blue</button>
        {/* onclick is wrapped in an arrow function to prevent being invoked immediately everytime page renders */}
        <button onClick={()=>props.handleColorClick('yellow')}>yellow</button>
        <button onClick={()=>props.handleColorClick('green')}>green</button>
        <button onClick={()=>props.handleColorClick('purple')}>purple</button>
        <button onClick={()=>props.handleColorClick('black')}>black</button>
      </div>
    )

}

export default ColorPicker
