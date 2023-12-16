import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'

const Home = () => {
const user ='Mounika'
 
 const firstName='Neerati' 


  return (
    <div>
      <center>
        <h1>Welcome to Home Page</h1>
        <Link to={`/about/${firstName}`} className='link'>About</Link> {'    '}
         <Link to={`/dashboard?name=${user}&age=${29}`} className='link'>Dashboard</Link>
        
      </center>
    </div>
  )
}

export default Home
