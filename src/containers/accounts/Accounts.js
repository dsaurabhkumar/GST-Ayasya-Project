import React from 'react'
import './Accounts.css';
import { Link } from 'react-router-dom';
import Checkbox from '../../components/Forms/formComponents/checkbox/Checkbox';
import Dropdown from '../../components/Forms/formComponents/dropdown/Dropdown';
import InputText from '../../components/Forms/formComponents/input-text/InputText';
import ModalComponent from '../../components/modal/ModalComponent';
import BillByBillDetailsForm from '../../components/Forms/bill-by-bill-details/Bill-by-bill-details.form';
import CostCentersOptions from '../../components/Forms/cost-centers-options/Cost-centers.form';
import MaintainVoucherMaster from '../../components/Forms/maintain-image-notes-voucher-master/Maintain-voucher-master.form';
import SalesmanBrokerReport from '../../components/Forms/salesman-broker-report/Salesman-broker-report.form';

class Accounts extends React.Component {

    state = {
        inputLabels: [
            {
                type: "check-box",
                label: "check-box-details",
                output: [],
                options: [
                    {
                        name: "Bill-by-bill Details",
                        value: "billDetails",
                        button: "Configure",
                        id: "billButton"
                    },
                    {
                        name: "Credit Limits",
                        value: "creditLimits",
                    },
                    {
                        name: "Targets",
                        value: "targets",
                    },
                    {
                        name: "Cost Centers",
                        value: "costCenters",
                        button: "Configure",
                        id: "costButton"
                    },
                    {
                        name: "Account wise interest Rate",
                        value: "actIntRate",
                    },
                    {
                        name: "Ledger Reconciliation",
                        value: "ledgerRecon",
                    },
                    {
                        name: "Show Accounts Current Balance During Vouchers Entry",
                        value: "showVouchersEntry",
                    },

                ]
            },
            {
                label: "Balance Sheet Stock Updation",
                type: "drop-down",
                name: "stockUpdation",
                id: "stockUpdation",
                values: [
                    "Manually",
                    "Stock Status",
                    "Ask Me"
                ]
            },
            {
                label: "Show Party Dash Board after Selecting Party in Vouchers",
                type: "text",
                placeholder: "Y/N",
                name: "showPartyDashBoard",
                id: "showPartyDashBoard"
            },
            {
                type: "check-box",
                label: "check-box-details",
                output: [],
                options: [
                    {
                        name: "Single Entry System for Payment & Receipt Vouchers",
                        value: "paymentReceiptVouchers",
                    },
                    {
                        name: "Posting in Accounts Through Sales Return & Purchase Return",
                        value: "salesPurchaseReturn",
                    },
                    {
                        name: "Enable Party Dash Board",
                        value: "enablePartyDashboard",
                        button: "Configure",
                        id: "enablePartyButton"
                    },
                    {
                        name: "Maintain Account Category",
                        value: "maintainActCat"
                    },
                    {
                        name: "Salesman/Broker-wise Reporting",
                        value: "salesmanBrokerReporting",
                        button: "Configure",
                        id: "salesmanBbrokerButton"
                    },
                    {
                        name: "Budgets",
                        value: "budgets"
                    },
                    {
                        name: "Royalty Calculation",
                        value: "royaltyCalculation"
                    },
                    {
                        name: "Company's Act Depreciation",
                        value: "companyAct"
                    },
                    {
                        name: "Maintain Sub Ledgers",
                        value: "maintainSubLedgers"
                    },
                    {
                        name: "Maintain Multiple Account Aliases",
                        value: "multipleActAliases"
                    },
                    {
                        name: "Multi Currency",
                        value: "multiCurrency"
                    },
                    {
                        name: "Maintain Images/Notes with Masters/Vouchers",
                        value: "ImgNotesWithMasterVouchers"
                    },
                    {
                        name: "Bank Reconciliation",
                        value: "bankReconciliation"
                    },
                    {
                        name: "Maintain Bank Instrument Details",
                        value: "bankInstrumentDetails"
                    },
                    {
                        name: "Post Dated Cheques in Payment/Receipt Vouchers",
                        value: "postDatedVouchers"
                    },
                    {
                        name: "Cheque Printing",
                        value: "chequePrinting"
                    },
                ]
            },
        ],
    }


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCheck = (...args) => {
        const [groupIndex, valueIndex, value, checked] = args;
        // Take state copy
        const inputGroup = [...this.state.inputLabels];

        // Reach to target object or array
        const checkGroup = { ...this.state.inputLabels[groupIndex] };
        const outputArray = [...checkGroup.output];

        // Update checkbox values
        checkGroup.options[valueIndex].checked = checked;

        // Update output
        if (checked) {
            outputArray.push(value);
        } else {
            outputArray.splice(outputArray.findIndex(val => val === value), 1);
        }
        inputGroup[groupIndex].output = outputArray;
        console.log(inputGroup)

        // Update state
        this.setState({
            inputLabels: inputGroup
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        console.log(this.state, this.childDataInfoOne, this.childDataInfoTwo, this.childDataInfoThree, this.childDataInfoFour);
        // console.log(this.childDataInfoOne);
        // console.log(this.childDataInfoTwo);
        // console.log(this.childDataInfoThree);
        // console.log(this.childDataInfoFour);
    }

    closeModal = () => {
        return false;
    }

    componentModalItem = (id) => {
        let element = null;
        switch (id) {
            case "billButton":
                element = <BillByBillDetailsForm 
                submittedData={(childDataOne) => (
                        this.childDataInfoOne = childDataOne.formOne[0].output
                    )}
                closeModal={this.closeModal}
                />
                break;
            case "costButton":
                element = <CostCentersOptions 
                    submittedData={(childDataTwo) => (
                        this.childDataInfoTwo = childDataTwo.formTwo[0].output
                    )}
                    closeModal={this.closeModal}
                />
                break;
            case "enablePartyButton":
                element = <MaintainVoucherMaster 
                    submittedData={(childDataThree) => (
                        this.childDataInfoThree = childDataThree.formThree[0].output
                    )}
                    closeModal={this.closeModal}
                />
                break;
            case "salesmanBbrokerButton":
                element = <SalesmanBrokerReport 
                    submittedData={(childDataFour) => (
                        this.childDataInfoFour = childDataFour.formFour
                    )}
                    
                    closeModal={this.closeModal}
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

    render() {
        return (
            <div className="container mt-4 mb-4">
                <h2 className="text-center mt-4 mb-5">Accounts</h2>
                <form className="accountsForm" onSubmit={this.formSubmit}>
                    {
                        this.state.inputLabels.map((val, index) => {
                            if (val.type === "check-box") {
                                return val.options.map((cval, cindex) => <div className="row form-group mb-0" key={'input_checkbox_' + cindex + "_" + cval.name + "_" + cindex}>
                                    <div className="col-2 col-md-2 p-0">
                                        <Checkbox
                                            name={val.label}
                                            value={cval.value}
                                            checked={cval.checked}
                                            handleCheck={(event) => this.handleCheck(index, cindex, cval.value, event.target.checked)}
                                        />
                                    </div>
                                    <div className="col-6 col-md-6 p-0">
                                        {cval.name}
                                    </div>
                                    {this.componentModalItem(cval.id)}
                                </div>
                                )
                            } else if (val.type === "drop-down") {
                                return (
                                    <div className="row form-group mb-2" key={'inputLabels_' + index}>
                                        <div className="col-5 col-md-5 generalInputLabel">
                                            {val.label}
                                        </div>
                                        <div className="col-7 col-md-7 fieldAlignment">
                                            <Dropdown
                                                values={val.values}
                                                name={val.name}
                                                handleChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                )
                            } else if (val.type === "text") {
                                return (
                                    <div className="row form-group mb-2 mt-2" key={'inputLabels_' + index}>
                                        <div className="col-8 col-md-7">
                                            {val.label}
                                        </div>
                                        <div className="col-4 col-md-5 textFieldAlignment">
                                            <InputText
                                                name={val.name}
                                                placeholder={val.placeholder}
                                                handleChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }

                    <div className="row btnContainer flex-sm-row-reverse mt-4 mb-3">
                        <div className="mt-3 col-12 col-md-3 p-0">
                            <button type="submit" className="btn btn-primary col-12">Save</button>
                        </div>
                        <div className="mt-3 col-12 col-md-3 align-self-center quitBtn">
                            <Link to='/feature-options'><button type="submit" className="btn btn-primary col-12">Quit</button></Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Accounts