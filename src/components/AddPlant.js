import React, { Component } from 'react'
import { firestore, storage } from 'firebase'

class AddPlant extends Component {
  state = {
    name: '',
    sci_name: '',
    photo: '',
    birthday: '',
    reference_url: '',
    notes: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log('handleSubmit START')
    const downloadUrl = await this.addPlantPhoto()
    console.log('handleSubmit:downloadUrl', downloadUrl)
    const newPlantRef = firestore().collection('plants').doc()
    newPlantRef.set({
      _id: newPlantRef.id,
      name: this.state.name,
      sci_name: this.state.sci_name,
      photo: downloadUrl,
      birthday: this.state.birthday,
      reference_url: this.state.reference_url,
      notes: this.state.notes
    }).then(() => {
      console.log('handleSubmit.SUCCESS')
      this.props.history.push('/conservatory')
    }).catch(err => {
      console.error('handleSubmit.ERROR', err)
    })
  }

  addPlantPhoto = () => {
    const plantPhotoRef = storage().ref()
    const file = this.state.photo
    const name = `${(+new Date())}-${file.name}`
    const metadata = {
      contentType: file.type
    }
    const task = plantPhotoRef.child(name).put(file, metadata)
    const downloadUrl = task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => url)
      .catch(err => {
        console.error('addPlantPhoto.ERROR', err)
      })
    return downloadUrl
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleCancel = () => {
    this.props.history.push('/conservatory')
  }

  handlePhotoUpload = (e) => {
    e.preventDefault()
    this.setState({
      photo: e.target.files[0]
    })
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <h1 className="center">Add a Plant</h1>
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input id="name" type="text" className="validate" onChange={this.handleChange} value={this.state.name} />
                <label htmlFor="name">Plant's Nickname</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="sci_name" type="text" className="validate" onChange={this.handleChange} value={this.state.sci_name} />
                <label htmlFor="sci-name">Plant's Scientific Name</label>
              </div>
            </div>
            <div className="row">
              <div className="file-field input-field col s12">
                <div className="btn waves-effect waves-ligh purple lighten-3">
                  <span>
                    <i className="material-icons left">add</i>
                    <span>Photo</span>
                  </span>
                  <input id="photo" type="file" onChange={this.handlePhotoUpload} />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="birthday" type="date" className="validate" onChange={this.handleChange} value={this.state.birthday} />
                <label htmlFor="birthday">Birthday</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="reference_url" type="text" className="validate" onChange={this.handleChange} value={this.state.reference_url} />
                <label htmlFor="reference-url">Reference URL</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="notes" className="materialize-textarea" onChange={this.handleChange} value={this.state.notes} />
                <label htmlFor="notes">Notes</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  className="btn  btn-large waves-effect waves-light grey lighten-5 grey-text"
                  type="button"
                  onClick={this.handleCancel}
                >Cancel</button>
              </div>
              <div className="col">
                <button className="btn btn-large waves-effect waves-light deep-orange lighten-3" type="submit">
                  <i className="material-icons left">add</i>
                  Add Plant
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddPlant
