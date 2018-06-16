import React, { Component } from "react";
import { connect } from "react-redux";
import Begin from "./Begin";
import Active from "./Active";

class App extends Component {
  render() {
    const { timerStarted } = this.props;

    return (
      <div className="app d-flex flex-column justify-content-center align-items-center">
        {timerStarted ? <Active /> : <Begin />}
      </div>
    );
  }
}

const mapStateToProps = ({ timerStarted }) => ({
  timerStarted
});

export default connect(mapStateToProps)(App);
