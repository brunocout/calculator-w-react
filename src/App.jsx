import React, { Component } from 'react';
import * as math from 'mathjs';

import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      input: ""
    }

    this.addToInput = this.addToInput.bind(this)
  }

  addToInput = (v) => {
    this.setState({ input: this.state.input + v }) 
  }

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) })
  }

  render() {
    return (
      <div className="container">
        <div className="calc-container">
          <Input input={this.state.input}></Input>
          <div class="row-container">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div class="row-container">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>X</Button>
          </div>
          <div class="row-container">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div class="row-container">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div class="row-container">
            <ClearButton handleClear={() => this.setState({input: ""})}>Limpar</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
