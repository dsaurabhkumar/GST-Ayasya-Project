import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const MaterialCentreGroupAdd = (props) => {

    const formValue = {
        group: '',
        alias: '',
    }

    const materialCentreGroupAdd_text = [
        {
            label: 'Group',
            name: 'group',
        },
        {
            label: 'Alias',
            name: 'alias',
        },
    ]

    const materialCentreGroupAdd_dropdown_one = [
        {
            label: `Primary Group (Y/N)`,
            name: 'primaryGroup',
            values: [
                "Y",
            ]
        },
    ]

    const materialCentreGroupAdd_dropdown_two = [
        {
            label: `Reflect the Stock in Balance Sheet ?`,
            name: 'reflectTheStock',
            values: [
                "Godowns",
                "Production Floors",
                "Stores"
            ]
        },
    ]

    return (
        <div className="container containerWidth mt-4 mb-4">
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
                        <h5 className="text-center mb-4">Add Material Centre Group Master</h5>
                        <div className="row">
                            {
                                materialCentreGroupAdd_text.map((val, index) => (
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
                        </div>
                        <div className="row">
                            {
                                materialCentreGroupAdd_dropdown_one.map((val, index) => (
                                    <div className="mb-5 col-md-6" key={"inputDropdownValue" + index}>
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
                                materialCentreGroupAdd_dropdown_two.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
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

export default MaterialCentreGroupAdd