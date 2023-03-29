import React, { useEffect, useState } from 'react'

function BottomFooter() {

    let publicUrl = process.env.PUBLIC_URL + '/'

    useEffect(() => {
        mainMethod();
    }, [])

    const mainMethod = () => {
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/roofsie.js";
        document.body.appendChild(minscript);


        


        
    }

    return (
        <>

            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler"></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <a href="index.html" aria-label="logo image"><img src="assets/images/resources/logo-3.png" width="143"
                            alt="" /></a>
                    </div>
                    <div className="mobile-nav__container"></div>


                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:needhelp@packageName__.com">needhelp@roofsie.com</a>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <a href="tel:666-888-0000">666 888 0000</a>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-facebook-square"></a>
                            <a href="#" className="fab fa-pinterest-p"></a>
                            <a href="#" className="fab fa-instagram"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-popup">
                <div className="search-popup__overlay search-toggler"></div>

                <div className="search-popup__content">
                    <form action="#">
                        <label htmlFor="search" className="sr-only">search here</label>
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="thm-btn">
                            <i className="icon-magnifying-glass"></i>
                        </button>
                    </form>
                </div>

            </div>


            <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></a>
        </>
    )
}
export default BottomFooter;
