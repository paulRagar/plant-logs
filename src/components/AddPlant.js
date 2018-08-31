import React, { Component } from 'react'

class AddPlant extends Component {
  state = {
    name: '',
    sci_name: '',
    photo: null
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="name" type="text" className="validate" />
                <label htmlFor="name">Plant's Nickname</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="sci_name" type="text" className="validate" />
                <label htmlFor="sci_name">Plant's Scientific Name</label>
              </div>
            </div>
            <div className="file-field input-field">
              <div className="btn purple lighten-3">
                <span>
                  <i className="material-icons left">add</i>
                  <span>Photo</span>
                </span>
                <input type="file" />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddPlant
