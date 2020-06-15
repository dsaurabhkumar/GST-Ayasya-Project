import React, { useState } from 'react';
import './DeleteUnusedMaster.css'
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Button, FormControlLabel, FormControl, Radio, TextareaAutosize } from '@material-ui/core';

const DeleteUnusedMasters = () => {

    const [account, setAccount] = useState(false);
    const [item, setItem] = useState(false);
    const [materialCenter, setMaterialCenter] = useState(false);
    // const [user, setUser] = useState(false);
    // const [accountDropdown, setAccountDropdown] = useState(false);
    const [groupDropdown, setGroupDropdown] = useState(false);

    const formValue = {

    }
    const select_master_type_radio = [
        {
            key: 'Account',
            value: 'account',
        },
        {
            key: 'Item',
            value: 'item',
        },
        {
            key: 'Material Center',
            value: 'materiaCenter',
        },
    ]

    const all_Account_radio = [
        {
            key: 'All Account',
            value: 'allAccounts',
        },
    ]

    const group_Of_Accounts_radio = [
        {
            key: 'Group Of Accounts',
            value: 'GroupOfAccounts',
        },
    ]

    const dropdown_one = [
        {
            name: 'groupOfAccounts',
            values: [
                "Bank O/D Accounts",
                "Capital Account",
                "Cash-in-hand",
                "Current Assets",
                "Current Liabilties",
            ]
        }
    ]
    const dropdown_two = [
        {
            label: 'Delete Account With Opening Balance',
            name: 'delete-account-with-opening-balance',
            values: [
                "Y"

            ]
        },
    ]

    // 
    const all_items_radio = [
        {
            key: 'All Items',
            value: 'allitems',
        },
    ]

    const group_Of_items_radio = [
        {
            key: 'Group Of Items',
            value: 'GroupOfItems',
        },
    ]

    const dropdown_three = [
        {
            name: 'groupOfItems',
            values: [
                "Genenral",
            ]
        }
    ]
    const all_mcs_radio = [
        {
            key: 'All MC,s',
            value: 'allMC',
        },
    ]

    const group_Of_mcs_radio = [
        {
            key: 'Group Of MC,s',
            value: 'GroupOfMC,s',
        },
    ]

    // 
    return (
        <div className="container containerWidth mt-4 mb-4">
            <div className="text-center mb-4">
                <h2>Batch Deletion of Master</h2>
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
                    <Form className="inventoryForm">
                        <span className="mt-2 headingAlign">Select Master Type for Deletion</span>
                        <div>
                            <div className="sendSmsRadioAlign inventoryForm">
                                {
                                    select_master_type_radio.map((val, index) => (
                                        <div className="mb-2 p-0 col-12 col-md-4" key={"radioInputKey" + index}>
                                            <div className="radioBtnTextAlign">
                                                <Field
                                                    type='radio'
                                                    name='radioBtnsSelectOne'
                                                    value={val.value}
                                                    as={Radio}
                                                    onClick={event => setAccount(event.target.value === 'account') || setItem(event.target.value === 'item') || setMaterialCenter(event.target.value === 'materiaCenter')}
                                                />
                                                {val.key}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={account ? "d-block" : "d-none"}>
                                <div className="inventoryForm mt-3 mb-3 AccountsRadioSelect row ">
                                    {
                                        all_Account_radio.map((val, index) => (
                                            <div key={"radioInputKey" + index}>
                                                <div className="radioBtnTextAlign">
                                                    <Field
                                                        type='radio'
                                                        name='radioBtnsSelectThree'
                                                        value={val.value}
                                                        as={Radio}
                                                    />
                                                    {val.key}
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div>
                                        {
                                            group_Of_Accounts_radio.map((val, index) => (
                                                <div key={"radioInputKey" + index}>
                                                    <div className="radioBtnTextAlign">
                                                        <Field
                                                            type='radio'
                                                            name='radioBtnsSelectThree'
                                                            value={val.value}
                                                            as={Radio}
                                                            onClick={event => setGroupDropdown(event.target.value === 'GroupOfAccounts')}
                                                        />
                                                        {val.key}
                                                    </div>
                                                </div>
                                            ))
                                        }

                                        <div className={groupDropdown ? "d-block" : "d-none"}>
                                            {
                                                dropdown_one.map((val, index) => (
                                                    <div className="mt-3 mb-3 col-12 col-md-8" key={"inputDropdownValue" + index}>
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
                                            {
                                                dropdown_two.map((val, index) => (
                                                    <div className="mt-3 mb-3 blockAccountInput" key={"inputDropdownValue" + index}>
                                                        <div className="col-5 col-md-9 p-0">
                                                            {val.label}
                                                        </div>
                                                        <FormControl>
                                                            <select
                                                                type='select'
                                                                name={val.name}
                                                                multiple={false}
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
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div className={item ? "d-block" : "d-none"}>
                                <div className="inventoryForm mt-3 mb-3 AccountsRadioSelect row">
                                    {
                                        all_items_radio.map((val, index) => (
                                            <div key={"radioInputKey" + index}>
                                                <div className="radioBtnTextAlign">
                                                    <Field
                                                        type='radio'
                                                        name='radioBtnsSelectThree'
                                                        value={val.value}
                                                        as={Radio}
                                                    />
                                                    {val.key}
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div>
                                        {
                                            group_Of_items_radio.map((val, index) => (
                                                <div key={"radioInputKey" + index}>
                                                    <div className="radioBtnTextAlign">
                                                        <Field
                                                            type='radio'
                                                            name='radioBtnsSelectThree'
                                                            value={val.value}
                                                            as={Radio}
                                                            onClick={event => setGroupDropdown(event.target.value === 'GroupOfItems')}
                                                        />
                                                        {val.key}
                                                    </div>
                                                </div>
                                            ))
                                        }

                                        <div className={groupDropdown ? "d-block" : "d-none"}>
                                            {
                                                dropdown_three.map((val, index) => (
                                                    <div className="mt-3 mb-3 col-12 col-md-8" key={"inputDropdownValue" + index}>
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
                                            {
                                                dropdown_two.map((val, index) => (
                                                    <div className="mt-3 mb-3 blockAccountInput" key={"inputDropdownValue" + index}>
                                                        <div className="col-5 col-md-9 p-0">
                                                            {val.label}
                                                        </div>
                                                        <FormControl>
                                                            <select
                                                                type='select'
                                                                name={val.name}
                                                                multiple={false}
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
                                    </div>
                                </div>
                            </div>
                            {/*material  */}
                            <div className={materialCenter ? "d-block" : "d-none"}>
                                <div className="inventoryForm mt-3 mb-3 AccountsRadioSelect row">
                                    {
                                        all_mcs_radio.map((val, index) => (
                                            <div key={"radioInputKey" + index}>
                                                <div className="radioBtnTextAlign">
                                                    <Field
                                                        type='radio'
                                                        name='radioBtnsSelectThree'
                                                        value={val.value}
                                                        as={Radio}
                                                    />
                                                    {val.key}
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div>
                                        {
                                            group_Of_mcs_radio.map((val, index) => (
                                                <div key={"radioInputKey" + index}>
                                                    <div className="radioBtnTextAlign">
                                                        <Field
                                                            type='radio'
                                                            name='radioBtnsSelectThree'
                                                            value={val.value}
                                                            as={Radio}
                                                            onClick={event => setGroupDropdown(event.target.value === 'GroupOfItems')}
                                                        />
                                                        {val.key}
                                                    </div>
                                                </div>
                                            ))
                                        }

                                        <div className={groupDropdown ? "d-block" : "d-none"}>
                                            {
                                                dropdown_three.map((val, index) => (
                                                    <div className="mt-3 mb-3 col-12 col-md-8" key={"inputDropdownValue" + index}>
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
                            </div>
                            {/*  */}
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

export default DeleteUnusedMasters;