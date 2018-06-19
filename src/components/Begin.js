import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { startTimer } from "../reducers/timer/actions";
import { setTeamName } from "../reducers/team-name/actions";

class Begin extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleStart = () => {
    this.props.startTimer();
    this.props.setTeamName(this.state.value);
  };

  render() {
    // const { timerStarted } = this.props;

    return (
      <div className="begin">
        <div className="box py-4 px-5 d-flex d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center m-3">Begin your challenge.</h1>
          <input
            className="form-control w-50 m-3"
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
            placeholder="Team Name"
          />
          <button className="m-3 btn btn-lg btn-cornflower px-5" onClick={this.handleStart}>
            Start
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ timerStarted }) => ({
  timerStarted
});

const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimer()),
  setTeamName: teamName => dispatch(setTeamName(teamName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Begin);
