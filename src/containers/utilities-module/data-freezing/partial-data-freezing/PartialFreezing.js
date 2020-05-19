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
            className: 'salesInput',
            id: 'salesInput',
            values: [
                "Y"
            ]
        },
        {
            label: 'Purchase',
            name: 'purchase',
            className: 'purchaseInput',
            id: 'purchaseInput',
            values: [
                "Y"
            ]
        },
        {
            label: 'Sales Return',
            name: 'salesReturn',
            className: 'salesReturnInput',
            id: 'salesReturnInput',
            values: [
                "Y"
            ]
        },
        {
            label: 'Purchase Return',
            name: 'purchaseReturn',
            className: 'purchaseReturnInput',
            id: 'purchaseReturnInput',
            values: [
                "Y"
            ]
        },
        {
            label: 'Material Issue',
            name: 'materialIssue',
            className: 'materialIssue',
            id: 'materialIssue',
            values: [
                "Y"
            ]
        },
        {
            label: 'Material Receipt',
            name: 'materialReceipt',
            className: 'materialReceipt',
            id: 'materialReceipt',
            values: [
                "Y"
            ]
        },
        {
            label: 'Stock Transfer',
            name: 'stockTransfer',
            className: 'stockTransfer',
            id: 'stockTransfer',
            values: [
                "Y"
            ]
        },
        {
            label: 'Production',
            name: 'production',
            className: 'production',
            id: 'production',
            values: [
                "Y"
            ]
        },
        {
            label: 'Unassemble',
            name: 'unassemble',
            className: 'unassemble',
            id: 'unassemble',
            values: [
                "Y"
            ]
        },
        {
            label: 'Stock Journal',
            name: 'stockJournal',
            className: 'stockJournal',
            id: 'stockJournal',
            values: [
                "Y"
            ]
        },
        {
            label: 'Payment',
            name: 'payment',
            className: 'payment',
            id: 'payment',
            values: [
                "Y"
            ]
        },
        {
            label: 'Receipt',
            name: 'receipt',
            className: 'receipt',
            id: 'receipt',
            values: [
                "Y"
            ]
        },
        {
            label: 'Journal',
            name: 'journal',
            className: 'journal',
            id: 'journal',
            values: [
                "Y"
            ]
        },
        {
            label: 'Contra',
            name: 'contra',
            className: 'contra',
            id: 'contra',
            values: [
                "Y"
            ]
        },
        {
            label: 'Debit Note',
            name: 'debitNote',
            className: 'debitNote',
            id: 'debitNote',
            values: [
                "Y"
            ]
        },
        {
            label: 'Credit Note',
            name: 'creditNote',
            className: 'creditNote',
            id: 'creditNote',
            values: [
                "Y"
            ]
        },
    ]

    const partial_freeze_dropdown_two = [
        {
            name: 'freezeSales',
            className: 'freezeSales',
            id: 'freezeSales',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezePurchase',
            className: 'freezePurchase',
            id: 'freezePurchase',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeSalesReturn',
            className: 'freezeSalesReturn',
            id: 'freezeSalesReturn',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezePurchaseReturn',
            className: 'freezePurchaseReturn',
            id: 'freezePurchaseReturn',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeMaterialIssue',
            className: 'freezeMaterialIssue',
            id: 'freezeMaterialIssue',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeMaterialReceipt',
            className: 'freezeMaterialReceipt',
            id: 'freezeMaterialReceipt',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeStock',
            className: 'freezeStock',
            id: 'freezeStock',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeProduction',
            className: 'freezeProduction',
            id: 'freezeProduction',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeUnassemble',
            className: 'freezeUnassemble',
            id: 'freezeUnassemble',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeStockJournal',
            className: 'freezeStockJournal',
            id: 'freezeStockJournal',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezePayment',
            className: 'freezePayment',
            id: 'freezePayment',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeReceipt',
            className: 'freezeReceipt',
            id: 'freezeReceipt',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeJournal',
            className: 'freezeJournal',
            id: 'freezeJournal',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeContra',
            className: 'freezeContra',
            id: 'freezeContra',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeDebit',
            className: 'freezeDebit',
            id: 'freezeDebit',
            values: [
                "All Series"
            ]
        },
        {
            name: 'freezeCredit',
            className: 'freezeCredit',
            id: 'freezeCredit',
            values: [
                "All Series"
            ]
        },
    ]

    const partial_freeze_date = [
        {
            name: 'freezeSalesDate',
            className: 'freezeSalesDate',
            id: 'freezeSalesDate'
        },
        {
            name: 'freezePurchaseDate',
            className: 'freezePurchaseDate',
            id: 'freezePurchaseDate'
        },
        {
            name: 'freezeSalesReturnDate',
            className: 'freezeSalesReturnDate',
            id: 'freezeSalesReturnDate'
        },
        {
            name: 'freezePurchaseReturnDate',
            className: 'freezePurchaseReturnDate',
            id: 'freezePurchaseReturnDate'
        },
        {
            name: 'freezeMaterialIssueDate',
            className: 'freezeMaterialIssueDate',
            id: 'freezeMaterialIssueDate'
        },
        {
            name: 'freezeMaterialReceiptDate',
            className: 'freezeMaterialReceiptDate',
            id: 'freezeMaterialReceiptDate'
        },
        {
            name: 'freezeStockDate',
            className: 'freezeStockDate',
            id: 'freezeStockDate'
        },
        {
            name: 'freezeProduction',
            className: 'freezeProduction',
            id: 'freezeProduction'
        },
        {
            name: 'freezeUnassembleDate',
            className: 'freezeUnassembleDate',
            id: 'freezeUnassembleDate'
        },
        {
            name: 'freezeStockJournalDate',
            className: 'freezeStockJournalDate',
            id: 'freezeStockJournalDate'
        },
        {
            name: 'freezePaymentDate',
            className: 'freezePaymentDate',
            id: 'freezePaymentDate'
        },
        {
            name: 'freezeReceiptDate',
            className: 'freezeReceiptDate',
            id: 'freezeReceiptDate'
        },
        {
            name: 'freezeJournalDate',
            className: 'freezeJournalDate',
            id: 'freezeJournalDate'
        },
        {
            name: 'freezeContraDate',
            className: 'freezeContraDate',
            id: 'freezeContraDate'
        },
        {
            name: 'freezeDebitDate',
            className: 'freezeDebitDate',
            id: 'freezeDebitDate'
        },
        {
            name: 'freezeCreditDate',
            className: 'freezeCreditDate',
            id: 'freezeCreditDate'
        },
    ]

    const partial_freeze_dropdown_three = [
        {
            label: 'Account Opening Balance',
            name: 'accountOpeningBalance',
            className: 'accountOpeningBalance',
            id: 'accountOpeningBalance',
            values: [
                "Y"
            ]
        },
        {
            label: 'Items Opening Balance',
            name: 'itemsOpeningBalance',
            className: 'accountOpeningBalance',
            id: 'accountOpeningBalance',
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
                        <h2 className="text-center mb-5">Partial Data Freezing</h2>
                        <div className="row">
                            <div className="col-12 col-md-5 mt-3">
                                {
                                    partial_freeze_dropdown_one.map((val, index) => (
                                        <div className="mt-2 partialInputAlign" key={"inputDropdownValue" + index}>
                                            <div className="mb-2">
                                                {val.label}
                                            </div>
                                            <FormControl>
                                                <select
                                                    type='select'
                                                    name={val.name}
                                                    multiple={false}
                                                    className={val.className}
                                                    id={val.id}
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
                                {
                                    partial_freeze_dropdown_two.map((val, index) => (
                                        <div className="mt-2 mb-3" key={"inputDropdownValue" + index}>
                                            <FormControl>
                                                <select
                                                    type='select'
                                                    name={val.name}
                                                    multiple={false}
                                                    className={val.className}
                                                    id={val.id}
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
                                {
                                    partial_freeze_date.map((val, index) => (
                                        <div className="mt-2 mb-1 dateFieldHeight" key={"DatePicker" + index}>
                                            <DatePicker
                                                value={val.value}
                                                name={val.name}
                                                className={val.className}
                                                id={val.id}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="row inventoryForm mt-3 pl-0 pr-0">
                            {
                                partial_freeze_dropdown_three.map((val, index) => (
                                    <div className="mt-2 mb-3 col-12 col-md-6 freezeSection" key={"inputDropdownValue" + index}>
                                        <div>
                                            {val.label}
                                        </div>
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
                                                multiple={false}
                                                className={val.className}
                                                id={val.id}
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