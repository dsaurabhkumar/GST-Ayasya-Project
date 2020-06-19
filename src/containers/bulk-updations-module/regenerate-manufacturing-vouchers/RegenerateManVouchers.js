import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import DatePicker from '../../../components/date-picker/DatePicker';
import {  Button, FormControl} from '@material-ui/core';

const RegenerateManVouchers = (props) => {

    const formValue = {
    }

    const select_BOM_dropdown = [
        {
            name: 'Select BOM',
            label: 'Select BOM',
            values: [
                "From Api",
            ]
        },
    ]

    const select_date = [
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
                <h2>Regenerate Production/Unassemble Voucher</h2>
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
                        <div className="text-center">
                        <strong> This Utility Regenerates the Existing Production/ Unassemble Voucher for the Selected BOM</strong>
                        </div>
                        <div className="inventoryForm mt-3">
                                {
                                    select_BOM_dropdown.map((val, index) => (
                                        <div className="mt-3 mb-3 row" key={"inputDropdownValue" + index}>
                                            <div className="col-6 col-md-6">
                                                {val.label}
                                            </div>
                                            <div className="col-6 col-md-6">
                                            <FormControl>
                                                <select
                                                    type='select'
                                                    name={val.name}
                                                    multiple={false}
                                                    className={val.className}
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
                                            <div className="row datePicker mt-3">
                                                {
                                                    select_date.map((val, index) => (
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
        </div >
    )

}

export default RegenerateManVouchers;