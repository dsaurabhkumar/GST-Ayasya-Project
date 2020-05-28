import React from 'react';
import './SendEmail.css';
import DatePicker from '../../../components/date-picker/DatePicker';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Button, FormControl, Radio } from '@material-ui/core';
import UploadFile from '../../../components/upload-files/UploadFile';
import axios from 'axios';
import { checkPropTypes } from 'prop-types';

const SendEmail = (props) => {

    let childDataInfo;

    const formValue = {
        radioBtnsOne: "",
        radioBtnsTwo: '',
        cc: '',
        bcc: '',
        subject: '',
        externalAttachment: ''
    }

    const send_email_radio = [
        {
            key: 'One Account',
            value: 'oneAccount',
        },
        {
            key: 'Group of Accounts',
            value: 'groupOfAccounts',
        },
        {
            key: 'Pick Email from Vouchers',
            value: 'pickEmailFromVouchers',
        },
    ]

    const pick_email_radio = [
        {
            key: 'From Party',
            value: 'fromParty',
        },
        {
            key: 'From Billing Details',
            value: 'fromBillingDetails',
        },
    ]

    const select_account = [
        {
            label: 'Select Account',
            name: 'selectAccount',
            values: [
                "Add. Cess Adjustable Agnst. Advance",
                "Add. Cess on GST Input",
                "Add. Cess on GST Output",
                "Advertisement and Publicity",
                "Bad Debts Written Off",
                "Bank Charges",
                "Books and Periodicals",
            ],
        },
    ]

    const select_group_account = [
        {
            label: 'Select Group Account',
            name: 'selectGroupAccount',
            values: [
                "Bank Accounts",
                "Bank O/D Accounts",
                "Capital Account",
                "Cash-in-hand",
                "Current Assets",
                "Current Liabilities",
                "Duties & Taxes",
                "Expenses (Direct/Mfg.)"
            ],
        },
    ]

    const voucher_details = [
        {
            label: 'Voucher Type',
            name: 'voucherType',
            values: [
                "Sales",
                "Purchase",
                "Sales Return (Cr. Note)",
                "Purchase Return (Dr. Note)",
                "Mat. Issued to Party",
                "Mat. Rcvd. from Party",
            ],
        },
        {
            label: 'Voucher Series',
            name: 'voucherSeries',
            values: [
                "Values to be selected from db"
            ],
        },
    ]

    const dates = [
        {
            label: 'Start Date',
            name: 'startDate',
        },
        {
            label: 'End Date',
            name: 'endDate',
        },
    ]

    const mail_fields = [
        {
            label: 'CC:',
            name: 'cc',
        },
        {
            label: 'BCC:',
            name: 'bcc',
        },
        {
            label: 'Subject:',
            name: 'subject',
        },
    ]

    const attachment_field = [
        {
            label: "External Attachment",
            name: 'externalAttachment'
        }
    ]

    return (
        <div className="container mt-4 mb-4">
            <div className="text-center mb-4">
                <h2>Send E-Mail</h2>
            </div>

            <Formik

                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data, childDataInfo)
                    setSubmitting(false);
                }}
            >


                {({ values, isSubmitting, handleChange }) => (
                    <Form className="inventoryForm">

                        <div className="row">
                            <div className="col-12 col-md-6 ">
                                <div className="radioBtnsAlignment">
                                    {
                                        send_email_radio.map((val, index) => (
                                            <div key={"radioInputKey" + index}>
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
                                    {
                                        select_account.map((val, index) => (
                                            <div className="mb-2 mt-2 m-3" key={"inputDropdownValue" + index}>
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
                                    {
                                        select_group_account.map((val, index) => (
                                            <div className="mb-2 mt-2 m-3" key={"inputDropdownValue" + index}>
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
                            </div>

                            <div className="col-12 col-md-6 marginAlignment">
                                <div className="radioBtnsAlignment">
                                    {
                                        pick_email_radio.map((val, index) => (
                                            <div key={"radioInputKey" + index}>
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
                                <div className="radioBtnsAlignment mt-3">
                                    {
                                        voucher_details.map((val, index) => (
                                            <div className="mb-2 mt-2 m-3" key={"inputDropdownValue" + index}>
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

                                    {
                                        dates.map((val, index) => (
                                            <div className="mb-3 m-3 datePickerAlign" key={"DatePicker" + index}>
                                                <div className="dateLabelWidth">
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

                        <div className="row mt-4">
                            {
                                mail_fields.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-12 textFieldAlignment" key={"inputTextField" + index}>
                                        <div className="emailLabelWidth">
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
                                attachment_field.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-12" key={"attachment" + index}>
                                        <div className="attachmentLabel">{val.label}</div>
                                    </div>
                                ))
                            }
                            <UploadFile 
                                fileUpload = {(childData) => (childDataInfo = (childData.target.files))}
                            />
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

export default SendEmail;