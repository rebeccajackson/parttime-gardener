import React from 'react'

import monthData from '../../data/months'
import veg_months from '../../data/veg_months'
import veg from '../../data/veg'


const ViewMonth = ({match}) => {
  
  let vegId = veg
  const vegMonthArr = veg_months
  const monthName = match.params.month
  let monthObj = monthData.months.find((obj) => obj.name === monthName)

  console.log(vegMonthArr)  //needs a filter to select the matches
  console.log(monthObj)     //where monthObj.id vegMonthArr.month_id
  console.log(vegId) // list veg.name that matches result of filter

  return(
    <div className="view-month">

      <h3 className="month-name box-title">{monthName}</h3>

      <div className="month-box box1 ">
        <img className="icon" src="" alt=""/>

        <p>eg carrots</p>
      </div>

      <div className="month-box box2">
        <img className="icon" src="" alt=""/>
        <p>eg carrots</p>
      </div>

      <div className="month-box box3">
        <img className="icon" src="" alt=""/>
        <p>eg carrots</p>
      </div>

    </div>
  ) 
}

  {/* TODO 
    get icon image
    style month-box by season
    style icon image
  */}

  export default ViewMonth