import React, { useState } from 'react';
import './UsersAdd.css';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const UsersAdd = (props) => {

    const [user, setUser] = useState(false);
    const [group, setGroup] = useState(false);
    const [state, setState] = useState(true);

    const formValue = {
        username: '',
        password: '',
        hierarchy: '',
        department: '',
    }

    const usersAdd_inputText = [
        {
            label: 'Username',
            name: 'username',
        },
        {
            label: 'Password',
            name: 'password',
        },
        {
            label: 'Hierarchy',
            name: 'hierarchy',
        },
        {
            label: 'Department',
            name: 'department',
        },
    ]

    const users_dropdown_one = [
        {
            label: 'Specify State for this User',
            name: 'specifyStateForUser',
            values: [
                "Y"
            ]
        }
    ]

    const users_dropdown_two = [
        {
            name: 'stateForUser',
            values: [
                "ANDAMAN AND NICOBAR ISLANDS",
                "ANDHRA PRADESH",
                "ARUNACHAL PRADESH",
                "ASSAM",
                "BIHAR",
                "CHANDIGARH",
                "CHHATISHGARH",
                "DADRA & NAGAR HAVELI",
                "DAMAN & DIU",
                "DELHI",
                "GOA",
                "GUJARAT",
                "HARYANA",
                "HIMACHAL PRADESH",
                "JAMMU & KASHMIR",
                "JHARKHAND",
                "KARNATAKA",
                "KERALA",
                "LAKSHAWADEEP",
                "MADHYA PRADESH",
                "MAHARASHTRA",
                "MANIPUR",
                "MEGHALAYA",
                "MIZORAM",
                "NAGALAND",
                "ODISHA",
                "OTHERS",
                "PUDUCHERRY",
                "PUNJAB",
                "RAJASTHAN",
                "SIKKIM",
                "TAMILNADU",
                "TRIPURA",
                "UTTAR PRADESH",
                "UTTRAKHAND",
                "WEST BENGAL"
            ],
        }
    ]

    const users_dropdown_three = [
        {
            label: 'Specify Voucher Series Group',
            name: 'specifyVoucherSeriesGroup',
            values: [
                "Y"
            ]
        }
    ]

    const users_dropdown_four = [
        {
            name: 'specifyVoucherSeriesGroup',
            values: [
            ]
        }
    ]

    const users_dropdown_five = [
        {
            label: 'Read Control from Other User',
            name: 'readControlFromOtherUser',
            values: [
                "Y"
            ]
        }
    ]

    const users_dropdown_six = [
        {
            label: 'Allow Modification of Company',
            name: 'allowModificationOfCompany',
            values: [
                "Y"
            ]
        },
        {
            label: 'Allow Price Change in Voucher',
            name: 'allowPriceChangeInVoucher',
            values: [
                "Y"
            ]
        },
        {
            label: 'Allow Discount Change',
            name: 'allowDiscountChange',
            values: [
                "Y"
            ]
        },
        {
            label: 'Allow Markup Change',
            name: 'allowMarkupChange',
            values: [
                "Y"
            ]
        },
        {
            label: 'Allow Printing of Documents',
            name: 'allowPrintingOfDocuments',
            values: [
                "Y"
            ]
        },
        {
            label: 'Allow Re-Printing of Documents',
            name: 'allowRePrintingOfDocuments',
            values: [
                "Y"
            ]
        },
        {
            label: 'Hide Value of Items in Reports',
            name: 'hideValeuOfItemsInReports',
            values: [
                "Y"
            ]
        },
        {
            label: 'Hide Value of Items in Vouchers',
            name: 'hideValeuOfItemsInVouchers',
            values: [
                "Y"
            ]
        },
        {
            label: 'Allow Email of Reporting',
            name: 'allowEmailOfReporting',
            values: [
                "Y"
            ]
        },
        {
            label: 'Allow SMS of Reporting',
            name: 'allowSmsOfReporting',
            values: [
                "Y"
            ]
        },
        {
            label: 'Allow Notification of Reporting',
            name: 'allowNotificationOfReporting',
            values: [
                "Y"
            ]
        },
        {
            label: 'Allow Export of Reports',
            name: 'allowExportOfReports',
            values: [
                "Y"
            ]
        },
        {
            label: 'Allow Data Backup',
            name: 'allowDataBAckup',
            values: [
                "Y"
            ]
        },
        {
            label: 'Allow Printing of Voucher',
            name: 'allowPrintingOfVoucher',
            values: [
                "Y"
            ]
        },
        {
            label: 'Restrict Back Date Entries',
            name: 'restrictBackDateEntries',
            values: [
                "Y"
            ]
        },
        {
            label: 'Allow access to Mobile',
            name: 'allowAccessToMobile',
            values: [
                "Y"
            ]
        },
        {
            label: 'Allow Modification of Data Entry Form Captions',
            name: 'allowDataEntryFormCaptions',
            values: [
                "Y"
            ]
        },
        {
            label: 'Create Financial Year',
            name: 'createFinancialYear',
            values: [
                "Y"
            ]
        },
        {
            label: 'Allow Overwrite of Data while Restoring Backup',
            name: 'allowOverwriteOfData',
            values: [
                "Y"
            ]
        },
        {
            label: 'Allow Customisation of Reports',
            name: 'allowCustomisationOfReports',
            values: [
                "Y"
            ]
        },
        {
            label: 'Restrict Grid Entry Deletion in Sales and Hide Entry in Reports',
            name: 'restrictGridEntryDeletion',
            values: [
                "Y"
            ]
        },

    ]

    return (
        <div className="container mt-4 mb-4">
            <Formik

                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data)
                    setSubmitting(false);
                }}
            >


                {({ values, isSubmitting, handleChange }) => (
                    <Form className="inventoryForm">
                        <h2 className="text-center mb-4">Add New User</h2>

                        <span className="textHeading">User Configuration</span>
                        <div className="inventoryForm">
                            <div className="row">
                                {
                                    usersAdd_inputText.map((val, index) => (
                                        <div className="mb-3 col-12 col-md-3" key={"inputTextField" + index}>
                                            {val.label}
                                            <Field
                                                type='text'
                                                name={val.name}
                                                placeholder={val.placeholder}
                                                as={TextField}
                                            />
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="row">
                                <div className="col-md-7">
                                    {
                                        users_dropdown_one.map((val, index) => (
                                            <div className="mt-2 inputAlignment" key={"inputDropdownValue" + index}>
                                                <div className="mb-2">
                                                    {val.label}
                                                </div>
                                                <FormControl>
                                                    <select
                                                        type='select'
                                                        name={val.name}
                                                        multiple={false}
                                                        onChange={event => setUser(event.target.value === 'Y')}
                                                    >
                                                        <option defaultValue>N</option>
                                                        {
                                                            val.values.map((cval, cindex) => (
                                                                <option key={"optionValues" + cindex} value={cval}>{cval}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </FormControl>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="col-md-5">
                                    <div className={user ? "d-block" : "d-none"}>
                                        {
                                            users_dropdown_two.map((val, index) => (
                                                <div className="mt-2" key={"inputDropdownValue" + index}>
                                                    <FormControl>
                                                        <select
                                                            type='select'
                                                            name={val.name}
                                                            multiple={false}
                                                            onChange={handleChange}
                                                        >
                                                            <option defaultValue>Select an Option</option>
                                                            {
                                                                val.values.map((cval, cindex) => (
                                                                    <option key={"optionValues" + cindex} value={cval}>{cval}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </FormControl>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-7">
                                    {
                                        users_dropdown_three.map((val, index) => (
                                            <div className="mt-2 inputAlignment" key={"inputDropdownValue" + index}>
                                                <div className="mb-2">
                                                    {val.label}
                                                </div>
                                                <FormControl>
                                                    <select
                                                        type='select'
                                                        name={val.name}
                                                        multiple={false}
                                                        onChange={event => {setGroup(event.target.value === 'Y')}}
                                                    >
                                                        <option defaultValue>N</option>
                                                        {
                                                            val.values.map((cval, cindex) => (
                                                                <option key={"optionValues" + cindex} value={cval}>{cval}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </FormControl>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="col-md-5">
                                <div className={group ? "d-block" : "d-none"}>
                                    {
                                        users_dropdown_four.map((val, index) => (
                                            <div className="mt-2" key={"inputDropdownValue" + index}>
                                                <FormControl>
                                                    <select
                                                        type='select'
                                                        name={val.name}
                                                        multiple={false}
                                                        onChange={handleChange}
                                                    >
                                                        <option defaultValue>Select an Option</option>
                                                        {
                                                            val.values.map((cval, cindex) => (
                                                                <option key={"optionValues" + cindex} value={cval}>{cval}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </FormControl>
                                            </div>
                                        ))
                                    }
                                </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12 col-md-7">
                                    {
                                        users_dropdown_five.map((val, index) => (
                                            <div className="mt-2 inputAlignment" key={"inputDropdownValue" + index}>
                                                <div className="mb-2">
                                                    {val.label}
                                                </div>
                                                <FormControl>
                                                    <select
                                                        type='select'
                                                        name={val.name}
                                                        multiple={false}
                                                        onChange={event => { setState(event.target.value !== 'Y') }}
                                                    >
                                                        <option defaultValue>N</option>
                                                        {
                                                            val.values.map((cval, cindex) => (
                                                                <option key={"optionValues" + cindex} value={cval}>{cval}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </FormControl>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>

                        <div className={state ? "d-block" : "d-none"}>
                            <span className="textHeading">User Controls</span>
                            <div className="inventoryForm">
                                <div className="row">
                                    {
                                        users_dropdown_six.map((val, index) => (
                                            <div className="col-12 col-md-6 inputAlignment mb-3" key={"inputDropdownValue" + index}>
                                                <div className="labelWidth">{val.label}</div>
                                                <FormControl>
                                                    <select
                                                        type='select'
                                                        name={val.name}
                                                        multiple={false}
                                                        onChange={handleChange}
                                                    >
                                                        <option defaultValue>N</option>
                                                        {
                                                            val.values.map((cval, cindex) => (
                                                                <option key={"optionValues" + cindex} value={cval}>{cval}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </FormControl>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="row btnContainer flex-sm-row-reverse mt-4 mb-3">
                            <div className="mt-3 col-12 col-md-3 p-0">
                                <Button type="submit" className="col-12" disabled={isSubmitting}>Save</Button>
                            </div>
                            <div className="mt-3 col-12 col-md-3 align-self-center quitBtn">
                                <Link to='/'><Button type="submit" className="col-12">Quit</Button></Link>
                            </div>
                        </div>
                    </Form>
                )
                }

            </Formik>
        </div>
    )
}

export default UsersAdd