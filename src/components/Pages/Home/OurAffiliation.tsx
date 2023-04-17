import React from 'react'

function OurAffiliation() {
    return (
        <>

            <section className="trust-company">
                <div className="trust-company-shape-1">
                    <img src="assets/images/others/traust-company-shape-1.png" alt="" />
                </div>
                <div className="trust-company-shape-2"></div>
                <div className="trust-company-shape-3"></div>
                <div className="trust-company-shape-4"></div>
                <div className="trust-company-bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
                    style={{ backgroundImage: `url("assets/images/others/148.jpg")` }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="trust-company__left">
                                <h2 className="trust-company__title">Our Affiliation & Recognition</h2>
                                <p className="affiliation-recognition">
                                    - Authorized training center of RDAT (Regional Director of Apprenticeship Training) Ministry of Labor & Employment
                                </p>
                                <p className="affiliation-recognition">
                                    - CIFSE offers Diploma, Degree & PG Courses approved by UGC, AICTE & Ministry of HRD, Govt. of India
                                </p>
                                <p className="affiliation-recognition">
                                    - CIFSE is Co-ordinate with Technical Education Board (TEB) Govt. of India
                                </p>
                                <p className="affiliation-recognition">
                                    Membership & Associate -<br />
                                    NSC - National Safety Council<br />
                                    - OSHA's - United State of America<br />
                                    - Pioneer Solar - Australia<br />
                                    - IMS<br />
                                    - NEBOSH - United Kingdom
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default OurAffiliation;