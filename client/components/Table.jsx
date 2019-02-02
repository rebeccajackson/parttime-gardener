import React from 'react'
import {Link} from 'react-router-dom'

import months from '../../data/months'


const Table = () => {
  const monthsArr = months.months

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

      </div> 
    </div>

  )
}

export default Table