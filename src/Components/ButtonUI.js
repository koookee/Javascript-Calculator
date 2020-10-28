import React from 'react';
import App from '../App.js';

class ButtonUI extends React.Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    this.props.onChangeData("test")
  }
  render(){
    return(
      <div style={{margin:"5em 40em"}}>
        <input type="button" onClick={this.handleClick} />
        <p>Hello</p>
      </div>
    )
  }
}


export default ButtonUI;
