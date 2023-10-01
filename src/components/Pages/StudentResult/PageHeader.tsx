import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../constants/routes'

function PageHeader() {
    return (
        <>
            <div className="page-banner-area">
                <div className="container">
                    <div className="page-banner-content">
                        <h2>Student Result</h2>
                        <ul className="pages-list mb-5">
                            <li><Link to={ROUTES.home} className="nav-link">Home</Link></li>
                            <li>Student Result</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageHeader