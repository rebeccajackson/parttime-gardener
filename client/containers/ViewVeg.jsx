import React, {Fragment} from 'react'
import { connect } from 'react-redux'


class ViewVeg extends React.Component {

  render(){
    let { currentVeg }= this.props
    return(
      <Fragment>
        <div className="month-container">
          <div className="month-name box-title">
            <h3> {currentVeg.name} </h3>
          </div>
  
          <div className="month-box box1 ">
            <img className="icon" src="/images/icons8-field-96.png" alt=""/>
            <br/>
            <p>Recommend other veg to plant with {currentVeg.name} here</p>
          </div>

          <div className="month-box box3">
            <img className="icon" src="/images/information.png" alt=""/>
            <div className="month-info">
              <h4>Harvest in</h4>
              <p>{currentVeg.harvest}</p>
              <br/>
              <h4>Tips</h4>
              <p>{currentVeg.tips}</p>
              <br/>
              <h4>Plant spacing</h4>
              <p>{currentVeg.spaceplants}</p>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ currentVeg }){
  return { currentVeg }
}


export default connect(mapStateToProps)(ViewVeg)