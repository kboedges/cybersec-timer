import React, { Component } from 'react';
import {connect} from 'react-redux'
import Begin from './Begin'
import Active from './Active'

class App extends Component {

  render() {
    const { state } = this.props;

    return (
      <div className="app d-flex flex-column justify-content-center align-items-center">
         { state.timeReducer.timerStarted ? <Active/> : <Begin/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps)(App);
