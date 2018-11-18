import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker';
import ChangeSize from './components/ChangeSize';
import ShowResult from './components/ShowResult';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      color: 'danger',
      fontSize: 14,
      min: 0,
      max: 42,
    }
    this.onSetColor = this.onSetColor.bind(this)
    this.onChangeSize = this.onChangeSize.bind(this)
    this.onHandleChange = this.onHandleChange.bind(this)
  }

  onSetColor(params) {
    this.setState({
      color: params
    })
  }

  onHandleChange(value){
    console.log(value.value);
    this.setState({
      fontSize: value.value
    })
  }

  onChangeSize(value){
    this.setState({
      fontSize: (this.state.fontSize + value >= this.state.min && this.state.fontSize + value <= this.state.max) ? this.state.fontSize + value : this.state.fontSize
    })
  }

  render() {

    return (
      <div className="container">
        <ColorPicker 
          color={this.state.color} 
          onReceiveColor={ this.onSetColor }

          />
        <ChangeSize 
          size={this.state.fontSize} 
          onChangeSize={this.onChangeSize} 
          onHandleChange={this.onHandleChange} 
          min={this.state.min} 
          max={this.state.max}/>
        <ShowResult 
          color={this.state.color} 
          size={this.state.fontSize}/>
      </div>
    );
  }
}

export default App;
