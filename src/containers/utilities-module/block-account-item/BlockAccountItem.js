import React, { useState } from 'react';
import './BlockAccountItem.css'
import { Button, FormControlLabel, FormControl, Radio, Checkbox, TextareaAutosize } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';


const BlockAccountItem = () => {

    const [blockMaster, setBlockMaster] = useState(false);
    const [all, setAll] = useState(false);
    const [selected, setSelected] = useState(false);

    const formValue = {
        blockAccountRadio: "",
    }


    const group_of_account_dropdown_one = [
        {
            label: 'Master Type',
            name: 'masterType',
            values: [
                "Account",
                "Item"
            ]
        },
        {
            label: 'Master Name',
            name: 'masterName',
            values: [
                "Salary",
                "Sales",
                "Purchase",
                "Inventor",
                "Service Charge Paid"
            ]
        },
        {
            label: 'Present Status',
            name: 'presnetStatus',
            values: [
                "BLOCKED",
                "UNBLOCKED",
            ]
        }
    ]

    const group_of_account_dropdown_two = [
        {
            label: 'Block Master',
            name: 'blockmaster',
            values: [
                "Y"
            ]
        }
    ]

    const select_voucher_type = [
        {
            key: 'All',
            value: 'All',
        },
        {
            key: 'Selected',
            value: 'Selected',
        },
    ]

    const checkBoxData = [
        {
            title: 'Sales',
            value: 'Sales',
        },
        {
            title: 'Purchase',
            value: 'Purchase',
        },
        {
            title: 'Payment',
            value: 'Payment',
        },
        {
            title: 'Receipt',
            value: 'Receipt',
        },
        {
            title: 'Journal',
            value: 'Journal',
        },
        {
            title: 'contra',
            value: 'contra',
        },
    ]


    const textArea_one = [
        {
            label: 'Reason For Blocking Master',
            name: 'reasonForBlockingMaster'
        }
    ]


    return (
        <div className="container containerWidth mt-4 mb-4">
            <h2 className="text-center mb-4">Block Masters</h2>
            <Formik
                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data)
                    setSubmitting(false);
                }}
            >
                {({ values, isSubmitting, handleChange, handleBlur }) => (
                    <Form className="inventoryForm mb-4">
                        <div className="row">
                            <div className="col-12 col-md-12">
                                {
                                    group_of_account_dropdown_one.map((val, index) => (
                                        <div className="mt-3 mb-3 blockAccountInput" key={"inputDropdownValue" + index}>
                                            <div className="col-6 col-md-6 p-0">
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
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-12">
                                {
                                    group_of_account_dropdown_two.map((val, index) => (
                                        <div className="blockAccountInput" key={"inputDropdownValue" + index}>
                                            <div className="col-6 col-md-6 p-0">
                                                {val.label}
                                            </div>
                                            <FormControl>
                                                <select
                                                    type='select'
                                                    name={val.name}
                                                    multiple={false}
                                                    onChange={event => setBlockMaster(event.target.value === 'Y')}
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
                        </div>

                        <div className={blockMaster ? "d-block" : "d-none"}>
                            <span className="sectionHeading">Select Voucher Type For Blocking</span>
                            <div className="row mt-4 inventoryForm">
                                <div className="col-6 col-md-6 p-0">
                                    {
                                        select_voucher_type.map((val, index) => (
                                            <div className="mb-2 p-0" key={"radioInputKey" + index}>
                                                <div className="radioBtnTextAlign">
                                                    <Field
                                                        type='radio'
                                                        name='blockAccountRadio'
                                                        value={val.value}
                                                        as={Radio}
                                                        onClick={event => setSelected(event.target.value === 'All') || setAll(event.target.value === 'Selected')}
                                                    />
                                                    {val.key}
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className={all ? "d-block" : "d-none"}>
                                        <div className="inventoryForm">
                                            {
                                                checkBoxData.map((val, index) => (
                                                    <div key={"inputCheckboxKey" + index}>
                                                        <FormControlLabel
                                                            label={val.title}
                                                            control={
                                                                <Field
                                                                    type='checkbox'
                                                                    name="checkboxOne"
                                                                    value={val.value}
                                                                    as={Checkbox} />
                                                            }
                                                        />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={blockMaster ? "d-block" : "d-none"}>
                            {
                                textArea_one.map((val, index) => (
                                    <div className="mt-4 col-12 p-0" key={"inputTextField" + index}>
                                        {val.label}
                                        <div className="mt-2 inputTextArea">
                                            <TextareaAutosize
                                                type='text'
                                                name={val.name}
                                                placeholder={val.placeholder}
                                                rows={5}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
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
                            <div className="mt-3 col-12 col-md-6 align-self-center quitBtn pl-0">
                                <Link to='/'><Button type="submit" className="col-12">List Of Blocked Master</Button></Link>
                            </div>
                        </div>
                    </Form>
                )
                }
            </Formik>
        </div>
    );
};

export default BlockAccountItem;;