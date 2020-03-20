import React from 'react';
import './ResponsiblePersonDetails.css';
import { Formik, Field, Form } from 'formik';
import { Checkbox, Button, FormControlLabel, FormControl, Radio, TextField } from '@material-ui/core';

const ResponsiblePersonDetails = (props) => {

    const formValue = {
        name: '',
        relation: '',
        designation: '',
        panNo: '',
        flatNo: '',
        premisesBuilding: '',
        roadStreetLane: '',
        areaLocation: '',
        townCityDistrict: '',
        pinCode: '',
        stdCode: '',
        telephone: '',
        eMail: '',
    }

    const inputText_One = [
        {
            label: 'Name',
            name: 'name',
            heading: `Responsible Person's Details`
        },
        {
            label: 'S/o, W/o, D/o',
            name: 'relation',
        },
        {
            label: 'Designation',
            name: 'designation',
        },
        {
            label: 'PAN No.',
            name: 'panNo'
        }
    ]

    const inputText_Two = [
        {
            label: 'Flat No.',
            name: 'flatNo',
        },
        {
            label: 'Premises/Building',
            name: 'premisesBuilding',
        },
        {
            label: 'Road/Street/Lane',
            name: 'roadStreetLane',
        },
        {
            label: 'Area/Location',
            name: 'areaLocation',
        },
        {
            label: 'Town/City/District',
            name: 'townCityDistrict',
        },
        {
            label: 'Pin Code',
            name: 'pinCode',
        },
        {
            label: 'STD Code',
            name: 'stdCode',
        },
        {
            label: 'Telephone',
            name: 'telephone',
        },
        {
            label: 'E-Mail',
            name: 'eMail'
        }
    ]

    const dropDown_One = [
        {
            label: `State`,
            name: 'state',
            values: [
                "ANDAMAN AND NICOBAR ISLANDS",
                "ANDHRA PRADESH",
                "ARUNACHAL PRADESH",
                "ASSAM",
                "BIHAR",
                "CHANDIGARH",
                "CHHATISHGARH",
                "DADRA & NAGAR HAVELI",
                "DAMAN & DIU",
                "DELHI",
                "GOA",
                "GUJARAT",
                "HARYANA",
                "HIMACHAL PRADESH",
                "JAMMU & KASHMIR",
                "JHARKHAND",
                "KARNATAKA",
                "KERALA",
                "LAKSHAWADEEP",
                "MADHYA PRADESH",
                "MAHARASHTRA",
                "MANIPUR",
                "MEGHALAYA",
                "MIZORAM",
                "NAGALAND",
                "ODISHA",
                "OTHERS",
                "PUDUCHERRY",
                "PUNJAB",
                "RAJASTHAN",
                "SIKKIM",
                "TAMILNADU",
                "TRIPURA",
                "UTTAR PRADESH",
                "UTTRAKHAND",
                "WEST BENGAL"
            ],
        },
    ]

    return (
        <div className="container responsiblePersonDetails mt-4 mb-4">
            <Formik
                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data)
                    setSubmitting(false);
                    props.submittedData(data);
                }}
            >
                {({ isSubmitting, handleChange }) => (
                    <Form>
                        <div className="row">
                            {
                                inputText_One.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-12" key={"inputTextField" + index}>
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

                            <span className="personDetailsHeading"><strong>Address Information</strong></span>
                            {
                                inputText_Two.map((val, index) => (
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

                            {
                                dropDown_One.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-12" key={"inputDropdownValue" + index}>
                                        <div className="mb-2">
                                            {val.label}
                                        </div>
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
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
export default ResponsiblePersonDetails