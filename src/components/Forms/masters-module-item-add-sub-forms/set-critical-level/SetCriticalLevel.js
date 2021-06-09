import React from 'react';
import './SetCriticalLevel.css';
import { Formik, Field, Form } from 'formik';
import { Checkbox, Button, FormControlLabel, FormControl, Radio, TextField } from '@material-ui/core';

const SetCriticalLevel = (props) => {

    const formValue = {
        minimumLevelQty: '',
        reorderLevelQty: '',
        maximumLevelQty: '',
        minimumLevelDays: '',
        reorderLevelDays: '',
        maximumLevelDays: '',
    }

    const inputText_One = [
        {
            label: 'Minimum Level (Qty.)',
            name: 'minimumLevelQty',
            placeholder: `0.00`
        },
        {
            label: 'Reorder Level (Qty.)',
            name: 'reorderLevelQty',
            placeholder: '0.00'
        },
        {
            label: 'Maximum Level (Qty.)',
            name: 'maximumLevelQty',
            placeholder: `0.00`
        },
        {
            label: 'Minimum Level (Days)',
            name: 'minimumLevelDays',
            placeholder: `0`
        },
        {
            label: 'Reorder Level (Days)',
            name: 'reorderLevelDays',
            placeholder: '0'
        },
        {
            label: 'Maximum Level (Days)',
            name: 'maximumLevelDays',
            placeholder: `0`
        },
    ]


    return (
        <div className="container">
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
                        <h5 className="modalFormHeading">Define Critical Levels</h5>
                        <div className="text-center mb-3"><strong>Define Critical Levels</strong></div>
                        <div className="row borderItem m-0 py-3">
                            {
                                inputText_One.map((val, index) => (
                                    <div className="col-12 mb-1" key={"inputTextField" + index}>
                                        <h5 className="modalHeadingValue">{val.heading}</h5>
                                        {val.label}
                                        <Field
                                            type='text'
                                            name={val.name}
                                            placeholder={val.placeholder}
                                            as={TextField}
                                        />
                                    </div>
                                ))
                            }
                        </div>


                        <div className="row btnContainer flex-sm-row-reverse mt-4">
                            <div className=" col-12 col-md-3 p-0">
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
export default SetCriticalLevel