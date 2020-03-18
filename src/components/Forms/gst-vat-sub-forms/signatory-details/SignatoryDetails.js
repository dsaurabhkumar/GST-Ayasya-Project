import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Checkbox, Button, FormControlLabel, FormControl, TextField } from '@material-ui/core';

const SignatoryDetails = (props) => {

    const formValue = {
    }

    const inputText = [
        {
            label: 'Name',
            name: 'yourName',
            placeholder: 'Name...',
            heading: `Authorised Signatory's Details`
        },
        {
            label: 'S/o, D/o, W/o',
            name: 'relation',
            placeholder: 'Relation Details...'
        },
        {
            label: 'Designation',
            name: 'designation',
            placeholder: 'Designation...'
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
                    props.submittedData(data);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                    {
                                inputText.map((val, index) => (
                                    <div className="mb-3" key={"inputTextKey" + index}>
                                    <h5 className="modalHeading">{val.heading}</h5>
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

                        <div className="row btnContainer flex-sm-row-reverse mt-4 mb-3">
                            <div className="mt-3 col-12 col-md-3 p-0">
                                <Button type="submit" className="col-12" disabled={isSubmitting}>Save</Button>
                            </div>
                        </div>
                    </Form>
                )
                }
            </Formik>
        </div>
    )
}
export default SignatoryDetails