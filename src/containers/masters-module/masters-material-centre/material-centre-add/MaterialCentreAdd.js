import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';
import Address from "../../../../components/address/Address"

const MaterialCentreAdd = (props) => {

    const formValue = {
        name: '',
        alias: '',
        printName: '',
        group:'',
        saleAcc: '',
        purAcc: '',
        stockTransfer: '',
        address: {
            id: '',
            addLine1:'' ,
            addLine2: '',
            addLine3: '',
            addLine4:''
        },

    }

    const materialCentreAdd_Text_one = [
        {
            label: 'Name',
            name: 'name',
        },
        // {
        //     label: 'Alias',
        //     name: 'alias',
        // },
        {
            label: 'Print Name',
            name: 'printName',
        },
    ]

    const materialCentreAdd_dropdown_one = [
        {
            label: `Group`,
            name: 'group',
            values: [
                "Godowns",
                "Production Floors",
                "Stores"
            ]
        },
        {
            label: `Stock Account`,
            name: 'stockAcc',
            values: [
                "Stock"
            ]
        }
    ]

    const materialCentreAdd_dropdown_two = [
        {
            label: `Reflect the Stock in Balance Sheet ?`,
            name: 'reflectTheStock',
            values: [
                "Y"
            ]
        },
    ]

    const materialCentreAdd_Text_two = [
        {
            label: 'Sales Account',
            name: 'saleAcc',
        },
        {
            label: 'Purc. Account',
            name: 'purAcc',
        },
        {
            label: 'Accounting in Stock Transfer',
            name: 'stockTransfer',
        },
    ]

    const materialCentreAdd_Text_three = [
        {
            label:'Address',
            address: [
                {name: 'id'},
                {name: 'addLine1'},        
                {name: 'addLine2'},
                {name: 'addLine3'},
                {name: 'addLine4'},
        ]
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
                }}
            >


                {({ values, isSubmitting, handleChange }) => (
                    <Form className="inventoryForm">
                        <h5 className="text-center mb-4">Add Material Centre Master</h5>
                        <div className="row">
                            {
                                materialCentreAdd_Text_one.map((val, index) => (
                                    <div className="mb-3 col-12" key={"inputTextField" + index}>
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
                                materialCentreAdd_dropdown_one.map((val, index) => (
                                    <div className="mb-5 col-12 col-md-12" key={"inputDropdownValue" + index}>
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
                        </div>

                        <div className="row">
                            {
                                materialCentreAdd_dropdown_two.map((val, index) => (
                                    <div className="mb-3 col-12 col-md-12" key={"inputDropdownValue" + index}>
                                        {val.label}
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
                                                // value={values.name}
                                                multiple={false}
                                                onChange={handleChange}
                                            >
                                                <option defaultValue>N</option>
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
                                materialCentreAdd_Text_two.map((val, index) => (
                                    <div className=" mb-3 col-12 col-md-12" key={"inputTextField" + index}>
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
                        <div className="row mt-3">
                                  <Address/>                      
                        </div>


                        <div className="row btnContainer flex-sm-row-reverse mt-4 mb-3">
                            <div className="mt-3 col-12 col-md-3 col-lg-2 p-0">
                                <Button type="submit" className="col-12" disabled={isSubmitting}>Save</Button>
                            </div>
                            <div className="mt-3 col-12 col-md-3 col-lg-2 align-self-center quitBtn">
                                <Link to='/'><Button type="submit" className="col-12" color="primary" variant="outlined">Quit</Button></Link>
                            </div>
                            <div className="mt-3 col-12 col-md-3 col-lg-2 p-0">
                                <Button className="col-12">Opt. Fields</Button>
                            </div>
                        </div>
                    </Form>
                )
                }

            </Formik>
        </div>
    )
}

export default MaterialCentreAdd