import React from 'react'
import {Link} from 'react-router-dom'
import TestimonialView from '../../../common/testimonial-view/testimonial-view'

const SecondProject = (props) => {
  return (
    <div className="pb-7 pb-md-8 position-relative">
      <div className="rellax fly-shape fly-shape_left" data-rellax-speed="-1.5">
        <img
          src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMCwwbDUxMiw1MTJIMFYweiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="/>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 col-xl-5">
            <img src="/assets/img/home/ipone.png" alt="project1" className="img-fluid"/>
          </div>
          <div className="col-md-7 col-xl-5 offset-xl-1">
            <div className="h5">The Way</div>
            <h2 className="mr-lg-5">An application that will change your way of thinking</h2>

            <TestimonialView id={3} />

            <Link to="/project/1" className="btn btn-outline-light">
              View project
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondProject
