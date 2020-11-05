import React from 'react';
import './App.css';
import ButtonUI from './Components/ButtonUI';

let startingNum = true; //Starting num is inital state of calculator
let numOfOperators = 0; //Number of consecutive operators
let canAddDecimal  = true;
let oldDisplay = ""; //Display before adding operator
let gotAnswer = false; //True only after the user presses the equal sign

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
      if(numOfOperators == 0) { //Only gets the result when the equation doesn't end with an operator
        let answer = eval(this.state.displayState);
        if(answer == 0){
          startingNum = true;
        }
        this.setState({displayState:answer});
        gotAnswer = true;
        canAddDecimal = true;
      }
    }

    else if(typeOfData == "operators"){

      gotAnswer = false;
      startingNum = false;
      canAddDecimal = true;

      //Doesn't allow two or more consecutive operators
      if (numOfOperators == 0) {
        oldDisplay = this.state.displayState;
        this.setState((prevState) => {
          return {displayState:prevState.displayState + data};})
        numOfOperators++;
      }
      else if (numOfOperators == 1 && data == "-") {
        this.setState((prevState) => {
          return {displayState:prevState.displayState + data};})
        numOfOperators++;
      }
      else {
        this.setState({displayState:oldDisplay + data}); //Replaces old operator with new one
        numOfOperators = 1;
      }
    }

    else if (typeOfData == "decimal") {
      if(canAddDecimal){
        if(startingNum || gotAnswer) {
          this.setState(prevState => { //Replaces state with 0.
            return {displayState:"0" + data} //0.
          })
        }
        else if(numOfOperators == 0){
          this.setState(prevState => { //Adds . to a number
            return {displayState:prevState.displayState + data} // x.
          })
        }
        else {
          this.setState(prevState => { //Adds 0. after an operator
            return {displayState:prevState.displayState + "0" + data} //0.1
          })
        }
      }

      canAddDecimal = false;
      startingNum = false;
      gotAnswer = false;
      numOfOperators = 0;
    }

    else if(typeOfData=="number"){
      numOfOperators = 0;
      if ((startingNum && data != "0") || gotAnswer) {
        this.setState({displayState:data})
        startingNum = false;
        if(gotAnswer && data == "0"){
          startingNum = true; //Back to the initial state
        }
        gotAnswer = false;
      }
      else if (!startingNum && !gotAnswer) {
        this.setState((prevState) => {
          return {displayState:prevState.displayState + data};})
      }
  }
  else if (typeOfData == "clear") {
    this.setState({displayState:"0"})
    startingNum = true;
    numOfOperators = 0;
    canAddDecimal = true;
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
        <ButtonUI name="decimal" symbol="." onChangeData={this.handleChange} />
        <ButtonUI name="clear" symbol="AC" onChangeData={this.handleChange} />
        <p id="display">{this.state.displayState}</p>
      </div>
    )
  }
}

export default App;
