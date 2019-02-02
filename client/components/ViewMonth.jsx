import React from 'react'
import {Link} from 'react-router-dom'


import monthData from '../../data/months'
import veg_months from '../../data/veg_months'
import veg from '../../data/veg'


const ViewMonth = ({match}) => {
  const monthName = match.params.month
  const monthId = monthData.months.find((obj) => obj.name === monthName).id
  let vegMatchArr = veg_months.veg_month.filter(joinObj => joinObj.month_id == monthId).map(obj => obj.veg_id)
  
  const vegList = veg.veges.filter(findIfTrue)
 
  function findIfTrue(obj){
    return vegMatchArr.includes(obj.id)
  } 
  
  return(
    <div className="view-month">

      <h3 className="month-name box-title">{monthName}</h3>

      <div className="month-box box1 ">
        <img className="icon" src="/images/plant-with-leaves.png" alt="Plant icon"/>
        <div className="vegList-box">
          {vegList.map((veg, i) => 
           <span>
              <Link className='vegNameList' to={'/info'} key={i}> <p>{veg.name}</p> </Link>
           </span> 
            )}
        </div>
      </div>

      <div className="month-box box2">
        <img className="icon" src="/images/information.png" alt=""/>
        <p>eg carrots</p>
      </div>

      <div className="month-box box3">
        <img className="icon" src="" alt=""/>
        <p>eg carrots</p>
      </div>
    </div>
  ) 
}

export default ViewMonth