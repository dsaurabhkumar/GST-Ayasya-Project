import React from 'react';
import './ServiceTax.css';
import './Custom';
import ModalComponent from '../../components/modal/ModalComponent';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';
import SignatoryDetails from '../../components/Forms/gst-vat-sub-forms/signatory-details/SignatoryDetails';

const ServiceTax = (props) => {

    let childDataInfoFormOne = null;

    const signatoryDetails = [
        {
            id: 'signatoryDetails',
        }
    ]

    const formValue = {
        defaultSbcRate: '0.50%',
        defaultKkcRate: '0.50%',
        serviceTaxRegNo: '',
        stcNo: '',
        premisesCodeNo: '',
        nameOfTheTaxableService: '',
    }

    const checkBoxData = [
        {
            title: 'Enable Service Tax (Based on Invoices Raised / Issued and NOT on Payments / Receipts',
            value: 'Enable Service Tax (Based on Invoices Raised / Issued and NOT on Payments / Receipts',
        },
    ]

    const dropDown = [
        {
            label: 'Constitution Assessee',
            name: 'constitutionAssessee',
            values: [
                "Proprietorship/Individual",
                "Limited Liability Partnership",
                "Registered Public Limited Company",
                "Registered Private Limited Company",
                "Registered Trust",
                "Society/Co-operative Society",
                "A Firm",
                "Hindu Undivided Family",
                "Government",
                "An Association of Persons or Body of Individuals, whether incorporated or not",
                "A Local Authority",
                "Every Artificial Judicial Person, not falling within any of the preceding sub-clauses",
            ],
        },
        {
            label: 'Enable Swachh Bharat Cess (SBC)',
            name: 'enableSwachhBharatCess',
            values: [
                "Y",
                "N"
            ],
        },
        {
            label: 'Enable Krishi Kalyan Cess (KKC)',
            name: 'enableKrishiKalyanCess',
            values: [
                "Y",
                "N"
            ],
        },
        {
            label: 'Enable Education Cess on Service Tax',
            name: 'enableEducationCessOnServiceTax',
            values: [
                "Y",
                "N"
            ],
        },
        {
            label: 'Enable SHE Cess on Service Tax',
            name: 'enableSheCessOnServiceTAx',
            values: [
                "Y",
                "N"
            ],
        },
    ]

    const inputText_One = [
        {
            label: 'Default SBC Rate (%)',
            name: 'defaultSbcRate',
        },
        {
            label: 'Default KKC Rate (%)',
            name: 'defaultKkcRate',
        },
    ]

    const inputText_Two = [
        {
            label: 'Service Tax Regn. No.',
            name: 'serviceTaxRegNo',
            placeholder: 'Service Tax Regn. No...'
        },
        {
            label: 'STC No.',
            name: 'stcNo',
            placeholder: 'STC No... '
        },
        {
            label: 'Premises Code No.',
            name: 'premisesCodeNo',
            placeholder: 'Premises Code No... '
        },
        {
            label: 'Name of the Taxable Service',
            name: 'nameOfTheTaxableService',
            placeholder: 'Name of the Taxable Service... '
        },
    ]


    const componentModalItem = (id) => {
        let element = null;
        switch (id) {
            case "signatoryDetails":
                element = <SignatoryDetails
                    submittedData={(childData) => (
                        childDataInfoFormOne = childData
                    )}
                />
                break;
        }

        if (element) {
            element = <ModalComponent>
                <div>
                    {element}
                </div>
            </ModalComponent>
        }
        return element;
    }


    return (
        <div className="container mt-4 mb-4">
            <h2 className="text-center mb-4">Service Tax</h2>
            <Formik
                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data, childDataInfoFormOne)
                    setSubmitting(false);
                }}
            >
                {({ values, isSubmitting, handleChange }) => (
                    <Form className="inventoryForm">
                        <div className="row">
                            <div className="col-12 col-md-12 mb-4">
                                {
                                    checkBoxData.map((val, index) => (
                                        <div key={"inputCheckboxKey" + index}>
                                            <FormControlLabel
                                                label={val.title}
                                                control={
                                                    <Field
                                                        type='checkbox'
                                                        name="checkbox"
                                                        value={val.value}
                                                        as={Checkbox}
                                                        id="checkboxDiv"
                                                    />
                                                }
                                            />
                                        </div>
                                    ))
                                }

                                <div id="hiddenDiv" className="mt-3">
                                    <div className="row">
                                        {
                                            dropDown.map((val, index) => (
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
                                            inputText_One.map((val, index) => (
                                                <div className="mb-3 col-6 col-md-6" key={"inputTextField" + index}>
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
                                            inputText_Two.map((val, index) => (
                                                <div className="mb-3 col-6 col-md-6" key={"inputTextField" + index}>
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

                                        <div className="mt-2 mb-4 configureBtn">
                                            {
                                                signatoryDetails.map((val, index) => (
                                                    <div key={"inputTextKey" + index}>
                                                        {
                                                            componentModalItem(val.id)
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row btnContainer flex-sm-row-reverse mt-4 mb-3">
                            <div className="mt-3 col-12 col-md-3 p-0">
                                <Button type="submit" className="col-12" disabled={isSubmitting}>Save</Button>
                            </div>
                            <div className="mt-3 col-12 col-md-3 align-self-center quitBtn">
                                <Link to='/feature-options'><Button type="submit" className="col-12">Quit</Button></Link>
                            </div>
                        </div>
                    </Form>
                )
                }
            </Formik>
        </div>
    )
}

export default ServiceTax