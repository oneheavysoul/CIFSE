import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../../Header/Header'
import Footer from '../../../../Footer/Footer'
import { InnerPageRoutes } from '../../../../../constants/routes';

function RegularCourseDetailOne() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, [])
    return (
        <>
            <Header />
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src={publicUrl + "assets/images/regular-course/6.jpg"} alt="image" />

                                </div>
                                <div className="article-content">
                                    <h3>P.G. Diploma in Fire and Safety</h3>
                                    <p>Join <b>Regular Diploma Courses</b> in <b>P.G. Diploma in Fire and
                                        Safety,</b> Exam will be held on July or Dec every year, you can pursue
                                        3 year course, Come to the campus for a guided tour & counselling and then
                                        apply <b>GANGHINAGAR,</b> Contact us on mobile (9am to 9pm) <b>0777799414</b> or
                                        Send us an email – <b>cifsevrl101@gmail.com</b>
                                    </p>
                                    <p>Engineering courses that we offer are highly compatible with <b>International
                                        Standards.</b> It has been our constant endeavour to provide the best possible
                                        Study Material for the students.</p>
                                    {/* <blockquote className="wp-block-quote">
                                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                                            auctor, nisi elit consequat ipsum. Proin gravida nibh vel velit auctor aliquet.
                                            Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                    </blockquote> */}
                                    <p>The Government curriculam added in our syllabus are an effort to make this possible. We want our students
                                        to excel in what they are doing; creating a <b>Safety Engineer / HSE officer / Safety officer</b> is not the aim for us, its making a Engineer who
                                        can really take its organization on a high with Zero Accident work.
                                    </p>
                                    <div className='col-lg-12'>
                                        <table className="table">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Syllabus</th>
                                                    <th scope="col">Eligibility Criteria</th>
                                                    <th scope="col">Exam Schedule</th>
                                                    <th scope="col">Duration</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Fundamental Of Fire Engineering</td>
                                                    <td>Any Degree or Any Diploma</td>
                                                    <td>Examination will be taken on JULY or DEC<br />(You will be able to attain anyone of given schedule)</td>
                                                    <td>1 Year</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Fire Prevention & Protection</td>
                                                    <td> </td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Industrial Safety Management</td>
                                                    <td> </td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Industrial Safety Management</td>
                                                    <td> </td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td>Fire Detection & Communication System</td>
                                                    <td> </td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">6</th>
                                                    <td>Equipment And Appliances</td>
                                                    <td> </td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">7</th>
                                                    <td>Occupational Health And Industrial Hygiene</td>
                                                    <td> </td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">8</th>
                                                    <td>First Aid</td>
                                                    <td> </td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <aside className="widget-area">
                                <div className="widget widget_grin_posts_thumb">
                                    <h3 className="widget-title">Another Regular Courses</h3>
                                    <article className="item">
                                        <a href="#" className="thumb">
                                            {/* <span className="fullimage cover bg1" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/10.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Diploma in Fire Service Engineering</a> */}
                                                <Link to={InnerPageRoutes.diplomaFireService}>B.Sc. in Fire, Safety and Hazard Management</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="#" className="thumb">
                                            {/* <span className="fullimage cover bg1" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/11.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Diploma in Fire Service Engineering</a> */}
                                                <Link to={InnerPageRoutes.diplomaFireService}>Diploma in Fire Service Engineering</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg2" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/12.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Advance Diploma in Industrial Safety</a> */}
                                                <Link to={InnerPageRoutes.adis12th}>Advance Diploma in Industrial Safety</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg3" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/1.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Diploma in Fire and Safety Engineering</a> */}
                                                <Link to={InnerPageRoutes.dfse}>Diploma in Fire and Safety Engineering</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg4" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/2.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Advance Diploma in Industrial Safety & Security Management</a> */}
                                                <Link to={InnerPageRoutes.pgdFiresafety}>Advance Diploma in Industrial Safety & Security Management</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg5" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/3.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Certificate in Fire and Safety Engineering</a> */}
                                                <Link to={InnerPageRoutes.cfse}>Certificate in Fire and Safety Engineering</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg6" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/4.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">MBA in Fire Safety Management</a> */}
                                                <Link to={InnerPageRoutes.mbaFireSafety}>MBA in Fire Safety Management</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg7" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/5.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Fire Officer Course</a> */}
                                                <Link to={InnerPageRoutes.foc}>Fire Officer Course</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg9" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/7.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">MBA in Industrial Safety Management</a> */}
                                                <Link to={InnerPageRoutes.mbaIndustrialSafety}>MBA in Industrial Safety Management</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg10" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/8.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">P.G. Diploma in Industrial Safety</a> */}
                                                <Link to={InnerPageRoutes.pgdIndustrialSafety}>P.G. Diploma in Industrial Safety</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg11" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/9.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Safety Officer Course</a> */}
                                                <Link to={InnerPageRoutes.soc}>Safety Officer Course</Link>
                                            </h4>
                                        </div>
                                    </article>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default RegularCourseDetailOne