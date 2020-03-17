import React from 'react';
import './BatchWiseDetails.css';
import { Formik, Field, Form } from 'formik';
import { Button, FormControl, Radio, Checkbox, FormControlLabel } from '@material-ui/core';

const BatchWiseDetails = (props) => {

    const formValue = {

    }

    const radioBtnFormTen_One = [
        {
            key: 'Full Date Format',
            value: 'Full Date Format',
            heading: 'Batch-wise Detail Options'
        },
        {
            key: 'Month-Year Format',
            value: 'Month-Year Format',
        },
        {
            key: 'Not Required',
            value: 'Not Required',
        },
    ]

    const radioBtnFormTen_Two = [
        {
            key: 'Full Date Format',
            value: 'Full Date Format',
        },
        {
            key: 'Month-Year Format',
            value: 'Month-Year Format',
        },
        {
            key: 'Not Required',
            value: 'Not Required',
        },
    ]

    const dropDownFormTen_One = [
        {
            label: 'Allow Issue of Expired Batches',
            name: 'issueExpiredBatches',
            values: [
                "Allow",
                "Don't Allow",
                "Allow with Warning",
            ]
        },
    ]

    const dropDownFormTen_Two = [
        {
            label: 'Allow Negative Stock',
            name: 'allowNegativeStock',
            values: [
                "Allow",
                "Don't Allow",
                "Allow with Warning",
            ]
        },
        {
            label: 'Allow Duplicate Batches',
            name: 'allowDuplicateBatches',
            values: [
                "Allow",
                "Don't Allow",
                "Allow with Warning",
            ]
        },
    ]

    const checkBoxDataFormTen = [
        {
            title: 'Disallow carrying Negative Stock Batches to Next Year',
            value: 'Disallow carrying Negative Stock Batches to Next Year',
        },
        {
            title: 'Show Zero Stock Batches in Append List',
            value: 'Show Zero Stock Batches in Append List',
        },
        {
            title: 'Enforce Full Qty allocation to Batches',
            value: 'Enforce Full Qty allocation to Batches',
        },
        {
            title: 'Maintain Sales Price',
            value: 'Maintain Sales Price',
        },
        {
            title: 'Maintain MRP',
            value: 'Maintain MRP',
        },
        {
            title: 'Maintain Batch Narration',
            value: 'Maintain Batch Narration',
        },
        {
            title: 'Show Pending Batches Till Voucher Date',
            value: 'Show Pending Batches Till Voucher Date',
        },
        {
            title: 'Disallow carrying expired batches to next financial year',
            value: 'Disallow carrying expired batches to next financial year',
        },
        {
            title: `Do not show 'Expired' Batches for adjustment`,
            value: `Do not show 'Expired' Batches for adjustment`,
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
                    props.submittedData(data);
                }}
            >
                {({ values, isSubmitting, handleChange }) => (
                    <Form>
                        <div>
                            <div className="radioBtnsOne">
                                <span className="inputHeadingOne">Batch Manufacturing Date Input Format</span>
                                {
                                    radioBtnFormTen_One.map((val, index) => (
                                        <div className="row mb-2 mt-2" key={"radioInputKey" + index}>
                                            <h5 className="modalHeading">{val.heading}</h5>
                                            <div className="col-6 col-md-6">
                                                {val.key}
                                            </div>
                                            <div className="col-6 col-md-6">
                                                <Field
                                                    type='radio'
                                                    name='radioBtnsOne'
                                                    value={val.value}
                                                    as={Radio}
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="radioBtnsOne mt-4">
                                <span className="inputHeadingTwo">Batch Expiry Date Input Format</span>
                                {
                                    radioBtnFormTen_Two.map((val, index) => (
                                        <div className="row mb-2" key={"radioInputKey" + index}>
                                            <div className="col-6 col-md-6">
                                                {val.key}
                                            </div>
                                            <div className="col-6 col-md-6">
                                                <Field
                                                    type='radio'
                                                    name='radioBtnsTwo'
                                                    value={val.value}
                                                    as={Radio}
                                                />
                                            </div>
                                        </div>
                                    ))
                                }

                                {
                                    dropDownFormTen_One.map((val, index) => (
                                        <div className="row mb-3" key={"inputDropdownValue" + index}>
                                            <div className="col-7 col-md-7">
                                                {val.label}
                                            </div>

                                            <div className="col-5 col-md-5">
                                                <FormControl>
                                                    <select
                                                        type='select'
                                                        name={val.name}
                                                        value={values.name}
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
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="mt-4">
                                {
                                    dropDownFormTen_Two.map((val, index) => (
                                        <div className="row mb-3" key={"inputDropdownValue" + index}>
                                            <div className="col-7 col-md-7">
                                                {val.label}
                                            </div>

                                            <div className="col-5 col-md-5">
                                                <FormControl>
                                                    <select
                                                        type='select'
                                                        name={val.name}
                                                        value={values.name}
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
                                        </div>
                                    ))
                                }

                                <div className="mt-4">
                                    {
                                        checkBoxDataFormTen.map((val, index) => (
                                            <div key={"inputCheckboxKey" + index}>
                                                <h5 className="modalHeading">{val.heading}</h5>
                                                <FormControlLabel
                                                    label={val.title}
                                                    control={
                                                        <Field
                                                            type='checkbox'
                                                            name="checkbox"
                                                            value={val.value}
                                                            as={Checkbox} />
                                                    }
                                                />
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
                        </div>
                    </Form>
                )
                }
            </Formik>
        </div>
    )
}
export default BatchWiseDetails