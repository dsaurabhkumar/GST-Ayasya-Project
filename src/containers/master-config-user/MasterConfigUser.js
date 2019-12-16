import React from 'react';

class MasterConfigUser extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"></input>
                    <label className="form-check-label" htmlFor="inlineRadio1">Not Required</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"></input>
                    <label className="form-check-label" htmlFor="inlineRadio2">Copy Masters and Config</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"></input>
                    <label className="form-check-label" htmlFor="inlineRadio3">Copy Masters, Config and Users</label>
                </div>
            </React.Fragment>
        )
    }
}
export default MasterConfigUser