import React from 'react';

const MasterConfigUser = props => {
    return <React.Fragment> {
        props.options.map((val, index) => (
            <div className="form-check form-check-inline" key={index}>
                <input
                    id={"inlineRadio" + index}
                    className="form-check-input"
                    type="radio"
                    name="master_config_status"
                    value={val.key}
                    onChange={props.changeHandler}
                />
                <label className="form-check-label" htmlFor={"inlineRadio" + index}>{val.value}</label>
            </div>
        ))
    }
    </React.Fragment>
}
export default MasterConfigUser