import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'


class MyGarden extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userVeges: this.props.userVeges,
      user: this.props.user
    }
  }

  render(){
    console.log('garden', this.props)
    const userName = this.props.user.name
    return(
      <Fragment>
         <div className="my-garden">
          <h3 className="box-title">{userName}'s garden</h3>

          <div className="garden-list">
            {this.props.userVeges.map((obj, i) => 

              <Link className='vegNameList' key={i} to={{
                pathname: `/veg/${obj.name}`,
                veg: obj,
                veges: this.props.userVeges
                }}>
                {obj.name}
              </Link>
              )}
          </div>
        </div>
      </Fragment>
     
    )
  }
}
  

export default MyGarden