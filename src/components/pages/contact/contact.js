import React from 'react'
import Navbar from '../../common/navbar/navbar'
import Footer from '../../common/footer/footer'
import './contact.scss'
import ContactForm from '../../common/contact-form/contact-form'

const Contact = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="d-flex flex-column min-vh-100">
        <div className="contact">
          <div className="container mt-8">
            <div className="row">
              <div className="col-lg-7">
                <h1>Ready, Steady, Go</h1>
                <h5 className="mb-6">We reply to everyone.</h5>
                <ContactForm formDark />
              </div>
              <div className="col-lg-4 ml-auto pt-3 mt-5 mt-lg-0">
                <p className="small mb-1 text-light">FOR BUSINESS</p>
                <p className="mb-4 pb-2 h5"><a className="text-white" href="">info@example.com</a></p>

                <p className="small mb-1 text-light">SAY HI</p>
                <p className="mb-4 h5"><a className="text-white" href="">support.info@example.com</a></p>
              </div>
            </div>
          </div>
        </div>
        <Footer short/>
      </div>
    </React.Fragment>
  )
}

export default Contact