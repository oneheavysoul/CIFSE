import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../PageHeader'
import Header from '../../../../Header/Header'
import Footer from '../../../../Footer/Footer'
import RegularCourseDetailThree from '../ADIS12th/RegularCourseDetailThree'

function RegularCourseDetailsPage() {
    return (
        <>
            <Header />
            {/* <PageHeader /> */}
            <RegularCourseDetailThree />
            <Footer />
        </>
    )
}
export default RegularCourseDetailsPage