import React, { useState } from 'react';
import './AutoGenerateprodVoucher.css'
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import DatePicker from '../../../components/date-picker/DatePicker';
import { TextField, Button, FormControlLabel, FormControl, Radio, Checkbox } from '@material-ui/core';

const AutoGenerateProdVouchers = (props) => {

    const [user, setUser] = useState(false);
    const [group, setGroup] = useState(false);
    const [oneMC, setoneMC] = useState(false);
    const [groupMcs, setGroupMCS] = useState(false);
    // 
    const [bom, setBom] = useState(false);
    const [generateStock, setgenerateStock] = useState(false);


    const formValue = {
    }

    const select_range_radio = [
        {
            key: 'One Item',
            value: 'oneItem',
        },
        {
            key: 'Group of Items',
            value: 'GroupOfItems',
        },
    ]

    const group_of_item_dropdown = [
        {
            name: 'groupofItem',
            values: [
                "General",
            ]
        },
    ]

    const one_item_dropdown = [
        {
            name: 'oneItem',
            values: [
                "General-Test",
            ]
        }
    ]

    const MCS_radio = [
        {
            key: 'One MC',
            value: 'oneMC',
        },
        {
            key: 'Group of MC',
            value: 'GroupOfMC',
        },
    ]

    const group_of_mc_dropdown = [
        {
            name: 'groupofMC',
            values: [
                "Godown",
                "Production Store",
                "Stores",
            ]
        },
    ]

    const Mc_dropdown = [
        {
            name: 'OneMc',
            values: [
                "MainStore",
            ]
        }
    ]

    const Mc_itemGenerated_dropdown = [
        {
            label: 'MC (Item Generated)',
            name: 'MC (Item Generated)',
            values: [
                "MainStore",
            ]
        }
    ]

    const pick_MC_from_BOM_dropdown = [
        {
            label: 'Pick MC from Bom',
            name: 'Pick MC',
            values: [
                "Y"
            ]
        }
    ]

    const Mc_itemConsumed_dropdown = [
        {
            label: 'MC (Item Consumed)',
            name: 'MC (Item Consumed)',
            values: [
                "MainStore",
            ]
        }
    ]

    const Voucher_Series_dropdown_one = [
        {
            label: 'Voucher Series',
            name: 'Voucher Series One',
            values: [
                "MainStore",
            ]
        }
    ]

    const Select_date = [
        {
            label: 'Start Date',
            name: 'startDate',
        },
        {
            label: 'End Date',
            name: 'endDate',
        },
    ]

    const general_stock_voucher = [
        {
            label: 'Generate Stock Journal Voucher if no BOM exists for an item',
            name: 'Generate stock',
            values: [
                "Y"
            ]
        }
    ]

    const Generate_voucher_at_MC_dropdown = [
        {
            label: 'Generate Voucher at MC',
            name: 'Generate Voucher at MC',
            values: [
                "MainStore",
            ]
        }
    ]

    const Voucher_Series_dropdown_two = [
        {
            label: 'Voucher Series',
            name: 'Voucher Series two',
            values: [
                "MainStore",
            ]
        }
    ]
    return (
        <div className="container containerWidth mt-4 mb-4">
            <div className="text-center mb-4">
                <h3>Auto Generate Production Vouchers</h3>
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
                        <span className="mt-2 selectdVoucherHeading">Voucher to be generated for :</span>
                        <div className="row inventoryForm">
                            <div className="col-6 col-md-6">
                                {
                                    select_range_radio.map((val, index) => (
                                        <div className="mb-2 p-0" key={"radioInputKey" + index}>
                                            <div className="radioBtnTextAlign">
                                                <Field
                                                    type='radio'
                                                    name='Item Radio'
                                                    value={val.value}
                                                    as={Radio}
                                                    onClick={event => setGroup(event.target.value === 'oneItem') || setUser(event.target.value === 'GroupOfItems')}
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
                                        group_of_item_dropdown.map((val, index) => (
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
                                        one_item_dropdown.map((val, index) => (
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
                        <span className="mt-2 ForProductionBoxHeading">Check Negative Stock at :</span>
                        <div className="row inventoryForm mt-3">
                            <div className="col-6 col-md-6">
                                {
                                    MCS_radio.map((val, index) => (
                                        <div className="mb-2 p-0" key={"radioInputKey" + index}>
                                            <div className="radioBtnTextAlign">
                                                <Field
                                                    type='radio'
                                                    name='MC Radio'
                                                    value={val.value}
                                                    as={Radio}
                                                    onClick={event => setoneMC(event.target.value === 'oneMC') || setGroupMCS(event.target.value === 'GroupOfMC')}
                                                />
                                                {val.key}
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                            <div className="col-6 col-md-6">
                                <div className={groupMcs ? "d-block" : "d-none"}>
                                    {
                                        group_of_mc_dropdown.map((val, index) => (
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
                                <div className={oneMC ? "d-block" : "d-none"}>
                                    {
                                        Mc_dropdown.map((val, index) => (
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
                        <span className="mt-2 ForProductionBoxHeading">Select Option :</span>
                        <div className="inventoryForm mt-3">
                            <span className="ForProductionBoxHeading">For Production Voucher :</span>
                            <div className="inventoryForm mt-3">
                                {
                                    Mc_itemGenerated_dropdown.map((val, index) => (
                                        <div className="mt-3 mb-3" key={"inputDropdownValue" + index}>
                                            <div className=" col-6 col-md-6 itemGeneratedDropdown">
                                                {val.label}
                                            </div>
                                            <div className="col-6 col-md-6 itemGeneratedDropdown">
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
                                        </div>
                                    ))
                                }
                                <div className="col-12 col-md-12">
                                    {
                                        pick_MC_from_BOM_dropdown.map((val, index) => (
                                            <div className="blockAccountInput" key={"inputDropdownValue" + index}>
                                                <div className="col-5 col-md-6 p-0">
                                                    {val.label}
                                                </div>
                                                <FormControl>
                                                    <select
                                                        type='select'
                                                        name={val.name}
                                                        multiple={false}
                                                        onChange={event => setBom(event.target.value === 'Y')}
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

                                <div className={bom ? "d-block" : "d-none"}>
                                    <div className="mt-4">
                                        {
                                            Mc_itemConsumed_dropdown.map((val, index) => (
                                                <div className="mt-3 mb-3" key={"inputDropdownValue" + index}>
                                                    <div className=" col-6 col-md-6 itemGeneratedDropdown">
                                                        {val.label}
                                                    </div>
                                                    <div className="col-6 col-md-6 itemGeneratedDropdown">
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
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div>
                                    {
                                        Voucher_Series_dropdown_one.map((val, index) => (
                                            <div className="mt-3 mb-3" key={"inputDropdownValue" + index}>
                                                <div className=" col-6 col-md-6 itemGeneratedDropdown">
                                                    {val.label}
                                                </div>
                                                <div className="col-6 col-md-6 itemGeneratedDropdown">
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
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="inventoryForm  mt-3">
                                <div className="row datePicker">
                                    {
                                        Select_date.map((val, index) => (
                                            <div className="mb-3 col-12 col-md-6" key={"DatePicker" + index}>
                                                {val.label}
                                                <DatePicker
                                                    value={val.value}
                                                    name={val.name}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="col-12 col-md-12">
                                    {
                                        general_stock_voucher.map((val, index) => (
                                            <div className="blockAccountInput" key={"inputDropdownValue" + index}>
                                                <div className="col-5 col-md-6 p-0">
                                                    {val.label}
                                                </div>
                                                <FormControl>
                                                    <select
                                                        type='select'
                                                        name={val.name}
                                                        multiple={false}
                                                        onChange={event => setgenerateStock(event.target.value === 'Y')}
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

                                <div className={generateStock ? "d-block" : "d-none"}>
                                    <div className="mt-4 inventoryForm">
                                        {
                                            Generate_voucher_at_MC_dropdown.map((val, index) => (
                                                <div className="mt-3 mb-3" key={"inputDropdownValue" + index}>
                                                    <div className=" col-6 col-md-6 itemGeneratedDropdown">
                                                        {val.label}
                                                    </div>
                                                    <div className="col-6 col-md-6 itemGeneratedDropdown">
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
                                                </div>
                                            ))
                                        }
                                        {
                                            Voucher_Series_dropdown_two.map((val, index) => (
                                                <div className="mt-3 mb-3" key={"inputDropdownValue" + index}>
                                                    <div className=" col-6 col-md-6 itemGeneratedDropdown">
                                                        {val.label}
                                                    </div>
                                                    <div className="col-6 col-md-6 itemGeneratedDropdown">
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
                                                </div>
                                            ))
                                        }
                                    </div>
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
        </div >
    )

}

export default AutoGenerateProdVouchers;