import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

import SeasonInfo from './SeasonInfo'


class ViewMonth extends React.Component {

  render(){
    console.log(this.props)
    const { month, monthVeges } = this.props
    return(
      <Fragment>
      
        <div className="view-container">
          <h3 className="month-name box-title">{month.name}</h3>
  
          <div className="month-box box1 ">
            <SeasonInfo month={month} />
          </div>
  
          <div className="month-box box2">
            <img className="icon" src="/images/plant-with-leaves.png" alt="Plant icon"/>
            <div className="vegList-box">
              {monthVeges.map((veg, i) => 
              <span>
                  <Link className='vegNameList' to={'/info'} key={i}> <p>{veg.name}</p> </Link>
              </span> 
              )}
            </div>
          </div>

          <div className="month-box box3">
            <img className="icon" src="/images/information.png" alt=""/>
            <p>eg carrots</p>
          </div>
  
        </div>
  
      </Fragment>
    ) 
  }
}

export default ViewMonth