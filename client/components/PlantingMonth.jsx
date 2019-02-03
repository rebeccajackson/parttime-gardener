import React from 'react'

class PlantingMonth extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.id,
      show: true
    }
    console.log(this.props.state)
  } 
  
  render(){
      return this.state.show ? (
   
      <div className={`${this.state.show} month-letter`}>
        <img src="/images/icons8-spade.png" alt="Spade"/>
      </div>

    
  ) : 
    <div className={`${this.state.show} month-letter`}>
     ''
    </div>
  }

}

export default PlantingMonth
