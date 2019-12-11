import React from 'react';
import './CreateCompany.css';
import AdditionalInfo from '../../containers/additional-info/AdditionalInfo';
import MasterConfigUser from '../../containers/master-config-user/MasterConfigUser';

export default class CreateCompany extends React.Component {

    constructor() {
        super()
        this.state = {
            companyId: "Company Id",
            companyName: "",
            companyEmailId: "",
            companyContactNo: '',
            companyAddress: '',
            city: '',
            state: '',
            pinCode: '',
            country: 'India',
            description: '',
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
    }

    render() {
        const { companyId, companyName, companyEmailId, companyContactNo, companyAddress, 
                city, state, pinCode, country, description } = this.state
        return (
            <React.Fragment>
                <div className="container mt-5 mb-5">
                    <div className="mainContainer">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="companyInfo">
                                <span>Company Information</span>
                            </div>
                            <div className="form-row createComp mb-3">
                                <div className="form-group col-md-4">
                                    <label htmlFor="companyId">Company Id:</label>
                                    <input type="text" className="form-control" name="companyId" value={companyId} id="companyId" onChange={this.changeHandler} readOnly></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="companyName">Company Name:</label>
                                    <input type="text" className="form-control" name="companyName" value={companyName} id="companyName" placeholder="Enter your Company Name" onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="companyEmailId">E-Mail Id:</label>
                                    <input type="text" className="form-control" name="companyEmailId" value={companyEmailId} id="companyEmailId" placeholder="Enter your E-Mail Id" onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="companyContactNo">Contact No:</label>
                                    <input type="text" className="form-control" name="companyContactNo" value={companyContactNo} id="companyContactNo" placeholder="Enter your Contact No." onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group col-md-8">
                                    <label htmlFor="companyAddress">Company Address:</label>
                                    <input type="text" className="form-control" name="companyAddress" value={companyAddress} id="companyAddress" placeholder="Enter your Address" onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="city">City:</label>
                                    <input type="text" className="form-control" name="city" value={city} id="city" placeholder="Enter your City" onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="state">State:</label>
                                    <input type="text" className="form-control" name="state" value={state} id="state" placeholder="Enter your State" onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="pinCode">Pin Code:</label>
                                    <input type="text" className="form-control" name="pinCode" value={pinCode} id="pinCode" placeholder="Enter your Pin Code" onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="country">Country:</label>
                                    <input type="text" className="form-control" name="country" value={country} id="country" placeholder="Enter your Country" onChange={this.changeHandler} readOnly></input>
                                </div>
                                <div className="form-group col-md-8">
                                    <label htmlFor="description">Description:</label>
                                    <input type="text" className="form-control" name="description" value={description} id="description" placeholder="Enter your Description" onChange={this.changeHandler}></input>
                                </div>
                            </div>
                            <div className="form-group col-md-12 additionalInfo">
                                <AdditionalInfo></AdditionalInfo>
                            </div>
                            <div className="masterConfigUser">
                                <MasterConfigUser></MasterConfigUser>
                            </div>

                            <div className="btnWidth mt-4 mb-4">
                                <button className="btn btn-primary col-12 col-md-4" type="submit">Create Company</button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}