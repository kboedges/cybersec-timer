// On click of button, send that input's input through to validatePass, 
// this will compare to the passwordSolutions array. If the password matches, 

import React, { Component } from 'react';
import {connect} from 'react-redux'
import {validatePass} from '../actions'
import PropTypes from 'prop-types';

class InputGroup extends Component {

    static propTypes = {
        fieldDisabled: PropTypes.bool.isRequired
    } 

    render() {
        const {fieldDisabled} = this.props;
        console.log("STATE:", this.props.state);
        
        return (
        <div className="input-group col">
                <input type="password" className="form-control" placeholder="Password 1" disabled={fieldDisabled}/>
                <div className="input-group-append">
                    <button className={`btn ${fieldDisabled ? 'btn-secondary' : 'btn-cornflower'}`} type="button" disabled={fieldDisabled}>Go</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state
    // timerStarted: state.timerStartedReducer.timerStarted,
    // teamName: state.timerStartedReducer.teamName
  });
  
  const mapDispatchToProps = dispatch => ({
    validatePass: (enteredPass) => dispatch(validatePass(enteredPass))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(InputGroup);
  
