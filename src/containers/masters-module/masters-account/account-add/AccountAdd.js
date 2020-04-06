import React from 'react';
import './AccountAdd.css';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const AccountAdd = (props) => {

    const formValue = {
        name: '',
        printName: '',
        opBal: '',
        crDr: '',
        prevYearBal: '',
        drCr: '',
        address: '',
        eMail: '',
        mobileNo: '',
        telNo: '',
        fax: '',
        contactPerson: '',
        transport: '',
        station: '',
        pinCode: '',
        hsnSacCode: '',
        cstNo: '',
        lstNo: '',
        serviceTaxNo: '',
        lbtNo: '',
        bankAcNo: ''
    }

    const accountAddInputText_one = [
        {
            label: 'Name',
            name: 'name',
        },
        {
            label: 'Print Name',
            name: 'printName',
        },
        {
            label: 'Op. Bal.',
            name: 'opBal',
            placeholder: '0.00'
        },
        {
            label: '(Rs.) CR/DR',
            name: 'crDr',
            placeholder: 'C/D'
        },
        {
            label: 'Prev Year Bal.',
            name: 'prevYearBal',
            placeholder: '0.00'
        },
        {
            label: '(Rs.) CR/DR',
            name: 'drCr',
            placeholder: 'C/D'
        },
        {
            label: 'Address',
            name: 'address',
        },
        {
            label: 'E-Mail',
            name: 'eMail'
        },
        {
            label: 'Mobile No.',
            name: 'mobileNo'
        },
        {
            label: 'Tel. No.',
            name: 'telNo'
        },
        {
            label: 'Fax',
            name: 'fax'
        },
        {
            label: 'Contact Person',
            name: 'contactPerson'
        },
        {
            label: 'Transport',
            name: 'transport'
        },
        {
            label: 'Station',
            name: 'station'
        },
        {
            label: 'Pin Code',
            name: 'pinCode'
        }
    ]

    const accountAdd_dropdown_one = [
        {
            label: `Group`,
            name: 'group',
            values: [
                "Bank Accounts",
                "Bank O/D Accounts",
                "Capital Account",
                "Cash-in-hand",
                "Current Assets",
                "Current Liabilities",
                "Duties & Taxes",
                "Expenses (Direct/Mfg.)",
                "Expenses (Indirect/Admin.)",
                "Fixed Assets"
            ]
        }
    ]

    const accountAdd_dropdown_two = [
        {
            label: `Tax Category`,
            name: 'taxCategory',
            values: [
                "<--None-->",
                "Exempt",
                "GST 5%",
                "GST 12%",
                "GST 18%",
                "GST 28%"
            ],
            title: 'GST Details',
        },
        {
            label: `ITC Eligibility`,
            name: 'itcEligibility',
            values: [
                "None",
                "Input Goods",
                "Input Services",
                "Capital Goods"
            ],
        },
        {
            label: `Reverse Charge`,
            name: 'reverseCharge',
            values: [
                "Based on Daily Limit",
                "Compulsory",
                "Service Import",
                "Not Applicable"
            ],
        }
    ]

    const accountAddInputText_two = [
        {
            label: 'HSN/SAC Code',
            name: 'hsnSacCode',
        },
    ]

    const accountAddInputText_three = [
        {
            label: 'CST No.',
            name: 'cstNo',
        },
        {
            label: 'LST No.',
            name: 'lstNo',
        },
        {
            label: 'Service Tax No.',
            name: 'serviceTaxNo',
        },
        {
            label: 'LBT No.',
            name: 'lbtNo',
        },
        {
            label: 'Bank A/C No.',
            name: 'bankAcNo'
        }
    ]

    const accountAdd_dropdown_three = [
        {
            label: `Enable Email Query`,
            name: 'enableEmailQuery',
            values: [
                "Y",
                "N"
            ],
        },
        {
            label: `Enable SMS Query`,
            name: 'enableSmsQuery',
            values: [
                "Y",
                "N"
            ],
        }
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
                        <span className="formHeading">General Info.</span>
                        <div className="row">

                            {
                                accountAddInputText_one.map((val, index) => (
                                    <div className="mb-3 col-6 col-md-3" key={"inputTextField" + index}>
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

                            {
                                accountAdd_dropdown_one.map((val, index) => (
                                    <div className="mb-5 col-12 col-md-12" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
                                            {val.label}
                                        </div>
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
                                                // value={values.name}
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

                        <div className="row">
                            {
                                accountAdd_dropdown_two.map((val, index) => (
                                    <div className="mb-2 col-12 col-md-4" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
                                            {val.label}
                                        </div>
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
                                                // value={values.name}
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

                            {
                                accountAddInputText_two.map((val, index) => (
                                    <div className="mb-3 mt-3 col-6 col-md-3" key={"inputTextField" + index}>
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

                        <div className="row btnContainer flex-sm-row-reverse mt-4 mb-3">
                            <div className="mt-3 col-12 col-md-4 p-0">
                                <Link to='/accounts'><Button type="submit" className="col-12">Notes</Button></Link>
                            </div>
                            <div className="mt-3 col-12 col-md-4 align-self-center quitBtn">
                                <Button type="submit" className="col-12">Opt. Fields</Button>
                            </div>
                            <div className="mt-3 col-12 col-md-4 align-self-center quitBtn pl-0">
                                <Link to='/accounts'><Button type="submit" className="col-12">Multiple Alias</Button></Link>
                            </div>
                        </div>

                        <div className="row mt-5">
                            {
                                accountAddInputText_three.map((val, index) => (
                                    <div className="mb-3 col-6 col-md-3" key={"inputTextField" + index}>
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
                            {
                                accountAdd_dropdown_three.map((val, index) => (
                                    <div className="mb-2 col-12 col-md-4" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
                                            {val.label}
                                        </div>
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
                                                // value={values.name}
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


                        <div className="row btnContainer flex-sm-row-reverse mt-4 mb-3">
                            <div className="mt-3 col-12 col-md-3 p-0">
                                <Button type="submit" className="col-12" disabled={isSubmitting}>Save</Button>
                            </div>
                            <div className="mt-3 col-12 col-md-3 align-self-center quitBtn">
                                <Link to='/feature-options'><Button type="submit" className="col-12">Quit</Button></Link>
                            </div>
                        </div>
                    </Form>
                )
                }

            </Formik>
        </div>
    )
}

export default AccountAdd