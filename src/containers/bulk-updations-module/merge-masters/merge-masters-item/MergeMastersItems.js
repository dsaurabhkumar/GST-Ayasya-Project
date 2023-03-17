import React from 'react';
import './MergeMastersItems.css';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const MergeMastersItems = (props) => {

    const formValue = {

    }

    const merge_item_data = [
        {
            label: 'Select Source Item',
            name: 'selectSourceItem',
            values: [
                "Data to be fetched from DB"
            ]
        },
        {
            label: 'Select Target Item',
            name: 'selectTargetItem',
            values: [
                "Data to be fetched from DB"
            ]
        },
        {
            label: 'Delete Source Item After Merging Data',
            name: 'deleteSourceItemAfterMerging',
            values: [
                "N",
                "Y"
            ]
        }
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
                    <Form>
                        <h2 className="text-center mb-4 mt-3">Merge Item Data</h2>
                        <div className="inventoryForm">
                        <p className="notes text-center mb-0">You are going to merge the data of two items. If you continue, all the data of the Source Item will be merged into the data of Target Item including opening balances.</p> 
                        <p className="notes text-center">Please note that this operation can not be reversed back.</p>
                            <div className="row">
                                {
                                    merge_item_data.map((val, index) => (
                                        <div className="mb-4 mt-4 col-12 col-md-12 labelFieldAlign" key={"inputDropdownValue" + index}>
                                            <div className="labelWidth">
                                                {val.label}
                                            </div>
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

export default MergeMastersItems