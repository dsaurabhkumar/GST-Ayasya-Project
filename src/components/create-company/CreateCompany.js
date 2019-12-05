import React from 'react';
import './CreateCompany.css';

export default class CreateCompany extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <form className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="companyid">Company Id:</label>
                            <input type="text" className="form-control" id="companyid"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="companyName">Company Name:</label>
                            <input type="text" className="form-control" id="companyName" placeholder="Enter your Company Name"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="companyEmailId">E-Mail Id:</label>
                            <input type="text" className="form-control" id="companyEmailId" placeholder="Enter your E-Mail Id"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="companyContactNo">Contact No:</label>
                            <input type="text" className="form-control" id="companyContactNo" placeholder="Enter your Contact No."></input>
                        </div>
                        <div className="form-group col-md-8">
                            <label htmlFor="companyAddress">Company Address:</label>
                            <input type="text" className="form-control" id="companyAddress" placeholder="Enter your Address"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="city">City:</label>
                            <input type="text" className="form-control" id="city" placeholder="Enter your City"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="state">State:</label>
                            <input type="text" className="form-control" id="state" placeholder="Enter your State"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="pinCode">Pin Code:</label>
                            <input type="text" className="form-control" id="pinCode" placeholder="Enter your Pin Code"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="country">Country:</label>
                            <input type="text" className="form-control" id="country" placeholder="Enter your Country"></input>
                        </div>
                        <div className="form-group col-md-8">
                            <label htmlFor="description">Description:</label>
                            <input type="text" className="form-control" id="description" placeholder="Enter your Description"></input>
                        </div>
                        <div className="btnWidth mt-3 mb-3">
                            <button className="btn btn-primary col-12 col-md-4" type="submit">Create Company</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}