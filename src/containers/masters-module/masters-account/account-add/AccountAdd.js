import React from 'react';
import './AccountAdd.css';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio, TextareaAutosize } from '@material-ui/core';

const AccountAdd = (props) => {

    const formValue = {
        name: '',
        // alias:'',
        printName: '',
        opBal: '',
        crDr: '',
        prevYearBal: '',
        drCr: '',
        address: '',
        gstin:'',
        aadhar:'',
        tin:'',
        itpan:'',
        ward:'',
        eMail: '',
        mobileNo: '',
        whatsAppNo:'',
        telNo: '',
        fax: '',
        contactPerson: '',
        transport: '',
        station: '',
        pinCode: '',
        distance: '',
        hsnSacCode: '',
        hsncodeset:'',
        cstNo: '',
        lstNo: '',
        serviceTaxNo: '',
        lbtNo: '',
        bankAcNo: ''
    }

    const accountAddInputText_name=[
        {
            label: 'Name',
            name: 'name',
        },
        // {
        //     label: 'Alias',
        //     name: 'Alias',
        // },
        {
            label: 'Print Name',
            name: 'printName',
        },


    ]

    const accountAddInputText_address=[
        {
            label: 'Address',
            name: 'address',
        },

    ]

    const accountAdd_dropdown_address=[        
        {
        label: `Country`,
        name: 'country',
        values: [
            "India",
            "Australia",
            "United State of America",
            "Canada",
            "Franse",
             "Italy",         
            ]
        },

        {
            label: `State`,
            name: 'state',
            values: [
                "Delhi",
                "Hariyana",
                "Madhya Pradesh",
                "Uttar Pradesh",
                "Bihar",
                "Maharashtra",
            ]
        },


    ]

    

    const accountAddInputText_one = [
                {
            label: 'Op. Bal. (Rs.)',
            name: 'opBal',
            placeholder: '0.00'
        },
        {
            label: 'CR/DR',
            name: 'crDr',
            placeholder: 'C/D'
        },
        {
            label: 'Prev Year Bal. (Rs.)',
            name: 'prevYearBal',
            placeholder: '0.00'
        },
        {
            label: 'CR/DR',
            name: 'drCr',
            placeholder: 'C/D'
        },
         ]

         const accountAdd_personal_info=[
            {
                label: 'GSTIN / UIN',
                name: 'gstin'
            },
            {
                label: 'Filing Freq',
                name: 'filingFreq'
            },
            {
                label:'Aadhar',
                name: 'aadhar'
            },
            {
                label: 'TIN',
                name: 'tin'
            },
            {
                label: 'IT PAN',
                name: 'itpan'
            },
            {
                label: 'Ward',
                name: 'ward'
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
            },
            {
                label: 'Distance',
                name: 'distance'
            }
    
         ]



    const accountAdd_dropdown_one = [
        {
            label: `Group`,
            name: 'group',
            values: [
                "Bank Accounts",
                "Sundry Creditors",
                "Sundry Debtors",
                "Bank O/D Accounts",
                "Capital Account",
                "Cash-in-hand",
                "Current Assets",
                "Current Liabilities",
                "Duties & Taxes",
                "Expenses (Direct/Mfg.)",
                "Expenses (Indirect/Admin.)",
                "Fixed Assets",
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
        {
            label: 'HSN/SAC Code Set',
            name: 'hsncodeset',
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
        <div className="container my-5">
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
                        <h5 className="mb-4 d-flex justify-content-center">Add Account Master</h5>

                        <div className="row acc_add_container mb-5">
                        <div className='col-12'>
                                <span className='other_heading'>General Info</span>
                            </div>

                        {
                                accountAddInputText_name.map((val, index) => (
                                    <div className="mb-3 col-8" key={"inputTextField" + index}>
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
                                    <div className="mb-5 my-4 col-12 col-md-8" key={"inputDropdownValue" + index}>
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
                                accountAddInputText_one.map((val, index) => (
                                    <div className="mb-3 col-6" key={"inputTextField" + index}>
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
                                accountAddInputText_address.map((val, index) => (
                                    <div className="mb-3 col-8" key={"inputTextField" + index}>
                                        {val.label}
                                        <Field
                                            type='textarea'
                                            name={val.name}
                                            placeholder={val.placeholder}
                                            as={TextareaAutosize}
                                        />
                                    </div>
                                ))
                            }
                                             {
                                accountAdd_dropdown_address.map((val, index) => (
                                    <div className="mb-5 col-12 col-md-8" key={"inputDropdownValue" + index}>
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
                                 accountAdd_personal_info.map((val, index) => (
                                    <div className="mb-3 col-6" key={"inputTextField" + index}>
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

                        <div className="row acc_add_container mb-3">
                            <div className='col-12'>
                                <span className='other_heading'>Other Info</span>
                            </div>
                            {
                                accountAdd_dropdown_two.map((val, index) => (
                                    <div className="mb-4 col-12 col-md-4" key={"inputDropdownValue" + index}>
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
                                    <div className="mb-3 col-6 col-md-6" key={"inputTextField" + index}>
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
                                accountAddInputText_three.map((val, index) => (
                                    <div className="mb-3 col-6 col-md-6" key={"inputTextField" + index}>
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
                                    <div className="mb-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
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

                        <div className="row btnContainer flex-sm-row mt-4 mb-3">
                            <div className="mt-3 col-12 col-md-3 p-0">
                                <Link to='/accounts'><Button type="submit" className="col-12">Notes</Button></Link>
                            </div>
                            <div className="mt-3 col-12 col-md-3 align-self-center quitBtn">
                                <Button type="submit" className="col-12">Opt. Fields</Button>
                            </div>
                            <div className="mt-3 col-12 col-md-3 align-self-center quitBtn pl-0">
                                <Link to='/accounts'><Button type="submit" className="col-12">Multiple Alias</Button></Link>
                            </div>
                        </div>


                        <div className="row col-12 btnContainer flex-sm-row-reverse mt-4 mb-3">
                            <div className="mt-3 col-sm-6 col-md-2">
                                <Button type="submit" className="col-12" disabled={isSubmitting}>Save</Button>
                            </div>
                            <div className="mt-3 col-sm-6 col-md-2 align-self-center ">
                                <Link to='/'><Button type="submit" className="col-12" color="primary" variant="outlined">Quit</Button></Link>
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