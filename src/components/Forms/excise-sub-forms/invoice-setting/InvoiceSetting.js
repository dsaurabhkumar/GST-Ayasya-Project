import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const InvoiceSetting = (props) => {

    const formValue = {

    }

    const radioBtn_One = [
        {
            key: 'Non-Excise Format (Commercial Invoice)',
            value: 'Non-Excise Format (Commercial Invoice)',
        },
        {
            key: 'Excise Format (Single Item - 80 Col)',
            value: 'Excise Format (Single Item - 80 Col)',
        },
        {
            key: 'Excise Format (Multiple Item - 132 Col / 80 Col Landscape)',
            value: 'Excise Format (Multiple Item - 132 Col / 80 Col Landscape)',
        },
        {
            key: 'Excise Format (Automatic - Depending upon no. of item in Voucher)',
            value: 'Excise Format (Automatic - Depending upon no. of item in Voucher)',
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
                {({ isSubmitting }) => (
                    <Form>
                        {
                            radioBtn_One.map((val, index) => (
                                <div className="mb-2" key={"radioInputKey" + index}>
                                    <Field
                                        type='radio'
                                        name='radioBtns'
                                        value={val.value}
                                        as={Radio}
                                    />
                                    {val.key}
                                </div>
                            ))
                        }

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
export default InvoiceSetting