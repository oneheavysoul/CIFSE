import React, { useEffect, useState } from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import PageHeader from '../../Header/Header';
import { Link } from 'react-router-dom';
import { InnerPageRoutes } from '../../../constants/routes';
import studentData from './stud';

const ResultPage = () => {
    const [enrollmentNo, setEnrollmentNo] = useState("");
    const [result, setResult] = useState<any>({});

    let publicUrl = process.env.PUBLIC_URL + "/";

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, [])

    const handleResult = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const enroll = enrollmentNo.replace(/\s/g, '')

        const objectData: any = studentData.find(i => i.enrollment_no === enroll)
        setResult(objectData);
    }


    return (
        <>
            {/* Blog Page Start */}
            <section className="blog-page">
                <div className="container">
                    <div className="modal-body mb-5">
                        <form className="modal-search-form" onSubmit={(e) => handleResult(e)}>
                            <input
                                type="search" className="search-field"
                                placeholder="Enter Enrollment No..."
                                value={enrollmentNo}
                                onChange={(e) => setEnrollmentNo(e.target.value)}
                            />
                            {/* <button type="submit"><i className='bx bx-search-alt'></i></button> */}
                        </form>
                        {!result && enrollmentNo != "" ? <small className="text-danger font-weight-bold">Invalid Enrollment Number</small> : ""}
                    </div>

                    {result?.id &&
                        <div className='col-lg-12'>
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Student Name : {result.name}</th>
                                </tr>
                                <tr>
                                    <th scope="col">Enrollment : {result.enrollment_no}</th>
                                </tr>
                                <tr>
                                    <th scope="col">Batch : {result.batch}</th>
                                </tr>
                                <tr>
                                    <th scope="col">Course Name : {result.course}</th>
                                </tr>
                            </thead>

                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Sr No</th>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Total Marks</th>
                                        <th scope="col">Obtained Marks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result && result.subjects?.map((data: any, index: number) => {
                                        return (
                                            <tr>
                                                <td scope="row">{index + 1}</td>
                                                <td>{data?.name}</td>
                                                <td>100</td>
                                                <td>{data?.marks}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </section >
            {/* Blog Page End */}
        </>
    )
}
export default ResultPage;
