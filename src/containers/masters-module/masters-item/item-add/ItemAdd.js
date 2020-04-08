import React from 'react';
import ModalComponent from '../../../../components/modal/ModalComponent';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';
import SetCriticalLevel from '../../../../components/Forms/masters-module-item-add-sub-forms/set-critical-level/SetCriticalLevel';

const ItemAdd = (props) => {

    let childDataInfoFormOne = null;

    const formValue = {
        name: '',
        group: '',
        opStockQty: '',
        opStockValue: '',
        hsnSacCodeForGst: '',
        salesPrice: '',
        purchasePrice: '',
        mrp: '',
        minSalesPrice: '',
        selfValPrice: '',
        packagingUnit: '',
        conFactor: '',
        packagingSalesPrice: '',
        packagingPurcPrice: '',
        saleDiscount: '',
        purcDiscount: '',
        saleCompoundDisc: '',
        purcCompoundDisc: '',
        specifySalesDiscStructure: '',
        specifyPurcDiscStructure: '',
        saleMarkup: '',
        purcMarkup: '',
        saleCompMarkup: '',
        purcCompMarkup: '',
        specifySalesMarkupStructure: '',
        specifyPurcMarkupStructure: '',
        maintainRg23d: '',
        tariffHeading: '',
        serialNoWiseDetails: '',
        parameterizedDetails: '',
        mrpWiseDetails: '',
        batchWiseDetails: '',
        expiryDays: '',
        specifyDefaultMC: '',
        freezeMCforItem: '',
        totalNoOfAuthors: '',
        pickItemSizingInfo: '',
        specifyDefaultVendor: ''
    }

    const setCriticalLevel = [
        {
            id: 'setCriticalLevel',
        }
    ]

    const itemAddText_one = [
        {
            label: 'Name',
            name: 'name',
        },
        {
            label: 'Group',
            name: 'group',
        },
    ]

    const itemAdd_dropdown_one = [
        {
            label: `Unit`,
            name: 'unit',
            values: [
                "Dozen",
                "Gms.",
                "Kgs.",
                "Metre",
                "N.A."
            ]
        }
    ]

    const itemAddText_two = [
        {
            label: 'Op. Stock (Qty.)',
            name: 'opStockQty',
            placeholder: '0.00'
        },
        {
            label: 'Op. Stock (Value)',
            name: 'opStockValue',
            placeholder: '0.00'
        },
    ]

    const itemAdd_dropdown_two = [
        {
            label: `Tax Category`,
            name: 'taxCategory',
            values: [
                "GST 5%",
                "GST 12%",
                "GST 18%",
                "GST 28%",
                "Nil Rated",
                "Non-GST"
            ]
        }
    ]

    const itemAddText_three = [
        {
            label: 'HSN/SAC Code for GST',
            name: 'hsnSacCodeForGst',
        },
    ]

    const itemAddText_Four = [
        {
            label: 'Sales Price',
            name: 'salesPrice',
        },
        {
            label: 'Purc. Price',
            name: 'purchasePrice',
        },
        {
            label: 'M.R.P',
            name: 'mrp',
        },
        {
            label: 'Min. Sales Price',
            name: 'minSalesPrice',
        },
        {
            label: 'Self-Val. Price',
            name: 'selfValPrice',
        },
    ]

    const itemAddText_Five = [
        {
            label: 'Packaging Unit',
            name: 'packagingUnit',
        },
        {
            label: 'Con. Factor',
            name: 'conFactor',
        },
        {
            label: 'Sales Price',
            name: 'packagingSalesPrice',
        },
        {
            label: 'Purc. Price',
            name: 'packagingPurcPrice',
        },
    ]

    const itemAdd_dropdown_three = [
        {
            label: `Tax Inclusive Sale Price`,
            name: 'taxInclusiveSalePrice',
            values: [
                "Y",
                "N"
            ]
        },
        {
            label: `Tax Inclusive Purchase`,
            name: 'taxInclusivePurchase',
            values: [
                "Y",
                "N"
            ]
        },
        {
            label: `Specify Sales Acc`,
            name: 'specifySalesAcc',
            values: [
                "Not Reqd.",
                "Specify in Vch."
            ]
        },
        {
            label: `Specify Purc Acc`,
            name: 'specifyPurcAcc',
            values: [
                "Not Reqd.",
                "Specify in Vch."
            ]
        }
    ]

    const itemAddText_Six = [
        {
            label: 'Sale Discount',
            name: 'saleDiscount',
            placeholder: '0.00'
        },
        {
            label: 'Purc. Discount',
            name: 'purcDiscount',
        },
        {
            label: 'Sale Compound Disc.',
            name: 'saleCompoundDisc',
        },
        {
            label: 'Purc. Compound Disc.',
            name: 'purcCompoundDisc',
        },
        {
            label: 'Specify Sales Disc. Structure (Y/N)',
            name: 'specifySalesDiscStructure',
        },
        {
            label: 'Specify Purc. Disc. Structure (Y/N)',
            name: 'specifyPurcDiscStructure',
        },
        {
            label: 'Sale Markup',
            name: 'saleMarkup',
        },
        {
            label: 'Purc. Markup',
            name: 'purcMarkup',
        },
        {
            label: 'Sale Comp. Markup',
            name: 'saleCompMarkup',
        },
        {
            label: 'Purc. Comp. Markup',
            name: 'purcCompMarkup',
        },
        {
            label: 'Specify Sales Markup Structure (Y/N)',
            name: 'specifySalesMarkupStructure',
        },
        {
            label: 'Specify Purc.Markup Structure (Y/N)',
            name: 'specifyPurcMarkupStructure',
        },
    ]

    const itemAdd_dropdown_four = [
        {
            label: `Set Critical Level (Y/N)`,
            name: 'setCriticalLevel',
            values: [
                "Y",
                "N"
            ]
        }
    ]

    const itemAddText_Seven = [
        {
            label: 'Maintain RG-23D',
            name: 'maintainRg23d',
        },
        {
            label: 'Tariff Heading',
            name: 'tariffHeading',
        },
        {
            label: 'Serial No. Wise Details',
            name: 'serialNoWiseDetails'
        },
        {
            label: 'Parameterized Details',
            name: 'parameterizedDetails'
        },
        {
            label: 'MRP-Wise Details',
            name: 'mrpWiseDetails'
        },
        {
            label: 'Batch-Wise Details',
            name: 'batchWiseDetails'
        },
        {
            label: 'Expiry Days',
            name: 'expiryDays',
        },
        {
            label: 'Specify Default MC',
            name: 'specifyDefaultMC'
        },
        {
            label: 'Freeze MC for Item',
            name: 'freezeMCforItem'
        },
        {
            label: 'Total No. of Authors',
            name: 'totalNoOfAuthors',
            placeholder: '(Max.10)'
        },
        {
            label: 'Pick Item Sizing Info. from Item Description',
            name: 'pickItemSizingInfo'
        },
        {
            label: 'Specify Default Vendor',
            name: 'specifyDefaultVendor'
        },
    ]

    const componentModalItem = (id) => {
        let element = null;
        switch (id) {
            case "setCriticalLevel":
                element = <SetCriticalLevel
                    submittedData={(childData) => (
                        childDataInfoFormOne = childData
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
                    console.log(data, childDataInfoFormOne)
                    setSubmitting(false);
                }}
            >


                {({ values, isSubmitting, handleChange }) => (
                    <Form className="inventoryForm">
                        <div className="text-center"><strong>Add Item Master</strong></div>
                        <div className="row mt-4 mb-4">
                            {
                                itemAddText_one.map((val, index) => (
                                    <div className="col-6 col-md-6" key={"inputTextField" + index}>
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

                        <strong>Main Unit Details</strong>
                        <div className="row mb-4">
                            {
                                itemAdd_dropdown_one.map((val, index) => (
                                    <div className="mt-3 col-12 col-md-4" key={"inputDropdownValue" + index}>
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
                                itemAddText_two.map((val, index) => (
                                    <div className="mt-3 col-12 col-md-4" key={"inputTextField" + index}>
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

                        <div className="row mb-4">
                            {
                                itemAdd_dropdown_two.map((val, index) => (
                                    <div className="mb-2 mt-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
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
                                itemAddText_three.map((val, index) => (
                                    <div className="mt-3 col-12 col-md-6" key={"inputTextField" + index}>
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

                        <strong>Item Price Info</strong>
                        <div className="row mb-4">
                            {
                                itemAddText_Four.map((val, index) => (
                                    <div className="mt-3 col-6 col-md-3" key={"inputTextField" + index}>
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

                        <strong>Packaging Unit Details</strong>
                        <div className="row mb-4">
                            {
                                itemAddText_Five.map((val, index) => (
                                    <div className="mt-3 col-6 col-md-3" key={"inputTextField" + index}>
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

                        <div className="row">
                            {
                                itemAdd_dropdown_three.map((val, index) => (
                                    <div className="mt-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
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

                        <div className="row btnContainer flex-sm-row-reverse mt-4 mb-5">
                            <div className="mt-3 col-12 col-md-4 p-0">
                                <Link to='/inventory'><Button type="submit" className="col-12">Notes</Button></Link>
                            </div>
                            <div className="mt-3 col-12 col-md-4 align-self-center quitBtn">
                                <Button type="submit" className="col-12">Opt. Fields</Button>
                            </div>
                            <div className="mt-3 col-12 col-md-4 align-self-center quitBtn pl-0">
                                <Link to='/inventory'><Button type="submit" className="col-12">Multiple Alias</Button></Link>
                            </div>
                        </div>

                        <strong>Discount & Markup Det.</strong>
                        <div className="row mb-4">
                            {
                                itemAddText_Six.map((val, index) => (
                                    <div className="mt-3 col-6 col-md-6" key={"inputTextField" + index}>
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

                        <div className="row mb-4">
                            {
                                itemAdd_dropdown_four.map((val, index) => (
                                    <div className="col-7 col-md-7" key={"inputDropdownValue" + index}>
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
                            <div className="col-5 col-md-5 text-right align-self-center pl-0">
                                {
                                    setCriticalLevel.map((val, index) => (
                                        <div key={"inputTextKey" + index}>
                                            {
                                                componentModalItem(val.id)
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="row">
                        {
                                itemAddText_Seven.map((val, index) => (
                                    <div className="mt-3 col-6 col-md-4" key={"inputTextField" + index}>
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

export default ItemAdd