import React from 'react';
import '../nav-bar/NavBar.css';
import '../nav-bar/NavRelated';
import logo from '../../assets/logo/_blue_text.png';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <Link className="" to="/"><img className="navbar-brand logo" src={logo}></img></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i className="fas fa-align-justify hambergerMenu"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="basicExampleNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown multi-level-dropdown">
                                <a id="menu" data-toggle="dropdown" className="nav-link dropdown-toggle">Company</a>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item" to="/create-company">Create Company</Link>
                                    <div className="dropdown-divider"></div>

                                    <Link className="dropdown-item" to="/open-company">Open Company</Link>
                                    <div className="dropdown-divider"></div>

                                    <Link className="dropdown-item" to=''>Backup Data</Link>
                                    <div className="dropdown-divider"></div>

                                    <Link className="dropdown-item" to=''>Restore Data</Link>
                                    <div className="dropdown-divider"></div>

                                    <Link className="dropdown-item" to=''>Split Financial Year</Link>


                                    <li className="dropdown-item dropdown-submenu ">
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item dropdown-submenu ">
                                                <a href="#" data-toggle="dropdown" className="dropdown-toggle ">Hello </a>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Some</a>
                                                    </li>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Text</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown multi-level-dropdown">
                                <a id="menu" data-toggle="dropdown" className="nav-link dropdown-toggle">Administration</a>
                                <ul className="dropdown-menu">

                                    <li className="dropdown-item dropdown-submenu">
                                        <Link data-toggle="dropdown" className="dropdown-toggle" to=''>Masters</Link>
                                        
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item dropdown-submenu ">
                                                <Link data-toggle="dropdown" className="dropdown-toggle" to=''>Account</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a className="">Add</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a className="">Modify</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a className="">List</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu ">
                                                <Link href="#" data-toggle="dropdown" className="dropdown-toggle" to=''>Account Group</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Add</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Modify</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">List</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu ">
                                                <Link href="#" data-toggle="dropdown" className="dropdown-toggle" to=''>Std. Narration</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Add</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Modify</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">List</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu ">
                                                <Link href="#" data-toggle="dropdown" className="dropdown-toggle" to=''>Item</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Add</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Modify</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">List</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu ">
                                                <Link href="#" data-toggle="dropdown" className="dropdown-toggle" to=''>Item Group</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Add</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Modify</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">List</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu ">
                                                <Link href="#" data-toggle="dropdown" className="dropdown-toggle" to=''>Material Center</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Add</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Modify</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">List</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu ">
                                                <Link href="#" data-toggle="dropdown" className="dropdown-toggle" to=''>Material Center Group</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Add</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Modify</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">List</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu ">
                                                <Link href="#" data-toggle="dropdown" className="dropdown-toggle" to=''>Unit</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Add</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Modify</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">List</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu ">
                                                <Link href="#" data-toggle="dropdown" className="dropdown-toggle" to=''>Unit Conversion</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Add</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Modify</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">List</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu ">
                                                <Link href="#" data-toggle="dropdown" className="dropdown-toggle" to=''>Bill Sundry</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Add</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Modify</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">List</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu ">
                                                <Link href="#" data-toggle="dropdown" className="dropdown-toggle" to=''>Bill Material</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Add</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Modify</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">List</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu ">
                                                <Link href="#" data-toggle="dropdown" className="dropdown-toggle" to=''>Sale Type</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Add</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Modify</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">List</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu ">
                                                <Link href="#" data-toggle="dropdown" className="dropdown-toggle" to=''>Purchase Type</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Add</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Modify</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">List</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu ">
                                                <Link href="#" data-toggle="dropdown" className="dropdown-toggle" to=''>Tax Category</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Add</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Modify</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">List</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu ">
                                                <Link href="#" data-toggle="dropdown" className="dropdown-toggle" to=''>Misc. Master</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Add</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Modify</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">List</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu ">
                                                <Link href="#" data-toggle="dropdown" className="dropdown-toggle" to=''>Bulk Updation</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Add</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Modify</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">List</a>
                                                    </li>
                                                </ul>
                                            </li>

                                        </ul>
                                        <div className="dropdown-divider"></div>
                                    </li>

                                    <li className="dropdown-item dropdown-submenu">
                                        <a href="#" data-toggle="dropdown" className="dropdown-toggle">Configuration</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item ">
                                                <a href="#" className="">Features / Options</a>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item ">
                                                <a href="#" className="">Voucher Series Configuration</a>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item ">
                                                <a href="#" className="">Masters Configuration</a>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item ">
                                                <a href="#" className="">Hardware Configuration</a>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item ">
                                                <a href="#" className="">User Dash Board Configuration</a>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item ">
                                                <a href="#" className="">Party Dash Board Configuration</a>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item ">
                                                <a href="#" className="">Email Configuration</a>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item ">
                                                <a href="#" className="">SMS API Configuration</a>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item ">
                                                <a href="#" className="">Backup Configuration</a>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu">
                                                <Link data-toggle="dropdown" className="dropdown-toggle" to=''>Invoice Document Printing</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Standard</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>

                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Advanced</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>

                                                    <li className="dropdown-item dropdown-submenu">
                                                        <Link data-toggle="dropdown" className="dropdown-toggle" to=''>Copy Title Configuration</Link>
                                                        <ul className="dropdown-menu">
                                                            <li className="dropdown-item ">
                                                                <a href="#" className="">Sales Invoice</a>
                                                            </li>
                                                            <div className="dropdown-divider"></div>

                                                            <li className="dropdown-item ">
                                                                <a href="#" className="">Purchase Invoice</a>
                                                            </li>
                                                            <div className="dropdown-divider"></div>

                                                            <li className="dropdown-item ">
                                                                <a href="#" className="">Payment Advice</a>
                                                            </li>
                                                            <div className="dropdown-divider"></div>

                                                            <li className="dropdown-item ">
                                                                <a href="#" className="">Receipt</a>
                                                            </li>
                                                            <div className="dropdown-divider"></div>

                                                            <li className="dropdown-item ">
                                                                <a href="#" className="">DEbit Note</a>
                                                            </li>
                                                            <div className="dropdown-divider"></div>

                                                            <li className="dropdown-item ">
                                                                <a href="#" className="">Credit Note</a>
                                                            </li>
                                                            <div className="dropdown-divider"></div>

                                                            <li className="dropdown-item ">
                                                                <a href="#" className="">Sales Retun Invoice</a>
                                                            </li>
                                                            <div className="dropdown-divider"></div>

                                                            <li className="dropdown-item ">
                                                                <a href="#" className="">Purchase Return Invoice</a>
                                                            </li>
                                                            <div className="dropdown-divider"></div>

                                                            <li className="dropdown-item ">
                                                                <a href="#" className="">Delivery Note</a>
                                                            </li>
                                                            <div className="dropdown-divider"></div>

                                                            <li className="dropdown-item ">
                                                                <a href="#" className="">Goods Receipt Note</a>
                                                            </li>
                                                            <div className="dropdown-divider"></div>

                                                            <li className="dropdown-item ">
                                                                <a href="#" className="">Stock Transfer Memo</a>
                                                            </li>
                                                            <div className="dropdown-divider"></div>

                                                            <li className="dropdown-item ">
                                                                <a href="#" className="">Production Meno</a>
                                                            </li>
                                                            <div className="dropdown-divider"></div>

                                                            <li className="dropdown-item ">
                                                                <a href="#" className="">Stock Journal Memo</a>
                                                            </li>
                                                            <div className="dropdown-divider"></div>

                                                            <li className="dropdown-item ">
                                                                <a href="#" className="">Unassemble Memo</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <div className="dropdown-divider"></div>

                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Tax Summary Configuration</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu">
                                            <Link data-toggle="dropdown" className="dropdown-toggle" to=''>Account Voucher Printing</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Standard</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>

                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Advanced</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>
                                                    </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>

                                            <li className="dropdown-item dropdown-submenu">
                                            <Link data-toggle="dropdown" className="dropdown-toggle" to=''>Columnar Reports</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Account Registers</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>

                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Inventory Registers</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>

                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Cash/Bank Book</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>

                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Stock Status</a>
                                                    </li>
                                                    <div className="dropdown-divider"></div>

                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Party Item Analysis</a>
                                                    </li>
                                                </ul>
                                            </li>


                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li className="dropdown-item dropdown-submenu">
                                        <Link href="#" data-toggle="dropdown" className="dropdown-toggle" to=''>Users</Link>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item ">
                                                <a href="#" className="">Add</a>
                                            </li>
                                            <div className="dropdown-divider"></div>
                                            <li className="dropdown-item ">
                                                <a href="#" className="">Modify</a>
                                            </li>
                                            <div className="dropdown-divider"></div>
                                            <li className="dropdown-item ">
                                                <a href="#" className="">List</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li className="dropdown-item dropdown-submenu">
                                        <a href="#" data-toggle="dropdown" className="dropdown-toggle">Utilities</a>
                                        {/* <ul className="dropdown-menu">
                                            <li className="dropdown-item">
                                                <a href="#" className="">Hey</a>
                                            </li>
                                            <li className="dropdown-item ">
                                                <a href="#" className="">Hi</a>
                                            </li>
                                            <li className="dropdown-item dropdown-submenu ">
                                                <a href="#" data-toggle="dropdown" className="dropdown-toggle ">Hello </a>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Some</a>
                                                    </li>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Text</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li className="dropdown-item dropdown-submenu">
                                        <a href="#" data-toggle="dropdown" className="dropdown-toggle">Bulk Updations</a>
                                        {/* <ul className="dropdown-menu">
                                            <li className="dropdown-item">
                                                <a href="#" className="">Hey</a>
                                            </li>
                                            <li className="dropdown-item ">
                                                <a href="#" className="">Hi</a>
                                            </li>
                                            <li className="dropdown-item dropdown-submenu ">
                                                <a href="#" data-toggle="dropdown" className="dropdown-toggle ">Hello </a>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Some</a>
                                                    </li>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Text</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li className="dropdown-item dropdown-submenu">
                                        <a href="#" data-toggle="dropdown" className="dropdown-toggle">Data Export Import</a>
                                        {/* <ul className="dropdown-menu">
                                            <li className="dropdown-item">
                                                <a href="#" className="">Hey</a>
                                            </li>
                                            <li className="dropdown-item ">
                                                <a href="#" className="">Hi</a>
                                            </li>
                                            <li className="dropdown-item dropdown-submenu ">
                                                <a href="#" data-toggle="dropdown" className="dropdown-toggle ">Hello </a>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Some</a>
                                                    </li>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Text</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li className="dropdown-item dropdown-submenu">
                                        <a href="#" data-toggle="dropdown" className="dropdown-toggle">Miscellaneous Data Entry</a>
                                        {/* <ul className="dropdown-menu">
                                            <li className="dropdown-item">
                                                <a href="#" className="">Hey</a>
                                            </li>
                                            <li className="dropdown-item ">
                                                <a href="#" className="">Hi</a>
                                            </li>
                                            <li className="dropdown-item dropdown-submenu ">
                                                <a href="#" data-toggle="dropdown" className="dropdown-toggle ">Hello </a>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Some</a>
                                                    </li>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Text</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li className="dropdown-item dropdown-submenu ">
                                        <a href="#" data-toggle="dropdown" className="dropdown-toggle">Change Financial Year</a>
                                        {/* <ul className="dropdown-menu">
                                            <li className="dropdown-item">
                                                <a href="#" className="">Hey</a>
                                            </li>
                                            <li className="dropdown-item ">
                                                <a href="#" className="">Hi</a>
                                            </li>
                                            <li className="dropdown-item dropdown-submenu ">
                                                <a href="#" data-toggle="dropdown" className="dropdown-toggle ">Hello </a>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Some</a>
                                                    </li>
                                                    <li className="dropdown-item ">
                                                        <a href="#" className="">Text</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul> */}
                                    </li>

                                </ul>
                            </li>


                            <li className="nav-item"><a className="nav-link">Transactions</a></li>

                            <li className="nav-item"><a className="nav-link">Display</a></li>

                            <li className="nav-item"><a className="nav-link">Print/E-Mail/SMS</a></li>

                            <li className="nav-item"><a className="nav-link">House-Keeping</a></li>

                            <li className="nav-item"><a className="nav-link">Help</a></li>

                            <li className="nav-item"><a className="nav-link">Favourites</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}
export default NavBar