import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Table from './Table'

import { getUserByName } from '../actions/index';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: {},
      login: false,
      userVeges: []
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
    const user = this.state.user
    this.props.getUserByName(user)
      // this.setState({ 
      //   login: !this.state.login
      // })
    
  }
  render(){
    return(
   
      <div id="home">
        {!this.state.login &&  <div className="home-page">
          <form className="form" onSubmit={this.handleSubmit}>
            <label className="form-label">
              Username
              <input className='form-input' type="text" value={this.state.user.name} name='name' onChange={this.handleChange} />
            </label>
              <input className="button" type="submit" value="Login" />
          </form>
        </div>}

        {this.state.login && 
          <Table />
        }        
      </div>
    
    )
  }
}

function mapStateToProps({ login, user }) {
  return { login, user }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getUserByName}, dispatch)
}

export default connect(mapStateToProps)(App)

