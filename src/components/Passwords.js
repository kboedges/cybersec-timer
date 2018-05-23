import React, { Component } from 'react';

class Passwords extends Component {
  render() {
    return (
      <div className="passwords">
        <p className="text-center">To save your data, enter the six passwords</p>
    <form action="">
      <div className="form-group text-center">
        <div className="form-group">
          <div className="row mb-3">
            <div className="input-group col">
              <input type="password" className="form-control" placeholder="Password 1"></input>
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">Go</button>
              </div>
            </div>
            <div className="input-group col">
              <input type="password" className="form-control" placeholder="Password 2"></input>
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">Go</button>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="input-group col">
              <input type="password" class="form-control" placeholder="Password 3"></input>
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">Go</button>
              </div>
            </div>
            <div className="input-group col">
              <input type="password" class="form-control" placeholder="Password 4"></input>
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">Go</button>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="input-group col">
              <input type="password" className="form-control" placeholder="Password 5"></input>
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">Go</button>
              </div>
            </div>
            <div className="input-group col">
              <input type="password" class="form-control" placeholder="Password 6"></input>
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">Go</button>
              </div>
            </div>
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
