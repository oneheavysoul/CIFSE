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
                                    <span><a href="tel:+91 94514 42632">+91 94514 42632</a></span>,
                                    <span><a href="tel:+91 73101 76777">+91 73101 76777</a></span>
                                </li>
                                <li>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span><a href="mailto:info@cifseindia.org"> info@cifseindia.org</a></span>
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
                        <div className="col-xl-3 col-lg-2 col-md-12">
                            <div className="middle-header">
                                <h1>
                                    {/* <img src="assets/images/logo.png" className="main-logo" alt="logo" /> */}
                                    <img
                                        src={publicUrl + "assets/images/logo.png"}
                                        alt="Logo"
                                        className="main-logo"
                                    />
                                </h1>
                                <p style={{ fontSize: "12px", marginBottom:"0px", color: '#222222', fontWeight: 600, textAlign: 'center' }}>ISO:9001-2015 CERTIFIED</p>
                                <p style={{ fontSize: "12px", color: '#222222', fontWeight: 600, textAlign: 'center' }}>Ministry of Education</p>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-10 col-md-12">
                            <ul className="middle-header-content">
                                <li className='text-center'>
                                    <h2>CENTRAL INSTITUTE OF FIRE & SAFETY ENGINEERING</h2>
                                    {/* <h5 className='main-text'>
                                        India's No.1 Fire & Safety Engineering College<br />
                                    </h5> */}
                                    <h5 className='main-text'>मानव संसाधन शिक्षण विकास परिषद<br />(भारत सरकार)</h5>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbar-area">
                <div className="main-responsive-nav">
                    <div className="container">
                        <div className="main-responsive-menu">
                            <div className="logo">
                                <a href="#">
                                    {/* <img src="assets/images/logo.png" className="main-logo" alt="logo" /> */}
                                    <img
                                        src={publicUrl + "assets/images/logo.png"}
                                        alt="Logo"
                                        className="main-logo"
                                    />
                                </a>
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
                                            Centers
                                        </a>
                                    </li> */}
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
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Placement</a>
                                    </li>
                                </ul>
                                <div className="others-options d-flex align-items-center">
                                    <div className="option-item">
                                        <div className="navbar-btn">
                                            <Link to={ROUTES.contactUs} className="default-btn">Inquiry / Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="others-option-for-responsive">
                    <div className="container">
                        <div className="container">
                            <div className="option-inner">
                                <div className="others-options d-flex align-items-center">
                                    <div className="option-item">
                                        <div className="navbar-btn">
                                            <a href="#" className="default-btn">Book Appointment</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Header;
