import React from 'react';
import './AccountAdd.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio, TextareaAutosize } from '@material-ui/core';
import ErrorMsg from '../../../../components/error-msg/ErrorMsg';
import Address from '../../../../components/address/Address'
import SaveQuitButton from '../../../../components/Forms/save-quit-button/SaveQuitButton';
import NMOButtons from '../../../../components/Forms/Notes-mulp-button/NMOButtons';


const validateField = value => {
    let error
    if(!value){
        error = 'Required'
    }
    return error
}


const AccountAdd = (props) => {

    const formValue = {
        name: '',
        // alias:'',
        printName: '',
        openingBal: '',
        crDr: '',
        prevYearBal: '',
        drCr: '',
        accgroup:'',
        address: {
            id: '',
            addLine1:'' ,
            addLine2: '',
            addLine3: '',
            addLine4:''
        },
        country:'',
        state:'',
        dealertype:'',
        gstin:'',
        aadhar:'',
        tin:'',
        itpan:'',
        ward:'',
        eMail: '',
        mobile: '',
        // whatsAppNo:'',
        telNo: '',
        fax: '',
        contactPerson: '',
        transport: '',
        station: '',
        pincode: '',
        distance: '',
        itcEligibility:'',
        saleCreditDays: '',
        purCreditDays:'',
        defaultSaleType:'',
        defaultPurType:'',
        hsncode: '',
        hsncodeset:'',
        cstNo: '',
        lstNo: '',
        // serviceTaxNo: '',
        // lbtNo: '',
        bankAccountNo: '',
        ieCode:''

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
        label:'Address',
        address: [
            {name: 'id'},
            {name: 'addLine1'},        
            {name: 'addLine2'},
            {name: 'addLine3'},
            {name: 'addLine4'}
    ]
    }
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
        {
            label: `Type Of Dealer`,
            name: 'dealertype',
            values: [
                "Registered",
                "Un-Registered",
                "Composition",
                "Govt. Body",
                "UIN Holder"
            ]
        },



    ]

    

    const accountAddInputText_one = [
                {
            label: 'Op. Bal. (Rs.)',
            name: 'openingBal',
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
                label:'Aadhar',
                name: 'aadhar'
            },
            {
                label: 'TIN',
                name: 'tin'
            },
            {
                label: 'IT PAN',
                name: 'itPan'
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
                name: 'mobile'
            },
            {
                label: 'Tel. No.',
                name: 'tel'
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
                name: 'pincode'
            },
            
         ]



    const accountAdd_dropdown_one = [
        {
            label: `Group`,
            name: 'accgroup',
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
        // {
        //     label: `Reverse Charge`,
        //     name: 'reverseCharge',
        //     values: [
        //         "Based on Daily Limit",
        //         "Compulsory",
        //         "Service Import",
        //         "Not Applicable"
        //     ],
        // }
    ]

    const accountAddInputText_two = [
        {
            label: 'HSN/SAC Code',
            name: 'hsncode',
        },
        {
            label: 'HSN/SAC Code Set',
            name: 'hsncodeset',
        },
        
    ]

    const accountAddInputText_three = [
        {
            label: 'Credit Days for Sale',
            name: 'saleCreditDays',
        },
        {
            label: 'Credit Days for Purchase',
            name: 'purCreditDays',
        },
        {
            label: 'Default Sale Type',
            name: 'defaultSaleType',
        },
        {
            label: 'Default Purchase Type',
            name: 'defaultPurType',
        },
        
        {
            label: 'CST No.',
            name: 'cstNo',
        },
        {
            label: 'LST No.',
            name: 'lstNo',
        },
        // {
        //     label: 'LBT No.',
        //     name: 'lbtNo',
        // },        
        {
            label: "IE Code",
            name: 'ieCode',
        },        
        {
            label: 'Bank A/C No.',
            name: 'bankAccountNo'
        },
    ]

    // const accountAdd_dropdown_three = [
    //     {
    //         label: `Enable Email Query`,
    //         name: 'enableEmailQuery',
    //         values: [
    //             "Y",
    //             "N"
    //         ],
    //     },
    //     {
    //         label: `Enable SMS Query`,
    //         name: 'enableSmsQuery',
    //         values: [
    //             "Y",
    //             "N"
    //         ],
    //     }
    // ]


    return (
        <div className="container-fluid my-4">
            <Formik

                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data)
                    setSubmitting(false);
                }}
            >
 

                {({ values, isSubmitting, handleChange }) => (
                    <Form className="acc_add_container">
                        <h5 className="mb-4 d-flex justify-content-center">Add Account Master</h5>

                        <div className="row justify-content-around">
                            <div className="mb-3 acc_add_container col-md-6">
                        <div className='col-12'>
                                <span className='other_heading'>General Info</span>
                            </div>
                            <div className='row'>
                                

                        {
                                accountAddInputText_name.map((val, index) => (
                                    <div className="mb-3 col-12" key={"inputTextField" + index}>
                                        {val.label}
                                        <Field
                                            type='text'
                                            name={val.name}
                                            placeholder={val.placeholder}
                                            as={TextField}
                                            validate={validateField}
                                        />
                                        <ErrorMessage name={val.name} component={ErrorMsg}/>
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
                                            validate={validateField}
                                        />
                                        <ErrorMessage name={val.name} component={ErrorMsg}/>
                                    </div>
                                ))
                            }
                            {
                            <Address/>
                            }
                            {
                                accountAdd_dropdown_address.map((val, index) => (
                                    <div className="mb-5 col-12 col-md-7" key={"inputDropdownValue" + index}>
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
                                            validate={validateField}
                                        />
                                        <ErrorMessage name={val.name} component={ErrorMsg}/>
                                    </div>
                                ))
                            }
                            </div>

                        </div>

                        <div className="mb-3 acc_add_container col-md-6">
                            <div className='col-12 '>    
                                <span className='other_heading'>Other Info</span>
                            </div>
                            <div className='row'>
                            {
                                accountAdd_dropdown_two.map((val, index) => (
                                    <div className="mb-4 col-12 col-md-6" key={"inputDropdownValue" + index}>
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
                                                validate={validateField}
                                            >
                                                <option defaultValue>Select an Option</option>
                                                {
                                                    val.values.map((cval, cindex) => (
                                                        <option key={"optionValues" + cindex} value={cval}>{cval}</option>
                                                    ))
                                                }
                                            </select>
                                            <ErrorMessage name={val.name}/>
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
                                            validate={validateField}
                                        />
                                        <ErrorMessage name={val.name}/>
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
                                            validate={validateField}
                                        />
                                        <ErrorMessage name={val.name}/>
                                    </div>
                                ))
                            }
                            {/* {
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
                            } */}
                            </div>

                        </div>
                       </div> 

                       <NMOButtons />
                        
                        
                        <SaveQuitButton isSubmitting={isSubmitting}/>

                        {/* <div className="row btnContainer flex-sm-row mt-4 mb-3">
                            <div className="mt-3 col-12 col-md-3 col-lg-2 p-0">
                                <Link to='/accounts'><Button type="submit" className="col-12">Notes</Button></Link>
                            </div>
                            <div className="mt-3 col-12 col-md-3 col-lg-2 align-self-center quitBtn">
                                <Button type="submit" className="col-12">Opt. Fields</Button>
                            </div>
                            <div className="mt-3 col-12 col-md-3 col-lg-2 align-self-center quitBtn pl-0">
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
                        </div> */}
                    </Form>
                )
                }

            </Formik>
        </div>
    )
}

export default AccountAdd