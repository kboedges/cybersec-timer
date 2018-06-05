// On click of button, send that input's input through to validatePass, 
// this will compare to the passwordSolutions array. If the password matches, 

import React, { Component } from 'react';
import {connect} from 'react-redux'
import {validatePass, fetchPasses} from '../actions'
import PropTypes from 'prop-types';

class InputGroup extends Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchPasses());
    // }

    static propTypes = {
        fieldDisabled: PropTypes.bool.isRequired
    } 

    render() {
        const {fieldDisabled, passwords} = this.props;
        console.log("passwords:", passwords);
        
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
    passwords: state.passReducer.passwordSolutions
  });
  
const mapDispatchToProps = dispatch => ({
    validatePass: (passArray, passId, enteredPass) => dispatch(validatePass(passArray, passId, enteredPass)),
    fetchPasses: () => dispatch(fetchPasses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputGroup);
// export default connect(mapStateToProps)(InputGroup);
  
