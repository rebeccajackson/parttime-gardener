import React from 'react'

import months from '../../data/months'


const Table = () => {
  const monthsArr = months.months

  return(

    <div className='table'>
    <ul>
      {monthsArr.map(index => <li className={`${index.season} month-letter`}>{index.name.charAt(0)}</li>)}
    </ul>

    </div>
    // <table className="table">
    //   <thead>
    //     <tr>
    //       <th className="summer month-letter"> <a href=""> J</a></th>
    //       <th className="summer month-letter"> <a href=""> F</a></th>
    //       <th className="autumn month-letter"> <a href=""> M</a></th>
    //       <th className="autumn month-letter"> <a href=""> A</a></th>
    //       <th className="autumn month-letter"> <a href=""> M</a></th>
    //       <th className="winter month-letter"> <a href=""> J</a></th>
    //       <th className="winter month-letter"> <a href=""> J</a></th>
    //       <th className="winter month-letter"> <a href=""> A</a></th>
    //       <th className="spring month-letter"> <a href=""> S</a></th>
    //       <th className="spring month-letter"> <a href=""> O</a></th>
    //       <th className="spring month-letter"> <a href=""> N</a></th>
    //       <th className="summer month-letter" > <a href=""> D</a></th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>test</td>
    //       <td>test</td>
    //       <td>test</td>
    //       <td>test</td>
    //       <td>test</td>
    //       <td>test</td>
    //       <td>test</td>
    //       <td>test</td>
    //       <td>test</td>
    //       <td>test</td>
    //       <td>test</td>
    //       <td>test</td>
    //     </tr>
    //   </tbody>
    // </table>
  )
}

export default Table