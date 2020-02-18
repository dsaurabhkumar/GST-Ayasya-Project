import React from 'react';
import Checkbox from '../formComponents/checkbox/Checkbox';

class MaintainVoucherMaster extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            formThree: [
                {
                    type: "check-box-form-three",
                    label: "check-box-click-details",
                    title: "Option for Images and Notes",
                    output: [],
                    options: [
                        {
                            name: "Maintain Image with Account Master",
                            value: "maintainImageActMaster",
                        },
                        {
                            name: "Maintain Notes with Account Master",
                            value: "maintainNotesActMaster",
                        },
                        {
                            name: "Show Account Notes in Data Entry",
                            value: "showActDataEntry",
                        },
                        {
                            name: "Maintain Image with Accounting Vouchers",
                            value: "maintainImageActVouchers",
                        },
                        {
                            name: "Maintain Notes with Accounting Vouchers",
                            value: "maintainNotesActVouchers",
                        },
                    ]
                }
            ],
        }
    }

    handleCheckFormThree = (...args) => {
        const [formIndex, valueIndex, value, checked] = args;

        // State copy
        const formInputGroup = [...this.state.formThree];

        // React to target object or array
        const formCheckGroup = { ...this.state.formThree[formIndex] };
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
            formThree: formInputGroup
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.formThree.map((val, index) => (
                        <div key={"checkbox_parent_" + index}>
                            <p className="formTitle">{val.title}</p>
                            {
                                val.type === "check-box-form-three" && val.options.map(
                                    (fval, findex) => (
                                        <div className="row form-group mb-0" key={"checkbox_child_" + index + "_" + findex}>
                                            <div className="col-2 col-md-2 p-0">
                                                <Checkbox
                                                    name={fval.name}
                                                    value={fval.value}
                                                    checked={fval.checked}
                                                    handleCheck={(event) => this.handleCheckFormThree(index, findex, fval.value, event.target.checked)}
                                                />
                                            </div>
                                            <div className="col-10 col-md-10 p-0">
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
            </div>
        )
    }
}

export default MaintainVoucherMaster