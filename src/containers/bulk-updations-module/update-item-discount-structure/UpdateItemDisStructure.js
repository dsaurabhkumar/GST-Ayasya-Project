import React, { useState } from 'react';
import './UpdateItemDisStructure.css'
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const UpdateItemDisStructure = (props) => {

    const [user, setUser] = useState(false);


    const formValue = {
        itemRadio: "",
    }

    const item_radio = [
        {
            key: 'All Item',
            value: 'AllItem',
        },
        {
            key: 'Group of Item',
            value: 'GroupOfItem',
        },
    ]

    const dropdown_one = [
        {
            name: 'groupOfItem',
            values: [
                "General",
            ]
        },
    ]

    const sale_purchase_radio = [
        {
            key: 'Sale',
            value: 'Sale',
        },
        {
            key: 'Purchase',
            value: 'Purchase',
        },
    ]

    const dropdown_two = [
        {
            label: 'Selected Discount Structure',
            name: 'Select Discount Structure',
            values: [
                "General",
            ]
        },
    ]

    return (
        <div className="container containerWidth mt-4 mb-4">
            <div className="text-center mb-4">
                <h3>Update Item Discount Structure Component</h3>
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
                    <Form className="inventoryForm">
                        <span className="mt-2 updateItemDiscHeading">Tag Discount Structure in</span>
                        <div className="row inventoryForm">
                            <div className="col-6 col-md-6">
                                {
                                    item_radio.map((val, index) => (
                                        <div className="mb-2 p-0" key={"radioInputKey" + index}>
                                            <div className="radioBtnTextAlign">
                                                <Field
                                                    type='radio'
                                                    name='itemRadio'
                                                    value={val.value}
                                                    as={Radio}
                                                    onClick={event => setUser(event.target.value === 'GroupOfItem')}
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
                                        dropdown_one.map((val, index) => (
                                            <div className="mb-3" key={"inputDropdownValue" + index}>
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
                        <span className="mt-2 updateItemDiscHeading">Update Structure For</span>
                        <div className="row inventoryForm">
                            <div className="col-6 col-md-6">
                                {
                                    sale_purchase_radio.map((val, index) => (
                                        <div className="mb-2 p-0" key={"radioInputKey" + index}>
                                            <div className="radioBtnTextAlign">
                                                <Field
                                                    type='radio'
                                                    name='Sale Purchase Radio'
                                                    value={val.value}
                                                    as={Radio}
                                                    onChange={handleChange}
                                                />
                                                {val.key}
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <span className="mt-2 DiscTaggingHeading">Discount Structure Tagging</span>
                        <div className="inventoryForm mt-3">
                            {
                                dropdown_two.map((val, index) => (
                                    <div className="mb-3" key={"inputDropdownValue" + index}>
                                        <div className="">
                                            {val.label}
                                        </div>
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
                                                multiple={false}
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

export default UpdateItemDisStructure;