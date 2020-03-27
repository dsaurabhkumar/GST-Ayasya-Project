import React from 'react';
import './TdsTcs.css';
import ModalComponent from '../../components/modal/ModalComponent';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';
import AmountRoundConfig from '../../components/Forms/tds-tcs-sub-forms/amt-round-of-config/AmountRoundConfig';
import ResponsiblePersonDetails from '../../components/Forms/tds-tcs-sub-forms/responsible-person-details/ResponsiblePersonDetails';

const TdsTcs = (props) => {

    let childDataInfoFormOne = null;
    let childDataInfoFormTwo = null;

    const formValue = {
        tdsCaption: '',
        tanNo: '',
        tdsTcsCircle: '',
        flatNo: '',
        premisesBuilding: '',
        roadStreetLane: '',
        areaLocation: '',
        townCityDistrict: '',
        pinCode: '',
        stdCode: '',
        telephone: '',
        eMail: ''
    }

    const amountRoundConfig = [
        {
            id: 'amountRoundConfig',
        }
    ]

    const responsiblePersonDetails = [
        {
            id: 'responsiblePersonDetails',
        }
    ]

    const checkBoxData = [
        {
            title: 'Enable TDS Reporting',
            value: 'Enable TDS Reporting',
        },
        {
            title: 'Enable TCS Reporting',
            value: 'Enable TCS Reporting',
        },
    ]

    const inputText_One = [
        {
            label: 'TDS Caption',
            name: 'tdsCaption',
        },
    ]

    const inputText_Two = [
        {
            label: 'TAN No.',
            name: 'tanNo',
        },
        {
            label: 'TDS/TCS Circle',
            name: 'tdsTcsCircle',
        },
    ]

    const dropDown_One = [
        {
            label: `Payer's Category`,
            name: 'payersCategory',
            values: [
                "Domestic Company",
                "Partnership Firm",
                "Individual - Residents",
                "Individual - Non Residents",
                "Co-operative Society",
                "Govt. Body",
                "Foreign Company",
                "Body of Individuals",
                "Association of Persons",
                "Hindu Undivided Family",
                "Trust",
                "Others"
            ],
        },
    ]

    const inputText_Three = [
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

    const dropDown_Two = [
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
        {
            label: `Enable Edu./SHE Cess on TDS`,
            name: 'enableEduSheCessOnTds',
            values: [
                "Y",
                "N"
            ],
        },
    ]


    const componentModalItem = (id) => {
        let element = null;
        switch (id) {
            case "amountRoundConfig":
                element = <AmountRoundConfig
                    submittedData={(childData) => (
                        childDataInfoFormOne = childData
                    )}
                />
                break;
                case "responsiblePersonDetails":
                element = <ResponsiblePersonDetails
                    submittedData={(childData) => (
                        childDataInfoFormTwo = childData
                    )}
                />
                break;
        }

        if (element) {
            element = <ModalComponent>
                <div>
                    {element}
                </div>
            </ModalComponent>
        }
        return element;
    }


    return (
        <div className="container mt-4 mb-4">
            <Formik
                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data, childDataInfoFormOne, childDataInfoFormTwo)
                    setSubmitting(false);
                }}
            >
                {({ values, isSubmitting, handleChange }) => (
                    <Form className="inventoryForm">
                        
                    <div className="row">
                            <div className="col-12 col-md-12 inlineCheckbox">
                                {
                                    checkBoxData.map((val, index) => (
                                        <div key={"inputCheckboxKey" + index}>
                                            <FormControlLabel
                                                label={val.title}
                                                control={
                                                    <Field
                                                        type='checkbox'
                                                        name="checkboxOne"
                                                        value={val.value}
                                                        as={Checkbox} />
                                                }
                                            />
                                        </div>
                                    ))
                                }
                            </div>

                            {
                                inputText_One.map((val, index) => (
                                    <div className="mb-1 col-12 col-md-12" key={"inputTextField" + index}>
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


                            <span className="tdsTcsDetailsHeading"><strong>TDS/TCS Details</strong></span>
                            <div className="row tdsTcsDetails mt-4">
                            {
                                inputText_Two.map((val, index) => (
                                    <div className="mb-1 mt-2 col-12 col-md-4" key={"inputTextField" + index}>
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
                                    <div className="mb-3 col-12 col-md-4" key={"inputDropdownValue" + index}>
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

                            <span className="tdsTcsDetailsHeading"><strong>Company Address for E-TDS/TCS</strong></span>
                            <div className="row tdsTcsDetails mt-4">
                            {
                                inputText_Three.map((val, index) => (
                                    <div className="mb-1 mt-2 col-12 col-md-4" key={"inputTextField" + index}>
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
                                dropDown_Two.map((val, index) => (
                                    <div className="mb-3 mt-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
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

                        

                            </div>

                            <div className="mt-2 mb-4 configureBtn">
                                {
                                    amountRoundConfig.map((val, index) => (
                                        <div key={"inputTextKey" + index}>
                                            {
                                                componentModalItem(val.id)
                                            }
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="mt-2 mb-4 configureBtn">
                                {
                                    responsiblePersonDetails.map((val, index) => (
                                        <div key={"inputTextKey" + index}>
                                            {
                                                componentModalItem(val.id)
                                            }
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                        <div className="row btnContainer flex-sm-row-reverse mt-4 mb-3">
                            <div className="mt-3 col-12 col-md-3 p-0">
                                <Button type="submit" className="col-12" disabled={isSubmitting}>Save</Button>
                            </div>
                            <div className="mt-3 col-12 col-md-3 align-self-center quitBtn">
                                <Link to='/feature-options'><Button type="submit" className="col-12">Quit</Button></Link>
                            </div>
                        </div>
                    </Form>
                )
                }
            </Formik>
        </div>
    )


}

export default TdsTcs