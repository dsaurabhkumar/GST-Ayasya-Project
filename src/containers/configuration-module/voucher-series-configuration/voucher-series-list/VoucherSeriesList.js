import React from 'react';
import './VoucherSeriesList.css';
import { Link } from 'react-router-dom';


class VoucherSeriesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      voucherList: [
        {
          label: 'Sales',
          accordianText: 'Main',
        },
        {
          label: 'Purchase',
          accordianText: 'Main',
        },
        {
          label: 'Sales Return(Cr.Note)',
          accordianText: 'Main',
        },
        {
          label: 'Purchase Return(Dr.Note)',
          accordianText: 'Main',
        },
        {
          label: 'Payment',
          accordianText: 'Main',
        },
        {
          label: 'Receipt',
          accordianText: 'Main',
        },
        {
          label: 'Journal',
          accordianText: 'Main',
        },
        {
          label: 'Contra',
          accordianText: 'Main',
        },
        {
          label: 'Dr.Note(w/o Items)',
          accordianText: 'Main',
        },
        {
          label: 'Cr.Note(w/o Items)',
          accordianText: 'Main',
        },
        {
          label: 'Stock Transfer',
          accordianText: 'Main',
        },
        {
          label: 'Production',
          accordianText: 'Main',
        },
        {
          label: 'Unassemble',
          accordianText: 'Main',
        },
        {
          label: 'Stock Journal',
          accordianText: 'Main',
        },
        {
          label: 'Mat. Issued to Party',
          accordianText: 'Main',
        },
        {
          label: 'Mat. Rcvd. from Party',
          accordianText: 'Main',
        },

      ],

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

  viewMore = (index) => {
    let voucherList = [...this.state.voucherList];
    voucherList[index].open = !voucherList[index].open;
    this.setState({
      voucherList: voucherList,
    })
  }

  render() {
    return (
      <div className="container containerStyle mb-3 mt-3">
        <h6 className="mt-2">Select the Voucher Series to Configure</h6>
        <div className="row voucherListRow">
          <div className="col-md-7 mb-3 voucherListBox">
            {
              this.state.voucherList.map((val, index) => (
                <div key={'accordion' + index}>
                  <button className="btn btn-link" onClick={() => this.viewMore(index)}>{!val.open ? "+" : "-"}</button>
                  {val.label}
                  <div className={(!val.open ? 'd-none' : '')}>
                    <Link className="ml-5 p-0" to="">
                      {val.accordianText}
                    </Link>
                  </div>
                  {index < this.state.voucherList.length - 1 && <hr />}
                </div>
              ))
            }
          </div>

          <div className="col-md-5">
            {
              this.state.buttonList.map((val, index) => (
                <div key={'buttons' + index}>
                  <div className="mt-2">
                    {
                      val.buttonLink.startsWith('http') ?
                        <a className="btn btn-primary divWidth buttonAlign" target={val.target} href={val.buttonLink}>{val.label}</a> :
                        <Link className="btn btn-primary divWidth buttonAlign" to={val.buttonLink}>{val.label}</Link>
                    }
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>
    )
  }
}
export default VoucherSeriesList