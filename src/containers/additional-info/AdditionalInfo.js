import React from 'react';
import './AdditionalInfo.css';
import CurrencyInfo from '../../components/Forms/currency-info/CurrencyInfo';
import GstVatInfo from '../../components/Forms/gst-vat-info/GstVatInfo';

export default class AdditionalInfo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="row m-0 mt-3 mb-3">
                    <div className="col-md-6 mobView">
                        <CurrencyInfo changeHandler={event => this.props.changeHandler('currencyInfo', event)}/>
                    </div>
                    <div className="col-md-6 mobView">
                        <GstVatInfo changeHandler={event => this.props.changeHandler('gstVatInfo', event)}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};
