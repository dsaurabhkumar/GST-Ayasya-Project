import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Checkbox, Button, FormControlLabel, FormControl } from '@material-ui/core';

const JobWork = (props) => {

    const formValue = {
        checkbox: ''
    }

    const checkBoxDataFormEight = [
        {
            title: 'Enable Job Work from Outside Parties',
            value: 'Enable Job Work from Outside Parties',
            heading: 'Job Entries Configuration'
        },
        {
            title: 'Adjust Job Work Entries in Purchase Voucher',
            value: 'Adjust Job Work Entries in Purchase Voucher',
        },
        {
            title: 'Enable Job Work in House (Doing Job Work for Other Parties)',
            value: 'Enable Job Work in House (Doing Job Work for Other Parties)',
        },
        {
            title: 'Adjust Job Work Entries in Sale Voucher',
            value: 'Adjust Job Work Entries in Sale Voucher',
        },
        {
            title: 'Show Pending Qty. Till Voucher Date Only',
            value: 'Show Pending Qty. Till Voucher Date Only',
        },
        {
            title: 'Track Finished Goods Receivable/Issuable',
            value: 'Track Finished Goods Receivable/Issuable',
        },
        {
            title: 'Maintain Parameter-wise details with consumed goods',
            value: 'Maintain Parameter-wise details with consumed goods',
        },
        {
            title: 'Maintain Job Id',
            value: 'Maintain Job Id',
        },
        {
            title: 'Disallow Change in Job Id',
            value: 'Disallow Change in Job Id',
        },
        {
            title: 'Show Job Id Dropdown List at the time of Adjustment',
            value: 'Show Job Id Dropdown List at the time of Adjustment',
        },
        {
            title: `Allow Creation/Adjustment of Multiple Job Id's`,
            value: `Allow Creation/Adjustment of Multiple Job Id's`,
        },
        {
            title: 'Maintain Wastage of Raw Material',
            value: 'Maintain Wastage of Raw Material',
        },
        {
            title: 'Calculate wastage % on Pending Qty. instead of Adjusted Qty.',
            value: 'Calculate wastage % on Pending Qty. instead of Adjusted Qty.'
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
                                checkBoxDataFormEight.map((val, index) => (
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
export default JobWork