import React from 'react';
import './Excise.css';
import ModalComponent from '../../components/modal/ModalComponent';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';
import InvoiceSetting from '../../components/Forms/excise-sub-forms/invoice-setting/InvoiceSetting';

const Excise = (props) => {

    let childDataInfoFormOne = null;

    const formValue = {
        exciseRegnNo: '',
        eccCode: '',
        plaNo: '',
        range: '',
        division: '',
        collectorate: '',
        defaultNotificationAvailed: '',
        defaultNotificationNo: '',
    }

    const checkBoxData_One = [
        {
            title: 'Enable Excise Reporting',
            value: 'Enable Excise Reporting'
        },
    ]

    const radioBtn_One = [
        {
            key: 'Manufacturing',
            value: 'Manufacturing',
        },
        {
            key: 'Trading',
            value: 'Trading',
        },
        {
            key: 'Both',
            value: 'Both',
        },
    ]

    const inputText_One = [
        {
            label: 'Excise Regn. No.',
            name: 'exciseRegnNo',
            placeholder: 'Excise Regn. No...'
        },
        {
            label: 'ECC Code',
            name: 'eccCode',
            placeholder: 'ECC Code...'
        },
        {
            label: 'PLA No.',
            name: 'plaNo',
            placeholder: 'PLA No...'
        },
        {
            label: 'Range',
            name: 'range',
            placeholder: 'Range...'
        },
        {
            label: 'Division',
            name: 'division',
            placeholder: 'Division...'
        },
        {
            label: 'Collectorate',
            name: 'collectorate',
            placeholder: 'Collectorate...'
        }
    ]

    const dropDown_One = [
        {
            label: 'Enable Special / Additional Excise Duty Reporting',
            name: 'enableSpecialAddExciseDutyReporting',
            values: [
                "Y",
                "N",
            ],
        },
        {
            label: 'Type of Above Mentioned Duty',
            name: 'typeOfDealer',
            values: [
                "SED",
                "AED",
            ],
        },
        {
            label: 'Enable Education Cess Reporting',
            name: 'enableEducationCessReporting',
            values: [
                "Y",
                "N",
            ],
        },
        {
            label: 'Enable SHE Cess Reporting',
            name: 'enableSheCessReporting',
            values: [
                "Y",
                "N",
            ],
        },
    ]

    const dropDown_Two = [
        {
            label: 'Default Type of Clearence',
            name: 'defaultTypeOfClearence',
            values: [
                "Home Clearence",
                "Export/Bond",
                "Export/LUT",
                "Export/Rebate",
                "SEZ/Bond",
                "SEZ/LUT",
                "SEZ/Rebate",
            ],
        },
        {
            label: 'Enable Mfr. Details in following Vouchers',
            name: 'enableDetailsInFollowingVouchers',
            values: [
                "Y",
                "N",
            ],
        },
    ]

    const inputText_Two = [
        {
            label: 'Default Notification Availed',
            name: 'defaultNotificationAvailed',
            placeholder: 'Default Notification Availed...'
        },
        {
            label: 'Default Notification No.',
            name: 'defaultNotificationNo',
            placeholder: 'Default Notification No...'
        },
    ]

    const checkBoxData_Two = [
        {
            title: 'Material Issued to Party',
            value: 'Material Issued to Party'
        },
        {
            title: 'Material Received from Party',
            value: 'Material Received from Party'
        },
        {
            title: 'Stock Transfer',
            value: 'Stock Transfer'
        },
    ]

    const dropDown_Three = [
        {
            label: 'Balance Duty Calculation Basis',
            name: 'balanceDutyCalculationBasis',
            values: [
                "Proportional",
                "Actual", ,
            ],
        },
        {
            label: 'Enfornce all adjustment in a voucher with same Mfr. & Supplier',
            name: 'enforceAllAdjustments',
            values: [
                "Y",
                "N",
            ],
        },
        {
            label: 'Maintain Material Center-wise duty details',
            name: 'maintainMaterialCenterWiseDutyDetails',
            values: [
                "Y",
                "N",
            ],
        },
        {
            label: 'Restrict changes in adjusted Purchase voucher',
            name: 'restrictChangesInAdjustedPurchaseVoucher',
            values: [
                "Y",
                "N",
            ],
        },
        {
            label: 'Append Voucher Series Name in Default Ref. No.',
            name: 'appendVoucherSeriesNameInDefaultRef',
            values: [
                "Y",
                "N",
            ],
        },
    ]

    const invoiceSetting = [
        {
            id: 'invoiceSetting',
        }
    ]

    const componentModalItem = (id) => {
        let element = null;
        switch (id) {
            case "invoiceSetting":
                element = <InvoiceSetting
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
                                                        name="checkbox_One"
                                                        value={val.value}
                                                        as={Checkbox} />
                                                }
                                            />
                                        </div>
                                    ))
                                }
                            </div>


                            <span className="exciseHeadingText">Automatic Mode Configuration</span>
                            <div className="exciseRadioBtns row">
                                {
                                    radioBtn_One.map((val, index) => (
                                        <div className="mb-2 col-6 col-md-4" key={"radioInputKey" + index}>
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
                            </div>

                            <span className="exciseHeadingText">Excise Details</span>
                            <div className="exciseRadioBtns row">
                                {
                                    inputText_One.map((val, index) => (
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

                                {
                                    dropDown_One.map((val, index) => (
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


                            <span className="exciseHeadingText">Manufacturing Options</span>
                            <div className="exciseRadioBtns row">

                                {
                                    dropDown_Two.map((val, index) => (
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
                                    inputText_Two.map((val, index) => (
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

                                <div className="exciseRadioBtns row">
                                    <div className="col-12 col-md-12">
                                        {
                                            checkBoxData_Two.map((val, index) => (
                                                <div key={"inputCheckboxKey" + index}>
                                                    <FormControlLabel
                                                        label={val.title}
                                                        control={
                                                            <Field
                                                                type='checkbox'
                                                                name="checkbox_Two"
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


                            <span className="exciseHeadingText">Trading Options</span>
                            <div className="exciseRadioBtns row">

                                {
                                    dropDown_Three.map((val, index) => (
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

                                <div className="mt-2 mb-4 configureBtn">
                                    {
                                        invoiceSetting.map((val, index) => (
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

export default Excise