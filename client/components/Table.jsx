import React from 'react'
import {Link} from 'react-router-dom'

import months from '../../data/months'
import veg_months from '../../data/veg_months'
import veg from '../../data/veg'

const Table = ({match}) => {
  const monthsArr = months.months
console.log(match)
  return(

    <div className='table'>
      
      <div className='grid12'>
        {monthsArr.map((index, i) => 
          <div className={`${index.season} ${index.name} table-header`}>
            <Link className='month-letter' key={i} to={`/view/${index.name}`}>
                {index.name.charAt(0)}
            </Link> 
          </div>
        )}
      </div>
    
      <div className='planting-month'>
        {}
      </div> 
    </div>

  )
}

export default Table