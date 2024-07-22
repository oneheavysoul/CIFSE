import React from 'react'

function Directors() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
        <>
            <section className="doctor-area pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="section-title-warp">
                                {/* <span className="sub-title">
                                    <i className="flaticon-hashtag-symbol"></i>
                                    Director
                                </span> */}
                                <h2>Regional Director Profile</h2>
                                <p>
                                    Youth Fire Stop is a program designed to prevent misuse of fire by youth in our community
                                    and to educate and intervene when endangerment involving fire occurs. Youth Fire Stop has
                                    been streamlined in order to make the program more effective.
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* <div className="row"> */}
                    <div className="col-lg-3 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-doctor">
                            <img src={publicUrl + "assets/images/RD.jpeg"} alt="image" />
                            <div className="doctor-content">
                                <h3>
                                    D. M. Khan
                                </h3>
                                <span>Retd. Assistant Director of NATIONAL FIRE SERVICE COLLEGE - NAGPUR <br />(MINISTRY OF HOME AFFAIRS)</span>
                                <div className="share-link">
                                    <a href="https://www.facebook.com/" target="_blank"><i className='bx bxl-facebook'></i></a>
                                    <a href="https://twitter.com/?lang=en" target="_blank"><i
                                        className='bx bxl-twitter'></i></a>
                                    <a href="https://www.linkedin.com/" target="_blank"><i className='bx bxl-linkedin'></i></a>
                                    <a href="https://www.instagram.com/" target="_blank"><i
                                        className='bx bxl-instagram'></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </section>
        </>
    )
}
export default Directors;