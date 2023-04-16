import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../PageHeader'
import Header from '../../../../Header/Header'
import Footer from '../../../../Footer/Footer'
import RegularCourseDetailEleven from './DCDetailEleven'

function RegularCourseDetailsPage() {
    return (
        <>
            <Header />
            {/* <PageHeader /> */}
            <RegularCourseDetailEleven />
            <Footer />
        </>
    )
}
export default RegularCourseDetailsPage