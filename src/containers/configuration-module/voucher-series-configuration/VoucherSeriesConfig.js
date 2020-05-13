import React from 'react';
import VoucherSeriesList from './voucher-series-list/VoucherSeriesList';
import VoucherSeriesButton from './voucher-series-buttons/VoucherListButton';

export const VoucherSeriesConfig = () => {
    return (

        <div className="container">
            <h2 className="mt-4 mb-4 text-center">Select the Voucher Series to Configure</h2>
            <div className="row containerBorder">
                <div className="col-12 col-md-4 mb-4 containerStyle">
                    <VoucherSeriesList />

                </div>
                <div className="col-12 col-md-8">
                    <div className="row">
                        <VoucherSeriesButton />
                    </div>
                </div>
            </div>
        </div>
    )
}