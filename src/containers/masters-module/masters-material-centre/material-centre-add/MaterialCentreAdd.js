import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const MaterialCentreAdd = (props) => {

    const formValue = {
        name: '',
        alias: '',
        printName: '',
        salesAccount: '',
        purcAccount: '',
        accountingInStockTransfer: '',
        address: ''
    }

    const materialCentreAdd_Text_one = [
        {
            label: 'Name',
            name: 'name',
        },
        {
            label: 'Alias',
            name: 'alias',
        },
        {
            label: 'Print Name',
            name: 'printName',
        },
    ]

    const materialCentreAdd_dropdown_one = [
        {
            label: `Group`,
            name: 'group',
            values: [
                "Godowns",
                "Production Floors",
                "Stores"
            ]
        },
        {
            label: `Stock Account`,
            name: 'stockAccount',
            values: [
                "Stock"
            ]
        }
    ]

    const materialCentreAdd_dropdown_two = [
        {
            label: `Reflect the Stock in Balance Sheet ?`,
            name: 'reflectTheStock',
            values: [
                "Y"
            ]
        },
    ]

    const materialCentreAdd_Text_two = [
        {
            label: 'Sales Account',
            name: 'salesAccount',
        },
        {
            label: 'Purc. Account',
            name: 'purcAccount',
        },
        {
            label: 'Accounting in Stock Transfer',
            name: 'accountingInStockTransfer',
        },
    ]

    const materialCentreAdd_Text_three = [
        {
            label: 'Address',
            name: 'address',
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
                        <h5 className="text-center mb-4">Add Material Centre Master</h5>
                        <div className="row">
                            {
                                materialCentreAdd_Text_one.map((val, index) => (
                                    <div className="mb-3 col-12" key={"inputTextField" + index}>
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
                                materialCentreAdd_dropdown_one.map((val, index) => (
                                    <div className="mb-5 col-12 col-md-12" key={"inputDropdownValue" + index}>
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
                        </div>

                        <div className="row">
                            {
                                materialCentreAdd_dropdown_two.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-12" key={"inputDropdownValue" + index}>
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
                                materialCentreAdd_Text_two.map((val, index) => (
                                    <div className=" mb-3 col-12 col-md-12" key={"inputTextField" + index}>
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
                        <div className="row mt-3">
                            {
                                materialCentreAdd_Text_three.map((val, index) => (
                                    <div className=" mb-3 col-12 col-md-12" key={"inputTextField" + index}>
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
                            <div className="mt-3 col-12 col-md-3 col-lg-2 p-0">
                                <Button type="submit" className="col-12" disabled={isSubmitting}>Save</Button>
                            </div>
                            <div className="mt-3 col-12 col-md-3 col-lg-2 align-self-center quitBtn">
                                <Link to='/'><Button type="submit" className="col-12">Quit</Button></Link>
                            </div>
                            <div className="mt-3 col-12 col-md-3 col-lg-2 p-0">
                                <Button className="col-12">Opt. Fields</Button>
                            </div>
                        </div>
                    </Form>
                )
                }

            </Formik>
        </div>
    )
}

export default MaterialCentreAdd