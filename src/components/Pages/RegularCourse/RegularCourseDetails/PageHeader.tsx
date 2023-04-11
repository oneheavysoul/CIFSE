import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../constants/routes'

function PageHeader() {
    return (
        <>
            <div className="page-banner-area">
                <div className="container">
                    <div className="page-banner-content">
                        <h2>Regular Course Details</h2>
                        <ul className="pages-list">
                            <li><a href="#">Home</a></li>
                            <li><Link to={ROUTES.RegularCourse}>Regular Course</Link></li>
                            <li>Regular Course Details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageHeader
