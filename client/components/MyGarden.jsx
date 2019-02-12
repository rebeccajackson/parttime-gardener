import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'


class MyGarden extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userVeges: this.props.userVeges,
      veg: this.props.veg
    }
  }

  render(){
    // console.log(this.props)
    const { user, userVeges } = this.props
    return(
      <Fragment>
         <div className="my-garden">
          <h3 className="box-title">{user.name}'s garden</h3>

          <div className="garden-list">
            {userVeges.map((obj, i) => 

              <Link className='vegNameList' key={i} 
                onClick={this.props.setVeg.bind(this, obj)}
                to={ `/veg/${obj.name}`}>
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