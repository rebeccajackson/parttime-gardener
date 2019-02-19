import React, {Fragment} from 'react'


class ViewVeg extends React.Component {

  render(){
    let { veg }= this.props
    return(
      <Fragment>
        <div className="month-container">
          <h3 className="month-name box-title">{veg.name}</h3>
  
          <div className="month-box box1 ">
            <img className="icon" src="/images/icons8-field-96.png" alt=""/>
            <br/>
            <p>Recommend other veg to plant with {veg.name} here</p>
          </div>

          <div className="month-box box3">
            <img className="icon" src="/images/information.png" alt=""/>
            <div className="month-info">
              <h3>Harvest in</h3>
              <p>{veg.harvest}</p>
              <br/>
              <h3>Tips</h3>
              <p>{veg.tips}</p>
              <br/>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ViewVeg