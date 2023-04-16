import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../PageHeader'
import Header from '../../../../Header/Header'
import Footer from '../../../../Footer/Footer'
import RegularCourseDetailEight from './DCDetailEight'

function RegularCourseDetailsPage() {
    return (
        <>
            <Header />
            {/* <PageHeader /> */}
            <RegularCourseDetailEight />
            <Footer />
        </>
    )
}
export default RegularCourseDetailsPage