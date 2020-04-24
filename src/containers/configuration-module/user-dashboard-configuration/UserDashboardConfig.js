import React from 'react';
import './UserDashboardConfig.css';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const UserDashboardConfig = () => {

    const formValue = {
        userName: '',
        billsOlderThan: '',
        billsGreaterThan: '',
        greaterThanReceivable: '',
        greaterThanPayable: '',
        billsOlderThan_payable: '',
        billsGreaterThan_payable: ''
    }

    const inputText_one = [
        {
            label: 'User Name',
            name: 'userName',
            placeholder: 'Enter User Name...'
        }
    ]

    const dropDown_one = [
        {
            label: 'Cash Balances',
            name: 'cashBalances',
            values: [
                "Y",
            ]
        },
        {
            label: 'Bank Balances',
            name: 'bankBalances',
            values: [
                "Y",
            ]
        },
        {
            label: 'Show Sub Details Also',
            name: 'showSubDetails',
            values: [
                "Y",
            ]
        },
        {
            label: 'Sale Till Date',
            name: 'saleTillDate',
            values: [
                "Y",
            ]
        },
        {
            label: 'Purchase Till Date',
            name: 'purchaseTillDate',
            values: [
                "Y",
            ]
        },
    ]

    const dropDown_two = [
        {
            label: 'PDC Received',
            name: 'pdcReceived',
            values: [
                "Y",
            ]
        },
        {
            label: 'PDC Issued',
            name: 'pdcIssued',
            values: [
                "Y",
            ]
        },
    ]

    const dropDown_three = [
        {
            label: 'Bills Receivable',
            name: 'billsReceivable',
            values: [
                "N",
                'Y'
            ]
        },
        {
            label: 'Bill to be Shown',
            name: 'billToBeShown',
            values: [
                "Pending",
                "Due",
                "All (Including Cleared)"
            ]
        },
        {
            label: 'Ageing Receivable',
            name: 'ageingReceivable',
            values: [
                "N",
                "Y",
            ]
        },
    ]

    const inputText_two = [
        {
            label: 'Bills Older than (Days)',
            name: 'billsOlderThan',
            placeholder: '0'
        },
        {
            label: 'Bills Greater than (Rs.)',
            name: 'billsGreaterThan',
            placeholder: '0.00'
        }
    ]

    const dropDown_four = [
        {
            label: 'Pending Sale Order',
            name: 'pendingSaleOrder',
            values: [
                "Y",
            ]
        },
        {
            label: 'Pending Purchase',
            name: 'pendingPurchase',
            values: [
                "Y",
            ]
        },
    ]

    const dropDown_five = [
        {
            label: 'Items Below Minimum',
            name: 'itemsBelowMinimum',
            values: [
                "Y",
            ]
        },
        {
            label: 'Items Above Maximum',
            name: 'itemsAboveMaximum',
            values: [
                "Y",
            ]
        },
        {
            label: 'Items Below Recorder Level',
            name: 'itemsBelowRecorderLevel',
            values: [
                "Y",
            ]
        },
    ]

    const dropDown_six = [
        {
            label: 'Closing Stock',
            name: 'closingStock',
            values: [
                "Y",
            ]
        },
        {
            label: 'Stock Ageing Slab Wise',
            name: 'stockAgeingSlabWise',
            values: [
                "Y",
            ]
        },
    ]

    const dropDown_seven = [
        {
            label: 'Daily Sale',
            name: 'dailySale',
            values: [
                "Y",
            ]
        },
        {
            label: 'Daily Receipt',
            name: 'dailyReceipt',
            values: [
                "Y",
            ]
        },
        {
            label: 'Daily Purchase',
            name: 'dailyPurchase',
            values: [
                "Y",
            ]
        },
        {
            label: 'Daily Payment',
            name: 'dailyPayment',
            values: [
                "Y",
            ]
        },
    ]

    const dropDown_eight = [
        {
            label: 'Amount Receivable',
            name: 'amountReceivable',
            values: [
                "Y",
            ]
        },
        {
            label: 'Amount Payable',
            name: 'amountPayable',
            values: [
                "Y",
            ]
        },
    ]

    const inputText_three = [
        {
            label: 'Greater than (Receivable) Rs.',
            name: 'greaterThanReceivable',
            placeholder: '0.00'
        },
        {
            label: 'Greater than (Payable) Rs.',
            name: 'greaterThanPayable',
            placeholder: '0.00'
        }
    ]

    const dropDown_nine = [
        {
            label: 'Bills Payable',
            name: 'billsPayable',
            values: [
                "N",
                'Y'
            ]
        },
        {
            label: 'Bill to be Shown',
            name: 'billToBe_Shown',
            values: [
                "Pending",
                "Due",
                "All (Including Cleared)"
            ]
        },
        {
            label: 'Ageing Payable',
            name: 'ageingPayable',
            values: [
                "N",
                "Y",
            ]
        },
    ]

    const inputText_four = [
        {
            label: 'Bills Older than (Days)',
            name: 'billsOlderThan_payable',
            placeholder: '0'
        },
        {
            label: 'Bills Greater than (Rs.)',
            name: 'billsGreaterThan_payable',
            placeholder: '0.00'
        }
    ]

    const dropDown_ten = [
        {
            label: 'Pending Sale Challan',
            name: 'pendingSaleChallan',
            values: [
                "Y",
            ]
        },
        {
            label: 'Pending Purchase Challan',
            name: 'pendingPurchaseChallan',
            values: [
                "Y",
            ]
        },
    ]

    const dropDown_eleven = [
        {
            label: 'Top 5 Parties Transactions',
            name: 'partiesTransaction',
            values: [
                "Y",
            ]
        },
        {
            label: 'Top 5 Parties Amount Wise',
            name: 'partiesAmountWise',
            values: [
                "Y",
            ]
        },
    ]

    const dropDown_twelve = [
        {
            label: 'Profit/Loss Till Date',
            name: 'profitLossTillDate',
            values: [
                "Y",
            ]
        },
        {
            label: 'Profit/Loss for the Day',
            name: 'profitLossForDay',
            values: [
                "Y",
            ]
        },
    ]

    return (
        <div className="container mt-4 mb-4">
            <h2 className="text-center mb-4">User Dash Board Configuration</h2>
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

                        <div className="row">
                            {
                                inputText_one.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-12" key={"inputTextField" + index}>
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

                        <span className="userDashsubHeading">Balance Options</span>
                        <div className="row inventoryForm">
                            {
                                dropDown_one.map((val, index) => (
                                    <div className="mb-3 col-6 col-md-4" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
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

                        <span className="userDashsubHeading">PDC Details</span>
                        <div className="row inventoryForm">
                            {
                                dropDown_two.map((val, index) => (
                                    <div className="mb-3 col-6 col-md-6" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
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

                        <span className="userDashsubHeading">Bills Receivable</span>
                        <div className="row inventoryForm">
                            {
                                dropDown_three.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-4" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
                                            {val.label}
                                        </div>
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
                                                value={values.name}
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
                                inputText_two.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-6" key={"inputTextField" + index}>
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

                        <span className="userDashsubHeading">Pending Orders</span>
                        <div className="row inventoryForm">
                            {
                                dropDown_four.map((val, index) => (
                                    <div className="mb-3 col-6 col-md-6" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
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

                        <span className="userDashsubHeading">Items Info</span>
                        <div className="row inventoryForm">
                            {
                                dropDown_five.map((val, index) => (
                                    <div className="mb-3 col-6 col-md-4" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
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

                        <span className="userDashsubHeading">Stock Details</span>
                        <div className="row inventoryForm">
                            {
                                dropDown_six.map((val, index) => (
                                    <div className="mb-3 col-6 col-md-6" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
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

                        <span className="userDashsubHeading">Transaction Options</span>
                        <div className="row inventoryForm">
                            {
                                dropDown_seven.map((val, index) => (
                                    <div className="mb-3 col-6 col-md-3" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
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

                        <span className="userDashsubHeading">Amount Receivable/Payable</span>
                        <div className="row inventoryForm">
                            {
                                dropDown_eight.map((val, index) => (
                                    <div className="mb-3 col-6 col-md-6" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
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
                            {
                                inputText_three.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-6" key={"inputTextField" + index}>
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

                        <span className="userDashsubHeading">Bills Payable</span>
                        <div className="row inventoryForm">
                            {
                                dropDown_nine.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-4" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
                                            {val.label}
                                        </div>
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
                                                value={values.name}
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
                                inputText_four.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-6" key={"inputTextField" + index}>
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

                        <span className="userDashsubHeading">Pending Challans</span>
                        <div className="row inventoryForm">
                            {
                                dropDown_ten.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
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

                        <span className="userDashsubHeading">Parties Info</span>
                        <div className="row inventoryForm">
                            {
                                dropDown_eleven.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
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

                        <span className="userDashsubHeading">Profit/Loss</span>
                        <div className="row inventoryForm">
                            {
                                dropDown_twelve.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
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

export default UserDashboardConfig;