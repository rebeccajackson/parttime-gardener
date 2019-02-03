import React from 'react'
import {Link} from 'react-router-dom'

import months from '../../data/months'
import veg_months from '../../data/veg_months'
import veg from '../../data/veg'
import PlantingMonth from './PlantingMonth';

class Table extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    const monthsArr = months.months
    return(

      <div className='table'>
         
        <div className='header-grid'>
          <div className='grid12'>
            {monthsArr.map((index, i) => 
              <Link className='month-letter heartbeat' key={i} to={`/view/${index.name}`}>
                  <div className={`${index.season} table-header`}>
                    {index.name.charAt(0)}
                  </div>
              </Link> 
            )}
          </div>  
        </div>
  
        <div className='plantingMonths'> 
          <div className='grid12'>
            {monthsArr.map((index, i) => 
              <div key={i} className={`${index.name} plantingMonths-header`}>
                <PlantingMonth show={index.show} id={index.id}/>
                
              
              </div>
              )}
          </div>
        </div>
  
      </div>
     
    )
  }
  
}

export default Table