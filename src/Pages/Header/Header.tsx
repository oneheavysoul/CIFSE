import React from 'react'

function Header() {
    return (
        <>

            <header className="main-header-two clearfix">
                <div className="main-header-two__top">
                    <div className="container">
                        <div className="main-header-two__top-inner">
                            <div className="main-header-two__top-left">
                                <p className="main-header-two__top-left-text">We provide complete home renovation services. </p>
                            </div>
                            <div className="main-header-two__top-right">
                                <div className="main-header-two__top-social">
                                    <a href="#"><i className="fab fa-facebook-square"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-header-two__middle">
                    <div className="container">
                        <div className="main-header-two__middle-inner clearfix">
                            <div className="main-header-two__shape-1"></div>
                            <div className="main-header-two__shape-2"></div>
                            <div className="main-header-two__shape-3"></div>
                            <div className="main-header-two__shape-4"></div>
                            <div className="main-header-two__shape-5"></div>
                            <div className="main-header-two__shape-6"></div>
                            <div className="main-header-two__shape-7"></div>
                            <div className="main-header-two__logo">
                                <a href="index.html"><img src="assets/images/resources/logo-2.png" alt="" /></a>
                            </div>
                            <div className="main-header-two__address">
                                <ul className="list-unstyled main-header-two__address-list">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-phone-call"></span>
                                        </div>
                                        <div className="content">
                                            <p>Call Anytime</p>
                                            <h5><a href="tel:9200368090">+9737917867</a></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-message"></span>
                                        </div>
                                        <div className="content">
                                            <p>Send Email</p>
                                            <h5><a href="mailto:needhelp@company.com">chintanpatel1624@gmail.com</a></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location"></span>
                                        </div>
                                        <div className="content">
                                            <p>380 St Kilda Road</p>
                                            <h5>Melbourne, Australia</h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-menu main-menu-two clearfix">
                    <div className="main-menu-two__wrapper clearfix">
                        <div className="container">
                            <div className="main-menu-two__wrapper-inner clearfix">
                                <div className="main-menu-two__wrapper-inner-bg"></div>
                                <div className="main-menu-two__left">
                                    <div className="main-menu-two__main-menu-box">
                                        <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                                        <ul className="main-menu__list">
                                            <li className="dropdown current megamenu">
                                                <a href="#">Home </a>
                                            </li>
                                            <li>
                                                <a href="#">About</a>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Services</a>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Pages</a>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Works </a>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Blog</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="main-menu-two__right">
                                    <div className="main-menu-two__search-box">
                                        <a href="#" className="main-menu-two__search search-toggler icon-magnifying-glass"></a>
                                    </div>
                                    <div className="main-menu-two__btn-box">
                                        <a href="#" className="thm-btn main-menu-two__btn"> <i
                                            className="fa fa-arrow-right"></i> Free estimate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;
