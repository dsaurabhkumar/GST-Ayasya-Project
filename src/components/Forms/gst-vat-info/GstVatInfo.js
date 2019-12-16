import React from 'react';
import './GstVatInfo.css';

const GstVatInfo = props => {
    return <React.Fragment>
        <div className="gstVat">
            <span>GST/VAT Information</span>
        </div>
        <div className="gstVatInfo">
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="enableGstVat">Enable GST/VAT:</label>
                    <input 
                        id="enableGstVat" 
                        className="form-control" 
                        type="text" 
                        name="enableGstVat" 
                        value={props.enableGstVat}
                        placeholder="Y/N" 
                        onChange={props.changeHandler} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="type">Type:</label>
                    <input 
                        id="type" 
                        className="form-control" 
                        type="text" 
                        name="type" 
                        value={props.type}
                        placeholder="GST/VAT" 
                        onChange={props.changeHandler} />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="enableCess">Enable Cess:</label>
                <input 
                    id="enableCess" 
                    className="form-control" 
                    type="text" 
                    name="enableCess" 
                    value={props.enableCess}
                    placeholder="Y/N" 
                    onChange={props.changeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="gstIn">GSTIN:</label>
                <input 
                    id="gstIn" 
                    className="form-control" 
                    type="text" 
                    name="gstIn" 
                    value={props.gstIn}
                    placeholder="GSTIN NO." 
                    onChange={props.changeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="typeOfDealer">Type of Dealer:</label>
                <input 
                    id="typeOfDealer" 
                    className="form-control" 
                    type="text" 
                    name="typeOfDealer" 
                    value={props.typeOfDealer}
                    placeholder="Regular/Temporary" 
                    onChange={props.changeHandler} />
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="defaultTaxRate1">Default Tax Rate-1:</label>
                    <input 
                        id="defaultTaxRate1" 
                        className="form-control" 
                        type="text" 
                        name="defaultTaxRate1" 
                        value={props.defaultTaxRate1}
                        placeholder="0.00" 
                        onChange={props.changeHandler} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="defaultTaxRate2">Default Tax Rate-2:</label>
                    <input 
                        id="defaultTaxRate2" 
                        className="form-control" 
                        type="text" 
                        name="defaultTaxRate2" 
                        value={props.defaultTaxRate2}
                        placeholder="0.00" 
                        onChange={props.changeHandler} />
                </div>
            </div>
        </div>
    </React.Fragment>
}
export default GstVatInfo;