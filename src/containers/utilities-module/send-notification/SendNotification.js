import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const SendNotification = (props) => {

    // const [user, setUser] = useState(false);
    // const [group, setGroup] = useState(false);


    const formValue = {
        radioBtnsOne: "",
        radioBtnsTwo: "",
    }

    const radioBtn_One = [
        {
            key: 'Pick Mobile No. from Account',
            value: 'Pick Mobile No. from Account',
        },
    ]


    const radioBtn_two = [
        {
            key: 'One Account',
            value: 'One Account',
        },
        {
            key: 'Group Of Accounts',
            value: 'Group Of Accounts',
        }, {
            key: 'Selected Account',
            value: 'Selected Account',
        },
    ]

    return (
        <div className="container containerWidth mt-4 mb-4">
            <div className="text-center mb-4">
                <strong>Send Notification</strong>
            </div>
            <div className="inventoryForm">
                <div className="text-center mb-4">
                    <strong>(Multiple Mobile No(s) must be seprated with semicolon  character)</strong>
                </div>

                <Formik

                    initialValues={formValue}

                    onSubmit={(data, { setSubmitting }) => {
                        setSubmitting(true);
                        console.log(data)
                        setSubmitting(false);
                    }}
                >


                    {({ values, isSubmitting, handleChange }) => (
                        <Form className="">
                            {/* <div className="row"> */}
                                {
                                    radioBtn_One.map((val, index) => (
                                        <div key={"radioInputKey" + index}>
                                                <Field
                                                    type='radio'
                                                    name='radioBtnsOne'
                                                    value={val.value}
                                                    as={Radio}
                                                />
                                                {val.key}

                                        </div>
                                    ))
                                }
                            {/* </div> */}
                            <h5><span className="mt-2 headingAlign">Send SMS to</span></h5>
                            <div className="inventoryForm row">
                                {
                                    radioBtn_two.map((val, index) => (
                                        <div className="mb-2" key={"radioInputKey" + index}>
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
        </div>
    )

}

export default SendNotification;;