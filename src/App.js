import React from 'react';
import './App.css';
import ButtonUI from './Components/ButtonUI';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      test:"0"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(data,executeResult){
    this.setState((prevState) => {
      return {test:prevState.test + data};
    }
  );
    if(executeResult){
      this.setState({test:"0"})
    }
  }
  render(){
    return(
      <div>
        <ButtonUI name="equals" symbol="=" onChangeData={this.handleChange} />
        <p id="display" style={{margin:"1em 40em"}}>{this.state.test}</p>
      </div>
    )
  }
}

export default App;
