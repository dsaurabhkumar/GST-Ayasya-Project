import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const StdNarrationAdd = (props) => {

    const formValue = {
        voucherType: '',
        narration: ''
    }

    const stdNarrationAdd_dropdown = [
        {  
            label: 'Voucher Type',
            name: 'selectStdNarrationMaster',
            values: [
                "Sales",
                "Purchase",
                "Sales Return (Cr. Note)",
                "Purchase Return (Dr. Note)",
                "Stock Transfer",
                "Mat. Issued to Party",
                "Mat. Rcvd. from Party",
                "Production",
                "Unassemble",
                "Stock General",
                "Payment",
                "Receipt",
                "Journel",
                "Contra",
                "Dr. Note (w/o Items)",
                "Cr. Note (w/o Items)"
            ]
        }
    ]

    const stdNarrationAddText = [
        {
            label: 'Narration',
            name: 'narration',
        },
    ]

    return (
        <div className="container containerWidth mt-4 mb-4 inventoryForm">
            <Formik

                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data)
                    setSubmitting(false);
                }}
            >


                {({ values, isSubmitting, handleChange }) => (
                    <Form>
                        <div className="text-center"><strong>Select Std. Narration Master</strong></div>
                        <div className="row">
                            {
                                stdNarrationAdd_dropdown.map((val, index) => (
                                    <div className="mb-4 mt-4 col-12 col-md-12" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
                                            {val.label}
                                        </div>
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
                                                // value={values.name}
                                                multiple={false}
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
                                ))
                            }

                            {
                                stdNarrationAddText.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-12" key={"inputTextField" + index}>
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

                        <div className="row btnContainer flex-sm-row-reverse mt-4 mb-3">
                            <div className="mt-3 col-12 col-md-3 p-0">
                                <Button type="submit" className="col-12" disabled={isSubmitting}>Save</Button>
                            </div>
                            <div className="mt-3 col-12 col-md-3 align-self-center quitBtn">
                                <Link to='/'><Button type="submit" className="col-12" color="primary" variant="outlined">Quit</Button></Link>
                            </div>
                        </div>
                    </Form>
                )
                }

            </Formik>
        </div>
    )
}

export default StdNarrationAdd