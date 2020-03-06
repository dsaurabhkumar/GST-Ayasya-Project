import React from 'react';
import InputText from '../formComponents/input-text/InputText';
import Radio from '../formComponents/radio/Radio';
import Checkbox from '../formComponents/checkbox/Checkbox';

class SalesmanBrokerReport extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            formFour: [
                {
                    label: "Salesman / Broker",
                    type: "text",
                    name: "salesman-broker",
                    id: "salesman-broker"
                },
                {
                    label: "Commission / Brokerage",
                    type: "text",
                    name: "commission-brokerage",
                    id: "commission-brokerage"
                },
                {
                    type: "radio",
                    options: [
                        {
                            key: "voucher-level",
                            value: "Voucher Level",
                            checked: ''
                        },
                        {
                            key: "item-level",
                            value: "Item Level",
                            checked: ''
                        }
                    ]
                },
                {
                    type: "check-box-form-four",
                    label: "check-box-click-details",
                    output: [],
                    options: [
                        {
                            name: "Sales",
                            value: "sales",
                        },
                        {
                            name: "Purchase",
                            value: "purchase",
                        },
                    ]
                },
                {
                    type: "check-box-four",
                    label: "check-box-click-details",
                    output: [],
                    options: [
                        {
                            name: "Payment",
                            value: "payment",
                        },
                        {
                            name: "Receipt",
                            value: "receipt",
                        },
                        {
                            name: "Enable Commission / Brokerage in all Accounts (except Cash / Bank)",
                            value: "enableCommissionBrokerage",
                            disabled: true
                        }
                    ]
                },
                {
                    label: "Specify Default Commission / Brokerage",
                    type: "text-boolean",
                    name: "default-commission-brokerage",
                    id: "default-commission-brokerage"
                },
                {
                    type: "radio-1",
                    options: [
                        {
                            key: "salesman-broker",
                            value: "Salesman / Broker Master",
                            checked: ''
                        },
                        {
                            key: "party-master",
                            value: "Party Master",
                            checked: ''
                        },
                        {
                            key: "as-specified-below",
                            value: "As Specified Below",
                            checked: ''
                        }
                    ]
                },
                {
                    type: "radio-2",
                    options: [
                        {
                            key: "percentage",
                            value: "Percentage",
                            checked: ''
                        },
                        {
                            key: "lumpsum-amount",
                            value: "Lumpsum Amount",
                            checked: ''
                        },
                        {
                            key: "per-main-qty",
                            value: "Per Main Qty.",
                            checked: ''
                        }
                        ,
                        {
                            key: "per-alt-qty",
                            value: "Per Alt. Qty.",
                            checked: ''
                        }
                        ,
                        {
                            key: "per-packing-qty",
                            value: "Per Packing Qty.",
                            checked: ''
                        }
                    ]
                },
                {
                    type: "check-box-four-1",
                    label: "check-box-click-details",
                    output: [],
                    options: [
                        {
                            name: "Seperate Commission / Brokerage in Each Voucher",
                            value: "seperate-commission",
                        },
                        {
                            name: "Post Commission / Brokerage in Accounts",
                            value: "post-commission",
                        }
                    ]
                },
            ]
        }
    }

    handleRadioChange = (event) => {
        this.setState({
            options: event.target.value
        })
    }

    handleCheckFormFour = (...args) => {
        const [formIndex, valueIndex, value, checked] = args;

        // State copy
        const formInputGroup = [...this.state.formFour];

        // React to target object or array
        const formCheckGroup = { ...this.state.formFour[formIndex] };
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
            formFour: formInputGroup
        })
    }

    submitFormData = (e) => {
        this.props.submittedData(this.state);
        this.props.closeModal();
    }

    render() {
        return (
            <form onSubmit={this.submitFormData}>
                {
                    this.state.formFour.map((val, index) => {
                        if (val.type === "text") {
                            return (
                                <div className="row form-group" key={"input-text" + index}>
                                    <div className="col-md-6">
                                        {val.label}
                                    </div>
                                    <div className="col-md-6 textFieldAlignment">
                                        <InputText
                                            name={val.name}
                                            value={val.value}
                                            checked={val.checked}
                                            handleChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            )
                        } else if (val.type === "radio") {
                            return (
                                <div className="" key={"radio_parent" + index}>
                                    {
                                        val.options.map((radioVal, radioIndex) =>
                                            (
                                                <div className="form-check form-check-inline" key={"radio_child" + index + "-" + radioIndex}>
                                                    <div className="radioLabel">
                                                        {radioVal.value}
                                                    </div>
                                                    <div>
                                                        <Radio
                                                            name={radioVal.name}
                                                            key={radioVal.key}
                                                            value={radioVal.value}
                                                            checked={this.state.formFour.options}
                                                            handleChange={this.handleRadioChange}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        )
                                    }

                                </div>
                            )
                        } else if (val.type === "check-box-form-four") {
                            return (this.state.formFour.map((val, index) => (<div key={"checkbox_parent_" + index}>
                                {
                                    val.type === "check-box-form-four" && val.options.map(
                                        (fval, findex) => (
                                            <div className="form-check form-check-inline mt-4" key={"checkbox_child_" + index + "_" + findex}>
                                                <div>
                                                    {fval.name}
                                                </div>
                                                <div className="checkbox-alignment">
                                                    <Checkbox
                                                        name={fval.name}
                                                        value={fval.value}
                                                        checked={fval.checked}
                                                        handleCheck={(event) => this.handleCheckFormFour(index, findex, fval.value, event.target.checked)}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                            ))
                            )
                        } else if (val.type === "check-box-four") {
                            return (this.state.formFour.map((val, index) => (<div key={"checkbox_parent_" + index}>
                                {
                                    val.type === "check-box-four" && val.options.map(
                                        (fval, findex) => (
                                            <div className="form-check form-check-inline mt-4" key={"checkbox_child_" + index + "_" + findex}>
                                                <div>
                                                    {fval.name}
                                                </div>
                                                <div className="checkbox-alignment">
                                                    <Checkbox
                                                        name={fval.name}
                                                        value={fval.value}
                                                        checked={fval.checked}
                                                        handleCheck={(event) => this.handleCheckFormFour(index, findex, fval.value, event.target.checked)}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                            ))
                            )
                        } else if (val.type === "text-boolean") {
                            return (
                                <div className="row form-group mt-4" key={"input-text" + index}>
                                    <div className="col-md-8">
                                        {val.label}
                                    </div>
                                    <div className="col-md-4 textFieldAlignment">
                                        <InputText
                                            name={val.name}
                                            value={val.value}
                                            checked={val.checked}
                                            handleChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            )
                        } else if (val.type === "radio-1") {
                            return (
                                <div className="" key={"radio_parent" + index}>
                                    {
                                        val.options.map((radioVal, radioIndex) =>
                                            (
                                                <div className="form-check form-check-inline" key={"radio_child" + index + "-" + radioIndex}>
                                                    <div className="radioLabel">
                                                        {radioVal.value}
                                                    </div>
                                                    <div>
                                                        <Radio
                                                            name={radioVal.name}
                                                            key={radioVal.key}
                                                            value={radioVal.value}
                                                            checked={this.state.formFour.options}
                                                            handleChange={this.handleRadioChange}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        )
                                    }

                                </div>
                            )
                        } else if (val.type === "radio-2") {
                            return (
                                <div className="mt-4" key={"radio_parent" + index}>
                                    {
                                        val.options.map((radioVal, radioIndex) =>
                                            (
                                                <div className="form-check form-check-inline" key={"radio_child" + index + "-" + radioIndex}>
                                                    <div className="radioLabel">
                                                        {radioVal.value}
                                                    </div>
                                                    <div>
                                                        <Radio
                                                            name={radioVal.name}
                                                            key={radioVal.key}
                                                            value={radioVal.value}
                                                            checked={this.state.formFour.options}
                                                            handleChange={this.handleRadioChange}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        )
                                    }

                                </div>
                            )
                        } else if (val.type === "check-box-four-1") {
                            return (this.state.formFour.map((val, index) => (<div key={"checkbox_parent_" + index}>
                                {
                                    val.type === "check-box-four-1" && val.options.map(
                                        (fval, findex) => (
                                            <div className="form-check form-check-inline mt-4" key={"checkbox_child_" + index + "_" + findex}>
                                                <div>
                                                    {fval.name}
                                                </div>
                                                <div className="checkbox-alignment">
                                                    <Checkbox
                                                        name={fval.name}
                                                        value={fval.value}
                                                        checked={fval.checked}
                                                        handleCheck={(event) => this.handleCheckFormFour(index, findex, fval.value, event.target.checked)}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                            ))
                            )
                        }
                    })
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

export default SalesmanBrokerReport