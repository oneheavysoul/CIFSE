import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../PageHeader'
import Header from '../../../../Header/Header'
import Footer from '../../../../Footer/Footer'
import RegularCourseDetailFive from './DCDetailFive'

function RegularCourseDetailsPage() {
    return (
        <>
            <Header />
            {/* <PageHeader /> */}
            <RegularCourseDetailFive />
            <Footer />
        </>
    )
}
export default RegularCourseDetailsPage