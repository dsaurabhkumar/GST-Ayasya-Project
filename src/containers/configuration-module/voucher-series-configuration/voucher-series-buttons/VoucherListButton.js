import React from 'react';
import './VoucherListButton.css';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Forms/formComponents/button/Button';


class VoucherListButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonList: [
                {
                    label: "Add New",
                    buttonLink: ''
                },
                {
                    label: "Voucher Numbering",
                    buttonLink: ''
                },
                {
                    label: "Modify Series",
                    buttonLink: ''
                },
                {
                    label: "Voucher Configuration",
                    buttonLink: ''
                },
                {
                    label: "Delete Series",
                    buttonLink: ''
                },
                {
                    label: "Optional Fields Printing",
                    buttonLink: ''
                },
                {
                    label: "Quit",
                    buttonLink: "/"
                },
                {
                    label: "Masters Control",
                    buttonLink: ''
                },
                {
                    label: "Multiple Series Creation",
                    buttonLink: ''
                },
                {
                    label: "Voucher Series Group Management",
                    buttonLink: ''
                },
                {
                    label: "Bulk Voucher Numbering",
                    buttonLink: ''
                },
            ]
        }
    }

    render() {
        return (
            <Button>
                {
                    this.state.buttonList.map((val, index) => (
                        <span className="col-12 col-md-6 mobileView" key={'buttons' + index}>
                            {
                                val.buttonLink.startsWith('http') ?
                                    <a className="btn btn-primary divWidth buttonAlign" target={val.target} href={val.buttonLink}>{val.label}</a> :
                                    <Link className="btn btn-primary divWidth buttonAlign" to={val.buttonLink}>{val.label}</Link>
                            }
                        </span>
                    ))
                }
            </Button>
        )
    }
}
export default VoucherListButton