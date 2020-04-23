import React from 'react';
import './EmailConfig.css';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio, TextareaAutosize } from '@material-ui/core';

const EmailConfig = () => {

    const formValue = {
        smtpServer: '',
        userName: '',
        password: '',
        port: '',
        from: '',
        replyTo: '',
        emailHeader: '',
        emailFooter: ''
    }

    const radioBtn_One = [
        {
            key: 'Send Directly',
            value: 'sendDirectly',
        },
        {
            key: 'Send Through Microsoft Outlook',
            value: 'sendThroughMicrosoftOutlook',
        },
        {
            key: 'Send Through Outlook Express',
            value: 'sendThroughOutlookExpress',
        },
    ]

    const radioBtn_Two = [
        {
            key: 'PDF Attachment',
            value: 'pdfAttachment',
        },
        {
            key: 'Email Body Text',
            value: 'emailBodyText',
        },
        {
            key: 'XML Attachment (only for invoice)',
            value: 'xmlAttachment',
        },
        {
            key: 'PDF + XML Attachment (only for invoice)',
            value: 'pdfXmlAttachment',
        },
    ]

    const inputText_One = [
        {
            label: 'SMTP Server',
            name: 'smtpServer'
        },
        {
            label: 'User Name',
            name: 'userName'
        },
        {
            label: 'Password',
            name: 'password'
        },
        {
            label: 'Port',
            name: 'port'
        }
    ]

    const inputText_Two = [
        {
            label: 'From',
            name: 'from'
        },
        {
            label: 'Reply To',
            name: 'replyTo'
        },
    ]

    const textArea_one = [
        {
            label: 'Email Header',
            name: 'emailHeader'
        },
        {
            label: 'Email Footer',
            name: 'emailFooter'
        }
    ]

    return (
        <div className="container mt-4 mb-4">
            <h2 className="text-center mb-2">Email Configuration</h2>
            <p className="text-center mt-2">(Email Configuration for the user)</p>
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

                            <div className="col-12 col-md-6 inventoryForm">
                                <h5 className="text-center mb-3 emailConfigHeading">Email Sending Options</h5>
                                {
                                    radioBtn_One.map((val, index) => (
                                        <div className="mb-2" key={"radioInputKey" + index}>
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

                                <div className="inventoryForm mt-4">
                                <span className="subSectionHeading">Send Reports as</span>
                                    {
                                        radioBtn_Two.map((val, index) => (
                                            <div className="mb-2" key={"radioInputKey" + index}>
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

                                <div className="inventoryForm mt-4">
                                <span className="subSectionHeading">Server Configuration</span>
                                    {
                                        inputText_One.map((val, index) => (
                                            <div className="mb-2 col-12" key={"inputTextField" + index}>
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
                            </div>

                            <div className="col-12 col-md-6 inventoryForm">
                                <h5 className="text-center mb-3 emailConfigHeading">Senders Information</h5>
                                {
                                    inputText_Two.map((val, index) => (
                                        <div className="mb-3 col-12" key={"inputTextField" + index}>
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

                                {
                                    textArea_one.map((val, index) => (
                                        <div className="mt-4 col-12" key={"inputTextField" + index}>
                                            {val.label}
                                            <div className="mt-2 inputTextArea">
                                                <TextareaAutosize
                                                    type='textarea'
                                                    name={val.name}
                                                    placeholder={val.placeholder}
                                                    rows={11}
                                                />
                                            </div>
                                        </div>
                                    ))
                                }

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

export default EmailConfig;