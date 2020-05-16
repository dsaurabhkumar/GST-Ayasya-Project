import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const BillWiseReferences = (props) => {

    const [user, setUser] = useState(false);
    const [group, setGroup] = useState(false);


    const formValue = {
        radioBtnsOne: "",
    }

    const select_range_radio = [
        {
            key: 'All Accounts',
            value: 'AllAccount',
        },
        {
            key: 'Group of Accounts',
            value: 'GroupOfAccounts',
        },
        {
            key: 'One Account',
            value: 'account',
        },
    ]

    const ref_dropdown_one = [
        {
            name: 'groupOfAccount',
            values: [
                "Bank O/D Account",
                "Loans & Advances (Asset)",
                "Loans (Liability)",
                "Secured Loans",
            ]
        },
    ]

    const ref_dropdown_two = [
        {
            name: 'oneAccount',
            values: [
                "Busy Infotech Pvt. ltd.",
            ]
        }
    ]


    return (
        <div className="container containerWidth mt-4 mb-4">
            <div className="text-center mb-4">
                <strong>Clear Bills References</strong>
            </div>
            <h5><span className="mt-2 headingAlign">Select Range</span></h5>

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
                        <div className="row">
                            <div className="col-6 col-md-6">
                                {
                                    select_range_radio.map((val, index) => (
                                        <div className="mb-2 p-0" key={"radioInputKey" + index}>
                                            <div className="radioBtnTextAlign">
                                                <Field
                                                    type='radio'
                                                    name='radioBtnsOne'
                                                    value={val.value}
                                                    as={Radio}
                                                    // onClick={event => setUser(event.target.value === 'GroupOfAccounts')}
                                                    onClick={event => setGroup(event.target.value === 'account')}
                                                />
                                                {val.key}
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>

                            <div className="col-6 col-md-6">
                                <div className={user ? "d-block" : "d-none"}>
                                    {
                                        ref_dropdown_one.map((val, index) => (
                                            <div className="mt-3 mb-3" key={"inputDropdownValue" + index}>
                                                <FormControl>
                                                    <select
                                                        type='select'
                                                        name={val.name}
                                                        multiple={false}
                                                        className={val.className}
                                                        onChange={handleChange}
                                                    >
                                                        <option defaultValue>Select</option>
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
                                <div className={group ? "d-block" : "d-none"}>
                                    {
                                        ref_dropdown_two.map((val, index) => (
                                            <div className="mt-3 mb-3" key={"inputDropdownValue" + index}>
                                                <FormControl>
                                                    <select
                                                        type='select'
                                                        name={val.name}
                                                        multiple={false}
                                                        className={val.className}
                                                        onChange={handleChange}
                                                    >
                                                        <option defaultValue>Select</option>
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
    )

}

export default BillWiseReferences;