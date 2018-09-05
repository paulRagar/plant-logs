import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Plants from './Plants'
import { firestore } from 'firebase'

class Conservatory extends Component {
  constructor () {
    super()
    this.state = {
      plants: []
    }
  }

  componentDidMount () {
    firestore().collection('plants').onSnapshot(snapshot => {
      let changes = snapshot.docChanges()
      let plants = changes.map(change => {
        return change.doc.data()
      })
      this.setState({
        plants
      })
    })
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <Link to="/add-plant" className="right btn waves-effect waves-light deep-orange lighten-3">
            <i className="material-icons left">add</i>
            <span>Add Plant</span>
          </Link>
        </div>
        <div className="row">
          <Plants plants={this.state.plants} />
        </div>
      </div>
    )
  }
}

export default Conservatory
