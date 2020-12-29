import React from 'react';
import App from '../App.js';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <button className="btn btn-light" id={this.props.name} value={this.props.symbol} onClick={this.handleClick}>{this.props.symbol}</button>
      </div>
    )
  }
}


export default ButtonUI;
