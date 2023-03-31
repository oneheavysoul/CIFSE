import React from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import About from './About';
import Banner from './Banner';
import Directors from './Directors';
import Testimonial from './Testimonial';

function Home() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Banner />
        <About />
        <Directors />
        <Testimonial />
        <Footer />
      </div>
      {/* <BottomFooter /> */}
    </>
  )
}
export default Home;