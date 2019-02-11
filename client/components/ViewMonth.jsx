import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

import SeasonInfo from './SeasonInfo'


class ViewMonth extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      veges: [],
      month: this.props.month,
      user: this.props.user
    }
    this.getMonthVeges = this.getMonthVeges.bind(this)

  }

  getMonthVeges(){
    getMonthVeges(this.props.match.params).then(veges => {
      this.setState({monthVeges: veges})
    })
  }


  render(){
    console.log(this.state.month)
    console.log(this.props)
    let monthName = this.props.match.params.month //need to get the whole object not just the name
    return(
      <Fragment>
      
        <div className="view-container">
          <h3 className="month-name box-title">{monthName}</h3>
  
          <div className="month-box box1 ">
            <SeasonInfo month={this.state.month} />
          </div>
  
          <div className="month-box box2">
            <img className="icon" src="/images/plant-with-leaves.png" alt="Plant icon"/>
            <div className="vegList-box">
              {this.state.veges.map((veg, i) => 
              <span>
                  <Link className='vegNameList' to={'/info'} key={i}> <p>{veg.name}</p> </Link>
              </span> 
              )}
            </div>
          </div>

          <div className="month-box box3">
            <img className="icon" src="/images/information.png" alt=""/>
            <p>eg carrots</p>
          </div>
  
        </div>
  
      </Fragment>
    ) 
  }
}

export default ViewMonth