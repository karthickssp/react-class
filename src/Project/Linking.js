import React from 'react'
import {Link} from 'react-router-dom';
function Linking() {
  return (
    <div>
    <h1>This is home page</h1>
    <Link to="about">Aboutus</Link>
    <Link to="contact">Contactus</Link>
    </div>
  )
}
export default Linking