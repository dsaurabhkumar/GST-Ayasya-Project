import React from 'react';
import Checkbox from '../formComponents/checkbox/Checkbox';


class BillByBillDetailsForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            formOne: [
                {
                    type: "check-box-form-one",
                    label: "check-box-click-details",
                    title: "Bill Reference Group",
                    output: [],
                    options: [
                        {
                            name: "Enable Grouping of Reference",
                            value: "enableGroupingRef",
                        },
                        {
                            name: "Enforce full amount allocation to References",
                            value: "enforceFullAmtAllocation",
                        },
                        {
                            name: "Show Pending References till Voucher Date only",
                            value: "showPendingRefOnly",
                        },
                        {
                            name: "Enable Bill Reference Narration",
                            value: "enableBillRefNarration",
                        },
                        {
                            name: "Enable Bill by Bill for all Accounts",
                            value: "enableBillForAllAccts",
                        },
                        {
                            name: "Auto Create Party References in Sales Voucher",
                            value: "autoCreatePartyRefSaleVoucher",
                        },
                        {
                            name: "Auto Create Party References in Purchase Voucher",
                            value: "autoCreatePartyRefPurchaseVoucher",
                        },

                    ]
                },

            ],
        }
    }

    handleCheckForm = (...args) => {
        const [formIndex, valueIndex, value, checked] = args;

        // State copy
        const formInputGroup = [...this.state.formOne];

        // React to target object or array
        const formCheckGroup = { ...this.state.formOne[formIndex] };
        const formOutputArray = [...formCheckGroup.output];

        //Update check values
        formCheckGroup.options[valueIndex].checked = checked;

        //Update output
        if (checked) {
            formOutputArray.push(value);
        } else {
            formOutputArray.splice(formOutputArray.findIndex(val => val === value), 1);
        }
        formInputGroup[formIndex].output = formOutputArray;
        console.log(formInputGroup)

        //Update state
        this.setState({
            formOne: formInputGroup
        })
    }

    submitFormData = (e) => {
        this.props.submittedData(this.state);
        this.props.closeModal();
    }

    render() {
        return (
            <form className="popup-check-box-border" onSubmit={this.submitFormData}>
                {
                    this.state.formOne.map((val, index) => (
                        <div key={"checkbox_parent_" + index}>
                            <p className="formTitle">{val.title}</p>
                            {
                                val.type === "check-box-form-one" && val.options.map(
                                    (fval, findex) => (
                                        <div className="form-group mb-0 accountCheckbox" key={"checkbox_child_" + index + "_" + findex}>
                                            
                                                <Checkbox
                                                    name={fval.name}
                                                    value={fval.value}
                                                    checked={fval.checked}
                                                    handleCheck={(event) => this.handleCheckForm(index, findex, fval.value, event.target.checked)}
                                                />
                                            
                                            <div className="divWidth checkboxLabelAlignment pr-2 p-0">
                                                {fval.name}
                                            </div>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    ))
                }
                <div className="row btnContainer flex-sm-row-reverse mt-3 optionBtns">
                    <div className="mt-3 col-12 col-md-4 p-0">
                        <button type="submit" className="btn btn-primary optionBtns">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default BillByBillDetailsForm