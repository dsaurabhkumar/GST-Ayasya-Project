import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio } from '@material-ui/core';

const SaleTypeAdd = (props) => {

    const formValue = {
        saleType: '',
        cgstRate:'',
        sgstRate: '',
        invoiceHeading: '',
        invoiceDescription: ''
    }

    const sale_type_add_text_one = [
        {
            label: 'Sale Type',
            name: 'saleType',
        },
    ]

    const sale_type_add_radio_one = [
        {
            key: 'Specify here (Single A/C)',
            value: 'specifyHereSingleAC',
        },
        {
            key: 'Specify here (Seperate accounts for different Tax-Rates)',
            value: 'specifyHereSeperateAccounts',
        },
        {
            key: 'Specify in Voucher',
            value: 'specifyInVoucher',
        },
    ]

    const sale_type_add_dropdown_one = [
        {
            name: 'specifySingleAC',
            values: [
                "Add. Cess Adjustable Agnst. Advance",
                "Add. Cess on GST Input",
                "Add. Cess on GST Output",
                "Advertisement and Publicity",
                "Bad Debts Written Off",
                "Bank Charges",
                "Books and Periodicals",
            ]
        },
    ]

    const sale_type_add_radio_two = [
        {
            key: 'Taxable (Voucher-wise)',
            value: 'taxableVoucherWise',
        },
        {
            key: 'Taxable (Item-wise)',
            value: 'taxableItemWise',
        },
        {
            key: 'Exempt',
            value: 'exempt',
        },
        {
            key: 'Non-GST',
            value: 'nonGst',
        },
        {
            key: 'Reverse Charge',
            value: 'reverseCharge',
        },
        {
            key: 'Zero Rated',
            value: 'zeroRated',
        },
        {
            key: 'Composition Dealer',
            value: 'compositionDealer',
        },
        {
            key: 'Nil Rated',
            value: 'nilRated',
        },
    ]

    const sale_type_add_dropdown_two = [
        {
            label: 'Sales through E-Commerce Portal',
            name: 'salesThroughECommercePortal',
            values: [
                "Y"
            ]
        },
    ]

    const sale_type_add_dropdown_three = [
        {
            label: 'E-Commerce Portal Name',
            name: 'eCommercePortalName',
            values: [
                "Cash",
                "Online"
            ]
        },
    ]

    const sale_type_add_dropdown_four = [
        {
            label: 'Tax Inclusive Item Price',
            name: 'taxInclusiveItemPrice',
            values: [
                "Y"
            ]
        },
        {
            label: 'Calculate Tax on Item MRP',
            name: 'calculateTaxOnItemMrp',
            values: [
                "Y"
            ]
        },
        {
            label: 'Adjust Tax/Cess in Sales Account',
            name: 'adjustTaxCessInSalesAccount',
            values: [
                "Y"
            ]
        },
    ]

    const sale_type_add_dropdown_five = [
        {
            label: 'Hide Item Tax Rate Window',
            name: 'hideItemTaxRateWindow',
            values: [
                "Y"
            ]
        },
    ]

    const sale_type_add_dropdown_six = [
        {
            label: 'Tax on MRP Mode',
            name: 'taxOnMrpMode',
            values: [
                "Inclusive",
                "Over & Above"
            ]
        },
    ]

    const sale_type_add_dropdown_seven = [
        {
            label: 'Tax account (CGST)',
            name: 'taxAccountCGST',
            values: [
                "Add. Cess on GST Input",
                "Add. Cess on GST Output",
                "Cess on GST Input",
                "Cess on GST Outut",
                "Cess Output (RCM)",
                "CGST Input",
                "CGST Output",
                "CGST Output (RCM)"
            ]
        },
        {
            label: 'Tax account (SGST)',
            name: 'taxAccountSGST',
            values: [
                "Add. Cess on GST Input",
                "Add. Cess on GST Output",
                "Cess on GST Input",
                "Cess on GST Outut",
                "Cess Output (RCM)",
                "CGST Input",
                "CGST Output",
                "CGST Output (RCM)"
            ]
        },
    ]

    const sale_type_add_dropdown_eight = [
        {
            label: 'Show/Print Deemed Tax',
            name: 'showPrintDeemedTax',
            values: [
                "Y"
            ]
        },
    ]

    const sale_type_add_radio_three = [
        {
            key: 'Local',
            value: 'local',
        },
        {
            key: 'Inter-State',
            value: 'interSttate',
        },
    ]

    const sale_type_add_radio_four = [
        {
            key: 'Stock Transfer',
            value: 'stockTransfer',
        },
        {
            key: 'Deemed Export',
            value: 'demmedExport',
        },
        {
            key: 'Others',
            value: 'others',
        },
    ]

    const sale_type_add_radio_five = [
        {
            key: 'Export(Normal)',
            value: 'exportNormal',
        },
        {
            key: 'SEZ Unit',
            value: 'sezUnit',
        },
    ]

    const sale_type_add_radio_six = [
        {
            key: 'Single Tax Rate',
            value: 'singleTaxRate',
        },
        {
            key: 'Multi Tax Rate',
            value: 'multiTaxRate',
        },
    ]

    const sale_type_add_text_two = [
        {
            label: 'CGST Rate(in %)',
            name: 'cgstRate',
        },
        {
            label: 'SGST Rate(in %)',
            name: 'sgstRate',
        },
    ]

    const sale_type_add_dropdown_nine = [
        {
            label: 'Freeze Tax in Sales',
            name: 'freezeTaxInSales',
            values: [
                "Y"
            ]
        },
        {
            label: 'Freeze Tax in Sales Return',
            name: 'freezeTaxInSalesReturn',
            values: [
                "Y"
            ]
        },
    ]

    const sale_type_add_text_three = [
        {
            label: 'Invoice Heading',
            name: 'invoiceHeading',
        },
        {
            label: 'Invoice Description',
            name: 'invoiceDescription',
        },
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
                        <div className="text-center"><strong>Add Bill of Material Master</strong></div>
                        <div className="row mt-4">
                            {
                                sale_type_add_text_one.map((val, index) => (
                                    <div className="col-12 col-md-6" key={"inputTextField" + index}>
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

                        <h5><span className="mt-2 headingAlign">Sales Account Information</span></h5>
                        <div className="row inventoryForm">
                            {
                                sale_type_add_radio_one.map((val, index) => (
                                    <div className="mb-2 col-12 col-md-6 p-0" key={"radioInputKey" + index}>
                                        <div className="radioBtnTextAlign">
                                            <Field
                                                type='radio'
                                                name='radioBtnsOne'
                                                value={val.value}
                                                as={Radio}
                                            />
                                            {val.key}
                                        </div>

                                    </div>
                                ))
                            }
                            {
                                sale_type_add_dropdown_one.map((val, index) => (
                                    <div className="mt-3 mb-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
                                                multiple={false}
                                                onChange={handleChange}
                                            >
                                                <option defaultValue>Sales</option>
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

                        <h5><span className="mt-2 headingAlign">Taxation Type</span></h5>
                        <div className="row inventoryForm">
                            {
                                sale_type_add_radio_two.map((val, index) => (
                                    <div className="mb-2 col-12 col-md-6 p-0" key={"radioInputKey" + index}>
                                        <div className="radioBtnTextAlign">
                                            <Field
                                                type='radio'
                                                name='radioBtnsTwo'
                                                value={val.value}
                                                as={Radio}
                                            />
                                            {val.key}
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                        <p className="notes">Above information can not be changed if any transaction exist for this Sale Type</p>

                        <div className="row">
                            {
                                sale_type_add_dropdown_two.map((val, index) => (
                                    <div className="mt-3 mb-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
                                        {val.label}
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
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
                        </div>
                        <div className="row">
                            {
                                sale_type_add_dropdown_three.map((val, index) => (
                                    <div className="mt-3 mb-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
                                        {val.label}
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
                        </div>

                        <h5><span className="mt-2 headingAlign">Other Information</span></h5>
                        <div className="row inventoryForm">
                            {
                                sale_type_add_dropdown_four.map((val, index) => (
                                    <div className="mt-3 mb-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
                                        {val.label}
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
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
                            <div className="">
                                {
                                    sale_type_add_dropdown_five.map((val, index) => (
                                        <div className="mt-3 mb-3 col-12 col-md-12" key={"inputDropdownValue" + index}>
                                            {val.label}
                                            <FormControl>
                                                <select
                                                    type='select'
                                                    name={val.name}
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
                            </div>
                            <div className="divWidth">
                                {
                                    sale_type_add_dropdown_six.map((val, index) => (
                                        <div className="mt-3 mb-3 col-12 col-md-12" key={"inputDropdownValue" + index}>
                                            {val.label}
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
                            </div>

                            <div className="divWidth">
                                {
                                    sale_type_add_dropdown_seven.map((val, index) => (
                                        <div className="mt-3 mb-3 col-12 col-md-12" key={"inputDropdownValue" + index}>
                                            {val.label}
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
                            </div>

                            <div className="divWidth">
                                {
                                    sale_type_add_dropdown_eight.map((val, index) => (
                                        <div className="mt-3 mb-3 col-12 col-md-12" key={"inputDropdownValue" + index}>
                                            {val.label}
                                            <FormControl>
                                                <select
                                                    type='select'
                                                    name={val.name}
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
                            </div>
                        </div>

                        <h5><span className="mt-2 headingAlign">Region</span></h5>
                        <div className="row inventoryForm">
                            {
                                sale_type_add_radio_three.map((val, index) => (
                                    <div className="mb-2 col-12 col-md-6 p-0" key={"radioInputKey" + index}>
                                        <div className="radioBtnTextAlign">
                                            <Field
                                                type='radio'
                                                name='radioBtnsThree'
                                                value={val.value}
                                                as={Radio}
                                            />
                                            {val.key}
                                        </div>

                                    </div>
                                ))
                            }

                            <h5><span className="mt-2 headingAlign">Type of Transaction</span></h5>
                            <div className="row inventoryForm divWidth">
                                {
                                    sale_type_add_radio_four.map((val, index) => (
                                        <div className="mb-2 col-12 col-md-6 p-0" key={"radioInputKey" + index}>
                                            <div className="radioBtnTextAlign">
                                                <Field
                                                    type='radio'
                                                    name='radioBtnsfour'
                                                    value={val.value}
                                                    as={Radio}
                                                />
                                                {val.key}
                                            </div>

                                        </div>
                                    ))
                                }
                                <div>

                                </div>
                                {
                                    sale_type_add_radio_five.map((val, index) => (
                                        <div className="mb-2 col-12 col-md-6 p-0" key={"radioInputKey" + index}>
                                            <div className="radioBtnTextAlign">
                                                <Field
                                                    type='radio'
                                                    name='radioBtnsfive'
                                                    value={val.value}
                                                    as={Radio}
                                                />
                                                {val.key}
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>

                        </div>


                        <h5><span className="mt-2 headingAlign">Tax Calculation</span></h5>
                        <div className="row inventoryForm">
                            {
                                sale_type_add_radio_six.map((val, index) => (
                                    <div className="mb-2 col-12 col-md-6 p-0" key={"radioInputKey" + index}>
                                        <div className="radioBtnTextAlign">
                                            <Field
                                                type='radio'
                                                name='radioBtnsSix'
                                                value={val.value}
                                                as={Radio}
                                            />
                                            {val.key}
                                        </div>

                                    </div>
                                ))
                            }
                            <div className="row mt-4">
                                {
                                    sale_type_add_text_two.map((val, index) => (
                                        <div className="mb-3 col-12 col-md-6" key={"inputTextField" + index}>
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
                                sale_type_add_dropdown_nine.map((val, index) => (
                                    <div className="mt-3 mb-3 col-12 col-md-6" key={"inputDropdownValue" + index}>
                                        <FormControl>
                                            <select
                                                type='select'
                                                name={val.name}
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
                            </div>

                        </div>

                        <h5><span className="mt-2 headingAlign">For Printing Documents</span></h5>
                        <div className="row inventoryForm">
                                {
                                    sale_type_add_text_three.map((val, index) => (
                                        <div className="mb-3 col-12 col-md-6" key={"inputTextField" + index}>
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

export default SaleTypeAdd