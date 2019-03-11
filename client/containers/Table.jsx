import React, {Fragment} from 'react'
import {HashRouter as Router} from 'react-router-dom'
import { connect } from 'react-redux'


import PlantingMonth from '../components/PlantingMonth';
import ViewMonth from '../containers/ViewMonth'
import ViewVeg from '../containers/ViewVeg'
import MyGarden from '../containers/MyGarden'

import { getMonths } from '../api/months'
import { getMonthVeges } from '../api/months'
import {displayViewVeg} from '../actions/index'
import {getPlantingMonthsArr} from '../api/vegs'

class Table extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      vegClick: false,
      monthClick: false
    }
  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(getMonths())
  }

  handleVegClick = (veg) =>{
    const { dispatch } = this.props
    dispatch(displayViewVeg(veg))
    this.setState({
      monthClick: false,
      vegClick: true
    })
    dispatch(getPlantingMonthsArr(veg))
  }

  handleMonthClick = (month) => {
    const { dispatch } = this.props
    dispatch(getMonthVeges(month))
    this.setState({
      monthClick: true,
      vegClick: false
    })
  }

  render(){
    const { months, plantingMonths } = this.props
    return(
      <Router>
          <Fragment>
            <div className='table'>
              <div className='header-grid'>
                <div className='grid12'>
                  {months.map((month, i) => 
                    <button onClick={this.handleMonthClick.bind(this, month)} 
                        className='month-letter overlay heartbeat' key={i}
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
                  {plantingMonths.map((month, i) => 
                    <div key={i} className={`${month.name} plantingMonths-header`}>
                      <PlantingMonth show={month.show}/>
                    </div>
                  )}
              </div> 
            </div>
          </div>
           <div className='contents'>
            <MyGarden handleVegClick={this.handleVegClick}/>
           {this.state.monthClick && <ViewMonth />
              || this.state.vegClick && <ViewVeg />
              }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ months, plantingMonths }) {
  return { months, plantingMonths }
}

export default connect(mapStateToProps)(Table)