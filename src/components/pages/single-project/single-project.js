import React from 'react'
import Navbar from '../../common/navbar/navbar'
import Footer from '../../common/footer/footer'
import './single-project.scss'

const SingleProject = () => {
  return (
    <div className="projects">
      <Navbar light/>

      <div className="project">


        <div className="f-screen bg-image" style={{background: 'url(/assets/img/projects/austin-chan-275638-unsplash.jpg)'}}>
        </div>

        <div className="py-7 py-md-8 d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <h1>From dirt to Kings</h1>
              </div>
              <div className="col-lg-7">
                <h5 className="mb-2">Project description</h5>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eligendi eum hic
                  inventore officiis?
                  Accusamus culpa deleniti est eum fuga laborum molestias necessitatibus reiciendis repellendus
                  soluta, totam
                  unde voluptate voluptatibus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                  consequuntur
                  ex quam tempore. </p>
                <h5 className="mb-2">Services:</h5>
                <p className="mb-4">Research, UX design, UI Design</p>
                <h5 className="mb-2">Platforms:</h5>
                <p className="mb-4">Web</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row pb-7 pb-md-8">
            <div className="col-lg-8 order-1 order-lg-0">
              <img src="/assets/img/projects/water-journal-225046-unsplash.jpg" alt="" className="img-fluid mt-3 mt-lg-0"/>
            </div>
            <div className="col-lg-4 order-0 order-lg-1 d-flex flex-column justify-content-center">
              <h2>Research</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur laborum omnis sapiente. Assumenda
                distinctio dolor ex fugit minima neque pariatur, quidem recusandae reprehenderit similique, soluta,
                temporibus
                ullam velit veniam voluptatem?</p>
            </div>
          </div>

          <div className="row pb-7 pb-md-8">
            <div className="col-lg-4 d-flex flex-column justify-content-center">
              <h2>UX design</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci asperiores beatae consequuntur dolore ea eius eos error facilis ipsa iste modi,
                non nulla, omnis quas sed sequi sit veritatis voluptate.</p>
            </div>
            <div className="col-lg-8">
              <img src="/assets/img/projects/proto_.png" alt="" className="img-fluid mt-3 mt-lg-0"/>
            </div>
          </div>

          <h2>UI and branding</h2>
          <img src="/assets/img/projects/proto.png" alt="" className="img-fluid mb-5"/>
        </div>

      </div>

      <Footer light/>
    </div>
  )
}

export default SingleProject