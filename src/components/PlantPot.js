import React, { Component } from 'react'

class PlantPot extends Component {
  state = {
    plantId: null
  }
  componentDidMount () {
    const plantId = this.props.match.params.plantId
    this.setState({
      plantId
    })
  }

  render () {
    return (
      <div className="container">
        <h1>Hi there!</h1>
        <p>This is your plant's id: <span className="blue-text">{this.state.plantId}</span></p>
      </div>
    )
  }
}

export default PlantPot
