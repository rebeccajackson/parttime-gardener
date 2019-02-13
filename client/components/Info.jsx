import React, {Fragment} from 'react'
import {addToGarden} from '../api/users'

class Info extends React.Component{
constructor(props){
  super(props)
}
  addToGarden = (veg) => {
    const sendData = (this.props.user, veg)
    addToGarden(sendData).then(res => {
      return console.log(res)
    }
    )
  }

  render(){
    console.log(this.props.user)
    const {veg} = this.props
     return (
      <Fragment>
        <img className="icon" src="/images/information.png" alt=""/>
        <div className='info-box'>
          <h2>{veg.name}</h2>
          <h4>Tips</h4>
          <p>{veg.tips}</p>
          <br/>
          <h4>Plant spacing</h4>
          <p>{veg.spaceplants}</p>
          <br/>
         
        </div>
        <button className='button' onClick={this.addToGarden}>
          Add to garden
        </button>
      </Fragment>
    ) 
  }
 
}
export default Info
