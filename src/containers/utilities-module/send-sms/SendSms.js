import React, { useState } from 'react';
import './SendSms.css'
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import DatePicker from '../../../components/date-picker/DatePicker';
import { TextField, Button, FormControlLabel, FormControl, Radio, TextareaAutosize } from '@material-ui/core';
import UploadFile from '../../../components/upload-files/UploadFile';

const SendSms = () => {

    let SendPDF;

    const [port, setPort] = useState(false);
    const [internet, setInternet] = useState(false);
    const [user, setUser] = useState(false);
    const [accountDropdown, setAccountDropdown] = useState(false);
    const [groupDropdown, setGroupDropdown] = useState(false);
    const [voucher, setVoucher] = useState(false);
    const [party, setFromParty] = useState(false);
    const [billing, setBillingDetails] = useState(false);


    const formValue = {
        MobileNo: "",
        VoucherSeries: "",
    }

    const select_range_radio = [
        {
            key: 'Phone',
            value: 'phone',
        },
        {
            key: 'Internet',
            value: 'internet',
        },
    ]

    const ref_dropdown_one = [
        {
            name: 'port_number',
            values: [
                "COM1", "COM2", "COM3", "COM4", "COM5", "COM6", "COM7", "COM8", "COM9", "COM10", "COM11", "COM12", "COM13", "COM14", "COM15", 
                "COM16", "COM17", "COM18", "COM19", "COM20","COM21", "COM22", "COM23", "COM24", "COM25", "COM26", "COM27", "COM28", "COM29", 
                "COM30", "COM31", "COM32"
            ]
        },
    ]

    const ref_dropdown_two = [
        {
            name: 'oneAccount',
            values: [
                "Add. Cess Adjustable Agnst. Advar",
                "Add. Cess On Gst Input",
                "Add. Cess On Gst Output",
                "Advertisement & publicity",
                "Bad Debts Written Off",
                "Bank Charges",
                "Books & periodicals"
            ]
        }
    ]

    const pick_mobile_radio = [
        {
            key: 'Pick Mobile No. from Account',
            value: 'pickMobileNoFromAccount',
        },
    ]

    const one_Account_radio = [
        {
            key: 'One Account',
            value: 'OneACcount',
        },
    ]

    const group_Of_Accounts_radio = [
        {
            key: 'Group Of Accounts',
            value: 'GroupOfAccounts',
        },
    ]

    const ref_dropdown_three = [
        {
            name: 'groupOfAccounts',
            values: [
                "Bank Accounts",
                "Bank O/D Accounts",
                "Capital Account",
                "Cash-in-hand",
                "Current Assets",
                "Current Liabilties",
                "Duties & Taxes",
                "Expenses (Direct/Mfg.)",
            ]
        }
    ]

    const inputTextOne = [
        {
            label: 'Mobile No.',
            name: 'MobileNo.'
        },
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

    const ref_dropdown_eight = [
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

    const inputTextTwo = [
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

    const attachment_field = [
        {
            label: "Send PDF Attachment",
            name: 'sendPDFattachment'
        }
    ]

    return (
        <div className="container containerWidth mt-4 mb-4">
            <div className="text-center mb-4">
                <strong>To send SMS Please connect a compatible GSM mobile phone or provide an Internet Connection to computer</strong>
            </div>
            <h5><span className="mt-2 headingAlign">Mode For Message Sending</span></h5>

            <Formik

                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data)
                    setSubmitting(false);
                }}
            >
                {({ values, isSubmitting, handleChange, handleBlur }) => (
                    <Form className="inventoryForm">
                        <div className="inventoryForm">
                            <div className="sendSmsRadioAlign inventoryForm">
                                {
                                    select_range_radio.map((val, index) => (
                                        <div className="mb-2 p-0 col-12 col-md-6" key={"radioInputKey" + index}>
                                            <div className="radioBtnTextAlign">
                                                <Field
                                                    type='radio'
                                                    name='radioBtnsSelect'
                                                    value={val.value}
                                                    as={Radio}
                                                    onClick={event => setPort(event.target.value === 'phone') || setInternet(event.target.value === 'internet')}
                                                />
                                                {val.key}
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>

                            <div className="">
                                <div className={port ? "d-block" : "d-none"}>
                                    {
                                        ref_dropdown_one.map((val, index) => (
                                            <div className="mt-3 mb-3 inventoryForm" key={"inputDropdownValue" + index}>
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
                                                    <div className="row btnContainer flex-sm-row-reverse mt-4 mb-3">
                                                        <div className="mt-3 col-12 col-md-6 p-0">
                                                            <Button type="submit" className="col-12" disabled={isSubmitting}>Connect</Button>
                                                        </div>
                                                        <div className="mt-3 col-12 col-md-6 align-self-center quitBtn pl-0">
                                                            <Button type="submit" className="col-12">Autodetect</Button>
                                                        </div>
                                                    </div>

                                                </FormControl>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className={internet ? "d-block" : "d-none"}>
                                    <span>(Multiple Mobile No(s) must be seprated with semicolon character)</span>
                                    <div className="radioBtnsAlignment mt-4">
                                        <div>
                                            {
                                                pick_mobile_radio.map((val, index) => (
                                                    <div key={"radioInputKey" + index}>
                                                        <div className="radioBtnTextAlign">
                                                            <Field
                                                                type='radio'
                                                                name='radioBtnsTwo'
                                                                value={val.value}
                                                                as={Radio}
                                                                onClick={event => setUser(event.target.value === 'pickMobileNoFromAccount')}
                                                            />
                                                            {val.key}
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className={user ? "d-block" : "d-none"}>                                            {
                                            one_Account_radio.map((val, index) => (
                                                <div key={"radioInputKey" + index}>
                                                    <div className="radioBtnTextAlign">
                                                        <Field
                                                            type='radio'
                                                            name='radioBtnsThree'
                                                            value={val.value}
                                                            as={Radio}
                                                            onClick={event => setAccountDropdown(event.target.value === 'OneACcount')}
                                                        />
                                                        {val.key}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        </div>
                                        <div className={accountDropdown ? "d-block" : "d-none"}>
                                            {
                                                ref_dropdown_two.map((val, index) => (
                                                    <div className="mt-3 mb-3 col-12 col-md-8" key={"inputDropdownValue" + index}>
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
                                                    <div className="mb-3 mt-3 SendNotifications col-8 col-md-8" key={"inputTextField" + index}>
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
                                        <div className={user ? "d-block" : "d-none"}>                                            {
                                            group_Of_Accounts_radio.map((val, index) => (
                                                <div key={"radioInputKey" + index}>
                                                    <div className="radioBtnTextAlign">
                                                        <Field
                                                            type='radio'
                                                            name='radioBtnsThree'
                                                            value={val.value}
                                                            as={Radio}
                                                            onClick={event => setGroupDropdown(event.target.value === 'GroupOfAccounts')}
                                                        />
                                                        {val.key}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        </div>

                                        <div className={groupDropdown ? "d-block" : "d-none"}>
                                            {
                                                ref_dropdown_three.map((val, index) => (
                                                    <div className="mt-3 mb-3 col-12 col-md-8" key={"inputDropdownValue" + index}>
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
                                    <div className="inventoryForm mt-3 p-1">
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
                                        <div className={voucher ? "d-block" : "d-none"}>
                                            <span className="headingAlign">Pick Mobile No.</span>
                                            <div className="inventoryForm row pickMobileNoRadio mb-3">
                                                {
                                                    radioBtn_four.map((val, index) => (
                                                        <div className="mb-2" key={"radioInputKey" + index}>
                                                            <div className="radioBtnTextAlign">
                                                                <Field
                                                                    type='radio'
                                                                    name='radioBtnsFour'
                                                                    value={val.value}
                                                                    as={Radio}
                                                                    onClick={event => setFromParty(event.target.value === 'FromParty') || setBillingDetails(event.target.value === 'FromBillingDetails')} />
                                                                {val.key}
                                                            </div>

                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className={party || billing ? "d-block" : "d-none"}>
                                                <span className="headingAlign">Voucher Details</span>
                                                <div className="inventoryForm mt-2 pickMobileNoRadio mb-3">
                                                    {
                                                        ref_dropdown_eight.map((val, index) => (
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
                                                        inputTextTwo.map((val, index) => (
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
                                    </div>
                                    {
                                        attachment_field.map((val, index) => (
                                            <div className="mt-3 mb-3 col-12 col-md-6 p-0" key={"attachment" + index}>
                                                <div className="attachmentLabel">{val.label}</div>
                                            </div>
                                        ))
                                    }
                                    <div className="col-12 col-md-6 mt-2 p-0">
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
    );
};

export default SendSms;