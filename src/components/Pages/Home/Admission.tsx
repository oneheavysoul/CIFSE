import React from 'react'

function Admission() {
    return (
        <>

            {/* CTA One Start */}
            <section className="cta-one mt-5">
                <div className="cta-one__img-box">
                    <div className="cta-one__img">
                        <img src="assets/images/others/trust-company-bg.jpg" alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="cta-one__inner">
                        <div className="cta-one__left">
                            <p className="cta-one__sub-title">Want to take admission?</p>
                            <h3 className="cta-one__title"><a href="tel:+91 94514 42632">+91 94514 42632</a></h3>
                        </div>
                        <div className="cta-one__btn-box">
                            <a href="#" className="thm-btn cta-one__btn"> <i className="fa fa-arrow-right"></i>Application Form </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA One End */}

        </>
    )
}
export default Admission;