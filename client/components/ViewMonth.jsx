import React, {Fragment} from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'

import SeasonInfo from './SeasonInfo'
import Info from './Info'


class ViewMonth extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      clickedVeg: {},
      month: this.props.month,
      monthVeges: this.props.monthVeges
    }
  }

  handleClick = (veg)=>{
    this.setState({
      clickedVeg: veg
    })
  }

  render(){
    const { month, monthVeges, user } = this.props
    return(
      <Router>
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
                    <Link className='vegNameList' to={'/info'} key={i} onClick={this.handleClick.bind(this, veg)}> 
                      <p>{veg.name}</p> 
                    </Link>
                </span> 
                )}
              </div>
            </div>

            <div className="month-box box3">
              <Info veg={this.state.clickedVeg} user={user}/>
            </div>
    
          </div>
    
        </Fragment>
      </Router>
       
    ) 
  }
}

export default ViewMonth