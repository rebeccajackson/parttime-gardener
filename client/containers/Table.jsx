import React, {Fragment} from 'react'
import {HashRouter as Router} from 'react-router-dom'
import { connect } from 'react-redux'


// import PlantingMonth from './PlantingMonth';
import ViewMonth from '../containers/ViewMonth'
import ViewVeg from '../containers/ViewVeg'
import MyGarden from '../containers/MyGarden'

// import { getUserVeges } from '../api/vegs';
import { getMonths } from '../api/months'
import { getMonthVeges } from '../api/months'
// import { getPlantingMonthsArr } from '../api/months'
// import {addToGarden} from '../api/users'

class Table extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      veg: {},
      setVeg: {},
      monthsArr: [],
    }
  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(getMonths())
    // getUserVeges(this.props.loginUser.user).then(veges => {
    //   this.setState({userVeges: veges})
    // })
  }

  handleClick = (month) => {
    const { dispatch } = this.props
    dispatch(getMonthVeges(month))
  }

  // mapToArr = (res)=>{
  //   let monthsArr = []
  //   for(var i=1; i<13; i++){
  //     if(res.find(month => month.id === i)) monthsArr.push({show: true})
  //     else monthsArr.push({show: false}) 
  //   }
  //   return this.setState({monthsArr: monthsArr})
  // }

  // addToGarden = (veg) => {
  //   const sendData = {user: this.props.user, veg: veg}
  //   addToGarden(sendData).then(() => {
  //     getUserVeges(this.props.user).then(veges => {
  //       return this.setState({userVeges: veges})
  //     })
  //   })
  // }

  // setVeg = (veg) => {
  //   getPlantingMonthsArr(veg)
  //   .then(resArr => {
  //     this.mapToArr(resArr)
      
  //   }).then(() =>{
  //     this.setState({
  //     veg: veg,
  //     redirect: 'veg'
  //     })
  //   })  
  // }
    


  render(){
    const { months } = this.props
    return(
      <Router>
          <Fragment>
            <div className='table'>
              <div className='header-grid'>
                <div className='grid12'>
                  {months.map((month, i) => 
                    <button onClick={this.handleClick.bind(this, month)} 
                        className='month-letter overlay heartbeat' key={i}
                        >
                      
                        <div className={`${month.season} table-header`}>
                          {month.name.charAt(0)}
                        </div>
                    </button> 
                  )}
                </div>  
              </div>
    
              <div className='plantingMonths'> 
                <div className='grid12'>
                  {/* {this.state.monthsArr.map((month, i) => 
                    <div key={i} className={`${month.name} plantingMonths-header`}>
                      <PlantingMonth show={month.show}/>
                    </div>
                  )} */}
              </div> 
            </div>
          </div>
           <div className='contents'>
            <MyGarden />
           {this.state.redirect === 'month' &&
                <ViewMonth />
              || this.state.redirect === 'veg' &&
              <ViewVeg />
              }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ user, months}) {
  return { user, months }
}

export default connect(mapStateToProps)(Table)