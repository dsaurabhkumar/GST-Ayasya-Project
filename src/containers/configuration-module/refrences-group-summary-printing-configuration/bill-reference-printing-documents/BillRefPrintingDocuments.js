import React from 'react';
import './BillRefPrintingDocuments.css';
import { TextField, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';


const BillRefPrintingDocuments = () => {

    const formValue = {
        billRefNo_text: "",
        billRefDate_text: "",
        RefAmount_text: "",
        dueDate_text: "",
    }

    const radioBtn = [
        {
            key: 'Use Seprate Line For Each Bill No',
            value: 'useSeprateLineForEachBillNo',
        },
        {
            key: 'Conncatenate all Bill Nos',
            value: 'concatenateAllBillNo',
        },

    ]

    const dropDown = [

        {
            label: 'Bill Ref. No',
            name: 'billRefNo',
            values: [
                "Y",
            ]
        },
        {
            label: 'Bill Ref. Date',
            name: 'billRefDate',
            values: [
                "Y",
            ]
        },
        {
            label: 'Bill Ref. Amount',
            name: 'billRefAmount',
            values: [
                "Y",
            ]
        },
        {
            label: 'Due Date',
            name: 'dueDate',
            values: [
                "Y",
            ]
        },
    ]

    const inputText = [
        {
            label: 'Bill Ref. No.',
            name: 'billRefNo_text',
        },
        {
            label: 'Bill Ref. Date',
            name: 'billRefDate_text',
        },
        {
            label: 'Ref. Amount',
            name: 'RefAmount_text',
        },
        {
            label: 'Due Date',
            name: 'dueDate_text',
        },
    ]

    return (
        <div className="container mt-4 mb-4">
            <h2 className="text-center mb-4">Bill Details Printing Configuration (for)</h2>
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

                        <span className="exciseHeadingText">Bill Printing Option</span>
                        <div className="billRefrenceRadioBtn mb-5 row">
                            {
                                radioBtn.map((val, index) => (
                                    <div className="mb-2 col-12 col-md-6" key={"radioInputKey" + index}>
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

                        <div className="row">
                            <b className="col-4">Bill Details</b>
                            <b className="col-4 text-center">Required</b>
                            <b className="col-4 text-center">Width</b>
                        </div>

                        <div className="row mt-4">
                            <div className="col-8 col-md-7">
                                {
                                    dropDown.map((val, index) => (
                                        <div className="dropdownItemValue dropdownWidth mb-4" key={"inputDropdownValue" + index}>
                                            <div className="dropDownHeading">
                                                {val.label}
                                            </div>
                                            <FormControl>
                                                <select
                                                    type='select'
                                                    name={val.name}
                                                    value={values.name}
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
                            <div className="col-4 col-md-5 billRefTextField">
                                {
                                    inputText.map((val, index) => (
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
    );
};

export default BillRefPrintingDocuments;