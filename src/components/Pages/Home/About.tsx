import React from 'react'

function About() {
    return (
        <>

            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="about-content">
                                <span className="sub-title">
                                    <i className="flaticon-hashtag-symbol"></i>
                                    About Our Hospital
                                </span>
                                <h3>Central Institute of  <span>Fire & Safety Engineering</span>
                                </h3>
                                <p>Central Institute of Fire & Safety Engineering has been founded to produce skilled and trained professionals in the field of engineering and safety. Since last two years,
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
                                            <h4>200+</h4>
                                            <span>Students Passed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-image">
                                <img src="assets/images/about/about-1.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default About;