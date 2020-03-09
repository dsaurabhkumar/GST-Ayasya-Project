import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Checkbox, Button, FormControlLabel, FormControl } from '@material-ui/core';

const FreeQuantityVouchers = (props) => {

    const formValue = {
        checkbox: ''
    }

    const checkBoxDataFormTwelve = [
        {
            title: 'Calculate GST on Free Qty. (In Case of Tax on MRP)',
            value: 'Calculate GST on Free Qty. (In Case of Tax on MRP)',
            heading: 'Options for free Qty.'
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
                    props.submittedData(data.checkbox);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="inventoryCheckBox d-flex flex-column align-items-start">
                            {
                                checkBoxDataFormTwelve.map((val, index) => (
                                    <div key={"inputCheckboxKey" + index}>
                                    <h5 className="modalHeading">{val.heading}</h5>
                                        <FormControlLabel
                                            label={val.title}
                                            control={
                                                <Field
                                                    type='checkbox'
                                                    name="checkbox"
                                                    value={val.value}
                                                    as={Checkbox} />
                                            }
                                        />
                                    </div>
                                ))
                            }
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
export default FreeQuantityVouchers