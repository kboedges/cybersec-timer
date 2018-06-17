import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import Passwords from "./Passwords";
import Timer from "./Timer";

// Actions
class Active extends Component {
  render() {
    const { teamName } = this.props;

    return (
      <div className="active">
        <div className="box py-4 px-5">
          <h3 className="text-center team-name">Team: {teamName}</h3>
          <Timer />
          <Passwords />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ teamName, passwords }) => ({
  teamName,
  passwords
});

export default connect(mapStateToProps)(Active);
