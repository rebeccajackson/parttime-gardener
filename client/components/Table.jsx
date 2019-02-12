import React, {Fragment} from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import PlantingMonth from './PlantingMonth';
import ViewRoutes from './ViewRoutes';

import { getUserVeges } from '../api/vegs';
import {getMonths} from '../api/months'
import { getMonthVeges } from '../api/months'


class Table extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      months: [],
      month: {},
      userVeges: [],
      veg: {},
    }
    this.getMonths = this.getMonths.bind(this)
  }

  componentDidMount(){
    this.getMonths()
    getUserVeges(this.props.user).then(veges => {
      this.setState({userVeges: veges})
    })
  }

  getMonths(){
    getMonths().then(months => {
      this.setState({months: months})
    })
  }

  handleClick = (month) => {
    getMonthVeges(month).then(monthVeges => {
        this.setState({
        monthVeges: monthVeges,
        month: month,
        }, () => {
          this.context.history.push('/months')
        })
      }
    )
  }
    
    render(){
    console.log(this.state.monthVeges)
    const monthsArr = this.state.months
    return(
      <Fragment>
        <div className='table'>
          <div className='header-grid'>
            <div className='grid12'>
              {monthsArr.map((month, i) => 
                <button onClick={this.handleClick.bind(this, month)} 
                    className='month-letter heartbeat' key={i}
                    >
                  
                    <div className={`${month.season} table-header`}>
                      {month.name.charAt(0)}
                    </div>
                </button> 
              )}
            </div>  
          </div>
    
          <div className='plantingMonths'> 
            <div className='grid12'>
              {monthsArr.map((month, i) => 
                <div key={i} className={`${month.name} plantingMonths-header`}>
                
                  <PlantingMonth show={month.show} id={month.id}/>
                </div>
                )}
            </div> 
          </div>
        </div>
        <div className='contents'>
          <ViewRoutes 
          user={this.props.user} 
          userVeges={this.state.userVeges}
          month={this.state.month}
          setVeg={this.setVeg}
          />
        </div>
      </Fragment>
    )
  }
}

export default Table