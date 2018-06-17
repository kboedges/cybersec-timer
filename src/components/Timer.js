import React, { Component } from "react";
import Countdown from "react-countdown-now";
import { connect } from "react-redux";

// Actions
import { generateDate } from "../reducers/date/actions";

class Timer extends Component {
  componentDidMount() {
    this.props.generateDate();
  }

  renderer = props => {
    return (
      <div>
        {`${props.hours}:${props.minutes}:${props.seconds}`.split("").map((char, index) => (
          <span
            key={index}
            className={`time-char ${
              props.total === 0 || this.props.timerColor === "red" ? "time-red" : "time-normal"
            } px-2 py-3 mx-1`}
          >
            {char}
          </span>
        ))}
      </div>
    );
  };

  render() {
    const { date } = this.props;

    return (
      <div className="timer pb-3">
        <p className="text-center pb-3">Your data will be deleted in:</p>
        <h1 className="timer-head text-center mb-2">
          <Countdown date={date} renderer={this.renderer} />
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

const mapStateToProps = ({ date, timerColor }) => ({
  date,
  timerColor
});

const mapDispatchToProps = dispatch => ({
  generateDate: () => dispatch(generateDate())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
