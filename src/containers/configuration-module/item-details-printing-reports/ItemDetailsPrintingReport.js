import React from 'react';
import './ItemDetailsPrintingReport.css';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const ItemDetailsPrintingReport = () => {

    const formValue = {
        itemGrp: '',
        itemMrp: '',
        addField: '',
        qty: '',
        unitName: '',
        price: '',
        listPrice: '',
        discount: '',
        discountAmount: '',
        discountAmountUnit: '',
        amount: '',
        billSundryName: '',
        billSundryShort: '',
        percentage: '',
        amount_value: ''
    }

    const radioBtn_One = [
        {
            key: 'Print Details of Individual Items',
            value: 'printDetailsOfIndItems',
        },
        {
            key: 'Print Grouped Summary Only',
            value: 'printGroupedSummaryOnly',
        },
    ]

    const radioBtn_Two = [
        {
            key: 'Name',
            value: 'name',
        },
        {
            key: 'Alias',
            value: 'alias',
        },
        {
            key: 'Print Name',
            value: 'printName',
        },
    ]

    const inputText_One = [
        {
            label: 'Item/Grp',
            name: 'itemGrp'
        },
        {
            label: 'Item MRP',
            name: 'itemMrp'
        },
        {
            label: 'Add. Field',
            name: 'addField'
        },
        {
            label: 'Qty.',
            name: 'qty'
        },
        {
            label: 'Unit Name',
            name: 'unitName'
        },
        {
            label: 'Price',
            name: 'price'
        },
        {
            label: 'List Price',
            name: 'listPrice'
        },
        {
            label: 'Discount %',
            name: 'discount'
        },
        {
            label: 'Discount Amount',
            name: 'discountAmount'
        },
        {
            label: 'Discount Amount/Unit',
            name: 'discountAmountUnit'
        },
        {
            label: 'Amount',
            name: 'amount'
        },
    ]

    const inputText_Two = [
        {
            label: 'Bill Sundry Name',
            name: 'billSundryName'
        },
        {
            label: 'Bill Sundry Short',
            name: 'billSundryShort'
        },
        {
            label: 'Percentage',
            name: 'percentage'
        },
        {
            label: 'Amount',
            name: 'amount_value'
        },
    ]

    const dropDown_one = [
        {
            label: 'Print Zero Amount Items',
            name: 'printZeroAmountItems',
            values: [
                "Y",
            ]
        },
        {
            label: 'Print Zero Amount Bill Sundries',
            name: 'printZeroAmountBillSundries',
            values: [
                "Y",
            ]
        },
        {
            label: `Print 'Non-Impact' Bill Sundries`,
            name: 'printNonImpactBillSundries',
            values: [
                "Y",
            ]
        },
        {
            label: 'Print Item Wise Tax',
            name: 'printItemWiseTax',
            values: [
                "Y",
            ]
        },
        {
            label: 'Print Item Description',
            name: 'printItemDescription',
            values: [
                "Y",
            ]
        },
        {
            label: 'Print Total Amount',
            name: 'printTotalAmount',
            values: [
                "Y",
            ]
        },
        {
            label: 'Print Total Qty.',
            name: 'printTotalQty',
            values: [
                "Y",
            ]
        },
        {
            label: `Print Items Sub Total Amount`,
            name: 'printItemsSubTotalAmount',
            values: [
                "Y",
            ]
        },
        {
            label: 'Print Item Optional Fields (1-10)',
            name: 'printItemOptionalFields',
            values: [
                "Y",
            ]
        },
        {
            label: 'Print Header for Item Details',
            name: 'printHeaderforItemDetails',
            values: [
                "Y",
            ]
        },
    ]

    return (
        <div className="container mt-4 mb-4">
            <h2 className="text-center mb-2">Item Details Printing in Reports</h2>
            <p className="text-center mb-4">Specify the Details of Items to be Printed in Reports</p>
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

                        <div className="row inventoryForm p-3">
                            <span className="itemDetailsHeading">Type of Details</span>
                            <div className="row">
                                {
                                    radioBtn_One.map((val, index) => (
                                        <div className="mb-2 col-12 col-md-6" key={"radioInputKey" + index}>
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
                            </div>
                        </div>


                        <div className="row mt-3">

                            <div className="col-12 col-md-6">
                                <div className="inventoryForm row p-1">
                                    {
                                        radioBtn_Two.map((val, index) => (
                                            <div className="mb-2 col-12 col-md-6" key={"radioInputKey" + index}>
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
                                </div>

                                <p className="text-right mt-4"><strong>Characters Used</strong></p>
                                <div className="mt-4">
                                    {
                                        inputText_One.map((val, index) => (
                                            <div className="mb-3 col-12 col-md-12 maxEntriesVoucher" key={"inputTextField" + index}>
                                                <div className="divWidth">
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

                            <div className="col-12 col-md-6">
                            <p className="text-right mt-4"><strong>Characters Used</strong></p>
                                <div className="row">
                                        {
                                            inputText_Two.map((val, index) => (
                                                <div className="mb-3 col-12 col-md-12 maxEntriesVoucher" key={"inputTextField" + index}>
                                                    <div className="divWidth">
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
                                <div className="row mt-3">
                                {
                                dropDown_one.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-12 itemDetailsReport" key={"inputDropdownValue" + index}>
                                        <div className="mb-2 labelWidth">
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
};

export default ItemDetailsPrintingReport;