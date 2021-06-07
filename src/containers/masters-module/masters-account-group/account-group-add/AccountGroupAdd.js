import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const AccountGroupAdd = (props) => {

    const formValue = {
        group: '',
        alias: '',
        primaryGroup: '',
        underGroup: '',
    }

    const accountGroupAddInputText = [
        {
            label: 'Group',
            name: 'group',
        },
        {
            label: 'Alias',
            name: 'alias',
        },
        {
            label: 'Primary Group (Y/N)',
            name: 'primaryGroup',
        },
        {
            label: 'Under Group',
            name: 'underGroup',
        },
    ]

    return(
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
                    <div className="text-center"><strong>Add Account Group Master</strong></div>
                        <div className="row mt-5 mb-5">
                            {
                                accountGroupAddInputText.map((val, index) => (
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

export default AccountGroupAdd