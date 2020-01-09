import React from 'react';
import '../feature-options-component/FeatureOption.css';
import { Link } from 'react-router-dom';

class FeatureOption extends React.Component {
    render() {
        return (
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

                    <div className="row btnContainer flex-sm-row-reverse mt-3 optionBtns">
                        <div className="mt-3 col-12 col-md-4 p-0">
                            <button type="submit" className="btn btn-primary optionBtns">Trade Specific Configuration</button>
                        </div>
                        <div className="mt-3 col-12 col-md-4 align-self-center exit">
                            <Link to='/'><button type="submit" className="btn btn-primary optionBtns">Exit</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default FeatureOption