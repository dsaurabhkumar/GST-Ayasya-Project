import React from 'react';
import './RegionalSettings.css';
import { Link } from 'react-router-dom';
import InputText from '../../components/Forms/formComponents/input-text/InputText';
import Dropdown from '../../components/Forms/formComponents/dropdown/Dropdown';


class RegionalSettings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputFields: [
                {
                    label: "Date Format",
                    type: "dropdown",
                    name: "dateFormat", 
                    id: "dateFormat",
                    placeholder: "Select an option",
                    values: [
                        "DD-MM-YYYY",
                        "MM-DD-YYYY"
                    ]
                },
                {
                    label: "Date Seperator",
                    type: "text",
                    name: "dateSeperator", 
                    id: "dateSeperator",
                    placeholder: "-",
                },
                {
                    label: "Currency Symbol",
                    type: "text",
                    className: "form-control",
                    name: "currencySymbol",
                    id: "currencySymbol",
                    placeholder: "Rs."
                },
                {
                    label: "Currency String",
                    type: "text",
                    name: "currencyString",
                    id: "currencyString",
                    placeholder: "Rupees"
                },
                {
                    label: "Currency Sub String",
                    type: "text",
                    name: "currencySubString",
                    id: "currencySubString",
                    placeholder: "Paisa"
                },
                {
                    label: "Currency Decimal Places",
                    type: "text",
                    name: "currencyDecimalPlaces",
                    id: "currencyDecimalPlaces",
                    placeholder: "2"
                },
                {
                    label: "Currency Font",
                    type: "text",
                    name: "currencyFont",
                    id: "currencyFont",
                    placeholder: "Rupee Foradian"
                },
                {
                    label: "Currency Character",
                    type: "text",
                    name: "currencyChar",
                    id: "currencyChar",
                    placeholder: ""
                },
                {
                    label: "Format for Displaying Numbers",
                    type: "text",
                    name: "formatDisplayNumber",
                    id: "formatDisplayNumber",
                    placeholder: "9,99,999.99"
                },
                {
                    label: "Country",
                    type: "country-dropdown",
                    name: "countryDropdown", 
                    id: "countryDropdown",
                    placeholder: "Select an option",
                    values: [
                        "India",
                        "Sri Lanka",
                        "UK",
                        "US",
                    ]
                },
                {
                    label: "State",
                    type: "state-dropdown",
                    name: "stateDropdown", 
                    id: "stateDropdown",
                    placeholder: "Select an option",
                    values: [
                        "New Delhi",
                        "Chandigarh",
                        "Haryana",
                        "Uttar Pradesh",
                    ]
                },
            ]
        }

    }

    handleChange = event => {
        console.log(event)
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-4 mb-4">
                    <h2 className="text-center">Regional Settings</h2>
                    <form className="mt-5 reginalForm" onSubmit={this.submitForm}>
                        <div className="form-row">
                                {
                                    this.state.inputFields.map((val, index) => {
                                        if(val.type === "text") {
                                            return (
                                                <div className="form-group col-md-6" key={'inputFields_' + index}>
                                                <InputText 
                                                    name = {val.name}
                                                    placeholder={val.placeholder}
                                                    label={val.label}
                                                    handleChange={this.handleChange}
                                                />
                                                </div>
                                            )
                                        } else if (val.type === "dropdown") {
                                            return (
                                                <div className="form-group col-md-6" key={'inputFields_' + index}>
                                                <Dropdown 
                                                    name={val.name}
                                                    label={val.label}
                                                    values={val.values}
                                                    handleChange={this.handleChange}
                                                />
                                                </div>
                                            )
                                        }
                                        else if (val.type === "country-dropdown") {
                                            return (
                                                <div className="form-group col-md-6" key={'inputFields_' + index}>
                                                <Dropdown 
                                                    name={val.name}
                                                    label={val.label}
                                                    values={val.values}
                                                    handleChange={this.handleChange}
                                                />
                                                </div>
                                            )
                                        }
                                        else if (val.type === "state-dropdown") {
                                            return (
                                                <div className="form-group col-md-6" key={'inputFields_' + index}>
                                                <Dropdown 
                                                    name={val.name}
                                                    label={val.label}
                                                    values={val.values}
                                                    handleChange={this.handleChange}
                                                />
                                                </div>
                                            )
                                        }
                                    })
                                }
                        </div>
                      
                        <div className="row btnContainer flex-sm-row-reverse mt-4 mb-3">
                            <div className="mt-3 col-12 col-md-4 p-0">
                                <button type="submit" className="btn btn-primary col-12">Save</button>
                            </div>
                            <div className="mt-3 col-12 col-md-4 align-self-center quitBtn">
                                <Link to='/feature-options'><button type="submit" className="btn btn-primary col-12">Quit</button></Link>
                            </div>
                        </div>

                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default RegionalSettings