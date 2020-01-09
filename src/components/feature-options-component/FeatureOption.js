import React from 'react';
import '../feature-options-component/FeatureOption.css';
import { Link } from 'react-router-dom';

function FeatureOption() {
    return (
        <React.Fragment>
            <div className="mt-3 container">
                <h3 className="text-center"><span>Feature/Options</span></h3>
                <p className="text-center mt-3 mb-5">From here you can configure the Features / Options available in Ayasya GST. Please choose the section to be configured from the buttons provided below</p>
                <div className="featureBtns flex-container mb-4">
                    <div className="col-12 col-md-3">
                        <button className="optionBtns btn btn-primary">Display Settings</button>
                    </div>
                    <div className="col-12 col-md-3">
                        <button className="optionBtns btn btn-primary">General</button>
                    </div>
                    <div className="col-12 col-md-3">
                        <button className="optionBtns btn btn-primary">Regional Settings</button>
                    </div>
                    <div className="col-12 col-md-3">
                        <button className="optionBtns btn btn-primary">Accounts</button>
                    </div>
                    <div className="col-12 col-md-3">
                        <button className="optionBtns btn btn-primary">Inventory</button>
                    </div>
                    <div className="col-12 col-md-3">
                        <button className="optionBtns btn btn-primary">GST/VAT</button>
                    </div>
                    <div className="col-12 col-md-3">
                        <button className="optionBtns btn btn-primary">Excise</button>
                    </div>
                    <div className="col-12 col-md-3">
                        <button className="optionBtns btn btn-primary">Service Tax</button>
                    </div>
                    <div className="col-12 col-md-3">
                        <button className="optionBtns btn btn-primary">TDS/TCS</button>
                    </div>
                    <div className="col-12 col-md-3">
                        <Link to="/"><button className="optionBtns btn btn-primary">EXIT</button></Link>
                    </div>
                    <div className="col-12 mt-5 mb-3">
                        <button className="optionBtns btn btn-primary">Trade Specific Configuration</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default FeatureOption