import React from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import PageHeader from './PageHeader';
import OurStory from './OurStory';

function AboutUs() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <PageHeader />
                <OurStory />
                <Footer />
            </div>
        </>
    )
}
export default AboutUs;
