import React from 'react'
import {Link} from 'react-router-dom'

import PlantingMonth from './PlantingMonth';

import {getMonths} from '../api/months'


class Table extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      months: []
    }
    this.getMonths = this.getMonths.bind(this)
  }

  componentDidMount(){
    this.getMonths()
  }

  getMonths(){
    getMonths().then(months => {
      this.setState({months: months})
    })
  }

  render(){
    const monthsArr = this.state.months

    return(
      <div className='table'>
        <div className='header-grid'>
          <div className='grid12'>
            {monthsArr.map((month, i) => 
              <Link className='month-letter heartbeat' key={i} to={{
                pathname: `/months/${month.name}`,
                state: {month: month}
                }}>
                  <div className={`${month.season} table-header`}>
                    {month.name.charAt(0)}
                  </div>
              </Link> 
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
    )
  }
}

export default Table