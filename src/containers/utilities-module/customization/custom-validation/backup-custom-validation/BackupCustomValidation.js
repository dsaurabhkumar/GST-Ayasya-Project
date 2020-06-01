import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { Button, FormControl, Radio } from '@material-ui/core';
import UploadFile from '../../../../../components/upload-files/UploadFile';

const BackupCustomValidation = (props) => {

    let childDataInfo;

    const formValue = {

    }
    
    const select_format = [
        {
            label: 'Select Format for Backup',
            name: 'selectFormatForBackup',
            values: [
                "Values to be selected from db"
            ],
        },
    ]

    const label_field = [
        {
            label: "Specify Path for Backup:",
            name: 'pathForRestoration'
        }
    ]

    return (
        <div className="container containerWidth mt-4 mb-4">
            <div className="text-center mb-4">
                <h2>Backup Custom Validation</h2>
            </div>

            <Formik

                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data, childDataInfo)
                    setSubmitting(false);
                }}
            >
                {({ values, isSubmitting, handleChange }) => (

                    <Form className="inventoryForm">
                        {
                            select_format.map((val, index) => (
                                <div className="mb-2 mt-2 mb-3 col-12 p-0" key={"inputDropdownValue" + index}>
                                    <div className="mb-2">
                                        {val.label}
                                    </div>
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
                        <div className="row textFieldAlignment mt-4">
                            {
                                label_field.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-6" key={"attachment" + index}>
                                        <div className="attachmentLabel">{val.label}</div>
                                    </div>
                                ))
                            }
                            <div className="col-12 col-md-6">
                                <UploadFile
                                    fileUpload={(childData) => (childDataInfo = (childData.target.files))}
                                />
                            </div>
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
};

export default BackupCustomValidation;