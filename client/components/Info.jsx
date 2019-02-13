import React, {Fragment} from 'react'

class Info extends React.Component{
constructor(props){
  super(props)
  this.state = {
    user: this.props.user
  }
}

  render(){
    const {veg} = this.props
     return (
      <Fragment>
        <img className="icon" src="/images/information.png" alt=""/>
        <div className='info-box'>
          <h2>{veg.name}</h2>
          <h4>Tips</h4>
          <p>{veg.tips}</p>
          <br/>
          <h4>Plant spacing</h4>
          <p>{veg.spaceplants}</p>
          <br/>
         
        </div>
        <button className='button' onClick={()=>this.props.addToGarden(veg)}>
          Add to garden
        </button>
      </Fragment>
    ) 
  }
 
}
export default Info
