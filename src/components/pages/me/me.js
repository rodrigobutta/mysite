import React, {useContext, useEffect} from 'react'
import Navbar from '../../common/navbar/navbar'
import Footer from '../../common/footer/footer'
import BlogList from '../../common/blog-list/blog-list'
import EventsSection from './events-section/events-section'

const Me = () => {

  useEffect(() => {
  }, [])

  return (
    <React.Fragment>
      <Navbar light/>
      <div className="container">
        <h1 className="mt-8 mb-7 text-center">We make the world better</h1>

        <img src="/assets/img/me/tim-van-der-kuip-1403210-unsplash.jpg" alt="" className="img-fluid mb-5 mb-md-7" />

        <EventsSection />

          <h2 className="h1">We write</h2>
          <div className="mb-5 mb-lg-7 p-0 col-lg-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi esse laudantium, magnam maxime
              necessitatibus odio sequi vel! Corporis doloribus fugit laborum perspiciatis quis reiciendis saepe sit
              sunt unde
              voluptates.</p>
          </div>

          <BlogList postCount={2}/>
      </div>
      <Footer light/>
    </React.Fragment>
)
}

export default Me