import React from 'react'
import { Link } from 'react-router-dom'

function PageHeader() {
    return (
        <>
            <div className="page-banner-area">
                <div className="container">
                    <div className="page-banner-content">
                        <h2>Distance Course</h2>
                        <ul className="pages-list">
                            <li><a href="#">Home</a></li>
                            <li>DistanceCourse</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageHeader
