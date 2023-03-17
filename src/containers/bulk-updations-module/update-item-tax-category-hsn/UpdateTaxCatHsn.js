import React, { useState } from 'react';
import './UpdateTaxCatHsn.css';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';
import DatePicker from '../../../components/date-picker/DatePicker';

const UpdateTaxCatHsn = (props) => {

    const [category, setCategory] = useState(false);
    const [hsn, setHsn] = useState(false);
    const [itemGroup, setItemGroup] = useState(false);
    const [item, setItem] = useState(false);

    const formValue = {
        itemGroup: '',
        hsnCodeFilter: '',
        specifyHsnCode: '',
        newHsnCode: '',
        itemGroupHsn: ''
    }

    const update_item_radio = [
        {
            key: 'Tax Category',
            value: 'updateTaxCategory',
        },
        {
            key: 'HSN Code',
            value: 'updateHsnCode',
        },
    ]

    const update_tax_radio = [
        {
            key: 'All Items',
            value: 'allItems',
        },
        {
            key: 'Group of Items',
            value: 'groupOfItems',
        },
    ]

    const item_group_text = [
        {
            label: 'Item Group',
            name: 'itemGroup',
            placeholder: 'Item Group...'
        }
    ]

    const filter_HSN_dropdown = [
        {
            label: 'Filter on HSN Code',
            name: 'filterOnHsnCode',
            values: [
                "N",
                "Y"
            ]
        },
        {
            label: 'Filter HSN Date Wise',
            name: 'filterHsnDateWise',
            values: [
                "N",
                "Y"
            ]
        }
    ]

    const hsn_code_filter_text = [
        {
            label: 'HSN Code to Filter',
            name: 'hsnCodeFilter',
            placeholder: 'HSN Code to Filter...'
        }
    ]

    const tax_Category_dropdown = [
        {
            label: 'Specify Tax Category',
            name: 'specifyTaxCategory',
            values: [
                "Exempt"
            ]
        }
    ]

    const hsn_tax_radio = [
        {
            key: 'All Items',
            value: 'allItemsHsn',
        },
        {
            key: 'Group of Items',
            value: 'groupOfItemsHsn',
        },
    ]

    const specify_hsn_code_text = [
        {
            label: "Specify HSN Code",
            name: 'specifyHsnCode',
            placeholder: 'Specify HSN Code...'
        }
    ]

    const filter_HSN_dropdown_hsn = [
        {
            label: 'Filter on HSN Code',
            name: 'filterOnHsnCode_2',
            values: [
                "N",
                "Y"
            ]
        },
        {
            label: 'Filter HSN Date Wise',
            name: 'filterHsnDateWise_2',
            values: [
                "N",
                "Y"
            ]
        }
    ]

    const new_hsn_code_text = [
        {
            label: "New HSN Code",
            name: 'newHsnCode',
            placeholder: 'New HSN Code...'
        }
    ]

    const save_hsn_datewise = [
        {
            label: 'Save HSN Date Wise',
            name: 'saveHsnDateWise',
            values: [
                "N",
                "Y"
            ]
        }
    ]

    const hsn_date = [
        {
            name: 'freezingDate',
        },
    ]

    const item_group_text_hsn = [
        {
            label: 'Item Group',
            name: 'itemGroupHsn',
            placeholder: 'Item Group...'
        }
    ]

    return (
        <div className="container mt-4 mb-4">
            <h2 className="text-center mb-4">Update Item Tax Category</h2>
            <Formik
                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data)
                    setSubmitting(false);
                }}
            >
                {({ values, isSubmitting, handleChange }) => (
                    <Form className="">

                        <div className="row inventoryForm">
                            {
                                <React.Fragment>
                                    <span className="sectionHeading">Update</span>
                                    <div className="exciseRadioBtns mb-4 row m-0">
                                        {
                                            update_item_radio.map((val, index) => (
                                                <div className="mb-2 col-12 col-md-6 p-0" key={"radioInputKey" + index}>
                                                    <div className="radioBtnTextAlign">
                                                        <Field
                                                            type='radio'
                                                            name='radioBtnUpdate'
                                                            value={val.value}
                                                            as={Radio}
                                                            onClick={event => setCategory(event.target.value === 'updateTaxCategory') || setHsn(event.target.value === 'updateHsnCode')}
                                                        />
                                                        {val.key}
                                                    </div>

                                                </div>
                                            ))
                                        }
                                    </div>
                                </React.Fragment>
                            }
                            <div className={category ? "d-block" : "d-none"}>
                                <span className="sectionHeading">Tax Category to be updated for</span>
                                <div className="row inventoryForm">
                                    {
                                        <div className="exciseRadioBtns mb-2 row m-0">
                                            {
                                                update_tax_radio.map((val, index) => (
                                                    <div className="mb-2 col-12 col-md-6 p-0" key={"radioInputKey" + index}>
                                                        <div className="radioBtnTextAlign">
                                                            <Field
                                                                type='radio'
                                                                name='radioBtnItems'
                                                                value={val.value}
                                                                as={Radio}
                                                                onClick={event => setItemGroup(event.target.value === 'groupOfItems')}
                                                            />
                                                            {val.key}
                                                        </div>

                                                    </div>
                                                ))
                                            }
                                            <div className="col-12 col-md-12">
                                                <div className={itemGroup ? "d-block" : "d-none"}>
                                                    {
                                                        item_group_text.map((val, index) => (
                                                            <div className="labelFieldAlign mb-2" key={"inputTextField" + index}>
                                                                <div className="labelWidth">
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
                                    }
                                    {
                                        filter_HSN_dropdown.map((val, index) => (
                                            <div className="mb-4 mt-4 col-12 col-md-6 labelFieldAlign p-0" key={"inputDropdownValue" + index}>
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
                                    {
                                        hsn_code_filter_text.map((val, index) => (
                                            <div className="col-12 col-md-12 labelFieldAlign p-0" key={"inputTextField" + index}>
                                                <div className="labelWidth">
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

                                    {
                                        tax_Category_dropdown.map((val, index) => (
                                            <div className="mb-4 mt-4 col-12 col-md-12 inventoryForm labelFieldAlign" key={"inputDropdownValue" + index}>
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


                            <div className={hsn ? "d-block" : "d-none"}>
                                <span className="sectionHeading">HSN Code to be updated for</span>
                                <div className="inventoryForm row">
                                    {
                                        <div className="exciseRadioBtns mb-2 row m-0">
                                            {
                                                hsn_tax_radio.map((val, index) => (
                                                    <div className="mb-2 col-12 col-md-6 p-0" key={"radioInputKey" + index}>
                                                        <div className="radioBtnTextAlign">
                                                            <Field
                                                                type='radio'
                                                                name='radioBtnHsnCode'
                                                                value={val.value}
                                                                as={Radio}
                                                                onClick={event => setItem(event.target.value === 'groupOfItemsHsn')}
                                                            />
                                                            {val.key}
                                                        </div>

                                                    </div>
                                                ))
                                            }
                                            <div className="col-12 col-md-12">
                                                <div className={item ? "d-block" : "d-none"}>
                                                    {
                                                        item_group_text_hsn.map((val, index) => (
                                                            <div className="labelFieldAlign mb-2" key={"inputTextField" + index}>
                                                                <div className="labelWidth">
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
                                    }
                                    {
                                        filter_HSN_dropdown_hsn.map((val, index) => (
                                            <div className="mb-4 mt-4 col-12 col-md-6 labelFieldAlign p-0" key={"inputDropdownValue" + index}>
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
                                    {
                                        specify_hsn_code_text.map((val, index) => (
                                            <div className="col-12 col-md-12 labelFieldAlign p-0" key={"inputTextField" + index}>
                                                <div className="labelWidth">
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

                                    <div className="row inventoryForm divWidth mt-4 py-1">
                                        <span className="sectionSubHeading">HSN Code</span>
                                        {
                                            new_hsn_code_text.map((val, index) => (
                                                <div className="mt-4 col-12 col-md-12 labelFieldAlign mb-2 p-0" key={"inputTextField" + index}>
                                                    <div className="labelWidth">
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
                                        {
                                            save_hsn_datewise.map((val, index) => (
                                                <div className="mb-4 mt-4 col-12 col-md-12 labelFieldAlign p-0" key={"inputDropdownValue" + index}>
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
                                        {
                                            hsn_date.map((val, index) => (
                                                <div className="mb-3" key={"DatePicker" + index}>
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

                        </div>

                        <div className="row btnContainer flex-sm-row-reverse mt-4 mb-3">
                            <div className="mt-3 col-12 col-md-3 p-0">
                                <Button type="submit" className="col-12" disabled={isSubmitting}>Save</Button>
                            </div>
                            <div className="mt-3 col-12 col-md-3 align-self-center quitBtn">
                                <Link to='/feature-options'><Button type="submit" className="col-12">Quit</Button></Link>
                            </div>
                        </div>
                    </Form>
                )
                }
            </Formik>
        </div>
    )
}

export default UpdateTaxCatHsn