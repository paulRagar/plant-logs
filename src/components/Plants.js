import React from 'react'
import Plant from './Plant'

const Plants = ({ plants }) => {
  const plantList = plants.map(plant => <Plant key={plant._id} plant={plant} />)

  return (
    <div className="row">
      {plantList}
    </div>
  )
}

export default Plants
