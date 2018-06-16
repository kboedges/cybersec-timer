import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Actions
import { storePass } from "../reducers/store-pass/actions";

class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      passCorrect: ""
    };
  }

  static propTypes = {
    fieldDisabled: PropTypes.bool.isRequired,
    passId: PropTypes.number.isRequired
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.passwords.includes(this.state.value)) {
      console.log("Valid pass");
      if (!this.props.storedPasses.includes(this.state.value)) {
        console.log("Never been used");
        this.props.storePass(this.state.value);
        this.setState({
          passCorrect: true
        });
      } else {
        console.log("Already been used, not valid");
        this.setState({
          passCorrect: false,
          value: ""
        });
      }
    } else {
      console.log("Not valid pass");
      this.setState({
        passCorrect: false,
        value: ""
      });
    }
  };

  render() {
    const { fieldDisabled } = this.props;
    console.log(this.state.passCorrect);

    return (
      <div className="input-group col">
        <input
          type="password"
          className="form-control"
          placeholder="Password 1"
          disabled={this.state.passCorrect === true || fieldDisabled}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <button
            className={`btn btn-input ${
              fieldDisabled ? "btn-secondary" : "btn-cornflower"
            } ${
              this.state.passCorrect === true
                ? "btn-correct"
                : this.state.passCorrect === false
                  ? "btn-wrong"
                  : ""
            }`}
            type="button"
            disabled={this.state.passCorrect === true || fieldDisabled}
            onClick={this.handleSubmit}
          >
            {this.state.passCorrect === true ? "✔" : "Go"}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ passwords, storedPasses }) => ({
  passwords,
  storedPasses
});

const mapDispatchToProps = dispatch => ({
  storePass: providedPass => dispatch(storePass(providedPass))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputGroup);
