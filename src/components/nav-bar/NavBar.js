import React from 'react';
import '../nav-bar/NavBar.css';
import logo from '../../assets/logo/_blue_text.png';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <Link className="" to="/"><img className="navbar-brand logo" src={logo}></img></Link>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navBarId">
                        <span><i className="fas fa-align-justify hambergerMenu"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navBarId">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown">Company</a>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item" to="/create-company">Create Company</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/open-company">Open Company</Link>
                                    <div className="dropdown-divider"></div>
                                    <li className="dropdown-item">Backup Data</li>
                                    <div className="dropdown-divider"></div>
                                    <li className="dropdown-item">Restore Data</li>
                                    <div className="dropdown-divider"></div>
                                    <li className="dropdown-item">Split Financial Year</li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link">Administration</a></li>
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