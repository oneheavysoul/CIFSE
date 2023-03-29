import React from 'react'
import Header from '../Header/Header';

function About() {
    return (
        <>
            <section className="features-area pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="content">
                                    <div className="icon">
                                        <i className="flaticon-doctor"></i>
                                    </div>
                                    <h3>
                                        <a href="services-details.html">Certified Dentist</a>
                                    </h3>
                                    <p>Proin gravida nibh velit auctor aliquet aenean.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features bg-f57e57">
                                <div className="content">
                                    <div className="icon">
                                        <i className="flaticon-chair"></i>
                                    </div>
                                    <h3>
                                        <a href="services-details.html">New Technology</a>
                                    </h3>
                                    <p>Proin gravida nibh velit auctor aliquet aenean.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-features bg-4a6577">
                                <div className="content">
                                    <div className="icon">
                                        <i className="flaticon-healthcare"></i>
                                    </div>
                                    <h3>
                                        <a href="services-details.html">Accept Insurance</a>
                                    </h3>
                                    <p>Proin gravida nibh velit auctor aliquet aenean.</p>
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