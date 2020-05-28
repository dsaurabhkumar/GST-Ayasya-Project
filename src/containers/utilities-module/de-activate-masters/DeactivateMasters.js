import React, { useState, useEffect } from 'react';
import './DeactivateMasters.css'
import { Formik, useFormikContext, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const DeactivateMasters = (props) => {
    const [dropdownvalue, setdropdownvalue] = useState(null);
    const [masterType, setMasterType] = useState(false);

    const formValue = {
        radioBtnsOne: "",
    }

    const ref_dropdown_one = [
        {
            label: 'Master Type',
            name: 'masterType',
            values: [
                "Account",
                "Account Group",
                "Item",
                "Item Group",
                "Material Center",
                "Material Centre Group",
                "Bill Sundry",
                "Bill Of aterial",
                "Sale Type",
                "Purchase Type"

            ]
        },
    ]


    const select_range_radio = [
        {
            key: 'All Accounts',
            value: 'AllAccount',
        },
        {
            key: 'Group of Accounts',
            value: 'GroupOfAccounts',
        },
    ]

    const ref_dropdown_two = [
        {
            label: 'Master Name',
            name: 'masterName',
            values: [
                "Bank Accounts",
                "Bank O/D Account",
                "Capital Account",
                "Cash-in-hanand",
                "Current Assets"

            ]
        },
    ]

    const ref_dropdown_three = [
        {
            label: 'De-Activate',
            name: 'deActivate',
            values: [
                "Y"

            ]
        },
    ]

    const inputText = [
        {
            label: 'Present Status',
            name: 'presentStatus'
        },

    ]

    return (
        <div className="container containerWidth mt-4 mb-4">
            <div className="text-center mb-4">
                <strong>De-Active Master</strong>
            </div>
            <h5><span className="mt-2 headingAlign">Select Range</span></h5>

            <Formik

                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data)
                    console.log("[DROPDOWN vALUE]: ", dropdownvalue)
                    setSubmitting(false);
                }}
            >


                {({ values, isSubmitting, handleChange }) => (
                    <Form className="inventoryForm">
                        <div className="row">
                            <div className="col-12 col-md-12">
                                {
                                    ref_dropdown_one.map((val, index) => (
                                        <div className="mt-3 mb-3 deactivateMasterDisplay" key={"inputDropdownValue" + index}>
                                            <div className="col-5 col-md-6 p-0">
                                                {val.label}
                                            </div>
                                            <FormControl>
                                                <Field
                                                    as='select'
                                                    name={val.name}
                                                onChange={event => {
                                                    setMasterType(event.target.name === 'masterType')
                                                    setdropdownvalue(event.target.value);
                                                }}
                                                >
                                                    <option defaultValue>select</option>
                                                    {
                                                        val.values.map((cval, cindex) => (
                                                            <option key={"optionValues" + cindex} value={cval}>{cval}</option>
                                                        ))
                                                    }
                                                </Field>
                                            </FormControl>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className={dropdownvalue !== null ? "d-block" : "d-none"}>
                            <span className="exciseHeadingText">Select</span>
                            <div className="row">
                                <div className="exciseRadioBtns deactivateRadioDisplay">
                                    {
                                        select_range_radio.map((val, index) => (
                                            <div className="mb-2 col-6 col-md-6" key={"radioInputKey" + index}>
                                                <div className="radioBtnTextAlign">
                                                    <Field
                                                        type='radio'
                                                        name='radioBtnsOne'
                                                        value={val.value}
                                                        as={Radio}
                                                    />
                                                    {val.key}
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-12">
                                {
                                    ref_dropdown_two.map((val, index) => (
                                        <div className="mt-3 mb-3 blockAccountInput" key={"inputDropdownValue" + index}>
                                            <div className="col-5 col-md-6 p-0">
                                                {val.label}
                                            </div>
                                            <FormControl>
                                                <select
                                                    type='select'
                                                    name={val.name}
                                                    multiple={false}
                                                    onChange={handleChange}
                                                >
                                                    <option defaultValue>Select</option>
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

                        <div className="row">
                            <div className="col-12 col-md-12">
                                {
                                    ref_dropdown_three.map((val, index) => (
                                        <div className="mt-3 mb-3 blockAccountInput" key={"inputDropdownValue" + index}>
                                            <div className="col-5 col-md-6 p-0">
                                                {val.label}
                                            </div>
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
                            <div className="col-12 col-md-12">
                                {
                                    inputText.map((val, index) => (
                                        <div className="mb-3 mt-3 blockAccountInput" key={"inputTextField" + index}>
                                            <div className="col-5 col-md-6 p-0">
                                                {val.label}
                                            </div>
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

export default DeactivateMasters;;