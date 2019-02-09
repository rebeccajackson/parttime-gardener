import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

import MyGarden from './MyGarden'
import SeasonInfo from './SeasonInfo'


import {getVegesByUser} from '../api/vegs'
import {getVeges} from '../api/vegs'
import {getMonth} from '../api/months'


class ViewMonth extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      veges: [],
      month: []
    }
    this.getVeges = this.getVeges.bind(this)
    this.getMonth = this.getMonth.bind(this)
  }

  componentDidMount(){
    let { monthName } = this.props.match.params.month
    this.getMonth(monthName)
  }

  componentDidReceiveProps(nextProps) {
    const { month } = nextProps
    if (month && !this.props.month) this.getMonth(month)
  }
  
  getVeges(){
    getVeges().then(veges => {
      this.setState({veges: veges})
    })
  }
  getMonth(monthName){
    getMonth(monthName).then(month => {
    
      return this.setState({month: month})
    })
  }
  render(){

    return(
      <Fragment>
        <MyGarden />
        
        <div className="view-month">
          <h3 className="month-name box-title">{this.state.month.name}</h3>
  
          <div className="month-box box1 ">
            <SeasonInfo month={this.state.month} />
          </div>
  
          <div className="month-box box2">
            <img className="icon" src="/images/plant-with-leaves.png" alt="Plant icon"/>
            <div className="vegList-box">
              {this.state.veges.map((veg, i) => 
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