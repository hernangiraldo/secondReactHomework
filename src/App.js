import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = {
    word: '',
    lengthInput: 0
  }

  changeInputHandler = event => {
    const tmpWord = event.target.value;
    const newLght = tmpWord.length;
    this.setState( { word: tmpWord, lengthInput: newLght } );
  }
  
  deleteLetterHandler =  index => {
    let newWrd = [ ...this.state.word ];
    newWrd.splice(index, 1);
    this.setState( { word: newWrd.join(''), lengthInput: newWrd.length } );
  }

  render() {
    return (
      <div className="App">
        <input className="App__input" type="text" value={ this.state.word } onChange={ event => this.changeInputHandler(event) } />
        <ValidationComponent lght={ this.state.lengthInput } />
        <hr/>
        <CharComponent word={ this.state.word } delete={ this.deleteLetterHandler } />
      </div>
    );
  }
}

export default App;
