import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import SeasonInfo from '../components/SeasonInfo'
import Info from '../components/Info'


class ViewMonth extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      clickedVeg: {}
    }
  }

  handleClick = (veg)=>{
    this.setState({
      clickedVeg: veg
    })
  }

  render(){
    const { month, monthVeges} = this.props
    return(
        <div className="view-container">
          <h3 className="month-name scale-in-center box-title">{month.name}</h3>
  
          <div className="month-box box1 ">
            <SeasonInfo month={month} />
            
          </div>
  
          <div className="month-box box2">
            <img className="icon" src="/images/plant-with-leaves.png" alt="Plant icon"/>
            <div className="vegList-box">
              {monthVeges.map((veg, i) => 
              <span>
                  <Link className='vegNameList' to={'/info'} key={i} onClick={this.handleClick.bind(this, veg)}> 
                    <p>{veg.name}</p> 
                  </Link>
              </span> 
              )}
            </div>
          </div>

          <div className="month-box box3">
            {/* <Info veg={this.state.clickedVeg} user={user} addToGarden={this.props.addToGarden}/> */}
          </div>
  
        </div>
       
    ) 
  }
}

function mapStateToProps({ monthVeges }) {
  return { monthVeges }
}

export default connect(mapStateToProps)(ViewMonth)
