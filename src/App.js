import React from 'react';
import './App.css';
import ButtonUI from './Components/ButtonUI';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      displayState:"0"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(data,typeOfData){
    let numOfOperators = 0; //Number of consecutive operators

    if(typeOfData == "equal"){
      let answer = eval(this.state.displayState);
      this.setState({displayState:answer});
    }
    else if(typeOfData == "operators"){
      this.setState((prevState) => {
        return {displayState:prevState.displayState + data};})
    }
    else if(typeOfData=="number"){
        this.setState((prevState) => {
          return {displayState:prevState.displayState + data};})
  }
}
  render(){
    return(
      <div style={{margin:"4em 15em",display:"grid",gridTemplateRows: "5% 5% 5% 5% 5% 5%",
  gridTemplateColumns: "5% 5% 5% 5%"}}>
        <ButtonUI name="equals" symbol="=" onChangeData={this.handleChange} />
        <ButtonUI name="zero" symbol="0" onChangeData={this.handleChange} />
        <ButtonUI name="one" symbol="1" onChangeData={this.handleChange} />
        <ButtonUI name="two" symbol="2" onChangeData={this.handleChange} />
        <ButtonUI name="three" symbol="3" onChangeData={this.handleChange} />
        <ButtonUI name="four" symbol="4" onChangeData={this.handleChange} />
        <ButtonUI name="five" symbol="5" onChangeData={this.handleChange} />
        <ButtonUI name="six" symbol="6" onChangeData={this.handleChange} />
        <ButtonUI name="seven" symbol="7" onChangeData={this.handleChange} />
        <ButtonUI name="eight" symbol="8" onChangeData={this.handleChange} />
        <ButtonUI name="nine" symbol="9" onChangeData={this.handleChange} />
        <ButtonUI name="add" symbol="+" onChangeData={this.handleChange} />
        <ButtonUI name="subtract" symbol="-" onChangeData={this.handleChange} />
        <ButtonUI name="multiply" symbol="*" onChangeData={this.handleChange} />
        <ButtonUI name="divide" symbol="/" onChangeData={this.handleChange} />
        <p id="display">{this.state.displayState}</p>
      </div>
    )
  }
}

export default App;
