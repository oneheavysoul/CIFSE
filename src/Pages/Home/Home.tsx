import React from 'react'
import BottomFooter from '../Footer/BottomFooter';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import About from './About';
import Banner from './Banner';

function Home() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Banner />
        {/* <About />
        <Footer /> */}
      </div>
      {/* <BottomFooter /> */}
    </>
  )
}
export default Home;