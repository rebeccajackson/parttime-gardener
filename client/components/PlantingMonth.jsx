import React from 'react'

// import veg_months from '../../data/veg_months'


class PlantingMonth extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      show: false,
    }
  } 

  render(){
    return (
      <div className={`${this.state.show} month-letter`}>
        {this.state.show && <img src="/images/icons8-spade.png" alt="Spade"/>}
      </div>
    ) 
  }
}

export default PlantingMonth
