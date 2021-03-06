import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Checkbox, Button, FormControlLabel, FormControl } from '@material-ui/core';

const MrpWiseDetails = (props) => {

    const formValue = {
        checkbox: ''
    }

    const checkBoxDataFormEleven = [
        {
            title: 'Maintain Sales Price along with MRP',
            value: 'Maintain Sales Price along with MRP',
            heading: 'MRP-Wise Detal Options'
        },
        {
            title: 'Show MRP-Wise Stock with Zero qty',
            value: 'Show MRP-Wise Stock with Zero qty'
        },
        {
            title: 'Group MRP-Wise Stock on Sales Price',
            value: 'Group MRP-Wise Stock on Sales Price'
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
                {({ values, isSubmitting, handleChange }) => (
                    <Form className="popup-check-box-border">
                        <div className="inventoryCheckBox d-flex flex-column align-items-start">
                            {
                                checkBoxDataFormEleven.map((val, index) => (
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
export default MrpWiseDetails