import React from 'react'
import {Link} from 'react-router-dom'

import { useLocation } from 'react-router-dom'

const Dashboard = () => {

  let {search} = useLocation();
  let params = new URLSearchParams(search);


  return (
    <div>
      <center>
        <h2>Welcome to dashboard</h2>
        <p>Name:{params.get('name')}</p>
        <p>Age:{params.get('age')}</p>
        <Link to='/'>Back to home</Link>
      </center>
    </div>
  )
}

export default Dashboard
