import React from 'react'

function Testimonial() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
        <>
            <div className="dental-tourism-review-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-warp">
                                <span className="sub-title"># Our Students Review</span>
                                <h2>Real Review From Our Real Students</h2>
                            </div>
                        </div>
                        {/* <div className="col-lg-4">
                            <div className="section-warp-btn">
                                <a href="testimonials.html" className="default-btn">See All Review</a>
                            </div>
                        </div> */}
                    </div>
                    <div className="dental-tourism-review-slides owl-carousel owl-theme">
                        <div className="dental-tourism-review-card">
                            <div className="review-info">
                                <img src={publicUrl + "assets/images/reviews/1.png"} className="rounded-circle" alt="image" />
                                <h3>Avinash Vala</h3>
                                <span>Fireman (Durga Fire Service)</span>
                            </div>
                            <p>“I got placement in industrial department from this college thanks to all CIFSE management department 🙏🏻✨🙇🏻and also best college in central Gandhinagar.”</p>
                            <ul className="rating">
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                            </ul>
                            <div className="icon-quote">
                                <i className='bx bxs-quote-alt-right'></i>
                            </div>
                        </div>
                        <div className="dental-tourism-review-card">
                            <div className="review-info">
                                <img src={publicUrl + "assets/images/reviews/2.jpg"} className="rounded-circle" alt="image" />
                                <h3>Harshal Vairagade</h3>
                                <span>Assistant Fire Officer (Indian Airforce)</span>
                            </div>
                            <p>Cifse is always supportive to all the candidates life time gives guide to all the candidates anytime and anywhere.
                                I am thankful to cifse for what I am today and what I achieved in my life ..thank you CIFSE FIRE COLLEGE for all your support</p>
                            <ul className="rating">
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                            </ul>
                            <div className="icon-quote">
                                <i className='bx bxs-quote-alt-right'></i>
                            </div>
                        </div>

                        <div className="dental-tourism-review-card">
                            <div className="review-info">
                                <img src={publicUrl + "assets/images/reviews/3.png"} className="rounded-circle" alt="image" />
                                <h3>Sujal Pomal</h3>
                                <span>Fire Officer (Junagadh Municipal Corporation)</span>
                            </div>
                            <p>The certificate CIFSE has been provide that will be useful in government, private sectors and also eligible for internationally.
                                All staff are well educated and responsive behaviour...I suggest this institute for making career in fire and safety engineering”</p>
                            <ul className="rating">
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                            </ul>
                            <div className="icon-quote">
                                <i className='bx bxs-quote-alt-right'></i>
                            </div>
                        </div>
                        <div className="dental-tourism-review-card">
                            <div className="review-info">
                                <img src={publicUrl + "assets/images/reviews/4.png"} className="rounded-circle" alt="image" />
                                <h3>Rutvik Nakum</h3>
                                <span>Fire Supervisor (Adani Port)</span>
                            </div>
                            <p>Good placement facilities CIFSE given and also gives a internship in reputed industries personally I suggest CIFSE FIRE COLLEGE for good career in fire and safety</p>
                            <ul className="rating">
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                            </ul>
                            <div className="icon-quote">
                                <i className='bx bxs-quote-alt-right'></i>
                            </div>
                        </div>
                        <div className="dental-tourism-review-card">
                            <div className="review-info">
                                <img src={publicUrl + "assets/images/reviews/5.png"} className="rounded-circle" alt="image" />
                                <h3>Ajay Vaja</h3>
                                <span>Fire Man (Bhavnagar Municipal Corporation)</span>
                            </div>
                            <p>Best fire and safety college in Gujarat. There are all over India's candidates are pursued the diploma courses and placed by cifse in reputed industries..thank you</p>
                            <ul className="rating">
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                            </ul>
                            <div className="icon-quote">
                                <i className='bx bxs-quote-alt-right'></i>
                            </div>
                        </div>
                        <div className="dental-tourism-review-card">
                            <div className="review-info">
                                <img src={publicUrl + "assets/images/reviews/5.png"} className="rounded-circle" alt="image" />
                                <h3>Ajay Vaja</h3>
                                <span>Fire Man (Bhavnagar Municipal Corporation)</span>
                            </div>
                            <p>Best fire and safety college in Gujarat. There are all over India's candidates are pursued the diploma courses and placed by cifse in reputed industries..thank you</p>
                            <ul className="rating">
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                                <li><i className='bx bxs-star'></i></li>
                            </ul>
                            <div className="icon-quote">
                                <i className='bx bxs-quote-alt-right'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Testimonial;