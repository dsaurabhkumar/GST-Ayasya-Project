import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import UploadFile from '../../../../../components/upload-files/UploadFile';

const RestoreCustomReport = (props) => {

    let childDataInfo;

    const formValue = {

    }

    const label_field = [
        {
            label: "Path for Restoration:",
            name: 'pathForRestoration'
        }
    ]

    return (
        <div className="container containerWidth mt-4 mb-5">
            <div className="text-center mb-4">
                <h2>Restore Custom Report</h2>
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
                        <div className="row textFieldAlignment mt-3">
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

export default RestoreCustomReport;