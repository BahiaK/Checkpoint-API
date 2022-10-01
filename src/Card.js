import React from 'react'
import "./Card.css"
const Card = ({el}) => {
  return (
<div>
  <div className="card-container">
    <img className="round" src="../profilpic.png" alt="user" />
    <h3>{el.name}</h3>
    <h6>{el.address&&el.address.city}</h6>
    <p>{el.email}</p>
    <div className="buttons">
      <button className="primary">
        Message
      </button>
      <button className="primary ghost">
        Following
      </button>
    </div>
    <div className="skills">
      
    </div>
  </div>
  
</div>



    )
}

export default Card