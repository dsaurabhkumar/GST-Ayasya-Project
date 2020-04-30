import React from 'react';
import './ItemGroupPrinting.css'
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { Button, FormControlLabel, FormControl, } from '@material-ui/core';

const ItemGroupPrinting = () => {

    const formValue = {

    }

    const dropDown = [
        {
            label: 'Item Group Name',
            name: 'itemGroupName',
            values: [
                "Y",
            ]
        },
        {
            label: 'Main Qty',
            name: 'mainQty',
            values: [
                "Y",
            ]
        },
        {
            label: 'AvgPrice',
            name: 'avgPrice',
            values: [
                "Y",
            ]
        },
        {
            label: 'Amount',
            name: 'amount',
            values: [
                "Y",
            ]
        },

    ]


    return (
        <div className="container mt-4 mb-4 containerWidth ">
            <h2 className="text-center mb-4">Item GroupWise Details Printing</h2>
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
                            <b className="col-6">Item Group Details</b>
                            <b className="col-6 text-center">Required</b>
                        </div>

                        <div className="mt-4 itemGroupDisplay">
                            {
                                dropDown.map((val, index) => (
                                    <div className="dropdownItemValue mb-4" key={"inputDropdownValue" + index}>
                                        <div className="dropDownHeading">
                                            {val.label}
                                        </div>
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
                                                value={values.name}
                                                onChange={handleChange}
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

export default ItemGroupPrinting;