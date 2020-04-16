import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Checkbox, Button, FormControlLabel } from '@material-ui/core';

const SalePurchaseChallan = (props) => {

    const formValue = {
        checkbox: "",
    }


    const checkBoxDataFormFive = [
        {
            title: 'Consolidate Items While Picking from Orders',
            value: 'Consolidate Items While Picking from Orders',
            heading: 'Options for Challan'
        },
        {
            title: 'Restrict Sales Without Challan',
            value: 'Restrict Sales Without Challan'
        },
        {
            title: 'Restrict Purchase Without Challan',
            value: 'Restrict Purchase Without Challan'
        },
        {
            title: 'Restrict Sale Return Without Challan',
            value: 'Restrict Sale Return Without Challan'
        },
        {
            title: 'Restrict Purc. Return Without Challan',
            value: 'Restrict Purc. Return Without Challan'
        },
        {
            title: 'Skip default price in Sale Challan',
            value: 'Skip default price in Sale Challan'
        },
        {
            title: 'Skip default price in Purchase Challan',
            value: 'Skip default price in Purchase Challan'
        },
        {
            title: 'Auto Create/Adjust Challan References',
            value: 'Auto Create/Adjust Challan References'
        },
        {
            title: 'Show Pending Challan Till Voucher Date',
            value: 'Show Pending Challan Till Voucher Date'
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
                    <Form className="popup-check-box-border">
                        <div className="inventoryCheckBox d-flex flex-column align-items-start">
                            {
                                checkBoxDataFormFive.map((val, index) => (
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
export default SalePurchaseChallan