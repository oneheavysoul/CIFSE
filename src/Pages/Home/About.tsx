import React from 'react'
import Header from '../Header/Header';

function About() {
    return (
        <>
            <section className="about-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-two__left">
                                <div className="section-title text-left">
                                    <div className="section-sub-title-box">
                                        <p className="section-sub-title">About roofsie</p>
                                        <div className="section-title-shape-1">
                                            <img src="assets/images/shapes/section-title-shape-1.png" alt="" />
                                        </div>
                                    </div>
                                    <h2 className="section-title__title">We’re committed to roofing exellence</h2>
                                </div>
                                <p className="about-two__text-1">Put the best roof over your head.</p>
                                <p className="about-two__text-2">Exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat duis aute irure. Reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur excepteur sint occaecat cupidatat non proident.</p>
                                <ul className="list-unstyled about-two__points">
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-award"></span>
                                        </div>
                                        <div className="text">
                                            <h4>Certified</h4>
                                            <p>Magna aliqa enim sed ipsum nisi ainy veniam quis</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-biohazard"></span>
                                        </div>
                                        <div className="text">
                                            <h4>Innovative work</h4>
                                            <p>Lorem ipsum dolor sit ametys consectet elit</p>
                                        </div>
                                    </li>
                                </ul>
                                <a href="about.html" className="thm-btn about-two__btn"> <i className="fa fa-arrow-right"></i>
                                    Discover more</a>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-two__right">
                                <div className="about-two__img-box wow slideInRight" data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                    <div className="about-two__img">
                                        <img src="assets/images/resources/about-two-img-1.jpg" alt="" />
                                    </div>
                                    <div className="about-two__img-two">
                                        <img src="assets/images/resources/about-two-img-2.jpg" alt="" />
                                    </div>
                                    <div className="about-two__line">
                                        <img src="assets/images/shapes/about-two-line.png" alt="" />
                                    </div>
                                    <div className="about-two__shape-1"></div>
                                    <div className="about-two__practice-year">
                                        <div className="about-two__practice-year-inner">
                                            <div className="about-two__practice-year-shape">
                                                <img src="assets/images/shapes/about-two-practice-year-shape.png" alt="" />
                                            </div>
                                            <div className="about-two__practice-year-content">
                                                <h3>20</h3>
                                                <p>Years of <br /> practicing</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;