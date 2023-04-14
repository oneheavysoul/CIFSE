import React from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import PageHeader from './PageHeader';



function GalleryPage() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
        <>
            {/* Gallery Page Start */}
            <section className="gallery-page">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="gallery-page__single">
                                <div className="gallery-page__img">
                                    <img src={publicUrl + "assets/images/others/133.jpg"} alt="" />
                                    <div className="gallery-page__icon">
                                        <a className="img-popup" href="assets/images/others/133.jpg"><span
                                            className="fas fa-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="gallery-page__single">
                                <div className="gallery-page__img">
                                    <img src={publicUrl + "assets/images/others/133.jpg"} alt="" />
                                    <div className="gallery-page__icon">
                                        <a className="img-popup" href="assets/images/others/133.jpg"><span
                                            className="fas fa-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="gallery-page__single">
                                <div className="gallery-page__img">
                                    <img src={publicUrl + "assets/images/others/133.jpg"} alt="" />
                                    <div className="gallery-page__icon">
                                        <a className="img-popup" href="assets/images/others/133.jpg"><span
                                            className="fas fa-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="gallery-page__single">
                                <div className="gallery-page__img">
                                    <img src={publicUrl + "assets/images/others/133.jpg"} alt="" />
                                    <div className="gallery-page__icon">
                                        <a className="img-popup" href="assets/images/others/133.jpg"><span
                                            className="fas fa-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                            <div className="gallery-page__single">
                                <div className="gallery-page__img">
                                    <img src={publicUrl + "assets/images/others/133.jpg"} alt="" />
                                    <div className="gallery-page__icon">
                                        <a className="img-popup" href="assets/images/others/133.jpg"><span
                                            className="fas fa-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="gallery-page__single">
                                <div className="gallery-page__img">
                                    <img src={publicUrl + "assets/images/others/133.jpg"} alt="" />
                                    <div className="gallery-page__icon">
                                        <a className="img-popup" href="assets/images/others/133.jpg"><span
                                            className="fas fa-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* <section className="gallery_sec">
                <div className="container">
                    <div className="heading">
                        <h2>Gallery Fancybox</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <a href="https://i.ibb.co/dmT6NHh/fisherman-gc9495bcda-1280.jpg" data-fancybox="gallery">
                                <img src="https://i.ibb.co/dmT6NHh/fisherman-gc9495bcda-1280.jpg" />
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <a href="https://i.ibb.co/v4mB4vW/forest-gb17435f3a-1280.jpg" data-fancybox="gallery">
                                <img src="https://i.ibb.co/v4mB4vW/forest-gb17435f3a-1280.jpg" />
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <a href="https://i.ibb.co/mScz9ws/mountains-g03e6940eb-1280.jpg" data-fancybox="gallery">
                                <img src="https://i.ibb.co/mScz9ws/mountains-g03e6940eb-1280.jpg" />
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <a href="https://i.ibb.co/VDGc2gx/poppies-gb4b7e7414-1280.jpg" data-fancybox="gallery">
                                <img src="https://i.ibb.co/VDGc2gx/poppies-gb4b7e7414-1280.jpg" />
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <a href="https://i.ibb.co/x5zRCJh/sea-g4e822bc19-1280.jpg" data-fancybox="gallery">
                                <img src="https://i.ibb.co/x5zRCJh/sea-g4e822bc19-1280.jpg" />
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <a href="https://i.ibb.co/VQ671Z3/tree-g0dee97f99-1280.jpg" data-fancybox="gallery">
                                <img src="https://i.ibb.co/VQ671Z3/tree-g0dee97f99-1280.jpg" />
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <a href="https://i.ibb.co/g9c5bwX/mountains-g2fe623725-1280.jpg" data-fancybox="gallery">
                                <img src="https://i.ibb.co/g9c5bwX/mountains-g2fe623725-1280.jpg" />
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <a href="https://i.ibb.co/QC6pm8b/IMG-20221217-121056.jpg" data-fancybox="gallery">
                                <img src="https://i.ibb.co/QC6pm8b/IMG-20221217-121056.jpg" />
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Gallery Page End */}
        </>
    )
}
export default GalleryPage;