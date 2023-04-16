import React, { useEffect } from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import PageHeader from './PageHeader';
import { Link } from 'react-router-dom';
import { InnerPageRoutes, ROUTES } from '../../../constants/routes';

function RegularCourse() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, [])
    return (
        <>
            {/* Blog Page Start */}
            <section className="blog-page">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="section-title-warp">
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
                                    <img src={publicUrl + "assets/images/regular-course/10.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">B.Sc. in Fire, Safety and Hazard Management</a></h3>
                                    <p className="blog-one__text">Duration: 3 year Course</p>
                                    <p className="blog-one__text">Eligibility: 10th +2 or Equivalent, Lateral entry direct 3rd year - Dip. In fire service engg. (1 year course)</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.bscFire}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src={publicUrl + "assets/images/regular-course/11.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">

                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Diploma in Fire Service Engineering</a></h3>
                                    <p className="blog-one__text">Duration: 2 Year Course</p>
                                    <p className="blog-one__text">Eligibility: 12th or Equivalent Or Any Diploma</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.diplomaFireService}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src={publicUrl + "assets/images/regular-course/12.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Advance Diploma in Industrial Safety</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year Course</p>
                                    <p className="blog-one__text">Eligibility: Any Degree or Any Diploma</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.adis12th}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src={publicUrl + "assets/images/regular-course/1.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Diploma in Fire and Safety Engineering</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year</p>
                                    <p className="blog-one__text">Eligibility: 10th +2 or Equivalent</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.dfse}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src={publicUrl + "assets/images/regular-course/2.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">

                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Advance Diploma in Industrial Safety & Security Management</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year</p>
                                    <p className="blog-one__text">Eligibility: Any Graduate Or Any Diploma</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.adis}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src={publicUrl + "assets/images/regular-course/3.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Certificate in Fire and Safety Engineering</a></h3>
                                    <p className="blog-one__text">Duration: 6 Months</p>
                                    <p className="blog-one__text">Eligibility: 10th Pass</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.cfse}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src="assets/images/regular-course/4.jpg" alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">MBA in Fire Safety Management</a></h3>
                                    <p className="blog-one__text">Duration: 2 Years</p>
                                    <p className="blog-one__text">Eligibility: Any Graduate or Equivalent</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.mbaFireSafety}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src="assets/images/regular-course/5.jpg" alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">

                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Fire Officer Course</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year</p>
                                    <p className="blog-one__text">Eligibility: 10+2 or equivalent</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.foc}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src="assets/images/regular-course/6.jpg" alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Diploma in Fire and Safety</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year Course</p>
                                    <p className="blog-one__text">Eligibility: Any Degree or Any Diploma</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.pgdFiresafety}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src="assets/images/regular-course/7.jpg" alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">MBA in Industrial Safety Management</a></h3>
                                    <p className="blog-one__text">Duration: 2 Years</p>
                                    <p className="blog-one__text">Eligibility: Any Degree or Any Diploma</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.mbaIndustrialSafety}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src="assets/images/regular-course/8.jpg" alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">

                                    </div>
                                    <h3 className="blog-one__title"><a href="#">P.G. Diploma in Industrial Safety</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year</p>
                                    <p className="blog-one__text">Eligibility: Any Graduate or Any Diploma</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.pgdIndustrialSafety}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src="assets/images/regular-course/9.jpg" alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Safety Officer Course</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year</p>
                                    <p className="blog-one__text">Eligibility: 10+2 or equivalent</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.soc}>Read More <i className="fa fa-arrow-right"></i></Link>
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
