import React from 'react';
import '../footer/Footer.css';

function Footer() {
    return (
        <React.Fragment>
            <div className="footer">
            {/* <div>For Testing</div> */}
                <div className="container-fluid mb-3">
                    <div className="row mobileView">
                        <div className="col-12 col-md-3 mt-4">
                            <h4>About Ayasya</h4>
                            <p>IT-sphere is a vibrant arena with continuous changes and challenges. And Ayasya Digital Solutions has been one company which always has absorbed all the shifting requirements in the market and has come up with corresponding solutions right from the year 2010.</p>
                        </div>
                        <div className="col-12 col-md-2 mt-4 text-center">
                            <h4>Connect with us</h4>
                            <div className="socialIcons text-center">
                                <span><i className="fab fa-facebook-f"></i></span>
                                <span><i className="fab fa-instagram"></i></span>
                                <span><i className="fab fa-twitter"></i></span>
                                <span><i className="fab fa-linkedin-in"></i></span>
                                <span><i className="fab fa-blogger"></i></span>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mt-4">
                            <h4>Our Services</h4>
                            <div className="ourServices">
                                <li>AEM Development</li>
                                <li>Website Design & Development</li>
                                <li>Mobile App Development</li>
                                <li>Digital Marketing</li>
                                <li> Privacy Policy</li>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-4">
                            <h4>Contact-Us</h4>
                            <div className="addressDetails">
                                <p>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>
                                        25/30, Babaji Complex, Basement, Opposite Central Hospital, Tilak Nagar, Delhi 110018
                                </span>

                                </p>
                                <p>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>
                                        261 Kalyan Vihar, Polo Road, Delhi 110009
                                </span>
                                </p>
                                <p>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>
                                        Augartenstrasse 27, Mannheim, Germany D-68165
                                </span>
                                </p>
                                <p>
                                    <i className="fas fa-phone"></i>
                                    <span>
                                        +91-9278271010
                                </span>
                                </p>
                                <p>
                                    <i className="far fa-envelope"></i>
                                    <span>
                                        info@ayasya.com
                                </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-lower-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                Copyright @ 2019 Ayasya Digital All Right Reserved.
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Footer