import React, { useEffect } from 'react'
import CountUp from 'react-countup';
import logoGif from "../../../../src/news.gif"

function About() {
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, [])

    return (
        <>
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <span className="sub-title">
                                    <i className="flaticon-hashtag-symbol"></i>
                                    About Our CIFSE
                                </span>
                                <h3>Central Institute of  <span>Fire & Safety Engineering</span>
                                </h3>
                                <p>Central Institute of Fire & Safety Engineering has been founded to produce skilled and trained professionals in the field of engineering and safety. Since last eight years,
                                    We have seen tremendous progress in the field of fire services & growth in fire technology development in entire India.</p>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="about-info">
                                            <i className="flaticon-caduceus"></i>
                                            <h4>8 Years</h4>
                                            <span>Fire & Safety Experienced</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="about-info">
                                            <i className="flaticon-chair"></i>
                                            <h4><CountUp duration={2} start={0} end={500} style={{ fontSize: 25, fontWeight: 500, color: "#222" }} />+</h4>
                                            <span>Students Passed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="pricingTable">
                                        <div className="pricingTable-header">
                                            <h3 className="title">HIGHLIGHTS</h3>
                                        </div>
                                        <ul className="pricing-content">
                                            <li>Government Recognized</li>
                                            <li>ISO 9001-2008 certified</li>
                                            <li>International Level Faculty</li>
                                            <li>Independent Practical Training Yard</li>
                                            <li>Hostel Facility</li>
                                            <li>Industrial Visit</li>
                                            <li>Ground for Playing / Drill</li>
                                            <li>Books Library Available</li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="pricingTable blue">
                                        <div className="pricingTable-header">
                                            <h3 className="title">NEWS</h3>
                                        </div>
                                        <ul className="pricing-content">
                                            <li><img src={logoGif} width={40}/>Admissions open for 2023-2024 batch. Hurry up to reserve your seat.</li>
                                            {/* <li>ISO 9001-2008 certified</li>
                                            <li>International Level Faculty</li>
                                            <li>Independent Practical Training Yard</li>
                                            <li>Hostel Facility</li>
                                            <li>Industrial Visit</li>
                                            <li>Ground for Playing / Drill</li>
                                            <li>Books Library Available</li> */}
                                        </ul>

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