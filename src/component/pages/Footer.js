import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterHotel = () => {
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    {/* Company Section */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Royal Hotel</h4>
                        <a className="btn btn-link" href="#">About Us</a>
                        <a className="btn btn-link" href="#">Services</a>
                        <a className="btn btn-link" href="#">Rooms</a>
                        <a className="btn btn-link" href="#">Our Team</a>
                        <a className="btn btn-link" href="#">Contact</a>
                    </div>

                    {/* Contact Section */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Contact</h4>
                        <p className="mb-2">
                            <i className="fa fa-map-marker-alt me-3"></i>Gopalapuram, Covai, Tamilnadu
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-phone-alt me-3"></i>+91 2345 67890
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-envelope me-3"></i>Royal hotel@gmail.com
                        </p>
                       
                        <div className="footer-social-icons">
    <a href="#facebook" className="footer-social-icon" aria-label="Facebook">
        <FaFacebook />
    </a>
    <a href="#twitter" className="footer-social-icon" aria-label="Twitter">
        <FaTwitter />
    </a>
    <a href="#linkedin" className="footer-social-icon" aria-label="LinkedIn">
        <FaLinkedin />
    </a>
    <a href="#instagram" className="footer-social-icon" aria-label="Instagram">
        <FaInstagram />
    </a>
</div>

                    </div>

                    {/* Gallery Section */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Gallery</h4>
                        <div className="row g-2 pt-2">
                            <div className="col-6">
                                <img
                                    className="img-fluid bg-light p-1"
                                    src={require('../../Assets/carousel-5.jpg')}
                                    alt="Gallery Image 1"
                                />
                            </div>
                            <div className="col-6">
                                <img
                                    className="img-fluid bg-light p-1"
                                    src={require('../../Assets/carousel-6.jpg')}
                                    alt="Gallery Image 2"
                                />
                            </div>
                            <div className="col-6">
                                <img
                                    className="img-fluid bg-light p-1"
                                    src={require('../../Assets/carousel-7.jpg')}
                                    alt="Gallery Image 3"
                                />
                            </div>
                            <div className="col-6">
                                <img
                                    className="img-fluid bg-light p-1"
                                    src={require('../../Assets/carousel-4.jpg')}
                                    alt="Gallery Image 3"
                                />
                            </div>
                          
                            
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <input
                                className="form-control border-primary w-100 py-3 ps-4 pe-5"
                                type="text"
                                placeholder="Your email"
                            />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">
                                submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterHotel;
