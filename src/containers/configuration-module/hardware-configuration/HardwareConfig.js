import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const HardwareConfig = () => {

    const formValue = {
        pageLength: '',
        linesPerPageNormal: '',
        linesPerPageLand: '',
        paperTopMargin: '',
        pageLeftMargin: '',
        normalPrinting: '',
        landscapePrinting: ''
    }

    const dropDown = [
        {
            label: 'Default Printer Driver',
            name: 'defaultPrinterDriver',
            values: [
                "Microsoft XPS Document Writer",
                "Microsoft Print to Pdf",
                "Fax",
                "OneNote for Windows 10"
            ]
        },
        {
            label: 'Printing Style',
            name: 'printingStyle',
            values: [
                "DOS",
                "Windows",
            ]
        },
    ]

    const inputText = [
        {
            label: 'Page Length (Inches)',
            name: 'pageLength',
            info: '(0 for Default Printer Setting)',
            placeholder: '0'
        },
        {
            label: 'Lines Per Page (Normal)',
            name: 'linesPerPageNormal',
            placeholder: '0'
        },
        {
            label: 'Lines Per Page (Landscape)',
            name: 'linesPerPageLand',
            placeholder: '0'
        },
        {
            label: 'Paper Top Margin (Inches)',
            name: 'paperTopMargin',
            placeholder: '0.25'
        },
        {
            label: 'Page Left Margin (Inches)',
            name: 'pageLeftMargin',
            placeholder: '0.25'
        },
        {
            label: 'Shrink Printing to % (Normal Printing)',
            name: 'normalPrinting',
            placeholder: '100'
        },
        {
            label: 'Shrink Printing to % (Landscape Printing)',
            name: 'landscapePrinting',
            placeholder: '100'
        },
    ]

    return (
        <div className="container mt-4 mb-4">
            <h2 className="text-center mb-4">Hardware Configuration for the User</h2>
            <Formik
                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data)
                    setSubmitting(false);
                }}
            >
                {({ values, isSubmitting, handleChange }) => (
                    <Form className="inventoryForm">

                        <div className="row">
                            {
                                dropDown.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
                                            {val.label}
                                        </div>
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
                                ))
                            }
                        </div>

                        <div className="row">
                            {
                                inputText.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-4" key={"inputTextField" + index}>
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
    );
};

export default HardwareConfig;