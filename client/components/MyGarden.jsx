import React from 'react'
import {Link} from 'react-router-dom'

import {getVeges} from '../api/vegs'
import {getUsers} from '../api/users'

class MyGarden extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      veges: [],
      users: []
    }
    this.getVeges = this.getVeges.bind(this)
    this.getUsers = this.getUsers.bind(this)
  }

  componentDidMount(){
    this.getVeges()
    this.getUsers()
  }

  getVeges(){
    getVeges().then(veges => {
      this.setState({veges: veges})
    })
  }

  getUsers(){
    getUsers().then(users => {
      this.setState({ users: users})
    })
  }

  render(){
    const userName = this.state.users.name
    return(
      <div className="my-garden">
        <h3 className="box-title">{userName}'s garden</h3>

        <div className="garden-list">
          {this.state.veges.map((obj, i) => 

            <Link className='vegNameList' key={i} id={obj.id} name={obj.name} to={`/${obj.id}`}>{obj.name}
            </Link>
            )}
        </div>
      </div>
    )
  }
}
  

export default MyGarden