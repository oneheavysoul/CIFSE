import React from 'react'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

function Header() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
        <>
            <div className="top-header-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 col-md-12">
                            <ul className="top-header-information">
                                <li>
                                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                                    <span><a href="tel:+91 95740 31178">+91 95740 31178</a></span>,
                                    <span><a href="tel:+91 98985 57778">+91 98985 57778</a></span>
                                </li>
                                <li>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span><a href="mailto:info@cifse.in">info@cifse .in</a></span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <ul className="top-header-optional">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className='fa fa-facebook'></i>
                                    </a>
                                    <a href="https://twitter.com/?lang=en" target="_blank">
                                        <i className='fa fa-twitter'></i>
                                    </a>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className='fa fa-linkedin'></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className='fa fa-instagram'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="middle-header-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="middle-header">
                                <h1>
                                    <Link to={ROUTES.home} className="nav-link">
                                        <img
                                            src={publicUrl + "assets/images/logo_cifse.png"}
                                            alt="Logo"
                                            className="main-logo"
                                        />
                                    </Link>
                                </h1>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-10 col-md-12 block-slider">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title-warp">
                                            <span className="sub-title"># Our Recognitions</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="skin-care-partner-area">
                                <div className="skin-care-partner-slides owl-carousel owl-theme">
                                    <div className="skin-care-partner-card">
                                        <img src="assets/images/rec/p1.png" alt="partner" />
                                    </div>
                                    <div className="skin-care-partner-card">
                                        <img src="assets/images/rec/p2.png" alt="partner" />
                                    </div>
                                    <div className="skin-care-partner-card">
                                        <img src="assets/images/rec/p3.png" alt="partner" />
                                    </div>
                                    <div className="skin-care-partner-card">
                                        <img src="assets/images/rec/p4.png" alt="partner" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="navbar-area">
                <div className="main-responsive-nav">
                    <div className="container">
                        <div className="main-responsive-menu">
                            <div className="logo">
                                <Link to={ROUTES.home} className="nav-link">
                                    <img
                                        src={publicUrl + "assets/images/logo_a.png"}
                                        alt="Logo"
                                        className="main-logo"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-navbar">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to={ROUTES.home} className="nav-link">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={ROUTES.aboutUs} className="nav-link">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={ROUTES.RegularCourse} className="nav-link">
                                            Regular Course
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={ROUTES.DistanceCourse} className="nav-link">
                                            Distance Course
                                        </Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            Results
                                        </a>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link to={ROUTES.Gallery} className="nav-link">
                                            Gallery
                                        </Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a href="#partner_1" className="nav-link">Placement</a>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link to={ROUTES.contactUs} className="nav-link">Contact Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={ROUTES.Result} className="nav-link">Student Result</Link>
                                    </li>
                                </ul>
                                {/* <div className="others-options d-flex align-items-center">
                                    <div className="option-item">
                                        <div className="navbar-btn">
                                            <Link to={ROUTES.contactUs} className="default-btn">Inquiry / Contact Us</Link>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </nav>
                    </div>
                </div>
                {/* <div className="others-option-for-responsive">
                    <div className="container">
                        <div className="dot-menu">
                            <div className="inner">
                                <div className="circle circle-one"></div>
                                <div className="circle circle-two"></div>
                                <div className="circle circle-three"></div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="option-inner">
                                <div className="others-options d-flex align-items-center">
                                    <div className="option-item">
                                        <div className="navbar-btn">
                                            <a href="appointment.html" className="default-btn">Book Appointment</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div >


        </>
    )
}
export default Header;
