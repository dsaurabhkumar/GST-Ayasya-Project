import React, { useState } from 'react';
import './SendNotification.css'
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import DatePicker from '../../../components/date-picker/DatePicker';
import { TextField, Button, FormControlLabel, FormControl, Radio, TextareaAutosize } from '@material-ui/core';
import UploadFile from '../../../components/upload-files/UploadFile';


const SendNotification = (props) => {

    let SendPDF;

    const [user, setUser] = useState(false);
    const [group, setGroup] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [voucher, setVoucher] = useState(false);
    const [party, fromParty] = useState(false);
    const [billing, billingDetails] = useState(false);

    const formValue = {
        radioBtnsOne: "",
        radioBtnsTwo: "",
        radioBtnsThree: "",
        radioBtnsFour: "",
        startDate: "",
        endDate: "",
        message: ""
    }

    const radioBtn_One = [
        {
            key: 'Pick Mobile No. from Account',
            value: 'PickMobileNo.fromAccount',
        },
    ]


    const radioBtn_two = [
        {
            key: 'One Account',
            value: 'OneAccount',
        },
        {
            key: 'Group Of Accounts',
            value: 'GroupOfAccounts',
        }, {
            key: 'Selected Account',
            value: 'SelectedAccount',
        },
    ]

    const ref_dropdown_one = [
        {
            name: 'oneAccount',
            values: [
                "Add.Cess Adjustable Agnst.Ad",
                "Add.Cess On Gst Input",
                "Add.Cess On Gst Output"

            ]
        },
    ]

    const ref_dropdown_two = [
        {
            name: 'GroupOfAccounts',
            values: [
                "Bank O/D Account",
                "Loans & Advances (Asset)",
                "Loans (Liability)",
                "Secured Loans",
            ]
        }
    ]


    const radioBtn_three = [
        {
            key: 'Pick Mobile No. from Voucher',
            value: 'PickMobileNo.fromVoucher',
        },
    ]
    const radioBtn_four = [
        {
            key: 'From Party',
            value: 'FromParty',
        },
        {
            key: 'From Billing Details',
            value: 'FromBillingDetails',
        },
    ]

    const ref_dropdown_three = [
        {
            label: 'Voucher Type',
            name: 'Voucher Type',
            values: [
                "Sales",
                "Purchase",
                "Sales Return"

            ]
        },
    ]

    const ref_dropdown_four = [
        {
            label: 'From Billing Details',
            name: 'From Billing Details',
            values: [
                "Sales",
                "Purchase",
                "Sales Return",
                "Purchase Return"

            ]
        },
    ]

    const inputTextOne = [
        {
            label: 'Voucher Series',
            name: 'VoucherSeries'
        },

    ]

    const inputDate = [
        {
            label: 'Start Date',
            name: 'startDate',
        },
        {
            label: 'End Date',
            name: 'endDate',
        },
    ]

    const message = [
        {
            label: 'Message',
            name: 'message'
        }
    ]


    return (
        <div className="container containerWidth mt-4 mb-4">
            <div className="text-center mb-4">
                <h2>Send Notification</h2>
            </div>
            <div className="inventoryForm">
                <div className="text-center mb-4">
                    <strong>(Multiple Mobile No(s) must be seprated with semicolon  character)</strong>
                </div>

                <Formik
                    initialValues={formValue}
                    onSubmit={(data, { setSubmitting }) => {
                        setSubmitting(true);
                        console.log(data, SendPDF)
                        setSubmitting(false);
                    }}
                >
                    {({ values, isSubmitting, handleChange, handleBlur }) => (
                        <Form className="">
                            {
                                radioBtn_One.map((val, index) => (
                                    <div key={"radioInputKey" + index}>
                                        <Field
                                            type='radio'
                                            name='radioBtnsOne'
                                            value={val.value}
                                            as={Radio}
                                            onClick={event => setMobile(event.target.value === 'PickMobileNo.fromAccount')}
                                        />
                                        {val.key}

                                    </div>
                                ))
                            }
                            {/* </div> */}
                            <div className={mobile ? "d-block" : "d-none"}>
                                <span className="mt-2 headingAlign">Send SMS to</span>
                                <div className="inventoryForm row">
                                    {
                                        radioBtn_two.map((val, index) => (
                                            <div className="mb-2" key={"radioInputKey" + index}>
                                                <div className="radioBtnTextAlign">
                                                    <Field
                                                        type='radio'
                                                        name='radioBtnsTwo'
                                                        value={val.value}
                                                        as={Radio}
                                                        onClick={event => setUser(event.target.value === 'OneAccount') || setGroup(event.target.value === 'GroupOfAccounts')}
                                                    />
                                                    {val.key}
                                                </div>

                                            </div>
                                        ))
                                    }

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
                            </div>

                            <div>
                                {
                                    radioBtn_three.map((val, index) => (
                                        <div key={"radioInputKey" + index}>
                                            <Field
                                                type='radio'
                                                name='radioBtnsThree'
                                                value={val.value}
                                                as={Radio}
                                                onClick={event => setVoucher(event.target.value === 'PickMobileNo.fromVoucher')}
                                            />
                                            {val.key}

                                        </div>
                                    ))
                                }
                            </div>
                            <div className={voucher ? "d-block" : "d-none"}>
                                <span className="headingAlign">Pick Mobile No.</span>
                                <div className="inventoryForm row">
                                    {
                                        radioBtn_four.map((val, index) => (
                                            <div className="mb-2" key={"radioInputKey" + index}>
                                                <div className="radioBtnTextAlign">
                                                    <Field
                                                        type='radio'
                                                        name='radioBtnsFour'
                                                        value={val.value}
                                                        as={Radio}
                                                        onClick={event => fromParty(event.target.value === 'FromParty') || billingDetails(event.target.value === 'FromBillingDetails')} />
                                                    {val.key}
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>
                                <div className={party || billing ? "d-block" : "d-none"}>
                                    <span className="headingAlign">Voucher Details</span>
                                    <div className="inventoryForm mt-2">
                                        {
                                            ref_dropdown_three.map((val, index) => (
                                                <div className="mt-3 mb-3 SendNotifications" key={"inputDropdownValue" + index}>
                                                    <div className="labelWidth">
                                                        {val.label}
                                                    </div>
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
                                            inputTextOne.map((val, index) => (
                                                <div className="mb-3 mt-3 SendNotifications" key={"inputTextField" + index}>
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
                                            inputDate.map((val, index) => (
                                                <div className="mb-3 mt-3 SendNotifications" key={"DatePicker" + index}>
                                                    <div className="labelWidth">
                                                        {val.label}
                                                    </div>
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

                            <div className="col-12 col-md-6 mt-4 p-0">
                                <UploadFile
                                    fileUpload={(childData) => (SendPDF = (childData.target.files))}
                                />
                            </div>

                            <div className="row mt-4">
                                {
                                    message.map((val, index) => (
                                        <div className="col-12" key={"inputTextField" + index}>
                                            {val.label}
                                            <div className="mt-2 inputTextArea">
                                                <TextareaAutosize
                                                    type='text'
                                                    name={val.name}
                                                    rows={3}
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
                            </div>
                        </Form>
                    )
                    }

                </Formik>
            </div>
        </div>
    )

}

export default SendNotification;;