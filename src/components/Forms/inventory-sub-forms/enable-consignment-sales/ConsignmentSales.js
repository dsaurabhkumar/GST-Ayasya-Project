import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Checkbox, Button, FormControlLabel, FormControl } from '@material-ui/core';

const ConsignmentSales = (props) => {

    const formValue = {
        
    }
    
    const dropDownFormSeven = [
        {
            heading: 'Options for Consignment Sales',
            label: 'Consignment Type',
            name: 'consignmentType',
            values: [
                "With Order (Movement of Goods)",
                "Without Order",
            ]
        },
    ]

    const checkBoxDataFormSeven = [
        {
            title: 'Maintain Customer at the time of Purchase',
            value: 'Maintain Customer at the time of Purchase',
        },
        {
            title: 'Maintain Price of Source Voucher',
            value: 'Maintain Price of Source Voucher'
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
                    <Form>
                        <div className="inventoryCheckBox d-flex flex-column align-items-start">
                            {
                                dropDownFormSeven.map((val, index) => (
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
                            {
                                checkBoxDataFormSeven.map((val, index) => (
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
export default ConsignmentSales