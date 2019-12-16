import React from 'react';
import './CreateCompany.css';
import AdditionalInfo from '../additional-info/AdditionalInfo';
import MasterConfigUser from '../master-config-user/MasterConfigUser';
import CreateCompanyForm from '../../components/Forms/createCompany/create-Company.forms';

export default class CreateCompany extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            createCompany: {
                companyId: 'Company Id',
                companyName: '',
                companyEmailId: '',
                companyContactNo: '',
                companyAddress: '',
                city: '',
                state: '',
                pinCode: '',
                country: 'India',
                description: '',
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
            masterConfigUser: {
                inlineRadioOptions:''
            }
        }
    }

    onChangeHandler = (formName, e) => {
        const formState = { ...this.state[formName] } ;
        const inputName = e.target.name;
        const inputValue = e.target.value;
        formState[inputName] = inputValue;
        this.setState({ [formName]: formState });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
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