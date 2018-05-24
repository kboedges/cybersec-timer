import React, { Component } from 'react';
import InputGroup from './InputGroup'

class Passwords extends Component {

  render() {
    return (
      <div className="passwords">
        <p className="text-center">To save your data, enter the six passwords</p>
    
    <form action="">
      <div className="form-group text-center">
        <div className="form-group">
          <div className="row mb-3">
            <InputGroup fieldDisabled={false}/>
            <InputGroup fieldDisabled={true}/> 
          </div>
          <div className="row mb-3">
            <InputGroup fieldDisabled={true}/>
            <InputGroup fieldDisabled={true}/>
          </div>
          <div className="row mb-3">
            <InputGroup fieldDisabled={true}/>
            <InputGroup fieldDisabled={true}/>
          </div>
        </div>
      </div>
    </form>   
    <p className="text-center">
      <small className="text-muted text-center">If you submit an incorrect password, you lose 15 minutes.</small>
   </p>
      </div>
    );
  }
}

export default Passwords;
