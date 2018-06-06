import React, { Component } from 'react';
import InputGroup from './InputGroup'

class Passwords extends Component {

  render() {
    return (
      <div className="passwords">
        <p className="text-center pb-3">To save your data, enter the six passwords</p>
        <form action="">
          <div className="form-group text-center">
            <div className="form-group">
              <div className="row mb-3">
                <InputGroup fieldDisabled={false} passId={1}/>
                <InputGroup fieldDisabled={true} passId={2}/> 
              </div>
              <div className="row mb-3">
                <InputGroup fieldDisabled={true} passId={3}/>
                <InputGroup fieldDisabled={true} passId={4}/>
              </div>
              <div className="row mb-3">
                <InputGroup fieldDisabled={true} passId={5}/>
                <InputGroup fieldDisabled={true} passId={6}/>
              </div>
            </div>
          </div>
        </form>   
        <p className="text-center">
          <small className="text-muted text-center">If you submit an incorrect password, you lose 15 minutes</small>
        </p>
      </div>
    );
  }
}

export default Passwords;
