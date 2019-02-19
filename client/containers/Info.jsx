import React, {Fragment} from 'react'
import {connect} from 'react-redux'

class Info extends React.Component{


  render(){
    const {monthClickedVeg} = this.props
    return Object.keys(monthClickedVeg).length == 0 ? (
      <Fragment>
        <img className="icon" src="/images/information.png" alt=""/>
        <div className='info-box'>
        <br/>
        <h2>Click on a veg</h2>
        </div>
      </Fragment>
    ) :
      <Fragment>
        <img className="icon" src="/images/information.png" alt=""/>
        <div className='info-box'>
          <br/>
          <h2>{monthClickedVeg.name}</h2>
          <br/>
          <h4>Tips</h4>
          <p>{monthClickedVeg.tips}</p>
          <br/>
          <h4>Plant spacing</h4>
          <p>{monthClickedVeg.spaceplants}</p>
          <button className='button' onClick={()=>this.props.addToGarden(monthClickedVeg)}>
            Add to garden
          </button>
        </div>
      </Fragment>
  }
}
function mapStateToProps({monthClickedVeg}){
  return {monthClickedVeg}
}

export default connect(mapStateToProps)(Info)
