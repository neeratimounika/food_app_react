import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'

const About = () => {
  let params = useParams();


  return (
    <div>
      <center>
        <h1>Welcome to about</h1>
        <p>FirstName:{params.firstName}
     </p>
     
        <Link to='/'>Back to home</Link>
      </center>
    </div>
  )
}

export default About
