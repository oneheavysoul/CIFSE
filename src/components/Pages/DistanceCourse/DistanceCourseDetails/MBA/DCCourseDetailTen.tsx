import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../PageHeader'
import Header from '../../../../Header/Header'
import Footer from '../../../../Footer/Footer'
import { InnerPageRoutes } from '../../../../../constants/routes'

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
                                    <img src={publicUrl + "assets/images/regular-course/7.jpg"} alt="image" />

                                </div>
                                <div className="article-content">
                                    <h3>MBA Safety and Fire Management Programs<br /></h3><h6>(CHRED Govt. Of India)</h6>

                                    <p>
                                        The Master's Program in <b>Business Administration (Safety Management) </b>
                                        Or <b>(Fire Safety management)</b> of the <b>CIFSE</b> is to equip
                                        practicing Executives and Managers, working in Private / Public Sector
                                        Undertakings / Banks/ Educational Institutions. Industries and other similar
                                        organizations so as to enable them to enrich their managerial skills,
                                        decisionmaking, and to enhance their problem solving ability, through case
                                        studies, lectures, role-plays and business games with special focus on Fire and
                                        Safety Management.
                                    </p>
                                    <p>You can join <b>Correspondence Diploma Courses</b> in <b> MBA Safety and Fire Management Programs,
                                    </b> Exam will be held on July or Dec every year, you can pursue
                                        1 year diploma, just you have to send Demand Draft infavour of
                                        <b> CENTRAL INSTITUTE OF FIRE AND SAFETY ENGINEERING</b> Payable at
                                        <b> Gandhinagar</b> of amount <b>Rs. 20,500</b> per semester. As soon as we received your
                                        <b> Demand Draft</b> and <b>Application Form</b> we will send you <b>Study Material</b> at your
                                        given address.
                                    </p>
                                    <p>Management courses that we offer are highly compatible with <b>International
                                        Standards.</b> It has been our constant endeavour to provide the best possible
                                        Study Material for the students.</p>

                                    <p>The International curriculam added in our syllabus are an effort to make this possible. We want our students
                                        to excel in what they are doing; creating a <b>Safety Engineer / HSE officer / Safety officer</b> is not the aim for us, its making a Engineer who
                                        can really take its organization on a high with Zero Accident policy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <aside className="widget-area">
                                <div className="widget widget_grin_posts_thumb">
                                    <h3 className="widget-title">Another Distance Courses</h3>
                                    <article className="item">
                                        <a href="#" className="thumb">
                                            {/* <span className="fullimage cover bg1" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/12.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Diploma in Fire Service Engineering</a> */}
                                                <Link to={InnerPageRoutes.adiehs}>Advance Diploma in Occupational Safety, Health and Environment Management Programs</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg2" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/11.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Advance Diploma in Industrial Safety</a> */}
                                                <Link to={InnerPageRoutes.adfies}>Advance Diploma in Fire And Industrial Safety Engineering</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg2" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/10.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Advance Diploma in Industrial Safety</a> */}
                                                <Link to={InnerPageRoutes.dfsim}>Diploma in Fire and Industrial Safety Engineering</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg3" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/9.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Diploma in Fire and Safety Engineering</a> */}
                                                <Link to={InnerPageRoutes.adies}>Advance Diploma in Industrial Safety Engineering</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg4" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/8.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Advance Diploma in Industrial Safety & Security Management</a> */}
                                                <Link to={InnerPageRoutes.ddm}>Diploma in Disaster Management</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg5" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/7.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Certificate in Fire and Safety Engineering</a> */}
                                                <Link to={InnerPageRoutes.dhsem}>Diploma in Health, Safety and Environment Management</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg6" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/6.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">MBA in Fire Safety Management</a> */}
                                                <Link to={InnerPageRoutes.dfsm}>Diploma in Fire and Safety Management</Link>
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
                                                <Link to={InnerPageRoutes.pgfsm}>PG Diploma in Fire and Safety Management</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg8" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/4.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Diploma in Fire and Safety</a> */}
                                                <Link to={InnerPageRoutes.dism}>Diploma in Industrial Safety Management</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg10" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/2.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">P.G. Diploma in Industrial Safety</a> */}
                                                <Link to={InnerPageRoutes.pgism}>PG Diploma in Industrial Safety Management</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg11" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/1.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Safety Officer Course</a> */}
                                                <Link to={InnerPageRoutes.pghse}>PG Diploma in Health Safety and Enviornment</Link>
                                            </h4>
                                        </div>
                                    </article>
                                    <article className="item">
                                        <a href="blog-details.html" className="thumb">
                                            {/* <span className="fullimage cover bg11" role="img"></span> */}
                                            <img className="fullimage cover bg1" src={publicUrl + "assets/images/regular-course/1.jpg"} alt="image" />
                                        </a>
                                        <div className="info">
                                            <h4 className="title usmall">
                                                {/* <a href="blog-details.html">Safety Officer Course</a> */}
                                                <Link to={InnerPageRoutes.phdms}>PG Diploma in Disaster & Crisis</Link>
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
                                        <th scope="col">Sr No</th>
                                        <th scope="col">Syllabus (2 Years)</th>
                                        <th scope="col">Eligibility Criteria</th>
                                        <th scope="col">Elective Subject</th>
                                        <th scope="col">Total Fees</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td><b>SEM - I</b>
                                            <br />• Management Principles & Practices
                                            <br />• Fire Service Organization
                                            <br />• Fundamental Of Safety
                                            <br />• Fire Engineering Science
                                        </td>
                                        <td>Graduate or (Tech.) Diploma with 3+ years Experience</td>
                                        <td> • Safety In Chemical Industry
                                            <br />• Safety In Textile Industry
                                            <br />• Safety In Electrical Industry
                                            <br />• Safety At DockYard
                                            <br />• Special Fire Hazards
                                            <br />• Safety At Constructions
                                        </td>
                                        <td><b>Rs. 20,500</b>/ semester<br />(including study material and exam fees)</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td><b>SEM - II</b>
                                            <br />• Business Communication
                                            <br />• Human Resource Development
                                            <br />• Special Fire Hazards
                                            <br />• Communication And Detection System
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td><b>SEM - III</b>
                                            <br />• Equipment And Appliance
                                            <br />• Safety Acts And Law
                                            <br />• Work Permit System
                                            <br />• Risk Assessment
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td><b>SEM - IV</b>
                                            <br />• Storage And Handling Of Hazardous Substances
                                            <br />• Safety Audit
                                            <br />• Project Study OR
                                            <br />• Elective I, Elective -II
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default RegularCourseDetailOne