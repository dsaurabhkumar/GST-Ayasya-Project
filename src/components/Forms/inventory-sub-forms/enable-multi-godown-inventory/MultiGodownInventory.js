import React from 'react';
import './MultiGodownInventory.css';
import { Formik, Field, Form } from 'formik';
import { Checkbox, Button, FormControlLabel } from '@material-ui/core';

const MultiGodownInventory = (props) => {

    const formValue = {
        checkbox: "",
    }


    const checkboxdata = [
        {
            title: 'Material Centre at Item Level',
            value: 'Material Centre at Item Level'
        }
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
                                checkboxdata.map((val, index) => (
                                    <div key={"inputCheckboxKey" + index}>
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
export default MultiGodownInventory