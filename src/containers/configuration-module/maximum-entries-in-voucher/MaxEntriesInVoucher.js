import React from 'react';
import './MaxEntriesInVoucher.css';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const MaxEntriesInVoucher = () => {

    const formValue = {
        itemEntries: '',
        accountEntries: '',
        billSundryEntries: '',
        costCenterEntries: '',
        stFormsEntries: '',
        billByBillEntries: '',
        batchParamEntries: '',
        orderReferenceEntries: ''
    }

    const inputText = [
        {
            label: 'Item Entries:',
            name: 'itemEntries',
            placeholder: 'Numbers...'
        },
        {
            label: 'Account Entries:',
            name: 'accountEntries',
            placeholder: 'Numbers...'
        },
        {
            label: 'Bill Sundry Entries:',
            name: 'billSundryEntries',
            placeholder: 'Numbers...'
        },
        {
            label: 'Cost Center Entries:',
            name: 'costCenterEntries',
            placeholder: 'Numbers...'
        },
        {
            label: 'ST-Forms Entries:',
            name: 'stFormsEntries',
            placeholder: 'Numbers...'
        },
        {
            label: 'Bill-by-Bill Entries:',
            name: 'billByBillEntries',
            placeholder: 'Numbers...'
        },
        {
            label: 'Batch/Param.-wise Entries:',
            name: 'batchParamEntries',
            placeholder: 'Numbers...'
        },
        {
            label: 'Order Reference Entries:',
            name: 'orderReferenceEntries',
            placeholder: 'Numbers...'
        }

    ]

    return (
        <div className="container mt-4 mb-4">
            <h2 className="text-center mb-4">Configuration Maximum Entries In</h2>
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
                                inputText.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-6 maxEntriesVoucher" key={"inputTextField" + index}>
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

export default MaxEntriesInVoucher;