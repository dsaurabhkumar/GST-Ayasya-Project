import React from 'react';
import Checkbox from '../formComponents/checkbox/Checkbox';


class CostCentersOptions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formTwo: [
                {
                    type: "check-box-form-two",
                    label: "check-box-click-details",
                    title: "Option for Multiple Alias",
                    output: [],
                    options: [
                        {
                            name: "Specify Different Address Details with Multiple Alias",
                            value: "specifyMultipleAlias",
                        },
                    ]
                }
            ],
        }
    }


    handleCheckFormTwo = (...args) => {
        const [formIndex, valueIndex, value, checked] = args;

        // State copy
        const formInputGroup = [...this.state.formTwo];

        // React to target object or array
        const formCheckGroup = { ...this.state.formTwo[formIndex] };
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
            formTwo: formInputGroup
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
                    this.state.formTwo.map((val, index) => (
                        <div key={"checkbox_parent_" + index}>
                            <p className="formTitle">{val.title}</p>
                            {
                                val.type === "check-box-form-two" && val.options.map(
                                    (fval, findex) => (
                                        <div className="row form-group mb-0" key={"checkbox_child_" + index + "_" + findex}>
                                            <div className="col-2 col-md-2 p-0">
                                                <Checkbox
                                                    name={fval.name}
                                                    value={fval.value}
                                                    checked={fval.checked}
                                                    handleCheck={(event) => this.handleCheckFormTwo(index, findex, fval.value, event.target.checked)}
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
            </form>
        )
    }
}

export default CostCentersOptions
