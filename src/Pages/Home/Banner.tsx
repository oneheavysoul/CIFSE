import React from 'react'
import Header from '../Header/Header';

function Banner() {
    return (
        <>
            <div className="stricky-header stricked-menu main-menu main-menu-two">
                <div className="sticky-header__content"></div>
            </div>
            <section className="main-slider-two clearfix">
                <div className="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 1, "loop": true,
                "effect": "fade",
                "pagination": {
                "el": "#main-slider-pagination",
                "type": "bullets",
                "clickable": true
                },
                "navigation": {
                "nextEl": "#main-slider__swiper-button-next",
                "prevEl": "#main-slider__swiper-button-prev"
                },
                "autoplay": {
                "delay": 5000
                }}'>
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                            <div className="image-layer-two" style={{}}></div>


                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="main-slider-two__content">
                                            <div className="main-slider-two__icon">
                                                <img src="assets/images/icon/main-slider-arrow.png" alt="" />
                                            </div>
                                            <h2 className="main-slider-two__title">Quality Roof <br /> Installation Services</h2>
                                            <div className="main-slider-two__btn-box">
                                                <a href="about.html" className="thm-btn main-slider-two__btn"> <i
                                                    className="fa fa-arrow-right"></i> Discover more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="image-layer-two" style={{}}></div>


                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="main-slider-two__content">
                                            <div className="main-slider-two__icon">
                                                <img src="assets/images/icon/main-slider-arrow.png" alt="" />
                                            </div>
                                            <h2 className="main-slider-two__title">Quality Roof <br /> Installation Services</h2>
                                            <div className="main-slider-two__btn-box">
                                                <a href="about.html" className="thm-btn main-slider-two__btn"> <i
                                                    className="fa fa-arrow-right"></i> Discover more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="image-layer-two" style={{}}></div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="main-slider-two__content">
                                            <div className="main-slider-two__icon">
                                                <img src="assets/images/icon/main-slider-arrow.png" alt="" />
                                            </div>
                                            <h2 className="main-slider-two__title">Quality Roof <br /> Installation Services</h2>
                                            <div className="main-slider-two__btn-box">
                                                <a href="about.html" className="thm-btn main-slider-two__btn"> <i
                                                    className="fa fa-arrow-right"></i> Discover more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="main-slider-two__nav">
                        <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                            <i className="icon-left-arrow"></i>
                        </div>
                        <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                            <i className="icon-right-arrow"></i>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Banner;