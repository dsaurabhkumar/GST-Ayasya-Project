import React from 'react';
import './AdditionalInfo.css';
import CurrencyInfo from '../currency-info/CurrencyInfo';
import GstVatInfo from '../gst-vat-info/GstVatInfo';

function AdditionalInfo() {
    return (
        <React.Fragment>
            <div className="row m-0 mt-3 mb-3">
                <div className="col-md-6 mobView">
                    <CurrencyInfo></CurrencyInfo>
                </div>
                <div className="col-md-6 mobView">
                    <GstVatInfo></GstVatInfo>
                </div>
            </div>

        </React.Fragment>
    )
}
export default AdditionalInfo