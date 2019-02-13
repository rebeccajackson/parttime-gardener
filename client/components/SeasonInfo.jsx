
import React, {Fragment} from 'react'

const SeasonInfo = ({month}) =>{
  return (
    <Fragment>
      <img className='icon' src={`/images/${month.season}.png`} alt="Seasonal icon"/>
        
      <p>{month.season.toUpperCase()}</p>
      <p>Can have info of {month.name} here</p>
    </Fragment>
  ) 
}
export default SeasonInfo
