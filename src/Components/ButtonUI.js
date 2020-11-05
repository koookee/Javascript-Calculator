import React from 'react';
import App from '../App.js';

class ButtonUI extends React.Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    if(this.props.symbol == "="){
      this.props.onChangeData(e.target.value,"equal");
    }
    else if(this.props.symbol == "+" || this.props.symbol == "*" || this.props.symbol == "/" || this.props.symbol == "-"){
      this.props.onChangeData(e.target.value,"operators");
    }
    else if (this.props.symbol == ".") {
      this.props.onChangeData(e.target.value,"decimal")
    }
    else if (this.props.symbol == "AC") {
      this.props.onChangeData(e.target.value,"clear")
    }
    else {
      this.props.onChangeData(e.target.value,"number");
    }
  }
  render(){
    return(
      <div>
        <input type="button" id={this.props.name} value={this.props.symbol} onClick={this.handleClick} />
      </div>
    )
  }
}


export default ButtonUI;
