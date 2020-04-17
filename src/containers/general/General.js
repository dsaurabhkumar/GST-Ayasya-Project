import React from 'react';
import { Link } from 'react-router-dom';
import InputText from '../../components/Forms/formComponents/input-text/InputText';
import Dropdown from '../../components/Forms/formComponents/dropdown/Dropdown';
import './General.css';
import axios from 'axios';

class General extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputLabels: [
                {
                    label: "Maintain Data Checklist",
                    type: "text",
                    placeholder: "Y/N",
                    name: "maintainChecklist",
                    id: "maintainChecklist"
                },
                {
                    label: "Enable Notes Manager",
                    type: "text",
                    placeholder: "Y/N",
                    name: "enableNotes",
                    id: "enableNotes"
                },
                {
                    label: "Delete Exported Files on Closing the Company",
                    type: "dropdown",
                    name: "deleteFiles",
                    id: "deleteFiles",
                    values: [
                        "Never",
                        "Ask before Deletion",
                        "Delete Automatically"
                    ]
                },
                {
                    label: "Bind Data with specified HDD(s)",
                    type: "text",
                    placeholder: "Y/N",
                    name: "bindData",
                    id: "bindData"
                },
                {
                    label: "Enable Voucher Auditing",
                    type: "text",
                    placeholder: "Y/N",
                    name: "enableVoucher",
                    id: "enableVoucher"
                },
                {
                    label: "Display Thought of The Day",
                    type: "text",
                    placeholder: "Y/N",
                    name: "displayThought",
                    id: "displayThought"
                },
                {
                    label: "Maintain Image & Signature with User",
                    type: "text",
                    placeholder: "Y/N",
                    name: "maintainUser",
                    id: "maintainUser"
                },
                {
                    label: "Maintain Tracking No. in Vouchers",
                    type: "text",
                    placeholder: "Y/N",
                    name: "maintainVoucher",
                    id: "maintainVoucher"
                },
                {
                    label: "Intelligent Search in Master's Drop Down List",
                    type: "dropdown",
                    name: "intelligentSearch",
                    id: "intelligentSearch",
                    values: [
                        "Not Required",
                        "Moderate",
                        "High"
                    ]
                },
                {
                    label: "Show <--End of List--> in Master's Drop Down List",
                    type: "text",
                    placeholder: "Y/N",
                    name: "showMaster",
                    id: "showMaster"
                },
                {
                    label: "Change Voucher Type Captions(s)",
                    type: "text",
                    placeholder: "Y/N",
                    name: "changeVoucher",
                    id: "changeVoucher"
                },
                {
                    label: "Default Mode of Sending SMS",
                    type: "text",
                    placeholder: "Y/N",
                    name: "defaultMode",
                    id: "defaultMode"
                },
                {
                    label: "Print 'Duplicate Copy' while re-printing Sales Invoice",
                    type: "text",
                    placeholder: "Y/N",
                    name: "printDuplicateCopy",
                    id: "printDuplicateCopy"
                },
                {
                    label: "Enable Second Language Support",
                    type: "text",
                    placeholder: "Y/N",
                    name: "enableSecondLang",
                    id: "enableSecondLang"
                },
            ]
        }
    }

    handleChange = event => {
        console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="container mt-4 mb-4">
                <h2 className="text-center mb-5">General</h2>
                <form className="generalForm" onSubmit={this.formSubmit}>
                    <div className="row">
                        {
                            this.state.inputLabels.map((val, index) => {
                                if (val.type === "text") {
                                    return (
                                        <div className="col-12 col-md-4 generalInputLabel form-group" key={'inputLabels_' + index}>
                                            {val.label}
                                            <InputText
                                                name={val.name}
                                                placeholder={val.placeholder}
                                                handleChange={this.handleChange}
                                            />
                                        </div>
                                    )
                                }
                                else if (val.type === "dropdown") {
                                    return (
                                        <div className="col-12 col-md-4 generalInputLabel form-group" key={'inputLabels_' + index}>
                                            {val.label}
                                            <Dropdown
                                                values={val.values}
                                                name={val.name}
                                                handleChange={this.handleChange}
                                            />
                                        </div>
                                    )
                                }
                            })
                        }
                        <div className="row btnContainer generalButtonContainer flex-sm-row-reverse mt-4 mb-3 pl-3 pr-3">
                            <div className="mt-3 col-12 col-md-3 p-0">
                                <button type="submit" className="btn btn-primary col-12">Save</button>
                            </div>
                            <div className="mt-3 col-12 col-md-3 align-self-center quitBtn">
                                <Link to='/feature-options'><button type="submit" className="btn btn-primary col-12">Quit</button></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default General