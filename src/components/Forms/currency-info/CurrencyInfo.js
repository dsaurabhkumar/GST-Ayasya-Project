import React from 'react';
import './CurrencyInfo.css';

const CurrencyInfo = props => {
    return <React.Fragment>
        <div className="currency">
            <span>Currency Information</span>
        </div>
        <div className="currencyInfo">
            <div className="form-group">
                <label htmlFor="currencySymbol">Currency Symbol:</label>
                <input 
                    id="currencySymbol" 
                    className="form-control" 
                    type="text" 
                    name="currencySymbol" 
                    value={props.currencySymbol} 
                    placeholder="Rs., $ etc." 
                    onChange={props.changeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="currencyString">Currency String:</label>
                <input 
                    id="currencyString" 
                    className="form-control" 
                    type="text" 
                    name="currencyString" 
                    value={props.currencyString} 
                    placeholder="Rupees, Dollar etc." 
                    onChange={props.changeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="currencySubString">Currency Sub-String:</label>
                <input 
                    id="currencySubString" 
                    className="form-control" 
                    type="text" 
                    name="currencySubString" 
                    value={props.currencySubString} 
                    placeholder="Paisa, cent etc." 
                    onChange={props.changeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="currencyFont">Currency Font:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="currencyFont" 
                    value={props.currencyFont} 
                    id="currencyFont" 
                    onChange={props.changeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="currencyCharacter">Currency Character:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="currencyCharacter" 
                    value={props.currencyCharacter} 
                    id="currencyCharacter" 
                    onChange={props.changeHandler} />
            </div>
        </div>
    </React.Fragment>
}
export default CurrencyInfo;
