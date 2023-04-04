import React from 'react'
import Inquiry from './Inquiry';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import PageHeader from './PageHeader';


function ContactUs() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <PageHeader />
        <Inquiry />
        <Footer />
      </div>
    </>
  )
}
export default ContactUs;