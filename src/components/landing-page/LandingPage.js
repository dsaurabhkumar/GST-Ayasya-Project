import React from 'react';
import '../landing-page/LandingPage.css';
import NavBar from '../nav-bar/NavBar';
import banner from '../../assets/gst-banner/gstBanner.jpg'
import Footer from '../footer/Footer';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function LandingPage() {
    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <div>
                <img className="gstBanner" src={banner}></img>
            </div>
            <Footer></Footer>
        </>
    )
}
export default LandingPage