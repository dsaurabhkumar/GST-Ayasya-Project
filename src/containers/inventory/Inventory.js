import React from 'react';
import './Inventory.css';
import ModalComponent from '../../components/modal/ModalComponent';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, FormControl } from '@material-ui/core';
import MultiGodownInventory from '../../components/Forms/inventory-sub-forms/enable-multi-godown-inventory/MultiGodownInventory';
import SaleQuotation from '../../components/Forms/inventory-sub-forms/enable-sale-quotation/SaleQuotation';
import PurchaseQuotation from '../../components/Forms/inventory-sub-forms/enable-purchase-quotation/PurchaseQuotation';
import OrderProcessing from '../../components/Forms/inventory-sub-forms/enable-order-processing/OrderProcessing';
import SalePurchaseChallan from '../../components/Forms/inventory-sub-forms/enable-sale-purchase-challan/SalePurchaseChallan';
import PureInventoryVouchers from '../../components/Forms/inventory-sub-forms/accounting-in-pure-inventory-vouchers/PureInventoryVouchers';
import ConsignmentSales from '../../components/Forms/inventory-sub-forms/enable-consignment-sales/ConsignmentSales';
import MrpWiseDetails from '../../components/Forms/inventory-sub-forms/MRP-wise-details/MrpWiseDetails';
import FreeQuantityVouchers from '../../components/Forms/inventory-sub-forms/enable-free-quantity-vouchers/FreeQuantityVouchers';
import MultipleItemAliases from '../../components/Forms/inventory-sub-forms/maintain-multiple-item-aliases/MultipleItemAliases';
import JobWork from '../../components/Forms/inventory-sub-forms/enable-job-work/JobWork';
import BatchWiseDetails from '../../components/Forms/inventory-sub-forms/batch-wise-details/BatchWiseDetails';
import ParameterizedDetails from '../../components/Forms/inventory-sub-forms/parameterized-details/ParameterizedDetails';

const Inventory = (props) => {
    const formValue = {
        qtyDecimalPlaces: "",
        itemWiseDiscountDecimalPlaces: "",
        checkbox: "",
    }

    let childDataInfoFormOne = null;
    let childDataInfoFormTwo = null;
    let childDataInfoFormThree = null;
    let childDataInfoFormFour = null;
    let childDataInfoFormFive = null;
    let childDataInfoFormSix = null;
    let childDataInfoFormSeven = null;
    let childDataInfoFormEight = null;
    let childDataInfoFormNine = null;
    let childDataInfoFormTen = null;
    let childDataInfoFormEleven = null;
    let childDataInfoFormTwelve = null;

    let childDataInfoFormForteen = null;

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
            value: 'Enable Sale Quotation',
            id: 'enableSaleQuotation',
            button: 'Configure'
        },
        {
            title: 'Enable Purcahse Quotation',
            value: 'Enable Purcahse Quotation',
            id: 'enablePurchaseQuotation',
            button: 'Configure'
        },
        {
            title: 'Enable Order Processing',
            value: 'Enable Order Processing',
            id: 'enableOrderProcessing',
            button: 'Configure'
        },
        {
            title: 'Enable Sale/Purchase Challan',
            value: 'Enable Sale/Purchase Challan',
            id: 'enableSalePurchaseChallan',
            button: 'Configure'
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
            value: 'Accounting in Pure Inventory Vouchers',
            id: 'accountingPureInventoryVouchers',
            button: 'Configure'
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
            value: 'Enable Consignment Sales',
            id: 'enableConsignementSales',
            button: 'Configure'
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
            value: 'Enable Job Work',
            id: 'enableJobWork',
            button: 'Configure'
        },
        {
            title: 'Parameterized Details',
            value: 'Parameterized Details',
            id: 'parameterizedDetails',
            button: 'Configure'
        },
        {
            title: 'Batch-wise Details',
            value: 'Batch-wise Details',
            id: 'batchWiseDetails',
            button: 'Configure'
        },
        {
            title: 'Serial No.-wise Details',
            value: 'Serial No.-wise Details'
        },
        {
            title: 'MRP-wise Details',
            value: 'MRP-wise Details',
            id: 'mrpWiseDetails',
            button: 'Configure'
        },
        {
            title: 'Skip Items Default Price during Voucher Modification',
            value: 'Skip Items Default Price during Voucher Modification'
        },
        {
            title: 'Enable Free Quantity in Vouchers',
            value: 'Enable Free Quantity in Vouchers',
            id: 'enebleFreeQuantityVouchers',
            button: 'Configure'
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
            value: 'Maintain Multiple Item Aliases',
            id: 'maintainMultipleItemAliases',
            button: 'Configure'
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
                    submittedData={(childData) => (
                        childDataInfoFormOne = childData
                    )}
                />
                break;

            case "enableSaleQuotation":
                element = <SaleQuotation
                    submittedData={(childData) => (
                        childDataInfoFormTwo = childData
                    )}
                />
                break;

            case "enablePurchaseQuotation":
                element = <PurchaseQuotation
                    submittedData={(childData) => (
                        childDataInfoFormThree = childData
                    )}
                />
                break;

            case "enableOrderProcessing":
                element = <OrderProcessing
                    submittedData={(childData) => (
                        childDataInfoFormFour = childData
                    )}
                />
                break;

            case "enableSalePurchaseChallan":
                element = <SalePurchaseChallan
                    submittedData={(childData) => (
                        childDataInfoFormFive = childData
                    )}
                />
                break;

            case "accountingPureInventoryVouchers":
                element = <PureInventoryVouchers
                    submittedData={(childData) => (
                        childDataInfoFormSix = childData
                    )}
                />
                break;

            case "enableConsignementSales":
                element = <ConsignmentSales
                    submittedData={(childData) => (
                        childDataInfoFormSeven = childData
                    )}
                />
                break;

            case "enableJobWork":
                element = <JobWork
                    submittedData={(childData) => (
                        childDataInfoFormEight = childData
                    )}
                />
                break;

            case "parameterizedDetails":
                element = <ParameterizedDetails
                    submittedData={(childData) => (
                        childDataInfoFormNine = childData
                    )}
                />
                break;

            case "batchWiseDetails":
                element = <BatchWiseDetails
                    submittedData={(childData) => (
                        childDataInfoFormTen = childData
                    )}
                />
                break;

            case "mrpWiseDetails":
                element = <MrpWiseDetails
                    submittedData={(childData) => (
                        childDataInfoFormEleven = childData
                    )}
                />
                break;

            case "enebleFreeQuantityVouchers":
                element = <FreeQuantityVouchers
                    submittedData={(childData) => (
                        childDataInfoFormTwelve = childData
                    )}
                />
                break;

            case "maintainMultipleItemAliases":
                element = <MultipleItemAliases
                    submittedData={(childData) => (
                        childDataInfoFormForteen = childData
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
            <h2 className="text-center mb-4">Inventory</h2>
            <Formik
                initialValues={formValue}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(data, childDataInfoFormOne, childDataInfoFormTwo, childDataInfoFormThree, childDataInfoFormFour, childDataInfoFormFive,
                        childDataInfoFormSix, childDataInfoFormSeven, childDataInfoFormEight, childDataInfoFormNine, childDataInfoFormTen, childDataInfoFormEleven, childDataInfoFormTwelve, childDataInfoFormForteen)
                    setSubmitting(false);
                }}
            >
                {({ values, isSubmitting, handleChange }) => (
                    <Form className="inventoryForm">
                        <div className="row">
                            {
                                inputText.map((val, index) => (
                                    <div className="col-12 col-md-6 mb-4" key={"inputTextField" + index}>
                                        {val.label}
                                        <Field
                                            type='number'
                                            name={val.name}
                                            placeholder={val.placeholder}
                                            as={TextField}
                                        />
                                    </div>
                                ))
                            }
                        </div>

                        <div className="row mb-4 inventoryCheckBox">
                            {
                                checkboxdata.map((val, index) => (
                                    <div className="col-12 col-md-6 inventoryButton" key={"inputCheckboxKey" + index}>
                                        {/* <div> */}
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
                                        {/* </div> */}
                                        {/* <div className="col-5 col-md-5 configureBtns"> */}
                                        {componentModalItem(val.id)}
                                        {/* </div> */}
                                    </div>
                                ))
                            }
                        </div>

                        <div className="mt-4">
                            {
                                dropDownValue.map((val, index) => (
                                    <div className="row mb-4" key={"inputDropdownValue" + index}>
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