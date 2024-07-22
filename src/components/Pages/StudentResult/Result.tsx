import React from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import PageHeader from './PageHeader';
import ResultPage from './ResultPage';

function Result() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <PageHeader />
                <ResultPage />
                <Footer />
            </div>
        </>
    )
}
export default Result;