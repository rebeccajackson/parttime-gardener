import React, {Fragment} from 'react'
import { connect } from 'react-redux'


class ViewVeg extends React.Component {

  render(){
    let { currentVeg }= this.props
    return(
      <Fragment>
        <div className="month-container">
          <h3 className="month-name box-title">{currentVeg.name}</h3>
  
          <div className="month-box box1 ">
            <img className="icon" src="/images/icons8-field-96.png" alt=""/>
            <br/>
            <p>Recommend other veg to plant with {currentVeg.name} here</p>
          </div>

          <div className="month-box box3">
            <img className="icon" src="/images/information.png" alt=""/>
            <div className="month-info">
              <h3>Harvest in</h3>
              <p>{currentVeg.harvest}</p>
              <br/>
              <h3>Tips</h3>
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