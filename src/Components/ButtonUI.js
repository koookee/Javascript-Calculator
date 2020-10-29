import React from 'react';
import App from '../App.js';

class ButtonUI extends React.Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    this.props.onChangeData(e.target.value,true);
  }
  render(){
    return(
      <div style={{margin:"5em 40em"}}>
        <input type="button" id={this.props.name} value={this.props.symbol} onClick={this.handleClick} />
      </div>
    )
  }
}


export default ButtonUI;
