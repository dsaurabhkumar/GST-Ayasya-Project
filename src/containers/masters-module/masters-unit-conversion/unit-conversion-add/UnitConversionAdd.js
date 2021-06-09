import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const UnitConversionAdd = (props) => {

    const formValue = {
        conFactor: '',
        mainUnit:'',
        subUnit:'',

    }

    const unit_conversion_add_dropdown = [
        {
            label: 'Main Unit',
            name: 'mainUnit',
            values: [
                "Dozen",
                "Gms.",
                "Kgs.",
                "Metre",
                "Pcs.",
                "Tonne",
                "Units"
            ]
        },
        {
            label: 'Sub Unit',
            name: 'subUnit',
            values: [
                "Dozen",
                "Gms.",
                "Kgs.",
                "Metre",
                "Pcs.",
                "Tonne",
                "Units"
            ]
        }
    ]

    const unit_conversion_add_text = [
        {
            label: 'Con. Factor',
            name: 'conFactor',
            placeholder: '1.000'
        }
    ]

    return(
        <div className="container containerWidth inventoryForm mt-4 mb-4">
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
                        <div className="text-center"><strong>Unit Conversion Add</strong></div>
                        <div className="row">

                            {
                                unit_conversion_add_dropdown.map((val, index) => (
                                    <div className="mb-4 mt-4 col-12 col-md-12" key={"inputDropdownValue" + index}>
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
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
                                unit_conversion_add_text.map((val, index) => (
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
                                <Link to='/'><Button type="submit" className="col-12">Quit</Button></Link>
                            </div>
                        </div>
                    </Form>
                )
                }

            </Formik>
        </div>
    )
}

export default UnitConversionAdd