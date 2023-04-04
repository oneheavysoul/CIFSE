import React from 'react'
import { Link } from 'react-router-dom'

function PageHeader() {
    return (
        <>
            <div className="page-banner-area">
                <div className="container">
                    <div className="page-banner-content">
                        <h2>Contact Us</h2>
                        <ul className="pages-list">
                            <li><a href="index.html">Home</a></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageHeader
