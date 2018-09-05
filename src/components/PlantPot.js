import React, { Component } from 'react'
import { firestore } from 'firebase'
import Logs from './Logs'

class PlantPot extends Component {
  state = {
    plant: undefined
  }
  constructor (props) {
    super(props)
    this.state = {
      plant: {},
      logs: []
    }
  }
  async componentDidMount () {
    const plantId = this.props.match.params.plantId
    await this.getPlant(plantId)
    await this.getLogs(plantId)
  }

  getPlant = async (id) => {
    const plant = firestore().collection('plants').doc(id)
    let doc
    try {
      doc = await plant.get()
      if (doc.exists) {
        this.setState({
          plant: doc.data()
        })
      } else {
        console.error('Plant not found.')
      }
    } catch(err) {
      console.error('Error getting "plant" document. Error:', err)
    }
  }

  getLogs = async (id) => {
    const plantLogsRef = firestore().collection('plant_logs')
    try {
      const response = await plantLogsRef.where('plant_id', '==', id).get()
      if (response.size) {
        const logs = response.docs.map(doc => doc.data())
        this.setState({
          logs: logs
        })
      } else {
        console.error('No logs found for plant')
      }
    } catch(err) {
      console.error('Error getting "plant-logs" document. Error:', err)
    }
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col m4">
            <img src={this.state.plant.photo} alt=""/>
          </div>
          <div className="col m8">
            <h3>{this.state.plant.name}</h3>
            <i>{this.state.plant.sci_name}</i>
            <hr/>
            <a href={this.state.plant.reference_url} target="_blank">Link</a>
            <p>{this.state.plant.notes}</p>
          </div>
        </div>
        <div className="row">
          <Logs logs={this.state.logs} />
        </div>
      </div>
    )
  }
}

export default PlantPot
