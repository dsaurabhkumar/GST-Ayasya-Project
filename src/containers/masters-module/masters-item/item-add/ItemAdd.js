import React from 'react';
import ModalComponent from '../../../../components/modal/ModalComponent';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';
import NMOButtons from '../../../../components/Forms/Notes-mulp-button/NMOButtons';
import SetCriticalLevel from '../../../../components/Forms/masters-module-item-add-sub-forms/set-critical-level/SetCriticalLevel';
import '../item-add/ItemAdd.css'
import SaveQuitButton from '../../../../components/Forms/save-quit-button/SaveQuitButton';

const ItemAdd = (props) => {

    let childDataInfoFormOne = null;

    const formValue = {
        name: '',
        printName: '',
        group: '',
        unit: '',
        opStockQty: '',
        opStockValue: '',
        taxCategory:'',
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
        specifySaleAcc: '',
        specifyPurcAcc: '',
        saleCompoundDisc: '',
        purcCompoundDisc: '',
        specifySalesDiscStructure: '',
        specifyPurcDiscStructure: '',
        itemDescription: '',
        saleMarkup: '',
        purcMarkup: '',
        saleCompMarkup: '',
        purcCompMarkup: '',
        specifySalesMarkupStructure: '',
        specifyPurcMarkupStructure: '',
        setCriticalLevel:'',
        maintainRg23d: '',
        tariffHeading: '',
        serialNoWiseDetails: '',
        parameterizedDetails: '',
        mrpWiseDetails: '',
        batchWiseDetails: '',
        expMfgDateReq: '',
        expiryDays: '',
        specifyDefaultMC: '',
        freezeMCforItem: '',
        skipGstReports: '',
        totalNoOfAuthors: '',
        dontMaintainStockBal: '',
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
            label: 'Print Name',
            name: 'printName',
        },
        // {
        //     label: 'Group',
        //     name: 'group',
        // },
    ]


    
    const accountAdd_dropdown_group = [
        {
            label: `Group`,
            name: 'group',
            values: [
                "Bank Accounts",
                "Sundry Creditors",
                "Sundry Debtors",
                "Bank O/D Accounts",
                "Capital Account",
                "Cash-in-hand",
                "Current Assets",
                "Current Liabilities",
                "Duties & Taxes",
                "Expenses (Direct/Mfg.)",
                "Expenses (Indirect/Admin.)",
                "Fixed Assets",
            ]
        }
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
            placeholder: '0.00'
        },
        {
            label: 'Purc. Price',
            name: 'purchasePrice',
            placeholder: '0.00'
        },
        {
            label: 'M.R.P',
            name: 'mrp',
            placeholder: '0.00'
        },
        {
            label: 'Min. Sales Price',
            name: 'minSalesPrice',
            placeholder: '0.00'
        },
        {
            label: 'Self-Val. Price',
            name: 'selfValPrice',
            placeholder: '0.00'
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
            defaulOptionValue:'N',
            values: [
                "Y",
                "N"
            ]
        },
        {
            label: `Tax Inclusive Purchase`,
            name: 'taxInclusivePurchase',
            defaulOptionValue:'N',
            values: [
                "Y",
                "N"
            ]
        },
        {
            label: `Specify Sales Acc`,
            name: 'specifySaleAcc',
            defaulOptionValue:'Not Required',
            values: [
                "Not Required",
                "Specify in Vch."
            ]
        },
        {
            label: `Specify Purc Acc`,
            name: 'specifyPurcAcc',
            defaulOptionValue:'Not Required',
            values: [
                "Not Required",
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
            placeholder: '0.00'
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
            defaulOptionValue:'Y',
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
            label: 'Exp/Mfg Date Required',
            name: 'expMfgDateReq',
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
        
    ]
    const itemAdd_dropdown_five = [
        {
            label: `Skip In GST Reports`,
            name: 'skipGstReports',
            defaulOptionValue:'N',
            values: [
                "Y",
                "N"
            ]
        },
        {
            label: `Do Not Maintain Stock Balance`,
            name: 'dontMaintainStockBal',
            defaulOptionValue:'N',
            values: [
                "Y",
                "N"
            ]
        },
        {
            label: 'Specify Default Vendor',
            name: 'specifyDefaultVendor',
            defaulOptionValue:'N',
            values: [
                "Y",
                "N"
            ]
        }
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
        <div className="container-fluid">
            <Formik

                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data, childDataInfoFormOne)
                    setSubmitting(false);
                }}
            >


                {({ values, isSubmitting, handleChange }) => (
                    <Form className='m-2'>
                        <div className="m-4 text-center"><strong>Add Item Master</strong></div>
                        <div className='row justify-content-around'>
 
                            <div className="borderItem col-md-6 border_margin">

                                <div className='row my-3 m-0 mb-4'>
                                    {
                                        itemAddText_one.map((val, index) => (
                                            <div className="col-md-8 mb-2" key={"inputTextField" + index}>
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
                                accountAdd_dropdown_group.map((val, index) => (
                                    <div className=" my-3 col-12 col-md-8" key={"inputDropdownValue" + index}>
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

                                <div className='row m-0 borderItem d-flex flex-column pb-3'>
                                    <div className='col-12'><span className='heading_inner' >Main Unit Details</span></div>

                                    {
                                        itemAdd_dropdown_one.map((val, index) => (
                                            <div className="mt-3 col-12 col-md-5" key={"inputDropdownValue" + index}>
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
                                            <div className="mt-3 col-12 col-md-5 " key={"inputTextField" + index}>
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


                                <div className='row m-0 d-flex flex-column mt-2'>
                                    {
                                        itemAdd_dropdown_two.map((val, index) => (
                                            <div className="mb-2 mt-3 col-12 col-md-6 " key={"inputDropdownValue" + index}>
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

                                <div className='row m-0 borderItem my-4 pb-3'>
                                        
                                        <div className='col-12'><span className='heading_inner' >Item Price Info</span></div>
                                    {
                                        itemAddText_Four.map((val, index) => (
                                            <div className="mt-3 col-6 col-md-5" key={"inputTextField" + index}>
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
                                <div className='row m-0 borderItem pb-3'>
                                <div className='col-12'><span className='heading_inner' >Packaging Unit Details</span></div>
                                    {/* <strong>Packaging Unit Details</strong> */}

                                    {
                                        itemAddText_Five.map((val, index) => (
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
                                <div className='row m-0 my-3'>
                                    {
                                        itemAdd_dropdown_three.map((val, index) => (
                                            <div className="my-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
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
                                                        <option defaultValue>{val.defaulOptionValue}</option>
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





                            <div className='borderItem col-md-6'>

                                <div className='row borderItem m-0 my-3 pb-4'>
                                    <div className='col-12'>
                                        <span className='heading_inner'>Discount & Markup Det</span>
                                    </div>

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

                                <div className='row m-0 '>
                                    {
                                        itemAdd_dropdown_four.map((val, index) => (
                                            <div className="col-6 my-3" key={"inputDropdownValue" + index}>
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
                                                        <option defaultValue>{val.defaulOptionValue}</option>
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
                                        setCriticalLevel.map((val, index) => (
                                            <div className='my-4 mx-3' key={"inputTextKey" + index}>
                                                {
                                                    componentModalItem(val.id)
                                                }
                                            </div>
                                        ))
                                    }
                                </div>


                                <div className='row m-0'>
                                    {
                                        itemAddText_Seven.map((val, index) => (
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

                                <div className='row m-0 '>
                                    {
                                        itemAdd_dropdown_five.map((val, index) => (
                                            <div className="col-6 my-3" key={"inputDropdownValue" + index}>
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
                                                        <option defaultValue>{val.defaulOptionValue}</option>
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


                        </div>

                        
                            <NMOButtons />
                        
                        
                            <SaveQuitButton isSubmitting={isSubmitting}/>
                        

                        {/* <div className="row col-12 btnContainer flex-sm-row-reverse mt-4 mb-3">
                            <div className="mt-3 col-sm-6 col-md-2 p-0">
                                <Button type="submit" className="col-12" disabled={isSubmitting}>Save</Button>
                            </div>
                            <div className="mt-3 col-sm-6 col-md-2 align-self-center quitBtn">
                                <Link to='/'><Button type="submit" className="col-12" color="primary" variant="outlined">Quit</Button></Link>
                            </div>
                        </div> */}
                    </Form>
                )
                }

            </Formik>
        </div>
    )
}

export default ItemAdd