import React from 'react'
import { connect } from 'react-redux'

import Table from './Table'

import { getUserByName } from '../api/users';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  } 

  
  handleChange(e){
    let user = this.state.user
    user[e.target.name] = e.target.value
    this.setState({ user })
  }
  

  handleSubmit(e) {
    e.preventDefault();
    const {dispatch} = this.props
    const user = this.state.user
    dispatch(getUserByName(user))
  }
  render(){
    console.log('App: ', this.props)
    return(
   
      <div id="home">
        {!this.props.userLogin.login &&  <div className="home-page">
          <form className="form" onSubmit={this.handleSubmit}>
            <label className="form-label">
              Username
              <input className='form-input' type="text" value={this.state.user.name} name='name' onChange={this.handleChange} />
            </label>
              <input className="button" type="submit" value="Login" />
          </form>
        </div>}

        {this.props.userLogin.login && 
          <Table />
        }        
      </div>
    
    )
  }
}

function mapStateToProps({ userLogin}) {
  return { userLogin }
}

export default connect(mapStateToProps)(App)

