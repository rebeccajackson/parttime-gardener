 import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import SeasonInfo from '../components/SeasonInfo'
import Info from './Info'

import {setVeg} from '../actions/index'
import {getPlantingMonthsArr} from '../api/vegs'
 
class ViewMonth extends React.Component {

  handleClick = (veg)=>{
   const {dispatch} = this.props
   dispatch(setVeg(veg))
   dispatch(getPlantingMonthsArr(veg))
  }

  render(){
    const { month, monthVeges} = this.props
    return(
        <div className="view-container">
          <div className="month-name box-title">
            <h3>{month.name}</h3>
          </div>
  
          <div className="month-box box1 ">
             <SeasonInfo month={month} /> 
          </div>
  
          <div className="month-box box2">
            <img className="icon" src="/images/plant-with-leaves.png" alt="Plant icon"/>
            <div className="vegList-box">
              {monthVeges.map((veg, i) => 
              <span>
                <Link to={'/info'} key={i} 
                      className='vegNameList' 
                      onClick={this.handleClick.bind(this, veg)}> 
                  <p>{veg.name}</p> 
                </Link>
              </span> 
              )}
            </div>
          </div>

          <div className="month-box box3">
            <Info />
          </div>
  
        </div>
       
    ) 
  }
}

function mapStateToProps({ monthVeges, month }) {
  return { monthVeges, month }
}

export default connect(mapStateToProps)(ViewMonth)
