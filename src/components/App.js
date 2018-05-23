import React, { Component } from 'react';
import Begin from './Begin'
import Active from './Active'

class App extends Component {
  render() {
    return (
      <div className="App">
        CyberSec Project
        < Begin />
        < Active />
      </div>
    );
  }
}

export default App;
