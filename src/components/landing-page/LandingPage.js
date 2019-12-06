import React from 'react';
import '../landing-page/LandingPage.css';
import banner from '../../assets/gst-banner/gstBanner.jpg'

function LandingPage() {
    return (
        <>
            <div>
                <img className="gstBanner" src={banner}></img>
            </div>
        </>
    )
}
export default LandingPage