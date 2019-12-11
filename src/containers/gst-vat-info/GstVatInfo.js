import React from 'react';
import './GstVatInfo.css';

export default class GstVatInfo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="gstVat">
                    <span>GST/VAT Information</span>
                </div>
                <div className="gstVatInfo">
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="enableGstVat">Enable GST/VAT:</label>
                            <input type="text" className="form-control" name="enableGstVat" id="enableGstVat" placeholder="Y/N" onChange={this.changeHandler}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="type">Type:</label>
                            <input type="text" className="form-control" name="type" id="type" placeholder="GST/VAT" onChange={this.changeHandler}></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="enableCess">Enable Cess:</label>
                        <input type="text" className="form-control" name="enableCess" id="enableCess" placeholder="Y/N" onChange={this.changeHandler}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="gstIn">GSTIN:</label>
                        <input type="text" className="form-control" name="gstIn" id="gstIn" placeholder="GSTIN NO." onChange={this.changeHandler}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="typeOfDealer">Type of Dealer:</label>
                        <input type="text" className="form-control" name="typeOfDealer" id="typeOfDealer" placeholder="Regular/Temporary" onChange={this.changeHandler}></input>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="defaultTaxRate1">Default Tax Rate-1:</label>
                            <input type="text" className="form-control" name="defaultTaxRate1" id="defaultTaxRate1" placeholder="0.00" onChange={this.changeHandler}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="defaultTaxRate2">Default Tax Rate-2:</label>
                            <input type="text" className="form-control" name="defaultTaxRate2" id="defaultTaxRate2" placeholder="0.00" onChange={this.changeHandler}></input>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}