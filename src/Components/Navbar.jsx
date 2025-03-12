import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setNavBg(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top p-3 ${navBg ? "nav-scroll" : "bg-transparent"}`}>
            <div className="container">
                <img src={logo} alt="logo" className="navbar-logo img-fluid" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">
                        {[
                            { path: "/", label: "Home" },
                            { path: "/About", label: "About us" },
                            { path: "/Menu", label: "Menu" },
                            { path: "/Reservations", label: "Reservations" },
                            { path: "#", label: "Gallery" },
                            { path: "#", label: "Contact" },
                        ].map(({ path, label }) => (
                            <li key={path} className="nav-item px-2">
                                <a
                                    className={`nav-link active`}
                                    href={path}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                        <ul className="navbar-nav d-flex gap-3 px-2">
                            <li className="nav-item">
                                <a className="nav-link px-3 text-white" href="#">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <button className="btn btn-nav" href="#">Book a table</button>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
