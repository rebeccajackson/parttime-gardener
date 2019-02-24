import React from 'react'
import {connect} from 'react-redux'
import {loginUser, loginError} from '../actions/auth/login'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(loginError(''))
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    let {username, password} = this.state
    this.props.dispatch(loginUser({username, password}))
  }
  render() {
    const {auth} = this.props
    return (
      <form className="form box" onSubmit={this.submit}>
        <h1 className="">Login</h1>
        <hr />
        {auth.errorMessage && <span className="">{auth.errorMessage}</span>}
        <label className="">Username
          <input required className="" placeholder="User Name" type="text" name="username" onChange={this.updateDetails}/>
        </label>
        <label className="">Password
          <input required className="" placeholder="Password" type="password" name="password" onChange={this.updateDetails}/>
        </label>
        <input className="" value='Login' type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Login)
