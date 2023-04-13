import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from './PageHeader'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import RegularCourseDetailOne from './BscFire/RegularCourseDetailOne'

function RegularCourseDetailsPage() {
    return (
        <>
            <Header />
            <PageHeader />
            <RegularCourseDetailOne />
            <Footer />
        </>
    )
}
export default RegularCourseDetailsPage