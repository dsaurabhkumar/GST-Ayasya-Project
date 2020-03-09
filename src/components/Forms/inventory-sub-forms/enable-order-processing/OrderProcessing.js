import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Checkbox, Button, FormControlLabel } from '@material-ui/core';

const OrderProcessing = (props) => {

    const formValue = {
        checkbox: "",
    }


    const checkBoxDataFormFour = [
        {
            title: 'Consolidate Items While Picking from Orders',
            value: 'Consolidate Items While Picking from Orders'
        },
        {
            title: 'Restrict Sales/Sale Challan Without Order',
            value: 'Restrict Sales/Sale Challan Without Order'
        },
        {
            title: 'Restrict Purchase/Purc. Challan Without Order',
            value: 'Restrict Purchase/Purc. Challan Without Order'
        },
        {
            title: 'Resctrict Sale Order modification after Sales',
            value: 'Resctrict Sale Order modification after Sales'
        },
        {
            title: 'Resctrict Purc. Order modification after Purchase',
            value: 'Resctrict Purc. Order modification after Purchase'
        },
        {
            title: 'Auto Create/Adjust Order References',
            value: 'Auto Create/Adjust Order References'
        },
        {
            title: 'Show Pending Order Till Voucher Date',
            value: 'Show Pending Order Till Voucher Date'
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
                                checkBoxDataFormFour.map((val, index) => (
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
export default OrderProcessing