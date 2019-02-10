
import React, {Fragment} from 'react'

// import {getMonths} from './api/months'

class SeasonInfo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      month: this.props.month
    }
  } 

  render(){
    return (
      <Fragment>
         {/* <img className='icon' src={`/images/icon8-${month.season}.png`} alt="Seasonal icon"/>
          
        <p>{month.season.charAt(0).toUppercase()}</p> */}
        <p>season box</p>
      </Fragment>
    ) 
  }
}

export default SeasonInfo
