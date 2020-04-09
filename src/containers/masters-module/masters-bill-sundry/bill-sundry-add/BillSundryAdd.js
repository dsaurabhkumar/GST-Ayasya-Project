import React from 'react';
import './BillSundryAdd.css';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const BillSundryAdd = (props) => {

    const formValue = {
        name: '',
        alias: '',
        printName: '',
        defaultValue: '',
        subTotalHeading: ''
    }

    const billSundryAdd_text_one = [
        {
            label: 'Name',
            name: 'name',
        },
        {
            label: 'Alias',
            name: 'alias',
        },
        {
            label: 'Print Name',
            name: 'printName',
        },
        {
            label: 'Default Value',
            name: 'defaultValue',
            placeholder: '0.000'
        },
        {
            label: 'Sub Total Heading',
            name: 'subTotalHeading',
        }
    ]

    const billSundryAdd_dropdown_one = [
        {
            label: 'Bill Sundry Type',
            name: 'billSundryType',
            values: [
                "Additive",
                "Subtractive"
            ]
        },
        {
            label: 'Bill Sundry Nature',
            name: 'billSundryNature',
            values: [
                "Others",
                "VAT",
                "CST",
                "Add. Tax/Schg. on VAT",
                "CGST",
                "SGST",
                "IGST",
                "Cess on GST",
                "Add. Cess on GST",
                "BED",
                "OED",
                "Edu. Cess on Excise",
                "SHE Cess on Excise",
                "Service Tax",
                "SBC on Service Tax",
                "KKC on Service Tax",
                "Edu. Cess on Service Tax",
                "SHE Cess on Service Tax",
                "State Cess",
                "Discount",
                "Custom Duty"
            ]
        },
    ]

    const billSundryAdd_dropdown_two = [
        {
            label: 'Affects the Cost of Goods in Sale',
            name: 'affectsTheCostOfGoodsInSale',
            values: [
                "Y",
            ]
        },
        {
            label: 'Affects the Cost of Goods in Purchase',
            name: 'affectsTheCostOfGoodsInPurchase',
            values: [
                "Y",
            ]
        },
        {
            label: 'Affects the Cost of Goods in Material Issue',
            name: 'affectsTheCostOfGoodsInMaterialIssue',
            values: [
                "Y",
            ]
        },
        {
            label: 'Affects the Cost of Goods in Material Receipt',
            name: 'affectsTheCostOfGoodsInMaterialReceipt',
            values: [
                "Y",
            ]
        },
        {
            label: 'Affects the Cost of Goods in Stock Transfer',
            name: 'affectsTheCostOfGoodsInStockTransfer',
            values: [
                "Y",
            ]
        },
    ]

    const billSundryAdd_dropdown_three = [
        {
            label: 'Affects Accounting',
            name: 'sale_affectsAccounting',
            values: [
                "Y",
            ]
        },
        {
            label: 'Adjust in Sale Amount',
            name: 'sale_adjustInSaleAmount',
            values: [
                "Y",
            ]
        },
        {
            label: 'Account Head to Post',
            name: 'sale_accountHeadToPost',
            values: [
                "Y",
            ]
        },
        {
            label: 'Adjust in Party Amount',
            name: 'sale_adjustInPartyAmount',
            values: [
                "Y",
            ]
        },
        {
            label: 'Post Over and Above',
            name: 'sale_postOverAndAbove',
            values: [
                "Y",
            ]
        },
        {
            label: 'Impact Zero Tax Items',
            name: 'sale_impactZeroTaxItems',
            values: [
                "Y",
            ]
        },
    ]

    const billSundryAdd_dropdown_four = [
        {
            label: 'Affects Accounting',
            name: 'purc_affectsAccounting',
            values: [
                "Y",
            ]
        },
        {
            label: 'Adjust in Purchase Amount',
            name: 'purc_adjustInPurchaseAmount',
            values: [
                "Y",
            ]
        },
        {
            label: 'Account Head to Post',
            name: 'purc_accountHeadToPost',
            values: [
                "Y",
            ]
        },
        {
            label: 'Adjust in Party Amount',
            name: 'purc_adjustInPartyAmount',
            values: [
                "Y",
            ]
        },
        {
            label: 'Post Over and Above',
            name: 'purc_postOverAndAbove',
            values: [
                "Y",
            ]
        },
        {
            label: 'Impact Zero Tax Items',
            name: 'purc_impactZeroTaxItems',
            values: [
                "Y",
            ]
        },
    ]

    const billSundryAdd_radio_one = [
        {
            key: 'Manufacturing',
            value: 'Manufacturing',
        },
        {
            key: 'Trading',
            value: 'Trading',
        },
        {
            key: 'Both',
            value: 'Both',
        },
    ]

    const billSundryAdd_dropdown_five = [
        {
            label: 'Affects Accounting',
            name: 'affectsAccounting',
            values: [
                "Y",
            ]
        },
        {
            label: 'Adjust in Purchase Amount',
            name: 'adjustInPurchaseAmount',
            values: [
                "Y",
            ]
        },
        {
            label: 'Account Head to Post',
            name: 'accountHeadToPost',
            values: [
                "Y",
            ]
        },
        {
            label: 'Adjust in Party Amount',
            name: 'adjustInPartyAmount',
            values: [
                "Y",
            ]
        },
        {
            label: 'Post Over and Above',
            name: 'postOverAndAbove',
            values: [
                "Y",
            ]
        },
        {
            label: 'Impact Zero Tax Items',
            name: 'impactZeroTaxItems',
            values: [
                "Y",
            ]
        },
    ]

    const billSundryAdd_radio_two = [
        {
            key: 'Absolute Amount',
            value: 'absoluteAmount',
        },
        {
            key: 'Per Main Qty.',
            value: 'perMainQty',
        },
        {
            key: 'Per Alt. Qty.',
            value: 'perAltQty',
        },
        {
            key: 'Per Packaging Qty.',
            value: 'perPackagingQty',
        },
        {
            key: 'Percentage',
            value: 'percentage',
        },
    ]

    const billSundryAdd_radio_three = [
        {
            key: 'Net Bill Amount',
            value: 'netBillAmount',
        },
        {
            key: 'Items Basic Amount',
            value: 'itemsBAsicAmount',
        },
        {
            key: 'Total MRP of Items',
            value: 'totalMrpOfItems',
        },
        {
            key: 'Taxable Amount',
            value: 'taxableAmount',
        },
        {
            key: 'Previous Bill Sundry(s) Amount',
            value: 'previousBillSundryAmount',
        },
        {
            key: 'Other Bill Sundry',
            value: 'otherBillSundry',
        },
    ]

    const billSundryAdd_radio_four = [
        {
            key: 'Bill Sundry Amount',
            value: 'billSundryAmount',
        },
        {
            key: 'Bill Sundry Applied on',
            value: 'billSundryAppliedOn',
        },
    ]

    return (
        <div className="container mt-4 mb-4">
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
                        <div className="text-center"><strong>Add Bill Sundry Master</strong></div>
                        <div className="row mt-4">
                            {
                                billSundryAdd_text_one.map((val, index) => (
                                    <div className="mb-3 col-6 col-md-4" key={"inputTextField" + index}>
                                        {val.label}
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

                        <div className="row">
                            {
                                billSundryAdd_dropdown_one.map((val, index) => (
                                    <div className="mt-3 mb-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
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

                        <div className="row">
                            {
                                billSundryAdd_dropdown_two.map((val, index) => (
                                    <div className="mt-3 mb-3 col-12 col-md-4" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
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

                        <h5><span className="mt-4 headingAlign">Accounting in Sale</span></h5>
                        <div className="row inventoryForm">
                            {
                                billSundryAdd_dropdown_three.map((val, index) => (
                                    <div className="mt-3 mb-3 col-12 col-md-4" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
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

                        <h5><span className="mt-4 headingAlign">Accounting in Purchase</span></h5>
                        <div className="row inventoryForm">
                            {
                                billSundryAdd_dropdown_four.map((val, index) => (
                                    <div className="mt-3 mb-3 col-12 col-md-4" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
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

                        <h5><span className="mt-2 headingAlign">Accounting in Material Issue/Receipt/Stock Transfer</span></h5>
                        <div className="row inventoryForm">
                            {
                                billSundryAdd_radio_one.map((val, index) => (
                                    <div className="mb-2 col-12 col-md-4" key={"radioInputKey" + index}>
                                        <div className="radioBtnTextAlign">
                                            <Field
                                                type='radio'
                                                name='radioBtnsOne'
                                                value={val.value}
                                                as={Radio}
                                            />
                                            {val.key}
                                        </div>

                                    </div>
                                ))
                            }
                            <div className="row inventoryForm">
                                {
                                    billSundryAdd_dropdown_five.map((val, index) => (
                                        <div className="mt-3 mb-3 col-12 col-md-4" key={"inputDropdownValue" + index}>
                                            <div className="mb-2">
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

                        <h5><span className="mt-2 headingAlign">Amount of Bill Sundry to be fed as</span></h5>
                        <div className="row inventoryForm">
                            {
                                billSundryAdd_radio_two.map((val, index) => (
                                    <div className="mb-2 col-12 col-md-4" key={"radioInputKey" + index}>
                                        <div className="radioBtnTextAlign">
                                            <Field
                                                type='radio'
                                                name='radioBtnsTwo'
                                                value={val.value}
                                                as={Radio}
                                            />
                                            {val.key}
                                        </div>

                                    </div>
                                ))
                            }
                            <div className="row inventoryForm">
                                {
                                    billSundryAdd_radio_three.map((val, index) => (
                                        <div className="mb-2 col-12 col-md-4" key={"radioInputKey" + index}>
                                            <div className="radioBtnTextAlign">
                                                <Field
                                                    type='radio'
                                                    name='radioBtnsThree'
                                                    value={val.value}
                                                    as={Radio}
                                                />
                                                {val.key}
                                            </div>

                                        </div>
                                    ))
                                }

                                <h5><span className="mt-2 headingAlign">Bill Sundry to be Calculated on</span></h5>
                                <div className="row inventoryForm divWidth">
                                {
                                    billSundryAdd_radio_four.map((val, index) => (
                                        <div className="col-12 col-md-6" key={"radioInputKey" + index}>
                                            <div className="radioBtnTextAlign">
                                                <Field
                                                    type='radio'
                                                    name='radioBtnsThree'
                                                    value={val.value}
                                                    as={Radio}
                                                />
                                                {val.key}
                                            </div>

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
export default BillSundryAdd
