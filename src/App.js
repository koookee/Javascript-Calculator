import React from 'react';
import './App.css';
import ButtonUI from './Components/ButtonUI';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      test:"failed"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(data){
    this.setState({test:"data"});
    console.log(this.state.test);
  }
  render(){
    return(
      <div>
        <ButtonUI onChangeData={this.handleChange} />
        <p>{this.state.test}</p>
      </div>
    )
  }
}

export default App;
