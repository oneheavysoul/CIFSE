import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../PageHeader'
import Header from '../../../../Header/Header'
import Footer from '../../../../Footer/Footer'
import RegularCourseDetailTen from './DCCourseDetailTen'

function RegularCourseDetailsPage() {
    return (
        <>
            <Header />
            {/* <PageHeader /> */}
            <RegularCourseDetailTen />
            <Footer />
        </>
    )
}
export default RegularCourseDetailsPage