import React from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import PageHeader from './PageHeader';
import GalleryPage from './GalleryPage';



function Gallery() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <PageHeader />
                <GalleryPage />
                <Footer />
            </div>
        </>
    )
}
export default Gallery;