import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const BillWiseRefer = () => {

    const formValue = {
        showBills: "",
        selectAccount: "",
        startDate:"",
        endDate: ""
    }

    const label = [
        {
            label: 'Show Bills',
        },
        {
            label: 'Select Account',
        },
        {
            label: 'Start Date',
        },
        {
            label: 'End Date',
        },
    ]

    const group_of_account_dropdown = [
        {
            name: 'showBills',
            values: [
                "All",
                "Uncleared",
                
            ]
        },
        {
            name: 'selectAccount',
            values: [
                "Busy Infotech Pvt. ltd.",
            ]
        }
    ]

    const inputText_one = [
        {
            name: 'startDate',
            placeholder: '1-4-2020'
        },
        {
            name: 'endDate',
            placeholder: '1-4-2020'
        },
    ]

    return (
        <div className="container containerWidth mt-4 mb-4">
            <div className="text-center mb-4">
                <strong>Bills References Adjustment Wizard</strong>
            </div>

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
                        <div className="row">
                            <div className="col-6 col-md-6 mt-3 p-0">
                                {
                                    label.map((val, index) => (
                                        <div className="dropdownItemValue dropdownWidth mb-4" key={"inputText" + index}>
                                            <div className="dropDownHeading">
                                                {val.label}
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                            <div className="col-6 col-md-6">
                                {
                                    group_of_account_dropdown.map((val, index) => (
                                        <div className="mt-3 mb-3" key={"inputDropdownValue" + index}>
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
                                {
                                    inputText_one.map((val, index) => (
                                        <div className="mb-3" key={"inputTextField" + index}>
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

export default BillWiseRefer;;