import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../PageHeader'
import Header from '../../../../Header/Header'
import Footer from '../../../../Footer/Footer'

function RegularCourseDetailOne() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, [])
    return (
        <>
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src={publicUrl + "assets/images/regular-course/1.jpg"} alt="image" />

                                </div>
                                <div className="article-content">
                                    <h3>Advance Diploma in Industrial Safety Engineering<br /></h3><h6>(CHRED Govt. Of India)</h6>
                                    <p>You can join <b>Correspondence Diploma Courses</b> in <b>Advance Diploma in Industrial Safety Engineering,</b>
                                        Exam will be held on July or Dec every year, you can pursue
                                        1 year diploma, just you have to send Demand Draft infavour of
                                        <b>CENTRAL INSTITUTE OF FIRE AND SAFETY ENGINEERING</b> Payable at
                                        <b>GANGHINAGAR</b> of amount <b>Rs 10,500</b> course fee. As soon as we received your
                                        <b>Demand Draft</b> and <b>Application Form</b> we will send you <b>Study Material</b> at your
                                        given address.
                                    </p>
                                    <p>Management courses that we offer are highly compatible with <b>International
                                        Standards.</b> It has been our constant endeavour to provide the best possible
                                        Study Material for the students.</p>
                                    {/* <blockquote className="wp-block-quote">
                                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                                            auctor, nisi elit consequat ipsum. Proin gravida nibh vel velit auctor aliquet.
                                            Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                    </blockquote> */}
                                    <p>The International curriculam added in our syllabus are an effort to make this possible. We want our students
                                        to excel in what they are doing; creating a <b>Safety Engineer / HSE officer / Safety officer</b> is not the aim for us, its making a Engineer who
                                        can really take its organization on a high with Zero Accident policy.</p>

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <aside className="widget-area">
                                <div className="widget widget_grin_posts_thumb">
                                    <h3 className="widget-title">Another Regular Courses</h3>
                                    <article className="item">
                                        <a href="#" className="thumb">
                                            <span className="fullimage cover bg1" role="img"></span>
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                <a href="blog-details.html">Advance Diploma in Occupational Safety, Health and Environment Management Programs</a>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            <span className="fullimage cover bg2" role="img"></span>
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                <a href="blog-details.html">Advance Diploma in Fire And Industrial Safety Engineering</a>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            <span className="fullimage cover bg3" role="img"></span>
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                <a href="blog-details.html">Diploma in Fire and Industrial Safety Engineering</a>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            <span className="fullimage cover bg4" role="img"></span>
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                <a href="blog-details.html">Diploma in Disaster Management</a>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            <span className="fullimage cover bg5" role="img"></span>
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                <a href="blog-details.html">Diploma in Health, Safety and Environment Management</a>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            <span className="fullimage cover bg6" role="img"></span>
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                <a href="blog-details.html">Diploma in Fire and Safety Management</a>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            <span className="fullimage cover bg7" role="img"></span>
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                <a href="blog-details.html">PG Diploma in Fire and Safety Management</a>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            <span className="fullimage cover bg8" role="img"></span>
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                <a href="blog-details.html">Diploma in Industrial Safety Management</a>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            <span className="fullimage cover bg9" role="img"></span>
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                <a href="blog-details.html">MBA Safety and Fire Management Programs</a>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            <span className="fullimage cover bg10" role="img"></span>
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                <a href="blog-details.html">PG Diploma in Industrial Safety Management</a>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            <span className="fullimage cover bg11" role="img"></span>
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                <a href="blog-details.html">PG Diploma in Health Safety and Enviornment</a>
                                            </h4>
                                        </div>
                                    </article>
                                </div>
                            </aside>
                        </div>
                        <div className='col-lg-12'>
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default RegularCourseDetailOne