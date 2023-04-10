import React from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import PageHeader from './PageHeader';


function RegularCourse() {
    return (
        <>
            {/* Blog Page Start */}
            <section className="blog-page">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="section-title-warp">
                                {/* <span className="sub-title">
                                    <i className="flaticon-hashtag-symbol"></i>
                                    Director
                                </span> */}
                                <h2>Regular Course</h2>
                                <p>
                                    Youth Fire Stop is a program designed to prevent misuse of fire by youth in our community
                                    and to educate and intervene when endangerment involving fire occurs. Youth Fire Stop has
                                    been streamlined in order to make the program more effective.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src="assets/images/regular-course/fire-sefty-2.jpg" alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                        {/* <div className="blog-one__user-img">
                                            <img src="assets/images/blog/blog-one-user-1-1.jpg" alt="" />
                                        </div> */}
                                        {/* <div className="blog-one__user-content">
                                            <p>by Admin</p>
                                            <h5>January 2, 2022</h5>
                                        </div> */}
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">B.Sc. in Fire, Safety and Hazard Management</a></h3>
                                    <p className="blog-one__text">Duration: 3 year Course</p>
                                    <p className="blog-one__text">Eligibility: B.Sc. First Year Clear & Second Year Pass</p>
                                    <div className="blog-one__read-more">
                                        <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src="assets/images/regular-course/fire-sefty-2.jpg" alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                        {/* <div className="blog-one__user-img">
                                            <img src="assets/images/blog/blog-one-user-1-2.jpg" alt="" />
                                        </div> */}
                                        {/* <div className="blog-one__user-content">
                                            <p>by Admin</p>
                                            <h5>January 2, 2022</h5>
                                        </div> */}
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Diploma in Fire Service Engineering</a></h3>
                                    <p className="blog-one__text">Duration: 2 Year Course</p>
                                    <p className="blog-one__text">Eligibility: 12th or Equivalent Or Any<br /> Diploma</p>
                                    <div className="blog-one__read-more">
                                        <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src="assets/images/regular-course/fire-sefty-2.jpg" alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                        {/* <div className="blog-one__user-img">
                                            <img src="assets/images/blog/blog-one-user-1-3.jpg" alt="" />
                                        </div> */}
                                        {/* <div className="blog-one__user-content">
                                            <p>by Admin</p>
                                            <h5>January 2, 2022</h5>
                                        </div> */}
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Advance Diploma in Industrial Safety</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year Course</p>
                                    <p className="blog-one__text">Eligibility:Any Degree or Any <br /> Diploma</p>
                                    <div className="blog-one__read-more">
                                        <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
            {/* Blog Page End */}
        </>
    )
}
export default RegularCourse;
