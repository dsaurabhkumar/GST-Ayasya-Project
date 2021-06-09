import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const UnitAdd = (props) => {

    const formValue = {
        unitName: '',
        alias: '',
        printName: '',
        gstUQC: '',
    }

    const unit_add_text = [
        {
            label: 'Unit Name',
            name: 'unitName',
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

    const unit_add_gropdown = [
        {
            label: `UQC (for GST e-return)`,
            name: 'gstUQC',
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
                        <h5 className="text-center mb-4">Add Unit Master</h5>
                        <div className="row">
                            {
                                unit_add_text.map((val, index) => (
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

                        <div className="row mt-2">
                            {
                                unit_add_gropdown.map((val, index) => (
                                    <div className="my-3 col-12" key={"inputDropdownValue" + index}>
                                        {val.label}
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


                        <div className="row btnContainer flex-sm-row-reverse mt-4 mb-3">
                            <div className="mt-3 col-12 col-md-3 p-0">
                                <Button type="submit" className="col-12" disabled={isSubmitting}>Save</Button>
                            </div>
                            <div className="mt-3 col-12 col-md-3 align-self-center quitBtn">
                                <Link to='/'><Button type="submit" className="col-12" color="primary" variant="outlined">Quit</Button></Link>
                            </div>
                        </div>
                    </Form>
                )
                }

            </Formik>
        </div>
    )
}

export default UnitAdd