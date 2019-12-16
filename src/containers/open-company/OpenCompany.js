import React from 'react';
import './OpenCompany.css';
import tableData from '../../assets/data/tableData.json';
import { Link } from 'react-router-dom';

export default class OpenCompany extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Sr. No.</th>
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Company Id/Code</th>
                                    <th scope="col">Company Creation Date</th>
                                    <th scope="col">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableData.map((tableDetails) => {
                                        console.log(tableDetails)
                                        return (
                                            <tr key={tableDetails.companyId}>
                                                <th>{tableDetails.SrNo}</th>
                                                <td>{tableDetails.companyName}</td>
                                                <td>{tableDetails.companyId}</td>
                                                <td>{tableDetails.companyCreationDate}</td>
                                                <td><Link to="/create-company">{tableDetails.edit}</Link></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="addMoreBtn mt-4 mb-5">
                        <button className="btn btn-primary col-12 col-md-4"><Link className="linkTag" to="/create-company">Add More</Link></button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}