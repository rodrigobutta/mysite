import React, {useEffect} from 'react';
import Technologies from './technologies/technologies'
import HeaderShapes from './header-shapes/header-shapes'
import HomeHeader from './home-header/home-header'
import FirstProject from './first-project/first-project'
import TestimonialsState from '../../../context/testimonials/testimonials-state'

import * as Rellax from 'rellax/rellax'

import './home.scss'
import SecondProject from './second-project/second-project'
import MeSection from './me-section/me-section'
import Offer from './offer/offer'
import Who from './who/who'
import Footer from '../../common/footer/footer'
import Navbar from '../../common/navbar/navbar'

const Home = () => {
  useEffect(() => {
    window.rellax = new Rellax('.rellax')
  }, [])
  return (
    <TestimonialsState>
      <Navbar />
      <div className="home">
        <HeaderShapes/>

        <HomeHeader/>

        <FirstProject/>

        <Technologies/>

        <SecondProject />

        <MeSection />

        <Offer />

        <Who />
      </div>
      <Footer />
    </TestimonialsState>
  );
};

export default Home;


/*


<app-navbar [navbarColor]="'dark'"></app-navbar>

<div className="home">




</div>

<app-footer></app-footer>


*/
