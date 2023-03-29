import React from 'react'
import Header from '../Header/Header';

function Banner() {
    return (
        <>
            <div className="home-slides owl-carousel owl-theme">
                <div className="main-slides-item">
                    <div className="container">
                        <div className="main-slides-content">
                            {/* <span className="sub-title">
                                <i className="flaticon-hashtag-symbol"></i>
                                Keeping Teeth Clean
                            </span> */}
                            <h1>Personalized Dental <span>Care</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <div className="slides-btn">
                                <a href="appointment.html" className="default-btn">Book Appointment</a>
                                <div className="checkup-content">
                                    <div className="icon">
                                        <i className="flaticon-chair"></i>
                                    </div>
                                    <span><a href="contact-us.html">Get Free Checkup</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-slides-item item-bg2">
                    <div className="container">
                        <div className="main-slides-content">
                            {/* <span className="sub-title">
                                <i className="flaticon-hashtag-symbol"></i>
                                Keeping Teeth Clean
                            </span> */}
                            <h1>Exceptional Care for <span>Women</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <div className="slides-btn">
                                <a href="appointment.html" className="default-btn">Book Appointment</a>
                                <div className="checkup-content">
                                    <div className="icon">
                                        <i className="flaticon-chair"></i>
                                    </div>
                                    <span><a href="contact-us.html">Get Free Checkup</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-slides-item item-bg3">
                    <div className="container">
                        <div className="main-slides-content">
                            {/* <span className="sub-title">
                                <i className="flaticon-hashtag-symbol"></i>
                                Keeping Teeth Clean
                            </span> */}
                            <h1>Your Health is Our Top <span>Priority</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <div className="slides-btn">
                                <a href="appointment.html" className="default-btn">Book Appointment</a>
                                <div className="checkup-content">
                                    <div className="icon">
                                        <i className="flaticon-chair"></i>
                                    </div>
                                    <span><a href="contact-us.html">Get Free Checkup</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner;