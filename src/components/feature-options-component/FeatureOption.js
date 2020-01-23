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
                    link: '/regional-settings',
                },
                {
                    btnTitle: 'General',
                    link: '/general',
                },
                // {
                //     btnTitle: 'Display Settings',
                //     link: '/display-settings',
                // },
                {
                    btnTitle: 'Accounts',
                    link: '/accounts',
                },
                {
                    btnTitle: 'Inventory',
                    link: '/inventory',
                },
                {
                    btnTitle: 'GST/VAT',
                    link: '/gst-vat',
                },
                {
                    btnTitle: 'Excise',
                    link: '/excise',
                },
                {
                    btnTitle: 'Service Tax',
                    link: '/service-tax',
                },
                {
                    btnTitle: 'TDS/TCS',
                    link: '/tds-tcs',
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
                                        val.link.startsWith('http') ?
                                            <a className="optionBtns btn btn-primary" target={val.target} href={val.link}>{val.btnTitle}</a> :
                                            <Link className="optionBtns btn btn-primary" to={val.link}>{val.btnTitle}</Link>
                                    }
                                </div>
                            </div>
                        ))
                    }
                    <div className="row btnContainer flex-sm-row-reverse mt-3 optionBtns">
                        {/* <div className="mt-3 col-12 col-md-4 p-0">
                            <Link to='/trade-specific-configuration'><button type="submit" className="btn btn-primary optionBtns">Trade Specific Configuration</button></Link>
                        </div> */}
                        <div className="mt-3 col-sm-12 col-md-3 p-0 align-self-center exit">
                            <Link to='/'><button type="submit" className="btn btn-primary optionBtns">Exit</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FeatureOption