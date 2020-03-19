import React from 'react';
import './GstVat.css';
import ModalComponent from '../../components/modal/ModalComponent';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl } from '@material-ui/core';
import SignatoryDetails from '../../components/Forms/gst-vat-sub-forms/signatory-details/SignatoryDetails';

const GstVat = (props) => {

    const formValue = {
        taxRate: '',
        categoryOfContract: '',
        cstNo: '',
        lbtNo: '',
        tin: '',
        gstin: '',
        gstPortalUserName: ''
    }

    let childDataInfoFormOne = null;

    const checkBoxData_One = [
        {
            title: 'Enable GST/VAT Reporting',
            value: 'Enable GST/VAT Reporting'
        },
    ]

    const signatoryDetails = [
        {
            id: 'signatoryDetails',
        }
    ]

    const dropDownForm_One = [
        {
            label: 'Type',
            name: 'type',
            values: [
                "VAT",
                "GST",
            ],
        },
        {
            label: 'Type of Dealer',
            name: 'typeOfDealer',
            values: [
                "Regular",
                "Composition",
            ],
        },
    ]

    const inputText_One = [
        {
            label: 'Tax Rate (%)',
            name: 'taxRate',
            placeholder: '0.00'
        },
        {
            label: 'Category of Contract',
            name: 'categoryOfContract',
            placeholder: ' '
        }
    ]

    const inputText_Two = [
        {
            label: 'CST No.',
            name: 'cstNo',
            placeholder: ' '
        },
        {
            label: 'LBT No.',
            name: 'lbtNo',
            placeholder: ' '
        }
    ]

    const inputText_Three = [
        {
            label: 'TIN',
            name: 'tin',
            placeholder: ' '
        },
    ]

    const dropDownForm_Two = [
        {
            label: 'Adjust about CST in Input VAT',
            name: 'adjustCstInputVat',
            values: [
                "Y",
                "N",
            ],
        },
        {
            label: `Pick VAT Op. Bal. from 'VAT Ledger A/C(s)' `,
            name: 'pickVatFromVatLedger',
            values: [
                "Y",
                "N",
            ],
        },
    ]

    const inputText_Four = [
        {
            label: 'GSTIN',
            name: 'gstin',
            placeholder: ' '
        },
    ]

    const dropDownForm_Three = [
        {
            label: 'Default Tax Category',
            name: 'defaultTaxCategory',
            values: [
                "None",
                "Exempt",
                "GST 5%",
                "GST 12%",
                "GST 18%",
                "GST 28%",
            ],
        },
        {
            label: 'Transport Details in Local Sales/Purchase',
            name: 'transportDetailsInLocalSalesPurchase',
            values: [
                "Y",
                "N",
            ],
        },
        {
            label: 'Enable Tax on Advance Receipts',
            name: 'enableTaxOnAdvanceReceipts',
            values: [
                "Y",
                "N",
            ],
        },
    ]

    const inputText_Five = [
        {
            label: 'GST Portal User Name',
            name: 'gstPortalUserName',
            placeholder: ' '
        },
    ]

    const dropDownForm_Four = [
        {
            label: 'Enable Cess',
            name: 'enableCess',
            values: [
                "Y",
                "N",
            ],
        },
        {
            label: 'Show Sale/Purchase Amt. as Taxable Amt. in GST Reports',
            name: 'showSalePurchaseInGstReports',
            values: [
                "Y",
                "N",
            ],
        },
    ]

    const checkBoxData_Two = [
        {
            title: `Show Captions of 'Sale/Purchase' vouchers as 'Supply Outward/ Supply Inward'`,
            value: `Show Captions of 'Sale/Purchase' vouchers as 'Supply Outward/ Supply Inward'`
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
                            <div className="col-12 col-md-12">
                                {
                                    checkBoxData_One.map((val, index) => (
                                        <div key={"inputCheckboxKey" + index}>
                                            <FormControlLabel
                                                label={val.title}
                                                control={
                                                    <Field
                                                        type='checkbox'
                                                        name="checkboxOne"
                                                        value={val.value}
                                                        as={Checkbox} />
                                                }
                                            />
                                        </div>
                                    ))
                                }
                            </div>

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

                            {
                                dropDownForm_One.map((val, index) => (
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
                                    <div className="mb-1 col-6 col-md-6" key={"inputTextField" + index}>
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

                            <span className="gstVatDetailsHeading">GST/VAT Details</span>
                            <div className="row Gst_Vat_Details mt-4">
                                {
                                    inputText_Two.map((val, index) => (
                                        <div className="mb-1 mt-4 col-6 col-md-6" key={"inputTextField" + index}>
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

                                <span className="gstVatDetailsHeading">VAT Details</span>
                                <div className="row Gst_Vat_Details mt-4 mb-2">
                                    {
                                        inputText_Three.map((val, index) => (
                                            <div className="mb-1 mt-3 col-12 col-md-12" key={"inputTextField" + index}>
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

                                    <div className="row vatDetails mt-4">
                                        {
                                            dropDownForm_Two.map((val, index) => (
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
                                    </div>
                                </div>


                                <span className="gstVatDetailsHeading">GST Details</span>
                                <div className="row Gst_Vat_Details mt-4 mb-4">
                                    {
                                        inputText_Four.map((val, index) => (
                                            <div className="mt-4 mb-4 col-12 col-md-12" key={"inputTextField" + index}>
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

                                {
                                    dropDownForm_Three.map((val, index) => (
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
                                    inputText_Five.map((val, index) => (
                                        <div className="mb-1 mt-3 col-12 col-md-12" key={"inputTextField" + index}>
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
                                    dropDownForm_Four.map((val, index) => (
                                        <div className="mb-3 mt-4 col-12 col-md-6" key={"inputDropdownValue" + index}>
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

                                <div className="col-12 col-md-12">
                                    {
                                        checkBoxData_Two.map((val, index) => (
                                            <div key={"inputCheckboxKey" + index}>
                                                <FormControlLabel
                                                    label={val.title}
                                                    control={
                                                        <Field
                                                            type='checkbox'
                                                            name="checkboxTwo"
                                                            value={val.value}
                                                            as={Checkbox} />
                                                    }
                                                />
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
export default GstVat