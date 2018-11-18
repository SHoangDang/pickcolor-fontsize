import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker';
import ChangeSize from './components/ChangeSize';
import ShowResult from './components/ShowResult';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      color: 'danger',
      fontSize: 15
    }
  }

  render() {

    return (
      <div className="container">
        <ColorPicker color={this.state.color}/>
        <ChangeSize />
        <ShowResult />
      </div>
    );
  }
}

export default App;
