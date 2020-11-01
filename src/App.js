import React from 'react';
import './App.css';
import ButtonUI from './Components/ButtonUI';

let startingNum = true;
let numOfOperators = 0; //Number of consecutive operators
let oldDisplay = ""; //Display before adding operator

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      displayState:"0"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(data,typeOfData){

    if(typeOfData == "equal"){
      let answer = eval(this.state.displayState);
      this.setState({displayState:answer});
      startingNum = true;
    }
    else if(typeOfData == "operators"){
      //Doesn't allow two or more consecutive operators
      if (numOfOperators < 1) {
        oldDisplay = this.state.displayState;
        this.setState((prevState) => {
          return {displayState:prevState.displayState + data};})
      }
      else {
        this.setState({displayState:oldDisplay + data}); //Replaces old operator with new one
      }
      numOfOperators++;
      if (startingNum) {
        startingNum = false;
      }
    }
    else if(typeOfData=="number"){
      numOfOperators = 0;
      if (startingNum && data != "0") {
        this.setState({displayState:data})
        startingNum = false;
      }
      else {
        if (!startingNum) {
          this.setState((prevState) => {
            return {displayState:prevState.displayState + data};})
        }
      }
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
