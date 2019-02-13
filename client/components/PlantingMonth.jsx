import React from 'react'

const PlantingMonth = (props) => {
    return (
    <div className={`${props.show} month-letter`}>
      {props.show && <img src="/images/icons8-spade.png" alt="Spade"/>}
    </div>
  ) 
}

export default PlantingMonth
