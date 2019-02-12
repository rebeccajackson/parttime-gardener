import React, {Fragment} from 'react'


class ViewVeg extends React.Component {

  render(){
    // console.log('viewveg', this.props)
    let { veg }= this.props
    return(
      <Fragment>
      
        <div className="month-container">
          <h3 className="month-name box-title">{veg.name}</h3>
  
          <div className="month-box box1 ">
           
          </div>

          <div className="month-box box3">
            <img className="icon" src="/images/information.png" alt=""/>
            <div className="month-info">
              <h4>Harvest in</h4>
              <p>{veg.harvest}</p>
              <h4>Tips</h4>
              <p>{veg.tips}</p>
            </div>
          </div>
  
        </div>
  
      </Fragment>
    )
  }
}

export default ViewVeg