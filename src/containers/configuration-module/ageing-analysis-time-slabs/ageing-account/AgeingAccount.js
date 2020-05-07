import React from 'react';
import './AgeingAccount.css'
import { TextField, Button, FormControlLabel, FormControl } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
const AgeingAccount = () => {

    const formValue = {
        Days_For_Slab_1_1: "",
        Days_For_Slab_2_1: "",
        Days_For_Slab_3_1: "",
        Days_For_Slab_4_1: "",
        Days_For_Slab_5_1: "",
        Days_For_Slab_1_2: "",
        Days_For_Slab_2_2: "",
        Days_For_Slab_3_2: "",
        Days_For_Slab_4_2: "",
        Days_For_Slab_5_2: "",
    }


    const label = [

        {
            label: 'Slab - 1',
        },
        {
            label: 'Slab - 2',
        },
        {
            label: 'Slab - 3',
        },
        {
            label: 'Slab - 4',
        },
        {
            label: 'Slab - 5',
        },
        {
            label: 'Slab - 6',
        },
    ]

    const inputText_one = [
        {
            name: 'Days_For_Slab_1_1',
            placeholder: 'Days'
        },
        {
            name: 'Days_For_Slab_2_1',
            placeholder: 'Days'
        },
        {
            name: 'Days_For_Slab_3_1',
            placeholder: 'Days'
        },
        {
            name: 'Days_For_Slab_4_1',
            placeholder: 'Days'
        },
        {
            name: 'Days_For_Slab_5_1',
            placeholder: 'Days'
        },
        {
            name: 'Days_For_Slab_5_1',
            placeholder: '>= Days'
        },
    ]

    const inputText_two = [
        {
            name: 'Days_For_Slab_1_2',
            placeholder: 'Days'
        },
        {
            name: 'Days_For_Slab_2_2',
            placeholder: 'Days'
        },
        {
            name: 'Days_For_Slab_3_2',
            placeholder: 'Days'
        },
        {
            name: 'Days_For_Slab_4_2',
            placeholder: 'Days'
        },
        {
            name: 'Days_For_Slab_5_2',
            placeholder: 'Days'
        },
    ]


    return (
        <div className="container containerWidth mt-4 mb-4">
            <h2 className="text-center mb-4">Ageing Analysis Time Slabs</h2>
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
                        <div className="row mt-4 ageingBorderBox">
                            <div className="col-4 col-md-3 mt-3 p-0">
                                {
                                    label.map((val) => (
                                        <div className="dropdownItemValue dropdownWidth mb-4">
                                            <div className="dropDownHeading">
                                                {val.label}
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                            <div className="col-3 col-md-4 billRefTextField mt-3 p-0">
                                {
                                    inputText_one.map((val, index) => (
                                        <div className="mb-3" key={"inputTextField" + index}>
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
                            <div className="col-2 col-md-1 mt-3">

                                <p className="mb-4">to</p>
                                <p className="mb-4">to</p>
                                <p className="mb-4">to</p>
                                <p className="mb-4">to</p>
                                <p className="mb-4">to</p>

                            </div>
                            <div className="col-3 col-md-4 billRefTextField mt-3 p-0">
                                {
                                    inputText_two.map((val, index) => (
                                        <div className="mb-3" key={"inputTextField" + index}>
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
    );
};

export default AgeingAccount;