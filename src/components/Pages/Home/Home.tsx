import React from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import About from './About';
import Banner from './Banner';
import Directors from './Directors';
import Testimonial from './Testimonial';
import OurAffiliation from './OurAffiliation';
import Admission from './Admission';
import Placements from './Placements';

function Home() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Banner />
        <About />
        <OurAffiliation />
        <Testimonial />
        <Directors />
        <Placements />
        <Admission />
        <Footer />
      </div>
      {/* <BottomFooter /> */}
    </>
  )
}
export default Home;