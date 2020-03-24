import React from 'react';


const CreateCompanyForm = props => {
    return <React.Fragment>
        <div className="form-group col-md-4">
            <label htmlFor="companyId">Company Id:</label>
            <input
                type="text"
                className="form-control"
                name="companyId"
                value={props.formData.companyId}
                id="companyId"
                onChange={props.changeHandler} readOnly />
        </div>

        <div className="form-group col-md-4">
            <label htmlFor="companyName">Company Name:</label>
            <input
                type="text"
                className="form-control"
                name="companyName"
                value={props.formData.companyName}
                id="companyName"
                placeholder="Enter your Company Name"
                onChange={props.changeHandler} />
                <div className="inputError">{props.formData.companyNameError}</div>
        </div>

        <div className="form-group col-md-4">
            <label htmlFor="companyEmailId">E-Mail Id:</label>
            <input
                type="text"
                className="form-control"
                name="companyEmailId"
                value={props.formData.companyEmailId}
                id="companyEmailId"
                placeholder="Enter your E-Mail Id"
                onChange={props.changeHandler} />
                <div className="inputError">{props.formData.companyEmailIdError}</div>
        </div>

        <div className="form-group col-md-4">
            <label htmlFor="companyContactNo">Contact No:</label>
            <input
                type="text"
                className="form-control"
                name="companyContactNo"
                value={props.formData.companyContactNo}
                id="companyContactNo"
                placeholder="Enter your Contact No."
                onChange={props.changeHandler} />
                <div className="inputError">{props.formData.companyContactNoError}</div>
        </div>

        <div className="form-group col-md-8">
            <label htmlFor="companyAddress">Company Address:</label>
            <input
                type="text"
                className="form-control"
                name="companyAddress"
                value={props.formData.companyAddress}
                id="companyAddress"
                placeholder="Enter your Address"
                onChange={props.changeHandler} />
                <div className="inputError">{props.formData.companyAddressError}</div>
        </div>

        <div className="form-group col-md-4">
            <label htmlFor="city">City:</label>
            <input
                type="text"
                className="form-control"
                name="city"
                value={props.formData.city}
                id="city"
                placeholder="Enter your City"
                onChange={props.changeHandler} />
                <div className="inputError">{props.formData.cityError}</div>
        </div>
        
        <div className="form-group col-md-4">
            <label htmlFor="state">State:</label>
            <input
                type="text"
                className="form-control"
                name="state"
                value={props.formData.state}
                id="state"
                placeholder="Enter your State"
                onChange={props.changeHandler} />
                <div className="inputError">{props.formData.stateError}</div>
        </div>

        <div className="form-group col-md-4">
            <label htmlFor="pinCode">Pin Code:</label>
            <input
                type="text"
                className="form-control"
                name="pinCode"
                value={props.formData.pinCode}
                id="pinCode"
                placeholder="Enter your Pin Code"
                onChange={props.changeHandler} />
                <div className="inputError">{props.formData.pinCodeError}</div>
        </div>

        <div className="form-group col-md-4">
            <label htmlFor="country">Country:</label>
            <input
                type="text"
                className="form-control"
                name="country"
                value={props.formData.country}
                id="country"
                placeholder="Enter your Country"
                onChange={props.changeHandler} readOnly />
        </div>
        
        <div className="form-group col-md-8">
            <label htmlFor="description">Description:</label>
            <input
                type="text"
                className="form-control"
                name="description"
                value={props.formData.description}
                id="description"
                placeholder="Enter your Description"
                onChange={props.changeHandler} />
                <div className="inputError">{props.formData.descriptionError}</div>
        </div>
    </React.Fragment>
}
export default CreateCompanyForm;