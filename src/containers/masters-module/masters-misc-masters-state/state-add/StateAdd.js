import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const StateAdd = (props) => {

    const formValue = {
        name: '',
        stateCode: ''
    }

    const state_add_text = [
        {
            label: 'Name',
            name: 'name',
        },
        {
            label: 'State Code',
            name: 'stateCode',
            details: `For 'Others' State Code should ne 97` 
        }
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
                        <div className="text-center"><strong>State Master - Add</strong></div>
                        <div className="row mt-4">
                            {
                                state_add_text.map((val, index) => (
                                    <div className="mt-2 mb-2 col-12 col-md-6" key={"inputTextField" + index}>
                                        {val.label}
                                        <Field
                                            type='text'
                                            name={val.name}
                                            placeholder={val.placeholder}
                                            as={TextField}
                                        />
                                        <p className="notes">{val.details}</p>
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

export default StateAdd