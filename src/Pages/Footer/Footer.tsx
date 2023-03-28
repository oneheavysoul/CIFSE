import React, { useEffect, useState } from 'react'

function Footer() {

   
    return (
        <>

            <footer className="site-footer">
                <div className="container">
                    <div className="site-footer__top">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__column footer-widget__about">
                                    <div className="footer-widget__about-text-box">
                                        <p className="footer-widget__about-text">Roofsie with more than two years of proven
                                            success in quality roofing services.</p>
                                    </div>
                                    <div className="site-footer__social">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__column footer-widget__explore clearfix">
                                    <h3 className="footer-widget__title">Explore</h3>
                                    <ul className="footer-widget__explore-list list-unstyled clearfix">
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Recent Works</a></li>
                                        <li><a href="#">Our Team</a></li>
                                        <li><a href="#">Testimonials</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__column footer-widget__newsletter clearfix">
                                    <h3 className="footer-widget__title">Newsletter</h3>
                                    <p className="footer-widget__newsletter-text">Subscribe to our newsletter and get update in
                                        your inbox.</p>
                                    <form className="footer-widget__newsletter-form">
                                        <div className="footer-widget__newsletter-input-box">
                                            <input type="email" placeholder="Enter Email Address" name="email" />
                                            <button type="submit" className="footer-widget__newsletter-btn thm-btn"><i
                                                className="fa fa-arrow-right"></i>Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget__column footer-widget__contact">
                                    <h3 className="footer-widget__title">Contact</h3>
                                    <p className="footer-widget__contact-text">88 Broklyn Golden Road Street, <br /> New York. USA
                                    </p>
                                    <ul className="list-unstyled footer-widget__contact-list">
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-envelope"></i>
                                            </div>
                                            <div className="text">
                                                <p><a href="mailto:needhelp@company.com ">needhelp@company.com</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone-alt"></i>
                                            </div>
                                            <div className="text">
                                                <p><a href="tel:9200368090">+92 (003) 68-090</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer__bottom">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer__bottom-inner">
                                    <p className="site-footer__bottom-text">© All Copyright 2022 by <a href="#">Roofsie.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer;
