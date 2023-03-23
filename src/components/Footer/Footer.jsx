import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <div className="container-fluid footer py-0">
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-6">
                        <div className="text-white text-center">
                            <h3 className="py-3">Contact Us</h3>
                            <p>
                                <a
                                    href="tel:971555883456"
                                    className="text-white"
                                >
                                    <i className="fa-solid fa-phone mx-3"></i>
                                    971 55 588 3456
                                </a>
                            </p>
                            <p>
                                <a
                                    href="tel:971555883456"
                                    className="text-white"
                                >
                                    <i className="fa-solid fa-phone mx-3"></i>{' '}
                                    971 55 588 3456
                                </a>
                            </p>
                            <p>
                                <a
                                    href="mailto:info@Holidayinspa.com"
                                    className="text-white"
                                >
                                    <i className="fa-solid fa-envelope mx-3"></i>
                                    info@Holidayinspa.com
                                </a>
                            </p>
                            <p>
                                <a href="/" className="text-white">
                                    <i className="fa-solid fa-location-dot mx-3"></i>
                                    inside Holiday inn hotel gym floor Sheikh
                                    Zayed Rd - Al Barsha - Dubai
                                </a>
                            </p>
                            <div className="py-4">
                                <a className="text-white" href="/">
                                    <i className="fa-brands fs-2 mx-2 fa-instagram"></i>
                                </a>
                                <a className="text-white" href="/">
                                    <i className="fa-brands fs-2 mx-2 fa-square-facebook"></i>
                                </a>
                                <a className="text-white" href="/">
                                    <i className="fa-brands fs-2 mx-2 fa-tiktok"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-white links text-center d-flex justify-content-center align-items-center flex-column">
                            <h3>Quick Links</h3>

                            <NavLink
                                to="/"
                                className="text-white nav-link my-2"
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/about"
                                className="text-white nav-link my-2"
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/services"
                                className="text-white nav-link my-2"
                            >
                                Our Services
                            </NavLink>
                            <NavLink
                                to="/team"
                                className="text-white nav-link my-2"
                            >
                                Our Team
                            </NavLink>

                            <NavLink
                                to="/contact"
                                className="text-white nav-link my-2"
                            >
                                Contact Us
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
