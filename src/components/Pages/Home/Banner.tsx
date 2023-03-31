import React from 'react'


function Banner() {
    return (
        <>
            <div className="home-slides owl-carousel owl-theme">
                <div className="main-slides-item">
                    <div className="container">
                        <div className="main-slides-content">
                            <h1>Lorem Ipsum <span>Ipsum</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <div className="slides-btn">
                                <a href="appointment.html" className="default-btn">Book Appointment</a>
                                {/* <div className="checkup-content">
                                    <div className="icon">
                                        <i className="flaticon-chair"></i>
                                    </div>
                                    <span><a href="contact-us.html">Get Free Checkup</a></span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-slides-item item-bg2">
                    <div className="container">
                        <div className="main-slides-content">
                           
                            <h1>We learn to <span>Save</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <div className="slides-btn">
                                <a href="appointment.html" className="default-btn">Book Appointment</a>
                                {/* <div className="checkup-content">
                                    <div className="icon">
                                        <i className="flaticon-chair"></i>
                                    </div>
                                    <span><a href="contact-us.html">Get Free Checkup</a></span>
                                </div> */}
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
                            <h1>Keep Calm and  <span>Fire Safety On</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <div className="slides-btn">
                                <a href="appointment.html" className="default-btn">Book Appointment</a>
                                {/* <div className="checkup-content">
                                    <div className="icon">
                                        <i className="flaticon-chair"></i>
                                    </div>
                                    <span><a href="contact-us.html">Get Free Checkup</a></span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="features-area pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="content">
                                    <div className="icon">
                                        {/* <i className="flaticon-doctor"></i> */}
                                        <img src="assets/images/others/si3.png" className="card-image" alt="logo" />
                                    </div>
                                    <h3>
                                        <a href="services-details.html">Best Fire Institute</a>
                                    </h3>
                                    <p>CIFSE Is Best Fire Institute Situated In India Provided Good Result And placement Guarantee</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features bg-f57e57">
                                <div className="content">
                                    <div className="icon">
                                        {/* <i className="flaticon-chair"></i> */}
                                        <img src="assets/images/others/training1.png" className="card-image" alt="logo" />
                                    </div>
                                    <h3>
                                        <a href="services-details.html">Our Courses</a>
                                    </h3>
                                    <p>CIFSE Provided Different Types Of Fire,Safety & Environmental Engineering Courses</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-features bg-4a6577">
                                <div className="content">
                                    <div className="icon">
                                        {/* <i className="flaticon-healthcare"></i> */}
                                        <img src="assets/images/others/docs2.png" className="card-image" alt="logo" />
                                    </div>
                                    <h3>
                                        <a href="services-details.html">Admission Process</a>
                                    </h3>
                                    <p>The Admission Procedure In CIFSE Is Very Easy And Simple Just Fill The Form & Apply</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner;