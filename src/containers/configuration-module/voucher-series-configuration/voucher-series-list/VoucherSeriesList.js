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
          label: "Voucher Management",
          buttonLink: ''
        },
        {
          label: "Bulk Voucher Numbering",
          buttonLink: ''
        },
      ]
    }
  }

  accordionView = (index) => {
    let voucherList = [...this.state.voucherList];
    voucherList[index].open = !voucherList[index].open;
    this.setState({
      voucherList: voucherList,
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="mt-3 text-center">Select the Voucher Series to Configure</h2>
        <div className="container mt-4">
          <div className="row mb-4 containerBorder">
            <div className="col-12 col-md-4 mb-4 voucherListBox containerStyle">
              {
                this.state.voucherList.map((val, index) => (
                  <div key={'accordion' + index}>
                    <button className="btn btn-link mr-1" onClick={() => this.accordionView(index)}>{!val.open ? "+" : "-"} {val.label} </button>
                    <div className={(!val.open ? 'd-none' : '')}>
                    <div className="mb-2">
                      <Link className="ml-4 p-0 btn btn-link" to="">
                        {val.accordianText}
                      </Link>
                      </div>
                    </div>
                    {index < this.state.voucherList.length - 1 && <hr />}
                  </div>
                ))
              }
            </div>
            <div className="col-12 col-md-8">
              <div className="row">
                {
                  this.state.buttonList.map((val, index) => (
                    <div className="col-md-6 mobileView" key={'buttons' + index}>
                        {
                          val.buttonLink.startsWith('http') ?
                            <a className="btn btn-primary divWidth buttonAlign" target={val.target} href={val.buttonLink}>{val.label}</a> :
                            <Link className="btn btn-primary divWidth buttonAlign" to={val.buttonLink}>{val.label}</Link>
                        }
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default VoucherSeriesList