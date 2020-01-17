import React from 'react';
import { Link } from 'react-router-dom';
import InputText from '../../components/Forms/formComponents/input-text/InputText';
import Dropdown from '../../components/Forms/formComponents/dropdown/Dropdown';
import './General.css';

class General extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputLabels: [
                {
                    label: "Maintain Data Checklist",
                    type: "text"
                },
                {
                    label: "Enable Notes Manager",
                    type: "text"
                },
                {
                    label: "Delete Exported Files on Closing the Company",
                    type: "dropdown",
                    values: [
                        "Never",
                        "Ask before Deletion",
                        "Delete Automatically"
                    ]
                },
                {
                    label: "Bind Data with specified HDD(s)",
                    type: "text"
                },
                {
                    label: "Enable Voucher Auditing",
                    type: "text"
                },
                {
                    label: "Display Thought of The Day",
                    type: "text"
                },
                {
                    label: "Maintain Image & Signature with User",
                    type: "text"
                },
                {
                    label: "Maintain Tracking No. in Vouchers",
                    type: "text"
                },
                {
                    label: "Intelligent Search in Master's Drop Down List",
                    type: "dropdown",
                    values: [
                        "Not Required",
                        "Moderate",
                        "High"
                    ]
                },
                {
                    label: "Show <--End of List--> in Master's Drop Down List",
                    type: "text"
                },
                {
                    label: "Change Voucher Type Captions(s)",
                    type: "text"
                },
                {
                    label: "Default Mode of Sending SMS",
                    type: "text"
                },
                {
                    label: "Print 'Duplicate Copy' while re-printing Sales Invoice",
                    type: "text"
                },
                {
                    label: "Enable Second Language Support",
                    type: "text"
                },
                {
                    label: "Maintain Data Checklist",
                    type: "text"
                },
            ]
        }
    }

    render() {
        return (
            <div className="container mt-4 mb-4">
                <h2 className="text-center mb-5">General</h2>
                <form className="generalForm">
                    {
                        this.state.inputLabels.map((val, index) => {
                            if (val.type === "text") {
                                return (
                                    <div className="row form-group" key={'inputLabels_' + index}>
                                        <div className="col-md-7 generalInputLabel">
                                            {val.label}
                                        </div>
                                        <div className="col-md-5 inputFieldAlign">
                                            <InputText
                                                name={val.name}
                                                placeholder={val.placeholder}
                                                handleChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                )
                            }
                            else if (val.type === "dropdown") {
                                return (
                                    <div className="row form-group" key={'inputLabels_' + index}>
                                        <div className="col-md-7 generalInputLabel">
                                            {val.label}
                                        </div>
                                        <div className="col-md-5 inputFieldAlign">
                                            <Dropdown
                                                values={val.values}
                                                handleChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    <div className="row btnContainer flex-sm-row-reverse mt-4 mb-3">
                            <div className="mt-3 col-12 col-md-3 p-0">
                                <button type="submit" className="btn btn-primary col-12">Save</button>
                            </div>
                            <div className="mt-3 col-12 col-md-3 align-self-center quitBtn">
                                <Link to='/feature-options'><button type="submit" className="btn btn-primary col-12">Quit</button></Link>
                            </div>
                        </div>
                </form>
            </div>
        )
    }
}
export default General