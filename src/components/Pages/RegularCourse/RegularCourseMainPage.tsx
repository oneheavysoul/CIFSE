import React from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import PageHeader from './PageHeader';
import RegularCourse from './RegularCourse';


function RegularCourseP() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <PageHeader />
                <RegularCourse />
                <Footer />
            </div>
        </>
    )
}
export default RegularCourseP;
