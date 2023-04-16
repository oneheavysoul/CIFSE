import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../PageHeader'
import Header from '../../../../Header/Header'
import Footer from '../../../../Footer/Footer'
import RegularCourseDetailTweleve from '../SafetyOfficerCourse/RegularCourseDetailTweleve'

function RegularCourseDetailsPage() {
    return (
        <>
            <Header />
            {/* <PageHeader /> */}
            <RegularCourseDetailTweleve />
            <Footer />
        </>
    )
}
export default RegularCourseDetailsPage