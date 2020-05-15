import React, {useState} from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import DatePicker from '../../../../components/date-picker/DatePicker'
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const BillWiseRefer = () => {


    const formValue = {
        showBills: "",
        selectAccount: "",
        startDate: "",
        endDate: ""
    }

    const group_of_account_dropdown = [
        {
            label: 'Show Bills',
            name: 'showBills',
            values: [
                "All",
                "Uncleared",

            ]
        },
        {
            label: 'Select Account',
            name: 'selectAccount',
            values: [
                "Busy Infotech Pvt. ltd.",
            ]
        }
    ]

    const inputText_one = [
        {
            label: 'Start Date',
            name: 'startDate',
        },
        {
            label: 'End Date',
            name: 'endDate',
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
                            {
                                group_of_account_dropdown.map((val, index) => (
                                    <div className="mt-3 mb-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
                                        {val.label}
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
                                    <div className="mb-3 col-12 col-md-6" key={"DatePicker" + index}>
                                        {val.label}
                                        <DatePicker
                                        value={val.value}
                                        name={val.name}
                                        />
                                    </div>
                                ))
                            }
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