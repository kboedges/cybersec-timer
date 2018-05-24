import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputGroup extends Component {

    static propTypes = {
        fieldDisabled: PropTypes.bool.isRequired
    } 

    render() {
        const {fieldDisabled} = this.props;
        console.log(fieldDisabled);
        
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

export default InputGroup;
