import React, {Fragment} from 'react'


class ViewVeg extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      veg: {},//match url to get current veg??
      user: this.props.user,
      veges: this.props.location.veg
    } 
  }

  componentDidMount(){
    this.setState = {
      veg: this.props.location.veg
    }
  }

  render(){
    let veg = this.state.veg
    return(
      <Fragment>
      
        <div className="view-container">
          <h3 className="month-name box-title">{veg.name}</h3>
  
          <div className="month-box box1 ">
            
          </div>
  
          <div className="month-box box2">
           
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

export default ViewVeg