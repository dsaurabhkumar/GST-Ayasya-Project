import React from 'react';
import './AmountRoundConfig.css';
import { Formik, Field, Form } from 'formik';
import { Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const AmountRoundConfig = (props) => {

    const formValue = {

    }

    const checkBoxData_One = [
        {
            title: 'Round Off TDS/TCS Duty Amounts',
            value: 'Round off TDS/TCS Duty Amounts',
            heading: 'Amount Round Off Configuration',
        },
    ]
    const radioBtn_One = [
        {
            key: 'Always Upper',
            value: 'alwaysUpper',
        },
        {
            key: 'Always Lower',
            value: 'alwaysLower',
        },
        {
            key: 'Automatic',
            value: 'automatic',
        },
    ]
    const checkBoxData_Two = [
        {
            title: 'TDS/TCS Amt.',
            value: 'TDS/TCS Amt.'
        },
        {
            title: 'Surcharge Amt.',
            value: 'Surcharge Amt.',
        }
    ]

    return (
        <div className="container personDetails mt-4 mb-4">
            <Formik
                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data)
                    setSubmitting(false);
                    props.submittedData(data);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="col-12 col-md-12">
                            {
                                checkBoxData_One.map((val, index) => (
                                    <div key={"inputCheckboxKey" + index}>
                                    <h5 className="amountHeadingValue">{val.heading}</h5>
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


                            <div className="radioBtnsOne mt-4">
                                <span className="headingText">Amount Round Off Configuration</span>
                                {
                                    radioBtn_One.map((val, index) => (
                                        <div className="row mb-2" key={"radioInputKey" + index}>
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
export default AmountRoundConfig