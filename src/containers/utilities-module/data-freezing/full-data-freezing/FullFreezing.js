import React, { useState } from 'react';
import './FullFreezing.css';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import DatePicker from '../../../../components/date-picker/DatePicker';
import { Button, FormControl } from '@material-ui/core';

const FullFreezing = (props) => {

    const [user, setUser] = useState(false);

    const formValue = {

    }

    const full_freeze_dropdown = [
        {
            label: 'Freeze Data',
            name: 'freezeData',
            values: [
                "Y"
            ]
        }
    ]

    const full_freeze_inputText = [
        {
            label: 'Freezing Date',
            name: 'freezingDate',
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
                        <h2 className="text-center mb-3">Data Freezing</h2>
                        <div className="row">
                            <div className="col-md-6 mt-3">
                                {
                                    full_freeze_dropdown.map((val, index) => (
                                        <div className="mt-2 inputAlignment" key={"inputDropdownValue" + index}>
                                            <div className="mb-2">
                                                {val.label}
                                            </div>
                                            <FormControl>
                                                <select
                                                    type='select'
                                                    name={val.name}
                                                    multiple={false}
                                                    onChange={event => setUser(event.target.value === 'Y')}
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
                            <div className="col-md-6 mt-3">
                                <div className={user ? "d-block" : "d-none"}>
                                    {
                                        full_freeze_inputText.map((val, index) => (
                                            <div className="mb-3 dateFieldAlign" key={"DatePicker" + index}>
                                                <div className="dateLabel">
                                                    {val.label}
                                                </div>
                                                <DatePicker
                                                    value={val.value}
                                                    name={val.name}
                                                />
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

export default FullFreezing