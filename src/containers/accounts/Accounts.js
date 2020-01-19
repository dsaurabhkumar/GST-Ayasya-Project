import React from 'react'
import './Accounts.css';
import { Link } from 'react-router-dom';
import Checkbox from '../../components/Forms/formComponents/checkbox/Checkbox';
import Dropdown from '../../components/Forms/formComponents/dropdown/Dropdown';
import InputText from '../../components/Forms/formComponents/input-text/InputText';
import ModalComponent from '../../components/modal/ModalComponent';

class Accounts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputLabels: [
                {
                    label: "Bill-by-bill Details",
                    type: "check-box",
                    name: "billDetails",
                    id: "billDetails",
                    checked: false
                },
                {
                    label: "Credit Limits",
                    type: "check-box",
                    name: "creditLimits",
                    id: "creditLimits",
                    checked: false
                },
                {
                    label: "Targets",
                    type: "check-box",
                    name: "targets",
                    id: "targets",
                    checked: false
                },
                {
                    label: "Cost Centers",
                    type: "check-box",
                    name: "costCenters",
                    id: "costCenters",
                    checked: false
                },
                {
                    label: "Account wise interest Rate",
                    type: "check-box",
                    name: "actIntRate",
                    id: "actIntRate",
                    checked: false
                },
                {
                    label: "Ledger Reconciliation",
                    type: "check-box",
                    name: "ledgerRecon",
                    id: "ledgerRecon",
                    checked: false
                },
                {
                    label: "Show Accounts Current Balance During Vouchers Entry",
                    type: "check-box",
                    name: "showVouchersEntry",
                    id: "showVouchersEntry",
                    checked: false
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
                    label: "Single Entry System for Payment & Receipt Vouchers",
                    type: "check-box",
                    name: "paymentReceiptVouchers",
                    id: "paymentReceiptVouchers",
                    checked: false
                },
                {
                    label: "Posting in Accounts Through Sales Return & Purchase Return",
                    type: "check-box",
                    name: "salesPurchaseReturn",
                    id: "salesPurchaseReturn",
                    checked: false
                },
                {
                    label: "Enable Party Dash Board",
                    type: "check-box",
                    name: "enablePartyDashboard",
                    id: "enablePartyDashboard",
                    checked: false
                },
                {
                    label: "Maintain Account Category",
                    type: "check-box",
                    name: "maintainActCat",
                    id: "maintainActCat",
                    checked: false
                },
                {
                    label: "Salesman/Broker-wise Reporting",
                    type: "check-box",
                    name: "salesmanBrokerReporting",
                    id: "salesmanBrokerReporting",
                    checked: false
                },
                {
                    label: "Budgets",
                    type: "check-box",
                    name: "budgets",
                    id: "budgets",
                    checked: false
                },
                {
                    label: "Royalty Calculation",
                    type: "check-box",
                    name: "royaltyCalculation",
                    id: "royaltyCalculation",
                    checked: false
                },
                {
                    label: "Company's Act Depreciation",
                    type: "check-box",
                    name: "companyAct",
                    id: "companyAct",
                    checked: false
                },
                {
                    label: "Maintain Sub Ledgers",
                    type: "check-box",
                    name: "maintainSubLedgers",
                    id: "maintainSubLedgers",
                    checked: false
                },
                {
                    label: "Maintain Multiple Account Aliases",
                    type: "check-box",
                    name: "multipleActAliases",
                    id: "multipleActAliases",
                    checked: false
                },
                {
                    label: "Multi Currency",
                    type: "check-box",
                    name: "multiCurrency",
                    id: "multiCurrency",
                    checked: false
                },
                {
                    label: "Maintain Images/Notes with Masters/Vouchers",
                    type: "check-box",
                    name: "ImgNotesWithMasterVouchers",
                    id: "ImgNotesWithMasterVouchers",
                    checked: false
                },
                {
                    label: "Show Party Dash Board after Selecting Party in Vouchers",
                    type: "text",
                    placeholder: "Y/N",
                    name: "showPartyDashBoard",
                    id: "showPartyDashBoard"
                },
                {
                    label: "Bank Reconciliation",
                    type: "check-box",
                    name: "bankReconciliation",
                    id: "bankReconciliation",
                    checked: false
                },
                {
                    label: "Maintain Bank Instrument Details",
                    type: "check-box",
                    name: "bankInstrumentDetails",
                    id: "bankInstrumentDetails",
                    checked: false
                },
                {
                    label: "Post Dated Cheques in Payment/Receipt Vouchers",
                    type: "check-box",
                    name: "postDatedVouchers",
                    id: "postDatedVouchers",
                    checked: false
                },
                {
                    label: "Cheque Printing",
                    type: "check-box",
                    name: "chequePrinting",
                    id: "chequePrinting",
                    checked: false
                }
            ]
        }
    }

    handleChange = event => {
        console.log(event)
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleCheck = event => {
        console.log(event)
        this.setState({
            [event.target.name]:event.target.checked
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container mt-4 mb-4">
                <h2 className="text-center mt-4 mb-5">Accounts</h2>
                <form className="accountsForm" onSubmit={this.formSubmit}>
                    {
                        this.state.inputLabels.map((val, index) => {
                            console.log(val);
                            if (val.type === "check-box") {
                                return (
                                    <div className="row form-group mb-0" key={'inputLabels_' + index}>
                                        <div className="col-2 col-md-2 p-0">
                                            <Checkbox 
                                                name={val.name}
                                                id={val.id}
                                                checked={this.state.checked}
                                                handleCheck={this.handleCheck}
                                            />
                                        </div>
                                        <div className="col-10 col-md-10 p-0">
                                            {val.label}
                                        </div>
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

                    <ModalComponent />

                </form>
            </div>
        )
    }
}

export default Accounts