import React from 'react'

const ViewMonth = () => {
  
  return(
    <div class="view-month">

      <h3 class="month-name box-title">Month name{{Month}}</h3>

      <div class="month-box box1 ">
        <img class="icon" src="" alt=""/>
        <p>eg carrots</p>
      </div>

      <div class="month-box box2">
        <img class="icon" src="" alt=""/>
        <p>eg carrots</p>
      </div>

      <div class="month-box box3">
        <img class="icon" src="" alt=""/>
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