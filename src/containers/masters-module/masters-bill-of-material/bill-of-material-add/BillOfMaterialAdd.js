import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const BillOfMaterialAdd = (props) => {

    const formValue = {
        bomName: '',
        alias: '',
        quantity: '',
        unit: '',
        expensesUnit: ''
    }

    const billOfMaterialAdd_text_one = [
        {
            label: 'BOM Name',
            name: 'bomName',
        },
        {
            label: 'Alias',
            name: 'alias',
        },
        {
            label: 'Quantity',
            name: 'quantity',
            placeholder: '0.00'
        },
        {
            label: 'Unit',
            name: 'unit',
            placeholder: '0.00'
        },
        {
            label: 'Expenses/Unit',
            name: 'expensesUnit',
        }
    ]

    const billOfMaterialAdd_dropdown_one = [
        {
            label: 'Item to Produce',
            name: 'itemToProduce',
            values: [

            ]
        },
    ]

    const billOfMaterialAdd_dropdown_two = [
        {
            label: 'Specify Default MC for Item Generated',
            name: 'specifyForItemGenerated',
            values: [
                "Y"
            ]
        },
        {
            label: 'Specify Default MC for Item Consumed',
            name: 'specifyForItemConsumed',
            values: [
                "Y"
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
                        <div className="text-center"><strong>Add Bill of Material Master</strong></div>
                        <div className="row mt-4">
                            {
                                billOfMaterialAdd_text_one.map((val, index) => (
                                    <div className="mb-3 col-6 col-md-3" key={"inputTextField" + index}>
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
                                billOfMaterialAdd_dropdown_one.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-4" key={"inputDropdownValue" + index}>
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

                        <div className="row mt-3">
                        {
                                billOfMaterialAdd_dropdown_two.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
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
                                    </div>
                                ))
                            }
                        </div>

                            <div className="text-center mt-4"><h5>Raw Material Consumed</h5></div>
                            <p>Raw Material Table</p>

                            <div className="text-center mt-4"><h5>By-Product Generated</h5></div>
                            <p>By-Product Generated Table</p>

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

export default BillOfMaterialAdd