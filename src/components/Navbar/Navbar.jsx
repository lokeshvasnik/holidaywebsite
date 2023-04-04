import React from 'react';
import logo from '../../assets/logo.webp';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <>
            <nav className="navbar text-light navbar-expand-lg ">
                <a
                    className=" d-flex align-items-center justify-content-center navbar-brand"
                    href="#"
                >
                    <img className="w-50" src={logo} alt="logo" />
                </a>

                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">
                                    Our Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/team">
                                    Our Team
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <a className="btn__primary mx-5 py-4">
                    <i class="fa-solid fa-phone mx-3" />
                    Book Now
                </a>
            </nav>
        </>
    );
};

export default Navbar;
