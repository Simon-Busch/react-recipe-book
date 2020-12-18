import React from 'react'

const Card = ({ details }) => {

  return (
    <div className="card">
      <div className="recettes">
        <h2>{details.nom}</h2>
      </div>
    </div>
  )
}

export default Card