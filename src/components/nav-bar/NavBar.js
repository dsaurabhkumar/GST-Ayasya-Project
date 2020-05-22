import React from 'react';
import '../nav-bar/NavBar.css';
import '../nav-bar/NavRelated';
import logo from '../../assets/logo/_blue_text.png';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-md">
                <Link className="" to="/"><img className="navbar-brand logo" src={logo}></img></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-hover="dropdown" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i className="fas fa-align-justify hambergerMenu"></i></span>
                </button>
                <div className="collapse navbar-collapse desktopViewNav" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" data-hover="dropdown" aria-haspopup="true" aria-expanded="false">
                                Company
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/create-company">Create Company</Link></li>
                                <div className="dropdown-divider"></div>

                                <li><Link className="dropdown-item" to="/open-company">Open Company</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" data-hover="dropdown" aria-haspopup="true" aria-expanded="false">
                                Administration
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item dropdown-toggle" href="#">Masters</a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item dropdown-toggle" href="#">Account</a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to='/account-add'>Add</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/account-modify'>Modify</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/account-list'>List</Link></li>
                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li>
                                        <a className="dropdown-item dropdown-toggle" href="#">Account Group</a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to='/account-group-add'>Add</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/account-group-modify'>Modify</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/account-group-list'>List</Link></li>
                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li>
                                        <a className="dropdown-item dropdown-toggle" href="#">Std. Narration</a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to='/std-narration-add'>Add</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/std-narration-modify'>Modify</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/std-narration-list'>List</Link></li>
                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li>
                                        <a className="dropdown-item dropdown-toggle" href="#">Item</a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to='/item-add'>Add</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/item-modify'>Modify</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/item-list'>List</Link></li>
                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li>
                                        <a className="dropdown-item dropdown-toggle" href="#">Item Group</a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to='/item-group-add'>Add</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/item-group-modify'>Modify</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/item-group-list'>List</Link></li>
                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li>
                                        <a className="dropdown-item dropdown-toggle" href="#">Material Centre</a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to='/material-centre-add'>Add</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/material-centre-modify'>Modify</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/material-centre-list'>List</Link></li>
                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li>
                                        <a className="dropdown-item dropdown-toggle" href="#">Material Centre Group</a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to='/material-centre-group-add'>Add</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/material-centre-group-modify'>Modify</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/material-centre-group-list'>List</Link></li>
                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li>
                                        <a className="dropdown-item dropdown-toggle" href="#">Unit</a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to='/unit-add'>Add</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/unit-modify'>Modify</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/unit-list'>List</Link></li>
                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li>
                                        <a className="dropdown-item dropdown-toggle" href="#">Unit Conversion</a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to='/unit-conversion-add'>Add</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/unit-conversion-modify'>Modify</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/unit-conversion-list'>List</Link></li>
                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li>
                                        <a className="dropdown-item dropdown-toggle" href="#">Bill Sundry</a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to='/bill-sundry-add'>Add</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/bill-sundry-modify'>Modify</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/bill-sundry-list'>List</Link></li>
                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li>
                                        <a className="dropdown-item dropdown-toggle" href="#">Bill of Material</a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to='/bill-of-material-add'>Add</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/bill-of-material-modify'>Modify</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/bill-of-material-list'>List</Link></li>
                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li>
                                        <a className="dropdown-item dropdown-toggle" href="#">Sale Type</a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to='/sale-type-add'>Add</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/sale-type-modify'>Modify</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/sale-type-list'>List</Link></li>
                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li>
                                        <a className="dropdown-item dropdown-toggle" href="#">Purchase Type</a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to='/purchase-type-add'>Add</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/purchase-type-modify'>Modify</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/purchase-type-list'>List</Link></li>
                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li>
                                        <a className="dropdown-item dropdown-toggle" href="#">Tax Category</a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to='/tax-category-add'>Add</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/tax-category-modify'>Modify</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/tax-category-list'>List</Link></li>
                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li>
                                        <a className="dropdown-item dropdown-toggle" href="#">Misc. Masters</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item dropdown-toggle" href="#">Discount Structure</a>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to='/misc-masters-discount-structure-add'>Add</Link></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><Link className="dropdown-item" to='/misc-masters-discount-structure-modify'>Modify</Link></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><Link className="dropdown-item" to='/misc-masters-discount-structure-list'>List</Link></li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>
                                            <li>
                                                <a className="dropdown-item dropdown-toggle" href="#">State</a>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to='/discount-structre-state-add'>Add</Link></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><Link className="dropdown-item" to='/discount-structre-state-modify'>Modify</Link></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><Link className="dropdown-item" to='/discount-structre-state-list'>List</Link></li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>
                                            <li>
                                                <a className="dropdown-item dropdown-toggle" href="#">Country</a>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to='/discount-structre-country-add'>Add</Link></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><Link className="dropdown-item" to='/discount-structre-country-modify'>Modify</Link></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><Link className="dropdown-item" to='/discount-structre-country-list'>List</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <div className="dropdown-divider"></div>

                                    <li>
                                        <a className="dropdown-item dropdown-toggle" href="#">Bulk Updation</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Check/Update Party GSTIN/State</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item" href="#">Check/Update Expense GST Details</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item" href="#">Check/Update Item HSN/Tax Category</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item" href="#">Check/Update GST Rates in Tax Categories</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item" href="#">Multiple Account Creation/Modification</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item" href="#">Multiple Item Creation/Modification</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item" href="#">Multiple Tax Category Creation/Modification</a></li>
                                        </ul>
                                    </li>

                                </ul>
                                <div className="dropdown-divider"></div>

                                <li>
                                    <a className="dropdown-item dropdown-toggle" href="#">Configuration</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <Link className="dropdown-item" to='/feature-options'>Feature / Options</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="/voucher-series-configuration">Voucher Series Configuration</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="">Masters Configuration</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="/hardware-configuration">Hardware Configuration</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="/user-dash-board-configuration">User Dash Board Configuration</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="">Party Dash Board Configuration</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="/email-configuration">Email Configuration</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="">SMS API Configuration</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="">Backup Configuration</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item dropdown-toggle" to="">Invoice / Document Printing</Link>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Standard</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item" href="#">Advance</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item dropdown-toggle" href="#">Copy Title Configuration</a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Sales Invoice</a></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><a className="dropdown-item" href="#">Purchase Invoice</a></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><a className="dropdown-item" href="#">Payment Advice</a></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><a className="dropdown-item" href="#">Receipt</a></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><a className="dropdown-item" href="#">Debit Note</a></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><a className="dropdown-item" href="#">Credit Note</a></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><a className="dropdown-item" href="#">Sales Return Invoice</a></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><a className="dropdown-item" href="#">Purchase Return Invoice</a></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><a className="dropdown-item" href="#">Delivery Note</a></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><a className="dropdown-item" href="#">Goods Receipt Note</a></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><a className="dropdown-item" href="#">Stock Transfer Memo</a></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><a className="dropdown-item" href="#">Production Memo</a></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><a className="dropdown-item" href="#">Stock Journal Memo</a></li>
                                                    <div className="dropdown-divider"></div>
                                                    <li><a className="dropdown-item" href="#">Unassemble Memo</a></li>
                                                </ul>
                                            </li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item" href="#">Tax Summary Configuration</a></li>
                                        </ul>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item dropdown-toggle" to="">Accounting Voucher Printing</Link>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Standard</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item" href="#">Advanced</a></li>
                                        </ul>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item dropdown-toggle" to="">Columnar Reports</Link>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Account Registers</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item" href="#">Inventory Registers</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item" href="#">Cash/Bank Book</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item" href="#">Stock Status</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item" href="#">Party-Item Analysis</a></li>
                                        </ul>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="">Latters Text Configuration</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="">Labels Printing Configuration</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item dropdown-toggle" to="">References/Group Summary Configuration</Link>
                                        <ul className="dropdown-menu">
                                            <Link className="dropdown-item" to="/bill-reference-printing-reports">Bill Reference Details Printing (Reports)</Link>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="/bill-reference-printing-documents">Bill Reference Details Printing (Documents)</Link>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="/item-group-summary-details-printing">Item Group Summary Details Printing</Link>
                                        </ul>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="">Report Header Printing</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="/items-details-printing-in-reports">Items Details Printing in Reports</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="">Final Results Configuration</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="">Warning Alarms</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="/maximum-entries-in-voucher">Maximum Entries in Voucher</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item dropdown-toggle" to="">Ageing Analysis Time Slabs</Link>
                                        <ul className="dropdown-menu">
                                            <Link className="dropdown-item" to="/ageing-analysis-account">Account</Link>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="/ageing-analysis-inventory">Inventory</Link>
                                        </ul>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item dropdown-toggle" to="">Interest Calculation Slabs</Link>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Amount Basis</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item" href="#">Days Basis</a></li>
                                        </ul>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="">Party-wise Item Filter</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="">Tag Bill Sundries Voucher-wise</Link>
                                        <div className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="">Tag Bill Sundry Values Party-wise</Link>
                                    </ul>
                                </li>
                                <div className="dropdown-divider"></div>

                                <li>
                                    <a className="dropdown-item dropdown-toggle" href="#">Users</a>
                                    <ul className="dropdown-menu">
                                        <Link className="dropdown-item" to="/users-add">Add</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/users-modify">Modify</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/users-list">List</Link>
                                    </ul>
                                </li>
                                <div className="dropdown-divider"></div>

                                <li><a className="dropdown-item dropdown-toggle" href="#">Utilities</a>

                                    <ul className="dropdown-menu">
                                        <a className="dropdown-item dropdown-toggle" href="#">Data Freezing</a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to='/utilities-full-data-freezing'>Full Data Freezing</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link className="dropdown-item" to='/utilities-partial-data-freezing'>Partial Data Freezing</Link></li>
                                        </ul>
                                        <div className="dropdown-divider"></div>

                                        <li>
                                            <a className="dropdown-item dropdown-toggle" href="#">Reference Management</a>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item dropdown-toggle" to=''>Clear References</Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" to='/utilities-clear-bill-wise-references'>Bill-wise References</Link></li>
                                                    </ul>
                                                </li>
                                                <div className="dropdown-divider"></div>
                                                <li><Link className="dropdown-item dropdown-toggle" to=''>Auto Adjust References</Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" to='/utilities-auto-adjust-bill-wise-references'>Bill-wise References</Link></li>
                                                    </ul>
                                                </li>
                                                <div className="dropdown-divider"></div>
                                                <li><Link className="dropdown-item dropdown-toggle" to=''>Reference Adjustment Wizard</Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" to='/utilities-bill-references'>Bill References</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <div className="dropdown-divider"></div>

                                        <li>
                                            <Link className="dropdown-item" to="/send-e-mail">Send E-Mail</Link>
                                        </li>
                                        <div className="dropdown-divider"></div>

                                        <li>
                                            <Link className="dropdown-item" to="/send-sms">Send SMS</Link>
                                        </li>
                                        <div className="dropdown-divider"></div>


                                        <li>
                                            <Link className="dropdown-item" to="/send-notification">Send Notification</Link>
                                        </li>
                                        <div className="dropdown-divider"></div>

                                        <li>
                                            <a className="dropdown-item dropdown-toggle" href="#">Customization</a>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item dropdown-toggle" to=''>Custom Report</Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" to='/restore-custom-report'>Restore Custom Report</Link></li>
                                                        <div className="dropdown-divider"></div>
                                                        <li><Link className="dropdown-item" to='/delete-custom-report'>Delete Custom Report</Link></li>
                                                        <div className="dropdown-divider"></div>
                                                        <li><Link className="dropdown-item" to='/backup-custom-report'>Backup Custom Report</Link></li>
                                                    </ul>
                                                </li>
                                                <div className="dropdown-divider"></div>
                                                <li><Link className="dropdown-item dropdown-toggle" to=''>Custom Validation</Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" to='/restore-custom-validation'>Restore Custom Validation</Link></li>
                                                        <div className="dropdown-divider"></div>
                                                        <li><Link className="dropdown-item" to='/delete-custom-validation'>Delete Custom Validation</Link></li>
                                                        <div className="dropdown-divider"></div>
                                                        <li><Link className="dropdown-item" to='/backup-custom-validation'>Backup Custom Validation</Link></li>
                                                    </ul></li>
                                            </ul>
                                        </li>
                                        <div className="dropdown-divider"></div>

                                        <li>
                                            <Link className="dropdown-item" to="/utilities-block-account-item">Block Account/Item</Link>
                                        </li>
                                        <div className="dropdown-divider"></div>

                                        <li>
                                            <Link className="dropdown-item" to="/utilities-deactivate-masters">De-Activate Masters</Link>
                                        </li>
                                        <div className="dropdown-divider"></div>

                                        <li>
                                            <Link className="dropdown-item" to="/utilities-mapping-masters">Mapping of Masters</Link>
                                        </li>

                                    </ul>





                                </li>
                                <div className="dropdown-divider"></div>

                                <li><a className="dropdown-item dropdown-toggle" href="#">Data Export Import</a></li>
                                <div className="dropdown-divider"></div>

                                <li><a className="dropdown-item dropdown-toggle" href="#">Miscellaneous Data Entry</a></li>
                                <div className="dropdown-divider"></div>

                                <li><a className="dropdown-item dropdown-toggle" href="#">Change Financial Year</a></li>

                            </ul>
                        </li>
                        <li className="nav-item"><a className="nav-link">Transactions</a></li>

                        <li className="nav-item"><a className="nav-link">Display</a></li>

                        <li className="nav-item"><a className="nav-link">Print/E-Mail/SMS</a></li>

                        <li className="nav-item"><a className="nav-link">House-Keeping</a></li>

                        <li className="nav-item"><a className="nav-link">Help</a></li>

                        <li className="nav-item"><a className="nav-link">Favourites</a></li>

                        <li className="nav-item"><a className="nav-link">Add-On</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default NavBar