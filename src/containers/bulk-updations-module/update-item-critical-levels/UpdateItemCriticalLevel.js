import React, { useState } from 'react';
import './UpdateItemCriticalLevel.css'
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Button, FormControlLabel, FormControl, Radio, Checkbox } from '@material-ui/core';

const UpdateItemCriticalLevel = (props) => {

    const [toggled, toggle] = useState(false);
    const [toggledReOrder, settoggleReorder] = useState(false);
    const [toggledMaximumLevel, settoggleMaximumLevel] = useState(false);
    const [user, setUser] = useState(false);
    const [group, setGroup] = useState(false);
    const [oneMC, setoneMC] = useState(false);
    const [groupMcs, setGroupMCS] = useState(false);
    const [blockMaster, setBlockMaster] = useState(false);
    const [all, setAll] = useState(false);
    const [selected, setSelected] = useState(false);
    const [itemMaster, setItemMaster] = useState(false);
    const [specifiedBelow, setSpecifiedBelow] = useState(false);

    const formValue = {
        groupofItem: "",
        oneItem: "",
        UpdateMinimumLevelTextField: "",
        UpdateReOrderLevelTextField: "",
        UpdateMaximumLevelTextField: "",
    }

    const select_range_radio = [
        {
            key: 'One Item',
            value: 'oneIem',
        },
        {
            key: 'Group of Items',
            value: 'GroupOfItems',
        },
    ]

    const ref_dropdown_one = [
        {
            name: 'groupofItem',
            values: [
                "General",
            ]
        },
    ]

    const ref_dropdown_two = [
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

    const ref_dropdown_three = [
        {
            name: 'groupofMC',
            values: [
                "Godown",
                "Production Store",
                "Stores",
            ]
        },
    ]

    const ref_dropdown_four = [
        {
            name: 'OneMc',
            values: [
                "MainStore",
            ]
        }
    ]

    const checkBoxData_One = [
        {
            title: 'Sales',
            value: 'Sales',
        },
        {
            title: 'Purchase Return',
            value: 'PurchaseReturn',
        },
        {
            title: 'Production',
            value: 'Production',
        },
        {
            title: 'Unassemble',
            value: 'Unassemble',
        },
        {
            title: 'Stock Journal',
            value: 'Stock Journal',
        },
        {
            title: 'Stock Transfer',
            value: 'Stock Transfer',
        },
        {
            title: 'Material Issue',
            value: 'Material Issue',
        },
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

    const No_of_Days = [
        {
            key: 'From Item Master',
            value: 'FromItemMaster',
        },
        {
            key: 'As Specified Below',
            value: 'AsSpecifiedBelow',
        },
    ]

    const checkBoxData_two = [
        {
            title: 'Update Minimum Level',
            value: 'checkboxUpdateMinmumLevel',
        },

    ]

    const inputTextOne = [
        {
            label: 'Update Minimum Level',
            name: 'UpdateMinimumLevelTextField'
        },
    ]

    const checkboxData_three = [
        {
            title: 'Update Re-Order Level',
            value: 'checkboxUpdateReorderLevel',
        },
    ]

    const inputTextTwo = [
        {
            label: 'Update Re-Order Level',
            name: 'UpdateReOrderLevelTextField'
        },
    ]

    const checkboxData_four = [
        {
            title: 'Update Maximum Level',
            value: 'checkboxUpdateMaximumLevel',
        },
    ]
    const inputTextThree = [
        {
            label: 'Update Maximum Level',
            name: 'UpdateMaximumLevelTextField'
        },
    ]

    const checkboxData_five = [
        {
            title: 'Update Minimum Level',
            value: 'UpdateMinimumLevel',
        },
        {
            title: 'Update Re-Order Level',
            value: 'UpdateReOrderLevel',
        },
        {
            title: 'Update Maximum Level',
            value: 'UpdateMaximumLevel',
        },
    ]


    return (
        <div className="container containerWidth mt-4 mb-4">
            <div className="text-center mb-4">
                <h2>Update Items Critical Level</h2>
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
                        <span className="mt-2 borderBoxHeading">Select Items for Updation</span>
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
                                                    onClick={event => setGroup(event.target.value === 'oneIem') || setUser(event.target.value === 'GroupOfItems')}
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
                        <span className="mt-2 borderHeading">Check Consumption at :</span>
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
                                        ref_dropdown_three.map((val, index) => (
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
                                        ref_dropdown_four.map((val, index) => (
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
                        <span className="mt-2 borderHeading">Check Consumption Pattern For</span>
                        <div className="row mt-4 inventoryForm">
                            <div className="col-6 col-md-6 p-0">
                                {
                                    select_voucher_type.map((val, index) => (
                                        <div className="mb-2 p-0" key={"radioInputKey" + index}>
                                            <div className="radioBtnTextAlign">
                                                <Field
                                                    type='radio'
                                                    name='Selected and All Radio'
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
                                    <span className="selectdVoucherHeading">Selected Vouchers</span>
                                    <div className="inventoryForm">
                                        {
                                            checkBoxData_One.map((val, index) => (
                                                <div key={"inputCheckboxKey" + index}>
                                                    <FormControlLabel
                                                        label={val.title}
                                                        control={
                                                            <Field
                                                                type='checkbox'
                                                                name="Selected Voucher"
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
                        <span className="mt-2 borderHeading">No. of days to be picked</span>
                        <div className="mt-4 inventoryForm">
                            <div className="col-12 col-md-6 p-0">
                                {
                                    No_of_Days.map((val, index) => (
                                        <div className="mb-2 p-0" key={"radioInputKey" + index}>
                                            <div className="radioBtnTextAlign">
                                                <Field
                                                    type='radio'
                                                    name='From Item Master and As Specified Below Radio'
                                                    value={val.value}
                                                    as={Radio}
                                                    onClick={event => setItemMaster(event.target.value === 'FromItemMaster') || setSpecifiedBelow(event.target.value === 'AsSpecifiedBelow')}
                                                />
                                                {val.key}
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                            <div className={itemMaster ? "d-block" : "d-none"}>
                                <div className="inventoryForm">
                                    {
                                        checkboxData_five.map((val, index) => (
                                            <div key={"inputCheckboxKey" + index}>
                                                <FormControlLabel
                                                    label={val.title}
                                                    control={
                                                        <Field
                                                            type='checkbox'
                                                            name="From Item Master Checkbox"
                                                            value={val.value}
                                                            as={Checkbox}
                                                        />
                                                    }
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={specifiedBelow ? "d-block" : "d-none"}>
                                <div className="inventoryForm">
                                    {
                                        checkBoxData_two.map((val, index) => (
                                            <div key={"inputCheckboxKey" + index}>
                                                <FormControlLabel
                                                    label={val.title}
                                                    control={
                                                        <Field
                                                            type='checkbox'
                                                            name="checkboxUpdateMinmumLevel"
                                                            value={val.value}
                                                            as={Checkbox}
                                                            onClick={() => toggle(toggled => !toggled)}
                                                        />
                                                    }
                                                />
                                            </div>
                                        ))
                                    }
                                    <div className={toggled ? "d-block" : "d-none"}>
                                        <div className="col-12 col-md-12 mt-3">
                                            {
                                                inputTextOne.map((val, index) => (
                                                    <div className="mb-3 mt-3 blockAccountInput" key={"inputTextField" + index}>
                                                        <div className="col-5 col-md-6 p-0">
                                                            {val.label}
                                                        </div>
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
                                </div>
                            </div>

                            <div className={specifiedBelow ? "d-block" : "d-none"}>
                                <div className="inventoryForm mt-3">
                                    {
                                        checkboxData_three.map((val, index) => (
                                            <div key={"inputCheckboxKey" + index}>
                                                <FormControlLabel
                                                    label={val.title}
                                                    control={
                                                        <Field
                                                            type='checkbox'
                                                            name="checkboxUpdateReorderLevel"
                                                            value={val.value}
                                                            as={Checkbox}
                                                            onClick={() => settoggleReorder(toggledReOrder => !toggledReOrder)}
                                                        />
                                                    }
                                                />
                                            </div>
                                        ))
                                    }
                                    <div className={toggledReOrder ? "d-block" : "d-none"}>
                                        <div className="col-12 col-md-12 mt-3">
                                            {
                                                inputTextTwo.map((val, index) => (
                                                    <div className="mb-3 mt-3 blockAccountInput" key={"inputTextField" + index}>
                                                        <div className="col-5 col-md-6 p-0">
                                                            {val.label}
                                                        </div>
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
                                </div>
                            </div>

                            <div className={specifiedBelow ? "d-block" : "d-none"}>
                                <div className="inventoryForm mt-3">
                                    {
                                        checkboxData_four.map((val, index) => (
                                            <div key={"inputCheckboxKey" + index}>
                                                <FormControlLabel
                                                    label={val.title}
                                                    control={
                                                        <Field
                                                            type='checkbox'
                                                            name="checkboxUpdateMaximumLevel"
                                                            value={val.value}
                                                            as={Checkbox}
                                                            onClick={() => settoggleMaximumLevel(toggledMaximumLevel => !toggledMaximumLevel)}
                                                        />
                                                    }
                                                />
                                            </div>
                                        ))
                                    }
                                    <div className={toggledMaximumLevel ? "d-block" : "d-none"}>
                                        <div className="col-12 col-md-12 mt-3">
                                            {
                                                inputTextThree.map((val, index) => (
                                                    <div className="mb-3 mt-3 blockAccountInput" key={"inputTextField" + index}>
                                                        <div className="col-5 col-md-6 p-0">
                                                            {val.label}
                                                        </div>
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

export default UpdateItemCriticalLevel;;