import React from 'react';
import './Inventory.css';
import ModalComponent from '../../components/modal/ModalComponent';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl } from '@material-ui/core';
import MultiGodownInventory from '../../components/Forms/inventory-sub-forms/enable-multi-godown-inventory/MultiGodownInventory';

const Inventory = (props) => {
    const formValue = {
        qtyDecimalPlaces: "",
        itemWiseDiscountDecimalPlaces: "",
        checkbox: "",
    }

    const inputText = [
        {
            label: 'Qty. Decimal Places',
            name: 'qtyDecimalPlaces',
            placeholder: 'Numbers only...'
        },
        {
            label: 'Item-wise Discount Decimal Places',
            name: 'itemWiseDiscountDecimalPlaces',
            placeholder: 'Numbers only...'
        }
    ]

    const checkboxdata = [
        {
            title: 'Packaging Unit of Items',
            value: 'Packaging Unit of Items'
        },
        {
            title: 'Alternate Unit of Items',
            value: 'Alternate Unit of Items'
        },
        {
            title: 'Enable Multi-Godown Inventory',
            value: 'Enable Multi-Godown Inventory',
            id: 'enableMultiGodownInventory',
            button: 'Configure'
        },
        {
            title: 'Enable Manufacturing Features',
            value: 'Enable Manufacturing Features'
        },
        {
            title: 'Enable Sale Quotation',
            value: 'Enable Sale Quotation'
        },
        {
            title: 'Enable Purcahse Quotation',
            value: 'Enable Purcahse Quotation'
        },
        {
            title: 'Enable Order Processing',
            value: 'Enable Order Processing'
        },
        {
            title: 'Enable Sale/Purchase Challan',
            value: 'Enable Sale/Purchase Challan'
        },
        {
            title: 'Carry Pending Material Issued/Receipt to next F.Y',
            value: 'Carry Pending Material Issued/Receipt to next F.Y'
        },
        {
            title: 'Pick Item Sizing Information from Item Description',
            value: 'Pick Item Sizing Information from Item Description'
        },
        {
            title: 'Seperate Stock Updation Date in Dual Vouchers',
            value: 'Seperate Stock Updation Date in Dual Vouchers'
        },
        {
            title: 'Seperate Stock Valuation Method for Items',
            value: 'Seperate Stock Valuation Method for Items'
        },
        {
            title: 'Accounting in Pure Inventory Vouchers',
            value: 'Accounting in Pure Inventory Vouchers'
        },
        {
            title: 'Enable Party-Wise Item Codes',
            value: 'Enable Party-Wise Item Codes'
        },
        {
            title: 'Allow Sales Return in Sales Voucher',
            value: 'Allow Sales Return in Sales Voucher'
        },
        {
            title: 'Allow Purchase Return in Purchase Voucher',
            value: 'Allow Purchase Return in Purchase Voucher'
        },
        {
            title: 'Validate Sales Return with Original Sales',
            value: 'Validate Sales Return with Original Sales'
        },
        {
            title: 'Validate Purchase Return with Original Purchase',
            value: 'Validate Purchase Return with Original Purchase'
        },
        {
            title: 'Enable Bill Sundry Narration',
            value: 'Enable Bill Sundry Narration'
        },
        {
            title: 'Invoice Bar Code Printing (2D)',
            value: 'Invoice Bar Code Printing (2D)'
        },
        {
            title: 'Enable Consignment Sales',
            value: 'Enable Consignment Sales'
        },
        {
            title: 'Maintain Item Category',
            value: 'Maintain Item Category'
        },
        {
            title: 'Maintain MC-Wise',
            value: 'Maintain MC-Wise'
        },
        {
            title: 'Enable Scheme',
            value: 'Enable Scheme'
        },
        {
            title: 'Enable Job Work',
            value: 'Enable Job Work'
        },
        {
            title: 'Parameterized Details',
            value: 'Parameterized Details'
        },
        {
            title: 'Batch-wise Details',
            value: 'Batch-wise Details'
        },
        {
            title: 'Serial No.-wise Details',
            value: 'Serial No.-wise Details'
        },
        {
            title: 'MRP-wise Details',
            value: 'MRP-wise Details'
        },
        {
            title: 'Skip Items Default Price during Voucher Modification',
            value: 'Skip Items Default Price during Voucher Modification'
        },
        {
            title: 'Enable Free Quantity in Vouchers',
            value: 'Enable Free Quantity in Vouchers'
        },
        {
            title: 'Show Last Transactions during Sales',
            value: 'Show Last Transactions during Sales'
        },
        {
            title: 'Show Last Transactions during Purchase',
            value: 'Show Last Transactions during Purchase'
        },
        {
            title: 'Allocate Additional Expenses Voucher-wise',
            value: 'Allocate Additional Expenses Voucher-wise'
        },
        {
            title: 'Allocate Expense/Purchase to Items',
            value: 'Allocate Expense/Purchase to Items'
        },
        {
            title: 'Maintain Images/Notes with Masters/Vouchers',
            value: 'Maintain Images/Notes with Masters/Vouchers'
        },
        {
            title: 'Show Items Current Balance During Voucher Entry',
            value: 'Show Items Current Balance During Voucher Entry'
        },
        {
            title: 'Maintain Drug License',
            value: 'Maintain Drug License'
        },
        {
            title: 'Enable Date-wise Item Pricing',
            value: 'Enable Date-wise Item Pricing'
        },
        {
            title: 'Calculate Item Sale Price from Purchase Price',
            value: 'Calculate Item Sale Price from Purchase Price'
        },
        {
            title: 'Update Item Prices from Vouchers',
            value: 'Update Item Prices from Vouchers'
        },
        {
            title: 'Enable Packing Details in Vouchers',
            value: 'Enable Packing Details in Vouchers'
        },
        {
            title: 'Maintain Multiple Item Aliases',
            value: 'Maintain Multiple Item Aliases'
        },
    ]

    const dropDownValue = [
        {
            label: 'Item-wise Discount Type',
            name: 'itemWiseDiscountType',
            values: [
                "Not Required",
                "Simple Interest",
                "Compound Interest"
            ]
        },
        {
            label: 'Stock Value Method',
            name: 'stockValueMethod',
            values: [
                "FIFO",
                "LIFO",
                "Last Purchase",
                "Last Qty. In",
                "Last Sale",
                "Self Evaluation",
                "Weighted Average",
                "Avg. Price (Qty. In)",
                "Avg. Price (Invoice)"
            ]
        },
        {
            label: 'Tag Sale/Purchase Acc. With',
            name: 'tagSalePurchaseAccWith',
            values: [
                "Sale/Purchase Type",
                "Item",
                "Item Group",
                "Material Centre"
            ]
        },
        {
            label: 'Tag Stock Acc. With',
            name: 'tagStockAccWith',
            values: [
                "Material Centre",
                "Item Group",
                "Tax Category"
            ]
        }
    ]


    const componentModalItem = (id) => {
        let element = null;
        switch (id) {
            case "enableMultiGodownInventory":
                    element = <MultiGodownInventory 
                    submittedData={childData => console.log("Child Data" , childData)} 
                />
                break;
        }

        if(element) {
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
                    console.log(data)
                    setSubmitting(false);
                }}
            >
                {({ values, isSubmitting, handleChange }) => (
                    <Form className="inventoryForm">
                        <div>
                            {
                                inputText.map((val, index) => (
                                    <div className="row mb-1" key={"inputTextField" + index}>
                                        <div className="col-9 col-md-9">
                                            {val.label}
                                        </div>
                                        <div className="col-3 col-md-3">
                                            <Field
                                                type='number'
                                                name={val.name}
                                                placeholder={val.placeholder}
                                                as={TextField}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="inventoryCheckBox d-flex flex-column align-items-start">
                            {
                                checkboxdata.map((val, index) => (
                                    <div key={"inputCheckboxKey" + index}>
                                        <FormControlLabel
                                            label={val.title}
                                            control={
                                                <Field
                                                    type='checkbox'
                                                    name="checkbox"
                                                    value={val.value}
                                                    as={Checkbox} />
                                            }
                                        />
                                        <div>
                                            {componentModalItem(val.id)}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div>
                            {
                                dropDownValue.map((val, index) => (
                                    <div className="row mb-3" key={"inputDropdownValue" + index}>
                                        <div className="col-6 col-md-6">
                                            {val.label}
                                        </div>

                                        <div className="col-6 col-md-6">
                                            <FormControl>
                                                <select
                                                    type='select'
                                                    name={val.name}
                                                    value={values.name}
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
                                    </div>
                                ))
                            }
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
export default Inventory