import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../PageHeader'
import Header from '../../../../Header/Header'
import Footer from '../../../../Footer/Footer'
import RegularCourseDetailFour from './DCDetailFour'

function RegularCourseDetailsPage() {
    return (
        <>
            <Header />
            {/* <PageHeader /> */}
            <RegularCourseDetailFour />
            <Footer />
        </>
    )
}
export default RegularCourseDetailsPage