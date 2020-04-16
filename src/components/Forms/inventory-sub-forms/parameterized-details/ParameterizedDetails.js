import React from 'react';
import './ParameterizedDetails.css';
import { Formik, Field, Form } from 'formik';
import { Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const ParameterizedDetails = (props) => {

    const formValue = {

    }

    const dropDownFormNine_One = [
        {
            label: 'Parameter Stock Adjustment Through Dropdown List',
            name: 'parameterStockAdjustment',
            values: [
                "Y",
                "N",
            ],
            heading: 'Parameterised Stock Detail Options'
        },
        {
            label: 'Pick Parameters Through Dropdown List (Qty In.)',
            name: 'pickParameters',
            values: [
                "Y",
                "N",
            ]
        },
        {
            label: 'Adjustment W/O Stock',
            name: 'adjustmentWOStock',
            values: [
                "Allow",
                "Don't Allow",
                "Allow with Warning"
            ]
        }

    ]

    const checkBoxDataFormNine_One = [
        {
            title: 'Input Transaction Price & Value for each Parameter combination',
            value: 'Input Transaction Price & Value for each Parameter combination',
        },
        {
            title: 'Enable Parameter Discount',
            value: 'Enable Parameter Discount',
        },
        {
            title: 'Enable Parameter Markup',
            value: 'Enable Parameter Markup',
        },
        {
            title: 'Maintain Sales Price',
            value: 'Maintain Sales Price',
        },
        {
            title: 'Maintain MRP',
            value: 'Maintain MRP',
        },
        {
            title: 'Enforce Full Qty. Allocation to Parameters',
            value: 'Enforce Full Qty. Allocation to Parameters',
        },
        {
            title: 'Generate Barcode No.',
            value: 'Generate Barcode No.',
        },
    ]

    const radioBtnFormNine_One = [
        {
            key: 'Atomatic',
            value: 'Atomatic',
        },
        {
            key: 'Manual',
            value: 'Manual',
        },
    ]

    const radioBtnFormNine_Two = [
        {
            key: 'Continuous Number',
            value: 'Continuous Number',
        },
        {
            key: 'Item Parameter Values',
            value: 'Item Parameter Values',
        },
    ]


    const checkBoxDataFormNine_Two = [
        {
            title: 'Unique BCN Generation of Each City',
            value: 'Unique BCN Generation of Each City',
        },
    ]

    const dropDownFormNine_Two = [
        {
            label: 'Allow Duplicate of BCN',
            name: 'allowDuplicateOfBcn',
            values: [
                "Y",
                "N",
            ]
        },
        {
            label: 'Deletion of BCN Source with Adjustments',
            name: 'deletionOfBCN',
            values: [
                "Allow",
                "Don't Allow",
                "Allow with Warning",
            ]
        },
    ]

    const checkBoxDataFormNine_Three = [
        {
            title: 'Group Parameterized stock on the basis of Atl. Qty. Con. Factor',
            value: 'Group Parameterized stock on the basis of Atl. Qty. Con. Factor',
        },
        {
            title: 'Group Parameterized stock on the basis of Sales Price',
            value: 'Group Parameterized stock on the basis of Sales Price',
        },
        {
            title: 'Carry Negative Stock Parameters to Next F.Y',
            value: 'Carry Negative Stock Parameters to Next F.Y',
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
                    props.submittedData(data);
                }}
            >
                {({ values, isSubmitting, handleChange }) => (
                    <Form className="popup-check-box-border">
                        <div>
                            {
                                dropDownFormNine_One.map((val, index) => (
                                    <div className="row mb-3" key={"inputDropdownValue" + index}>
                                    <h5 className="modalHeading">{val.heading}</h5>
                                        <div className="col-6 col-md-6">
                                            {val.label}
                                        </div>

                                        <div className="col-6 col-md-6">
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
                                    </div>
                                ))
                            }

                            <div className="mt-3">
                                {
                                    checkBoxDataFormNine_One.map((val, index) => (
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

                            <div className="radioBtnsOne mt-4">
                                <span className="headingText">Barcode No. (BCN) Configuration</span>
                                <div className="mb-4">Default BCN Generation Mode</div>
                                {
                                    radioBtnFormNine_One.map((val, index) => (
                                        <div className="row mb-2" key={"radioInputKey" + index}>
                                            <div className="col-6 col-md-6 radioBtnTextAlign">
                                                {val.key}
                                            </div>
                                            <div className="col-6 col-md-6">
                                                <Field
                                                    type='radio'
                                                    name='radioBtnsOne'
                                                    value={val.value}
                                                    as={Radio}
                                                />
                                            </div>
                                        </div>
                                    ))
                                }

                                <div className="radioBtnsOne mt-4">
                                    <span className="headingText">Automatic Mode Configuration</span>
                                    <div className="mb-4">Specify BCN Generation Basis</div>
                                    {
                                        radioBtnFormNine_Two.map((val, index) => (
                                            <div className="row mb-2" key={"radioInputKey" + index}>
                                                <div className="col-6 col-md-6 radioBtnTextAlign">
                                                    {val.key}
                                                </div>
                                                <div className="col-6 col-md-6">
                                                    <Field
                                                        type='radio'
                                                        name='radioBtnsTwo'
                                                        value={val.value}
                                                        as={Radio}
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    }

                                    {
                                        checkBoxDataFormNine_Two.map((val, index) => (
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
                                <div className="mt-4">
                                    {
                                        dropDownFormNine_Two.map((val, index) => (
                                            <div className="row mb-3" key={"inputDropdownValue" + index}>
                                                <div className="col-6 col-md-6">
                                                    {val.label}
                                                </div>

                                                <div className="col-6 col-md-6">
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
                                            </div>
                                        ))
                                    }
                                </div>

                                {
                                    checkBoxDataFormNine_Three.map((val, index) => (
                                        <div key={"inputCheckboxKey" + index}>
                                            <FormControlLabel
                                                label={val.title}
                                                control={
                                                    <Field
                                                        type='checkbox'
                                                        name="checkbox_Three"
                                                        value={val.value}
                                                        as={Checkbox} />
                                                }
                                            />
                                        </div>
                                    ))
                                }

                            </div>
                        </div>

                        <div className="row btnContainer flex-sm-row-reverse mt-4 mb-3">
                            <div className="mt-3 col-12 col-md-3 p-0">
                                <Button type="submit" className="col-12" disabled={isSubmitting}>Save</Button>
                            </div>
                        </div>
                    </Form>
                )
                }
            </Formik>
        </div>
    )
}
export default ParameterizedDetails