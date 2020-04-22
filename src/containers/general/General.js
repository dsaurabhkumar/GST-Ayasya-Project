import React from 'react';
import { Link } from 'react-router-dom';
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
                    type: "dropdown",
                    name: "maintainChecklist",
                    id: "maintainChecklist",
                    values: [
                        "Y",
                        "N"
                    ]
                },
                {
                    label: "Enable Notes Manager",
                    type: "dropdown",
                    name: "enableNotes",
                    id: "enableNotes",
                    values: [
                        "Y",
                        "N"
                    ]
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
                    type: "dropdown",
                    name: "bindData",
                    id: "bindData",
                    values: [
                        "Y",
                        "N"
                    ]
                },
                {
                    label: "Enable Voucher Auditing",
                    type: "dropdown",
                    name: "enableVoucher",
                    id: "enableVoucher",
                    values: [
                        "Y",
                        "N"
                    ]
                },
                {
                    label: "Display Thought of The Day",
                    type: "dropdown",
                    name: "displayThought",
                    id: "displayThought",
                    values: [
                        "Y",
                        "N"
                    ]
                },
                {
                    label: "Maintain Image & Signature with User",
                    type: "dropdown",
                    name: "maintainUser",
                    id: "maintainUser",
                    values: [
                        "Y",
                        "N"
                    ]
                },
                {
                    label: "Maintain Tracking No. in Vouchers",
                    type: "dropdown",
                    name: "maintainVoucher",
                    id: "maintainVoucher",
                    values: [
                        "Y",
                        "N"
                    ]
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
                    type: "dropdown",
                    name: "showMaster",
                    id: "showMaster",
                    values: [
                        "Y",
                        "N"
                    ]
                },
                {
                    label: "Change Voucher Type Captions(s)",
                    type: "dropdown",
                    name: "changeVoucher",
                    id: "changeVoucher",
                    values: [
                        "Y",
                        "N"
                    ]
                },
                {
                    label: "Default Mode of Sending SMS",
                    type: "dropdown",
                    name: "defaultMode",
                    id: "defaultMode",
                    values: [
                        "Y",
                        "N"
                    ]
                },
                {
                    label: "Print 'Duplicate Copy' while re-printing Sales Invoice",
                    type: "dropdown",
                    name: "printDuplicateCopy",
                    id: "printDuplicateCopy",
                    values: [
                        "Y",
                        "N"
                    ]
                },
                {
                    label: "Enable Second Language Support",
                    type: "dropdown",
                    name: "enableSecondLang",
                    id: "enableSecondLang",
                    values: [
                        "Y",
                        "N"
                    ]
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
            console.log(response.data);
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
                                if (val.type === "dropdown") {
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