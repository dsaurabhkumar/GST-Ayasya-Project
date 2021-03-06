import React from 'react';
import './CreateCompany.css';
import AdditionalInfo from '../additional-info/AdditionalInfo';
import MasterConfigUser from '../master-config-user/MasterConfigUser';
import CreateCompanyForm from '../../components/Forms/createCompany/create-Company.forms';
import { Redirect } from 'react-router-dom';


const onlyChar = /^[a-zA-Z]+$/;

export default class CreateCompany extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            createCompany: {
                companyId: 'CompanyId',
                companyName: '',
                companyEmailId: '',
                companyContactNo: '',
                companyAddress: '',
                city: '',
                state: '',
                pinCode: '',
                country: 'India',
                description: '',
                formErrors: {
                    companyNameError: '',
                    companyEmailIdError: '',
                    companyContactNoError: '',
                    companyAddressError: '',
                    cityError: '',
                    stateError: '',
                    pinCodeError: '',
                    descriptionError: '',
                }
            },
            currencyInfo: {
                currencySymbol: '',
                currencyString: '',
                currencySubString: '',
                currencyFont: '',
                currencyCharacter: ''
            },
            gstVatInfo: {
                enableGstVat: '',
                type: '',
                enableCess: '',
                gstIn: '',
                typeOfDealer: '',
                defaultTaxRate1: '',
                defaultTaxRate2: ''
            },
            masterConfigUSer: {
                master_config_status: '',
                options: [
                    { key: 'Not Required', value: 'Not Required' },
                    { key: 'Copy Masters and Config', value: 'Copy Masters and Config' },
                    { key: 'Copy Masters, Config and Users', value: 'Copy Masters, Config and Users' },
                ]
            },
            redirectToLogin: false
        }
    }

    onChangeHandler = (formName, e) => {
        const formState = { ...this.state[formName] };
        const inputName = e.target.name;
        const inputValue = e.target.value;
        formState[inputName] = inputValue;
        this.setState({ [formName]: formState });
    }

    validate = () => {
        let companyNameError = "";

        if ((onlyChar.test(this.state.createCompany.formErrors.companyNameError))) {
            companyNameError = 'Invalid Company Name';
        }
        if (companyNameError) {
            this.setState({
                companyNameError
            });
            return false;
        }
        return true;
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState({
                redirectToLogin: true
            })
        }
    }

    render() {
        const redirectToLogin = this.state.redirectToLogin;
        if (redirectToLogin === true) {
            return <Redirect to='/login' />
        }
        return (
            <React.Fragment>
                <div className="container mt-5 mb-5">
                    <div className="mainContainer">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="companyInfo">
                                <span>Company Information</span>
                            </div>
                            <div className="form-row createComp mb-3">
                                <CreateCompanyForm
                                    formData={this.state.createCompany}
                                    changeHandler={(event) => this.onChangeHandler('createCompany', event)}
                                />
                            </div>
                            <div className="form-group col-md-12 additionalInfo">
                                <AdditionalInfo
                                    formData={this.state}
                                    changeHandler={(formName, event) => this.onChangeHandler(formName, event)}
                                />
                            </div>
                            <div className="masterConfigUser">
                                <MasterConfigUser
                                    options={this.state.masterConfigUSer.options}
                                    changeHandler={(event) => this.onChangeHandler('masterConfigUSer', event)}
                                />
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