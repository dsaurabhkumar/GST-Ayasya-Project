import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const TaxCategoryAdd = (props) => {

    const formValue = {
        name: '',
        taxRateIGST: '',
        taxRateCGST: '',
        taxRateSGST: '',
        calculatedTaxOn: '',
        taxOnMrpMode: '',
        tax_RateIGST: '',
        tax_RateCGST: '',
        tax_RateSGST: ''
    }

    const tax_category_add_text_one = [
        {
            label: 'Name',
            name: 'name',
        },
    ]

    const tax_category_add_dropdown_one = [
        {
            label: 'Type',
            name: 'type',
            values: [
                "Goods",
                "Services"
            ]
        },
    ]

    const tax_category_add_text_two = [
        {
            label: 'Tax Rate (IGST)',
            name: 'taxRateIGST',
            placeholder: '0.00',
            description: '(For Inter-State Transactions)'
        },
        {
            label: 'Tax Rate (CGST)',
            name: 'taxRateCGST',
            placeholder: '0.00',
            description: '(For Inter-State Transactions)'
        },
        {
            label: 'Tax Rate (SGST)',
            name: 'taxRateSGST',
            placeholder: '0.00',
            description: '(For Inter-State Transactions)'
        },
    ]

    const tax_category_add_dropdown_two = [
        {
            label: 'Zero Tax Type',
            name: 'zeroTaxType',
            values: [
                "Exempt",
                "Zero-Rated",
                "Nil-Rated",
                "Non-GST"
            ]
        },
    ]

    const tax_category_add_dropdown_three = [
        {
            label: 'Tax on MRP',
            name: 'taxOnMRP',
            description: '(Only for Multi-Tax Vouchers)',
            values: [
                "Y"
            ]
        },
    ]

    const tax_category_add_text_three = [
        {
            label: 'Calculated Tax On',
            name: 'calculatedTaxOn',
            placeholder: '100.00',
            description: '% of Amount'
        },
        {
            label: 'Tax on MRP mode',
            name: 'taxOnMrpMode',
        },
    ]

    const tax_category_add_dropdown_four = [
        {
            label: 'Change Tax Rate on the Basis of Price',
            name: 'changeTaxRateOnBasisOfPrice',
            values: [
                "Y"
            ]
        },
    ]

    const tax_category_add_text_four = [
        {
            label: 'Tax Rate (IGST)',
            name: 'tax_RateIGST',
            placeholder: '0.00',
            description: '(For Inter-State Transactions)'
        },
        {
            label: 'Tax Rate (CGST)',
            name: 'tax_RateCGST',
            placeholder: '0.00',
            description: '(For Inter-State Transactions)'
        },
        {
            label: 'Tax Rate (SGST)',
            name: 'tax_RateSGST',
            placeholder: '0.00',
            description: '(For Inter-State Transactions)'
        },
    ]

    const tax_category_add_dropdown_five = [
        {
            label: 'Zero Tax Type',
            name: 'zeroTaxType',
            values: [
                "Exempt",
                "Zero-Rated",
                "Nil-Rated",
                "Non-GST"
            ]
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
                        <div className="text-center"><strong>Tax Category Details</strong></div>
                        <div className="row mt-4">
                            {
                                tax_category_add_text_one.map((val, index) => (
                                    <div className="mt-2 mb-2 col-12 col-md-6" key={"inputTextField" + index}>
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
                                tax_category_add_dropdown_one.map((val, index) => (
                                    <div className="mt-2 mb-2 col-12 col-md-6" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
                                            {val.label}
                                        </div>
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
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

                        <h5><span className="mt-2 headingAlign">GST Rate Info</span></h5>
                        <div className="row inventoryForm">
                            {
                                tax_category_add_text_two.map((val, index) => (
                                    <div className="mb-4 col-12 col-md-6" key={"inputTextField" + index}>
                                        {val.label}
                                        <Field
                                            type='text'
                                            name={val.name}
                                            placeholder={val.placeholder}
                                            as={TextField}
                                        />
                                        {val.description}
                                    </div>
                                ))
                            }
                            {
                                tax_category_add_dropdown_two.map((val, index) => (
                                    <div className="mb-2 col-12 col-md-6" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
                                            {val.label}
                                        </div>
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
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
                                tax_category_add_dropdown_three.map((val, index) => (
                                    <div className="mb-2 col-12 col-md-6" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
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
                                        {val.description}
                                    </div>
                                ))
                            }

                            <div className="mt-4 row pl-3 pr-3">
                            {
                                tax_category_add_text_three.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-6" key={"inputTextField" + index}>
                                        {val.label}
                                        <Field
                                            type='text'
                                            name={val.name}
                                            placeholder={val.placeholder}
                                            as={TextField}
                                        />
                                        <div>
                                        {val.description}
                                        </div>
                                    </div>
                                ))
                            }
                            </div>

                            <div className="row pl-3 pr-3">
                            {
                                tax_category_add_dropdown_four.map((val, index) => (
                                    <div className="mb-2 col-12 col-md-12" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
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
                                        {val.description}
                                    </div>
                                ))
                            }
                            </div>

                            <div className="row mt-4 pl-3 pr-3">
                            {
                                tax_category_add_text_four.map((val, index) => (
                                    <div className="mt-2 mb-2 col-12 col-md-6" key={"inputTextField" + index}>
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
                                tax_category_add_dropdown_five.map((val, index) => (
                                    <div className="mt-2 mb-2 col-12 col-md-6" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
                                            {val.label}
                                        </div>
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
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

export default TaxCategoryAdd