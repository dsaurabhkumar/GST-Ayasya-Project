import React from 'react';
import './CurrencyInfo.css';

export default class CurrencyInfo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="currency">
                    <span>Currency Information</span>
                </div>
                <div className="currencyInfo">
                    <div className="form-group">
                        <label htmlFor="currencySymbol">Currency Symbol:</label>
                        <input type="text" className="form-control" name="currencySymbol" id="currencySymbol" placeholder="Rs., $ etc." onChange={this.changeHandler}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="currencyString">Currency String:</label>
                        <input type="text" className="form-control" name="currencyString" id="currencyString" placeholder="Rupees, Dollar etc." onChange={this.changeHandler}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="currencySubString">Currency Sub-String:</label>
                        <input type="text" className="form-control" name="currencySubString" id="currencySubString" placeholder="Paisa, cent etc." onChange={this.changeHandler}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="currencyFont">Currency Font:</label>
                        <input type="text" className="form-control" name="currencyFont" id="currencyFont" onChange={this.changeHandler}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="currencyCharacter">Currency Character:</label>
                        <input type="text" className="form-control" name="currencyCharacter" id="currencyCharacter" onChange={this.changeHandler}></input>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}