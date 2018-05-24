import React, { Component } from 'react';
import Begin from './Begin'
import Active from './Active'
// import PropTypes from 'prop-types'

class App extends Component {

  // static propTypes = {
  //   started: PropTypes.bool.isRequired,
  //   startTimer: PropTypes.func.isRequired
  // }

  render() {
    // const {started, startTimer} = this.props;

    return (
      <div className="app d-flex flex-column justify-content-center align-items-center">
        { }
        {/* <Begin started={started} onClickStart={startTimer}/> */}
        <Active/>
      </div>
    );
  }
}

export default App;
