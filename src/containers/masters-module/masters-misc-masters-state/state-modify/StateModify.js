import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const StateModify = (props) => {

    const formValue = {

    }

    const state_modify_dropdown = [
        {
            name: 'selectStateToMOdify',
            values: [
                "ANDAMAN AND NICOBAR ISLANDS",
                "ANDHRA PRADESH",
                "ARUNACHAL PRADESH",
                "ASSAM",
                "BIHAR",
                "CHANDIGARH",
                "CHHATISHGARH",
                "DADRA & NAGAR HAVELI",
                "DAMAN & DIU",
                "DELHI",
                "GOA",
                "GUJARAT",
                "HARYANA",
                "HIMACHAL PRADESH",
                "JAMMU & KASHMIR",
                "JHARKHAND",
                "KARNATAKA",
                "KERALA",
                "LAKSHAWADEEP",
                "MADHYA PRADESH",
                "MAHARASHTRA",
                "MANIPUR",
                "MEGHALAYA",
                "MIZORAM",
                "NAGALAND",
                "ODISHA",
                "OTHERS",
                "PUDUCHERRY",
                "PUNJAB",
                "RAJASTHAN",
                "SIKKIM",
                "TAMILNADU",
                "TRIPURA",
                "UTTAR PRADESH",
                "UTTRAKHAND",
                "WEST BENGAL"
            ],
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
                    <Form>
                        <div className="text-center"><strong>Select State to Modify</strong></div>
                        <div className="row">

                            {
                                state_modify_dropdown.map((val, index) => (
                                    <div className="mb-4 mt-4 col-12 col-md-12" key={"inputDropdownValue" + index}>
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

export default StateModify