import React, { Component } from "react";
import ColorPicker from "./ColorPicker";
import Square from "./Square";

class PaintCanvas extends Component {
  constructor() {
    super();
    this.state = {
      selectedColor: "white"
    };

    /// binds to the instance of a class instead of the prototype
  }

  changeSelectedColor = (color) =>{
      console.log('clicked color')
      this.setState({
          selectedColor: color,
          painting: false
      })
  }

  draw = ()=>{
      let squares = [];
      for (let i = 0; i<5000; i++){
          squares.push(<Square 
            painting={this.state.painting}
            key={i} 
            selectedColor={this.state.selectedColor}/>)
      }
      return squares
  }

  togglePainting = ()=>{
      this.setState({
          painting: !this.state.painting
      })
  }

  render() {
    return (
      <div>
        <ColorPicker handleColorClick={this.changeSelectedColor}/>
            <div 
            style={{ display:'flex', flexWrap: 'wrap' }}
            onMouseDown={this.togglePainting}
            onMouseUp={this.togglePainting}>
                {this.draw()}
            </div>
      </div>
    );
  }
}

export default PaintCanvas;
