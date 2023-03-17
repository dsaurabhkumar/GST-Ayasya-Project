import React, { useState } from 'react';
import './PartialFreezing.css';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import DatePicker from '../../../../components/date-picker/DatePicker';
import { Button, FormControl } from '@material-ui/core';

const PartialFreezing = (props) => {

    const formValue = {

    }

    const partial_freeze_dropdown_one = [
        {
            label: 'Sales',
            name: 'sales',
            values: [
                "Y"
            ]
        },
        {
            label: 'Purchase',
            name: 'purchase',
            values: [
                "Y"
            ]
        },
        {
            label: 'Sales Return',
            name: 'salesReturn',
            values: [
                "Y"
            ]
        },
        {
            label: 'Purchase Return',
            name: 'purchaseReturn',
            values: [
                "Y"
            ]
        },
        {
            label: 'Material Issue',
            name: 'materialIssue',
            values: [
                "Y"
            ]
        },
        {
            label: 'Material Receipt',
            name: 'materialReceipt',
            values: [
                "Y"
            ]
        },
        {
            label: 'Stock Transfer',
            name: 'stockTransfer',
            values: [
                "Y"
            ]
        },
        {
            label: 'Production',
            name: 'production',
            values: [
                "Y"
            ]
        },
        {
            label: 'Unassemble',
            name: 'unassemble',
            values: [
                "Y"
            ]
        },
        {
            label: 'Stock Journal',
            name: 'stockJournal',
            values: [
                "Y"
            ]
        },
        {
            label: 'Payment',
            name: 'payment',
            values: [
                "Y"
            ]
        },
        {
            label: 'Receipt',
            name: 'receipt',
            values: [
                "Y"
            ]
        },
        {
            label: 'Journal',
            name: 'journal',
            values: [
                "Y"
            ]
        },
        {
            label: 'Contra',
            name: 'contra',
            values: [
                "Y"
            ]
        },
        {
            label: 'Debit Note',
            name: 'debitNote',
            values: [
                "Y"
            ]
        },
        {
            label: 'Credit Note',
            name: 'creditNote',
            values: [
                "Y"
            ]
        },
    ]

    const partial_freeze_dropdown_two = [
        {
            name: 'freezeSales',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezePurchase',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeSalesReturn',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezePurchaseReturn',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeMaterialIssue',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeMaterialReceipt',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeStock',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeProduction',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeUnassemble',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeStockJournal',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezePayment',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeReceipt',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeJournal',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeContra',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeDebit',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeCredit',
            values: [
                "All Series"
            ]
        },
    ]

    const partial_freeze_date = [
        {
            name: 'freezeSalesDate',
        },
        {
            name: 'freezePurchaseDate',
        },
        {
            name: 'freezeSalesReturnDate',
        },
        {
            name: 'freezePurchaseReturnDate',
        },
        {
            name: 'freezeMaterialIssueDate',
        },
        {
            name: 'freezeMaterialReceiptDate',
        },
        {
            name: 'freezeStockDate',
        },
        {
            name: 'freezeProduction',
        },
        {
            name: 'freezeUnassembleDate',
        },
        {
            name: 'freezeStockJournalDate',
        },
        {
            name: 'freezePaymentDate',
        },
        {
            name: 'freezeReceiptDate',
        },
        {
            name: 'freezeJournalDate',
        },
        {
            name: 'freezeContraDate',
        },
        {
            name: 'freezeDebitDate',
        },
        {
            name: 'freezeCreditDate',
        },
    ]

    const partial_freeze_dropdown_three = [
        {
            label: 'Account Opening Balance',
            name: 'accountOpeningBalance',
            values: [
                "Y"
            ]
        },
        {
            label: 'Items Opening Balance',
            name: 'itemsOpeningBalance',
            values: [
                "Y"
            ]
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
                        <h2 className="text-center">Partial Data Freezing</h2>
                        <div className="row">
                            <div className="col-12 col-md-5 mt-3">
                            <h5 className="mb-4 mt-4 mobile_view">Voucher Type</h5>
                                {
                                    partial_freeze_dropdown_one.map((val, index) => (
                                        <div className="mt-2 partialInputAlign" key={"voucherType" + index}>
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


                            <div className="col-12 col-md-4 mt-3">
                            <h5 className="mb-4 mt-4 mobile_view">Apply Freezing to</h5>
                                {
                                    partial_freeze_dropdown_two.map((val, index) => (
                                        <div className="mt-2 mb-3" key={"freeze" + index}>
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


                            <div className="col-12 col-md-3 mt-3">
                            <h5 className="mb-4 mt-4 mobile_view">Series/Date</h5>
                                {
                                    partial_freeze_date.map((val, index) => (
                                        <div className="mt-2 mb-1 dateFieldHeight" key={"DatePicker" + index}>
                                            <DatePicker
                                                value={val.value}
                                                name={val.name}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <span className="section_Heading">Freeze ?</span>
                        <div className="row inventoryForm mt-3 pl-0 pr-0">
                            {
                                partial_freeze_dropdown_three.map((val, index) => (
                                    <div className="mt-2 mb-3 col-12 col-md-6 freezeSection" key={"freezeOptions" + index}>
                                        <div>
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

export default PartialFreezing