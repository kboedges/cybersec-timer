import React, { Component } from 'react';
import Begin from './Begin'
import Active from './Active'

class App extends Component {
  render() {
    return (
      <div className="app d-flex flex-column justify-content-center align-items-center">
        {/* < Begin /> */}
        < Active />
      </div>
    );
  }
}

export default App;
