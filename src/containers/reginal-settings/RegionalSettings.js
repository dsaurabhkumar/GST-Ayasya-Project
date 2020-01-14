import React from 'react'

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
                    label: "Currency Symbol",
                    type: "text",
                    className: "form-control",
                    name: "currencySymbol",
                    id: "currencySymbol",
                    placeholder: "Currency Symbol"
                },
                {
                    label: "Currency String",
                    type: "text",
                    name: "currencyString",
                    id: "currencyString",
                    placeholder: ""
                },
                {
                    label: "Currency Sub String",
                    type: "text",
                    name: "currencySubString",
                    id: "currencySubString",
                    placeholder: ""
                },
                {
                    label: "Currency Decimal Places",
                    type: "text",
                    name: "currencyDecimalPlaces",
                    id: "currencyDecimalPlaces",
                    placeholder: ""
                },
                {
                    label: "Currency Font",
                    type: "text",
                    name: "currencyFont",
                    id: "currencyFont",
                    placeholder: ""
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
                    placeholder: ""
                },
            ]
        }

    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-4 mb-4">
                    <h2 className="text-center">Regional Settings</h2>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                {
                                    this.state.inputFields.map((val, index) => (
                                        <div key={'inputFields_' + index}>
                                            <div className="col-md-6">
                                                <label htmlFor="inputFields">{val.label}</label>
                                                {console.log(val)}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default RegionalSettings