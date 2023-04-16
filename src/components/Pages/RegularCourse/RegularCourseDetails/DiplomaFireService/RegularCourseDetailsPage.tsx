import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../PageHeader'
import Header from '../../../../Header/Header'
import Footer from '../../../../Footer/Footer'
import RegularCourseDetailTwo from '../DiplomaFireService/RegularCourseDetailTwo'

function RegularCourseDetailsPage() {
    return (
        <>
            <Header />
            {/* <PageHeader /> */}
            <RegularCourseDetailTwo />
            <Footer />
        </>
    )
}
export default RegularCourseDetailsPage