import React from 'react';

const MasterConfigUser = props => {
    return <React.Fragment>
        <div className="form-check form-check-inline">
            <input
                id="inlineRadio1"
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions" 
                value={props.inlineRadioOptions}
                onChange={props.changeHandler}
                checked={props.active}
                />
            <label className="form-check-label" htmlFor="inlineRadio1">Not Required</label>
        </div>
        <div className="form-check form-check-inline">
            <input
                id="inlineRadio2"
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions" 
                value={props.inlineRadioOptions}
                onChange={props.changeHandler}
                checked={props.active}
                />
            <label className="form-check-label" htmlFor="inlineRadio2">Copy Masters and Config</label>
        </div>
        <div className="form-check form-check-inline">
            <input
                id="inlineRadio3"
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions" 
                value={props.inlineRadioOptions}
                onChange={props.changeHandler}
                checked={props.active}
                />
            <label className="form-check-label" htmlFor="inlineRadio3">Copy Masters, Config and Users</label>
        </div>
    </React.Fragment>
}
export default MasterConfigUser