import React from 'react';
import '../nav-bar/NavBar.css';
import logo from '../../assets/logo/_blue_text.png';

function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm">
                <div className="container">
                    <img className="navbar-brand logo" src={logo}></img>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navBarId">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navBarId">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown">Company</a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">Hello</li>
                                    <div className="dropdown-divider"></div>
                                    <li className="dropdown-item">Hello-Hi</li>
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