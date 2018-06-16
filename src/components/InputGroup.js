import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  static propTypes = {
    fieldDisabled: PropTypes.bool.isRequired,
    passId: PropTypes.number.isRequired
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  render() {
    const { fieldDisabled } = this.props;

    return (
      <div className="input-group col">
        <input
          type="password"
          className="form-control"
          placeholder="Password 1"
          disabled={fieldDisabled}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <button
            className={`btn ${
              fieldDisabled ? "btn-secondary" : "btn-cornflower"
            }`}
            type="button"
            disabled={fieldDisabled}
            onClick={this.handleSubmit}
          >
            Go
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ passwords }) => ({
  passwords
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputGroup);
