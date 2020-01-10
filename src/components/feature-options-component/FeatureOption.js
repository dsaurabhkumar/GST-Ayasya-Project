import React from 'react';
import '../feature-options-component/FeatureOption.css';
import { Link } from 'react-router-dom';

class FeatureOption extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            btnText: [
                {
                    btnTitle: 'Reginal Settings',
                    link: '',
                },
                {
                    btnTitle: 'General',
                    link: '',
                },
                {
                    btnTitle: 'Display Settings',
                    link: '',
                },
                {
                    btnTitle: 'Accounts',
                    link: '',
                },
                {
                    btnTitle: 'Inventory',
                    link: '',
                },
                {
                    btnTitle: 'GST/VAT',
                    link: '',
                },
                {
                    btnTitle: 'Excise',
                    link: '',
                },
                {
                    btnTitle: 'Service Tax',
                    link: '',
                },
                {
                    btnTitle: 'TDS/TCS',
                    link: '',
                },
            ]
        }
    }

    render() {
        return (
            <div className="mt-3 container">
                <h3 className="text-center"><span>Feature/Options</span></h3>
                <p className="text-center mt-3 mb-5">From here you can configure the Features / Options available in Ayasya GST. Please choose the section to be configured from the buttons provided below</p>
                <div className="featureBtns flex-container mb-4">
                    {
                        this.state.btnText.map((val, index) => (
                            <div key={'btns_' + index} className="col-12 col-md-3">
                                <div>
                                {
                                    val.link.startsWith('http')?
                                    <a className="optionBtns btn btn-primary" target={val.target} href={val.link}>{val.btnTitle}</a>:
                                    <Link className="optionBtns btn btn-primary" to={val.link}>{val.btnTitle}</Link>
                                }
                                </div>
                            </div>
                        ))
                    }
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