import React from 'react'
import {Link} from 'react-router-dom'

const Who = (props) => {
  return (
    <Link to="/me" className="who">
      <div className="container">
        <h2>Who we are?</h2>
      </div>
    </Link>
  )
}

export default Who
