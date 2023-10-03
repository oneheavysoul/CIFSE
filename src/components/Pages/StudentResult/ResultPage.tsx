import React, { useEffect, useState } from 'react'
import studentData from './stud';

const ResultPage = () => {
    const [enrollmentNo, setEnrollmentNo] = useState("");
    const [result, setResult] = useState<any>({});
    const [totalObtained, setTotalObtained] = useState(0);
    const [totalMarks, setTotalMarks] = useState(0);

    let publicUrl = process.env.PUBLIC_URL + "/";

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, [])

    const handleResult = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const enroll = enrollmentNo.replace(/\s/g, '')

        const objectData: any = studentData.find(i => i.enrollment_no === enroll)
        console.log(objectData.subjects)
        const sum = objectData.subjects.reduce(function (a: any, b: any) { return a + b; }, 0);

        var result = objectData.subjects.reduce(function (tot: any, arr: any) {
            // return the sum with previous value
            return tot + arr.marks;
            // set initial value as 0
        }, 0);
        var resultTotal = objectData.subjects.length * 100;
        setTotalMarks(resultTotal)
        setTotalObtained(result)
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
                                    <tr>
                                        <td style={{ borderBottomWidth: '0px' }}></td>
                                        <td style={{ borderBottomWidth: '0px' }}></td>
                                        <td style={{ borderRightWidth: '1px', borderRightColor: '#D3D3D3', borderLeftWidth: '1px', borderLeftColor: '#D3D3D3' }}><b>Total Marks Obtained:</b></td>
                                        <td style={{ borderRightWidth: '1px', borderRightColor: '#D3D3D3', borderLeftWidth: '1px', borderLeftColor: '#D3D3D3' }}><b>{totalObtained} / {totalMarks}</b></td>
                                    </tr>
                                    <tr>
                                        <td style={{ borderBottomWidth: '0px' }}></td>
                                        <td style={{ borderBottomWidth: '0px' }}></td>
                                        <td style={{ borderRightWidth: '1px', borderRightColor: '#D3D3D3', borderLeftWidth: '1px', borderLeftColor: '#D3D3D3' }}><b>Total Percentage: </b></td>
                                        <td style={{ borderRightWidth: '1px', borderRightColor: '#D3D3D3', borderLeftWidth: '1px', borderLeftColor: '#D3D3D3' }}><b>{((100 * totalObtained) / totalMarks).toFixed(2)} %</b></td>
                                    </tr>
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
