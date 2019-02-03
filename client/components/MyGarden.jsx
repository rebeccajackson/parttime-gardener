import React from 'react'
import {Link} from 'react-router-dom'

import users_veg from "../../data/users_veg";
import users from "../../data/users";
import veg from "../../data/veg";

const MyGarden = ({match}) => {
const userName = users.user[0].name

console.log(match)
 
  return(
    <div className="my-garden">
      <h3 className="box-title">{userName}'s garden</h3>

      <div className="garden-list">
        {veg.veges.map((obj, i) => 
          <Link className='vegNameList' key={i} id={obj.id} to={`/plantingmonths/${obj.id}`}>{obj.name}
          </Link>
          )}
      </div>
    </div>
  )
}
export default MyGarden