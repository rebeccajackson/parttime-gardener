
import React, {Fragment} from 'react'

const SeasonInfo = ({month}) =>{
  return (
    <Fragment>
      <img className='icon' src={`/images/${month.season}.png`} alt="Seasonal icon"/>
      <br/>
      {/* <h2>{month.season.charAt(0).toUpperCase(0) + month.season.slice(1)}</h2> */}
      <br/>
      <p>Can have info of {month.name} here</p>
    </Fragment>
  ) 
}
export default SeasonInfo
