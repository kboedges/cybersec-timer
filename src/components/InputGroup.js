import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Actions
import { storePass } from "../reducers/store-pass/actions";
import { updateInputs } from "../reducers/inputs/actions";
import { minusFifteen } from "../reducers/date/actions";
import { flashRed, changeGreen, changeDefault } from "../reducers/highlight-timer/actions";

class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      passCorrect: ""
    };
  }

  static propTypes = {
    passId: PropTypes.number.isRequired
  };

  componentDidUpdate() {
    this.handleAllCorrect();
  }

  handleAllCorrect = () => {
    if (!this.props.inputsArray.includes(false)) {
      this.props.changeGreen();
    }
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.passwords.includes(this.state.value)) {
      // Valid pass
      if (!this.props.storedPasses.includes(this.state.value)) {
        // Never been used
        this.props.updateInputs(this.props.passId);
        this.props.storePass(this.state.value);
        this.setState({
          passCorrect: true
        });
        this.props.changeDefault();
      } else {
        // Already been used, not valid
        this.setState({
          passCorrect: false,
          value: ""
        });
        this.props.minusFifteen();
        this.props.flashRed();
      }
    } else {
      // Not valid pass
      this.setState({
        passCorrect: false,
        value: ""
      });
      this.props.minusFifteen();
      this.props.flashRed();
    }
  };

  render() {
    const { inputsArray, passId } = this.props;
    const prevInput = inputsArray[passId - 1];

    return (
      <div className="input-group col">
        <input
          type="password"
          className="form-control"
          placeholder={`Password ${passId}`}
          disabled={this.state.passCorrect === true || prevInput === false}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <button
            className={`btn btn-input ${prevInput === false ? "btn-secondary" : "btn-cornflower"} ${
              this.state.passCorrect === true ? "btn-correct" : this.state.passCorrect === false ? "btn-wrong" : ""
            }`}
            type="button"
            disabled={this.state.passCorrect === true || prevInput === false}
            onClick={this.handleSubmit}
          >
            {this.state.passCorrect === true ? "✔" : "Go"}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ passwords, storedPasses, inputsArray }) => ({
  passwords,
  storedPasses,
  inputsArray
});

const mapDispatchToProps = dispatch => ({
  storePass: providedPass => dispatch(storePass(providedPass)),
  updateInputs: passId => dispatch(updateInputs(passId)),
  minusFifteen: () => dispatch(minusFifteen()),
  flashRed: () => dispatch(flashRed()),
  changeDefault: () => dispatch(changeDefault()),
  changeGreen: () => dispatch(changeGreen())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputGroup);
