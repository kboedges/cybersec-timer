import React, { Component } from "react";
import Countdown from "react-countdown-now";
import { connect } from "react-redux";

// Actions
import { generateDate } from "../reducers/date/actions";
import { disableAllInputs } from "../reducers/disable-inputs/actions";
import { changeRed } from "../reducers/highlight-timer/actions";

class Timer extends Component {
  componentDidMount() {
    this.props.generateDate();
  }

  handleTimerFinish = () => {
    this.props.disableAllInputs();
    this.props.changeRed();
  };

  renderer = props => {
    return (
      <div>
        {`${props.hours}:${props.minutes}:${props.seconds}`.split("").map((char, index) => (
          <span
            key={index}
            className={`time-char ${
              props.total === 0 || this.props.timerColor === "red" ? "time-red" : "time-normal"
            } ${this.props.timerColor === "green" ? "time-green" : ""} px-2 py-3 mx-1`}
          >
            {char}
          </span>
        ))}
      </div>
    );
  };

  render() {
    const { date, timerColor, inputsDisabled } = this.props;

    return (
      <div className="timer pb-3">
        <p className="text-center pb-3">
          {timerColor === "green" ? (
            <span className="saved-title">Your data has been saved</span>
          ) : timerColor === "red" && inputsDisabled === true ? (
            <span className="deleted-title">Your data has been deleted</span>
          ) : (
            "Your data will be deleted in:"
          )}
        </p>
        <h1 className="timer-head text-center mb-2">
          <Countdown date={date} renderer={this.renderer} onComplete={this.handleTimerFinish} />
        </h1>
        <div className="d-flex flex-row justify-content-around time-stamps text-small mb-5 px-2">
          <span className="hours">HOURS</span>
          <span className="minutes">MINUTES</span>
          <span className="seconds">SECONDS</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ date, timerColor, inputsDisabled }) => ({
  date,
  timerColor,
  inputsDisabled
});

const mapDispatchToProps = dispatch => ({
  generateDate: () => dispatch(generateDate()),
  disableAllInputs: () => dispatch(disableAllInputs()),
  changeRed: () => dispatch(changeRed())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
