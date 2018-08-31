import React from 'react'
import { Link } from 'react-router-dom'

const Plant = ({ plant }) => {
  return (
    <Link to={'/plant-pot/' + plant._id} className="card-link">
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={plant.photo} alt=""/>
          </div>
          <div className="card-content">
            <span className="card-title">{plant.name}</span>
            <p>{plant.sci_name}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Plant
