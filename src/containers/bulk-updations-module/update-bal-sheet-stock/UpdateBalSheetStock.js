import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';



const UpdateBalSheetStock = () => {

    const [gpRatio, setGPRatio] = useState(false);


    const formValue = {
        gpRatio: "",
    }

    const stock_radio = [
        {
            key: 'Books Stock',
            value: 'booksStock',
        },
        {
            key: 'G.P. Ratio',
            value: 'gpRatio',
        },
    ]

    const inputTextOne = [
        {
            label: 'G.P. Ratio (%)',
            name: 'gpRatio'
        },
    ]

 

    return (
        <div className="container containerWidth mt-4 mb-4">
            <div className="text-center mb-4">
                <h2>Please Specify the Stock Updation Basis</h2>
            </div>
            <Formik

                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data)
                    setSubmitting(false);
                }}
            >
                {({ values, isSubmitting, handleChange, handleBlur }) => (
                    <Form>
                        <div className="inventoryForm">
                            <div className="sendSmsRadioAlign inventoryForm">
                                {
                                    stock_radio.map((val, index) => (
                                        <div className="mb-2 p-0 col-12 col-md-6" key={"radioInputKey" + index}>
                                            <div className="radioBtnTextAlign">
                                                <Field
                                                    type='radio'
                                                    name='radioBtnSelected'
                                                    value={val.value}
                                                    as={Radio}
                                                    onClick={event => setGPRatio(event.target.value === 'gpRatio')}
                                                />
                                                {val.key}
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                            <div className={gpRatio ? "d-block" : "d-none"}>
                                {
                                    inputTextOne.map((val, index) => (
                                        <div className="mb-3 mt-3 SendNotifications inventoryForm" key={"inputTextField" + index}>
                                            <div className="labelWidth">
                                                {val.label}
                                            </div>
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
                        </div>
                      
                    </Form>
                )
                }
            </Formik>
        </div>
    );
};

export default UpdateBalSheetStock;