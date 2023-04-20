import React, { useEffect } from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import PageHeader from './PageHeader';
import { Link } from 'react-router-dom';
import { InnerPageRoutes, ROUTES } from '../../../constants/routes';

function DistanceCourse() {
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
                                <h2>Distance Course</h2>
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
                                    <img src={publicUrl + "assets/images/regular-course/12.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Advance Diploma in Occupational Safety, Health and Environment Management Programs</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year Course</p>
                                    <p className="blog-one__text">Eligibility: Any Graduate or Any Diploma</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.adiehs}>Read More <i className="fa fa-arrow-right"></i></Link>
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
                                    <h3 className="blog-one__title"><a href="#">Advance Diploma in Fire And Industrial Safety Engineering</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year Course</p>
                                    <p className="blog-one__text">Eligibility: Any Graduate Or Any Diploma</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.adfies}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src={publicUrl + "assets/images/regular-course/10.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Diploma in Fire and Industrial Safety Engineering</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year Course</p>
                                    <p className="blog-one__text">Eligibility: 10+2 or equivalent</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.dfsim}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src={publicUrl + "assets/images/regular-course/9.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Advance Diploma in Industrial Safety Engineering</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year</p>
                                    <p className="blog-one__text">Eligibility: Any Graduate or Any Diploma</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.adies}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src={publicUrl + "assets/images/regular-course/8.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">

                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Diploma in Disaster Management</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year / 6 Months</p>
                                    <p className="blog-one__text">Eligibility: 10+2 or Equivalent</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.ddm}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src={publicUrl + "assets/images/regular-course/7.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Diploma in Health, Safety and Environment Management</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year</p>
                                    <p className="blog-one__text">Eligibility: 10+2 or equivalent</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.dhsem}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src={publicUrl + "assets/images/regular-course/6.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Diploma in Fire and Safety Management</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year</p>
                                    <p className="blog-one__text">Eligibility: 10+2 or equivalent</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.dfsm}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src={publicUrl + "assets/images/regular-course/5.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">

                                    </div>
                                    <h3 className="blog-one__title"><a href="#">PG Diploma in Fire and Safety Management</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year</p>
                                    <p className="blog-one__text">Eligibility: Any Degree or Any Diploma</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.pgfsm}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src={publicUrl + "assets/images/regular-course/4.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">Diploma in Industrial Safety Management</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year Course</p>
                                    <p className="blog-one__text">Eligibility: 10+2 or equivalent</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.dism}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src={publicUrl + "assets/images/regular-course/3.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">MBA Safety and Fire Management Programs</a></h3>
                                    <p className="blog-one__text">Duration: 2 Years</p>
                                    <p className="blog-one__text">Eligibility: Graduate or (Tech.) Diploma with 3+ years Experience</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.mba}>Read More <i className="fa fa-arrow-right"></i></Link>
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
                                    <h3 className="blog-one__title"><a href="#">PG Diploma in Industrial Safety Management</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year</p>
                                    <p className="blog-one__text">Eligibility: Any Graduate or Any Diploma</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.pgism}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src={publicUrl + "assets/images/regular-course/1.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">PG Diploma in Health Safety and Enviornment</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year</p>
                                    <p className="blog-one__text">Eligibility: Any Degree or Any Diploma</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.pghse}>Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src={publicUrl + "assets/images/regular-course/3.jpg"} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__user">
                                    </div>
                                    <h3 className="blog-one__title"><a href="#">PG Diploma in Disaster & Crisis</a></h3>
                                    <p className="blog-one__text">Duration: 1 Year</p>
                                    <p className="blog-one__text">Eligibility: Any Degree or Any Diploma</p>
                                    <div className="blog-one__read-more">
                                        <Link to={InnerPageRoutes.mba}>Read More <i className="fa fa-arrow-right"></i></Link>
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
export default DistanceCourse;
