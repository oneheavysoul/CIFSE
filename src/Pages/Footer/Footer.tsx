import React, { useEffect, useState } from 'react'

function Footer() {
    let publicUrl = process.env.PUBLIC_URL + '/'

    useEffect(() => {
        mainMethod();
    }, [])

    const mainMethod = () => {
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";
        document.body.appendChild(minscript);

    }

    return (
        <>

            <footer className="footer-area pt-100 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <h2>
                                    <img src="assets/images/logo.png" className="main-logo" alt="logo" />
                                </h2>
                                <p>Central Institute of Fire & Safety Engineering has been founded to produce skilled and trained professionals in the field of engineering and safety.</p>

                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Useful Link</h3>
                                <ul className="quick-links">
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms Of Use</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contact Information</h3>
                                <ul className="footer-information">
                                    <li>
                                        <i className="fa fa-phone-square"></i>
                                        <span><a href="tel:+91 94514 42632">+91 94514 42632</a></span>
                                        <span><a href="tel:+91 73101 76777">+91 73101 76777</a></span>
                                    </li><br/>
                                    <li>
                                        <i className="fa fa-envelope"></i>
                                        <span><a href="mailto:info@cifseindia.org"> info@cifseindia.org</a></span>
                                    </li>
                                    <li>
                                        <i className="fa fa-map-marker"></i>
                                        <span>Cisfe College Sector 25, GIDC, Plot No 26, Opp. Madur Dairy, Raj Shikshan Sankul, Gandhinagar, Gujarat</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-area-content">
                        <p>
                            © Grin is proudly created by 
                            <a href="#" target="_blank">
                                 Creactive Design Info
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;
