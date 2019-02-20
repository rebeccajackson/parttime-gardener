import React, {Fragment} from 'react'
import {connect} from 'react-redux'

import {addToGarden} from '../api/users'

class Info extends React.Component{

  addToGarden = () => {
    const payload = {user: this.props.user, veg: this.props.currentVeg}
    const {dispatch} = this.props
    dispatch(addToGarden(payload))
  }


  render(){
    const {currentVeg} = this.props
    
    return Object.keys(currentVeg).length == 0 ? (
      <Fragment>
        <img className="icon" src="/images/information.png" alt=""/>
        <div className='info-box'>
        <br/>
        <h3>Click on a veg</h3>
        </div>
      </Fragment>
    ) :
      <Fragment>
        <img className="icon" src="/images/information.png" alt=""/>
        <div className='info-box'>
          <br/>
          <h2>{currentVeg.name}</h2>
          <br/>
          <h4>Tips</h4>
          <p>{currentVeg.tips}</p>
          <br/>
          <h4>Plant spacing</h4>
          <p>{currentVeg.spaceplants}</p>
          <button className='button' onClick={this.addToGarden}>
            Add to garden
          </button>
        </div>
      </Fragment>
  }
}
function mapStateToProps({user, currentVeg}){
  return {user, currentVeg}
}

export default connect(mapStateToProps)(Info)
