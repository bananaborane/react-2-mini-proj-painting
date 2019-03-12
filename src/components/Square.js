import React, { Component } from "react";

class Square extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "white"
    }
  }

  handleClick = ()=>{
      if(this.props.painting){
      this.setState({
          backgroundColor: this.props.selectedColor
      })
    }
    }

  render() {
    return (
      <div
        style={{
          height: 10,
          width: 10,
          border: "1px solid black",
          backgroundColor: this.state.backgroundColor
        }}
        onMouseEnter={this.handleClick}>

      </div>
    )
  }
}

export default Square;
