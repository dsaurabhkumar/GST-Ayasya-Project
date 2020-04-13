import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const DiscountStructureAdd = (props) => {

    const formValue = {
        structureName: '',
        specifyCaptionForDiscount: ''
    }

    const discount_structure_add_text_one = [
        {
            label: 'Structure Name',
            name: 'structureName',
        },
    ]

    const discount_structure_add_radio_one = [
        {
            key: 'Simple Discount',
            value: 'simpleDiscount',
        },
    ]

    const discount_structure_add_radio_two = [
        {
            key: 'Absolute Amount',
            value: 'absoluteAmount',
        },
        {
            key: 'Per Packaging Qty.',
            value: 'perPackagingQty',
        },
        {
            key: 'Per Main Qty.',
            value: 'perMainQty',
        },
        {
            key: 'Per Alt. Qty.',
            value: 'perAltQty',
        },
        {
            key: 'Percentage',
            value: 'percentage',
        },
    ]

    const discount_structure_add_radio_three = [
        {
            key: 'Item Price',
            value: 'itemPrice',
        },
        {
            key: 'Item Amount',
            value: 'itemAmount',
        },
        {
            key: 'Item MRP',
            value: 'itemMrp',
        },
    ]

    const discount_structure_add_text_two = [
        {
            label: 'Specify Caption for Discount',
            name: 'specifyCaptionForDiscount',
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
                        <div className="text-center"><strong>Add Discount Structure Master</strong></div>
                        <div className="row mt-4">
                            {
                                discount_structure_add_text_one.map((val, index) => (
                                    <div className="mt-2 mb-2 col-12 col-md-12" key={"inputTextField" + index}>
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

                        <h5><span className="mt-2 headingAlign">Discount Type</span></h5>
                        <div className="row inventoryForm">
                            {
                                discount_structure_add_radio_one.map((val, index) => (
                                    <div className="mb-2 col-12 col-md-6 p-0" key={"radioInputKey" + index}>
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

                        <h5><span className="mt-2 headingAlign">Amount of Discount to be fed as</span></h5>
                        <div className="row inventoryForm">
                            {
                                discount_structure_add_radio_two.map((val, index) => (
                                    <div className="mb-2 col-12 col-md-6 p-0" key={"radioInputKey" + index}>
                                        <div className="radioBtnTextAlign">
                                            <Field
                                                type='radio'
                                                name='radioBtnsTwo'
                                                value={val.value}
                                                as={Radio}
                                            />
                                            {val.key}
                                        </div>

                                    </div>
                                ))
                            }

                            <h5><span className="mt-2 headingAlign">Amount of Discount to be fed as</span></h5>
                            <div className="row inventoryForm divWidth">
                                {
                                    discount_structure_add_radio_three.map((val, index) => (
                                        <div className="mb-2 col-12 col-md-4 p-0" key={"radioInputKey" + index}>
                                            <div className="radioBtnTextAlign">
                                                <Field
                                                    type='radio'
                                                    name='radioBtnsThree'
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

                        <div>
                        <div className="row mt-4">
                            {
                                discount_structure_add_text_two.map((val, index) => (
                                    <div className="mt-2 mb-2 col-12 col-md-12" key={"inputTextField" + index}>
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

export default DiscountStructureAdd