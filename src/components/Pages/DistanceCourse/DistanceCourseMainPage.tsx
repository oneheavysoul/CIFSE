import React from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import PageHeader from './PageHeader';
import DistanceCourse from './DistanceCourse';


function DistanceCourseP() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <PageHeader />
                <DistanceCourse />
                <Footer />
            </div>
        </>
    )
}
export default DistanceCourseP;
