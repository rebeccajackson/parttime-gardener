import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

import {getVeges} from '../api/vegs'
import {getUserById} from '../api/users'

class MyGarden extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      veges: [],
      user: this.props.user
    }
    this.getVeges = this.getVeges.bind(this)
  }

  componentDidMount(){
    this.getVeges()
  }

  getVeges(){
    getVeges().then(veges => {
      this.setState({veges: veges})
    })
  }

 
  render(){
    const userName = this.state.user.name
    return(
      <Fragment>
         <div className="my-garden">
          <h3 className="box-title">{userName}'s garden</h3>

          <div className="garden-list">
            {this.state.veges.map((obj, i) => 

              <Link className='vegNameList' key={i} id={obj.id} name={obj.name} to={`/${obj.id}`}>{obj.name}
              </Link>
              )}
          </div>
        </div>
      </Fragment>
     
    )
  }
}
  

export default MyGarden