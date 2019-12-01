import React from 'react'

const HomeHeader = () => {
  return (
    <header className="container hero text-md-center">

      <div className="my-auto">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <h4 className="mt-5">Fullstack Developer since 2004</h4>
            <h1 className="">Clean code lover. Focused on deliverying strong and scalable webs & APPs.</h1>
          </div>
        </div>
      </div>
      <div className="op-5 mb-5">
        <h5 className="">They trust us</h5>
        <div className="row justify-content-md-center align-items-center overflow-x-auto">
          <div className="col-auto">
            <img src="/assets/img/brands/armatura.svg" alt="" height="24" className="mb-4"/>
          </div>
          <div className="col-auto">
            <img src="/assets/img/brands/stolb.svg" alt="" height="24" className="mb-4"/>
          </div>
          <div className="col-auto">
            <img src="/assets/img/brands/waves_flung.svg" alt="" height="24" className="mb-4"/>
          </div>
          <div className="col-auto">
            <img src="/assets/img/brands/stolb.svg" alt="" height="24" className="mb-4"/>
          </div>
          <div className="col-auto">
            <img src="/assets/img/brands/zelenui.svg" alt="" height="24" className="mb-4"/>
          </div>
        </div>
      </div>

    </header>
  )
}

export default HomeHeader
