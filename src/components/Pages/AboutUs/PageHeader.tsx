import React from 'react'
import { Link } from 'react-router-dom'

function PageHeader() {
    return (
        <>
            <div className="page-banner-area">
                <div className="container">
                    <div className="page-banner-content">
                        <h2>About Us</h2>
                        <ul className="pages-list">
                            <li><a href="index.html">Home</a></li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageHeader