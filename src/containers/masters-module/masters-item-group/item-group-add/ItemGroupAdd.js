import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const ItemGroupAdd = (props) => {

    const formValue = {
        group: '',
        alias: '',
        underGroup: '',
        stockAccount: '',
        salesAccount: '',
        purchaseAccount: '',
        hsnCode: '',
        taxCategory: ''
    }

    const inputGroupAddInputText_one = [
        {
            label: 'Group',
            name: 'group',
        },
        {
            label: 'Alias',
            name: 'alias',
        },
    ]

    const itemGroupAdd_dropdown_one = [
        {
            label: 'Primary Group (Y/N)',
            name: 'primaryGroup',
            values: [
                'Y',
            ]
        }
    ]

    const inputGroupAddInputText_two = [
        {
            label: 'Under Group',
            name: 'underGroup',
        },
    ]

    const inputGroupAddInputText_three = [
        {
            label: 'Stock Account',
            name: 'stockAccount',
        },
        {
            label: 'Sales Account',
            name: 'salesAccount',
        },
        {
            label: 'Purchase Account',
            name: 'purchaseAccount',
        },
    ]

    const itemGroupAdd_dropdown_two = [
        {
            label: 'Specify HSN Code',
            name: 'specifyHsnCode',
            values: [
                'Y',
            ]
        }
    ]
    const inputGroupAddInputText_four = [
        {
            label: 'HSN Code',
            name: 'hsnCode',
        },
    ]

    const itemGroupAdd_dropdown_three = [
        {
            label: 'Specify Tax Category',
            name: 'specifyTaxCategory',
            values: [
                'Y',
            ]
        }
    ]
    const inputGroupAddInputText_five = [
        {
            label: 'Tax Category',
            name: 'taxCategory',
        },
    ]

    return (
        <div className="container containerWidth my-4">
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
                        <div className="text-center mb-4"><strong>Add Item Group Master</strong></div>
                        <div className="row">
                            {
                                inputGroupAddInputText_one.map((val, index) => (
                                    <div className="mb-3 col-12 " key={"inputTextField" + index}>
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
                        <div className="row">
                            {
                                itemGroupAdd_dropdown_one.map((val, index) => (
                                    <div className="mb-2 mt-2 col-12 col-md-4" key={"inputDropdownValue" + index}>
                                        {val.label}
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
                                                // value={values.name}
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
                        <div className="row">
                            {
                                inputGroupAddInputText_two.map((val, index) => (
                                    <div className="mb-2 col-12 col-md-6" key={"inputTextField" + index}>
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
                        <div className="row">
                            {
                                inputGroupAddInputText_three.map((val, index) => (
                                    <div className="mb-2 col-12" key={"inputTextField" + index}>
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

                        <div className="row">
                            {
                                itemGroupAdd_dropdown_two.map((val, index) => (
                                    <div className="mb-2 mt-2 col-4" key={"inputDropdownValue" + index}>
                                        {val.label}
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
                                                // value={values.name}
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
                            {
                                inputGroupAddInputText_four.map((val, index) => (
                                    <div className="mb-2 col-8" key={"inputTextField" + index}>
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

                        <div className="row">
                            {
                                itemGroupAdd_dropdown_three.map((val, index) => (
                                    <div className="mb-2 mt-2 col-4" key={"inputDropdownValue" + index}>
                                        {val.label}
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
                                                // value={values.name}
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
                            {
                                inputGroupAddInputText_five.map((val, index) => (
                                    <div className="mb-2 col-8" key={"inputTextField" + index}>
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

export default ItemGroupAdd