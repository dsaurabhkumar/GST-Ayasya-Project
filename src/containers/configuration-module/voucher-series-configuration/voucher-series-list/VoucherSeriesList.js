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
      </React.Fragment>
    )
  }
}
export default VoucherSeriesList