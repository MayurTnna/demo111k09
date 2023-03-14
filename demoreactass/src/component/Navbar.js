import React from 'react'
import logo from '../assets/img/navbar/logo.svg'
function Navbar() {
    return (
        <>
        <div className='navbar-font'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} className="img-fluide logo z-1"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item ">
                                <a className="nav-link active list" aria-current="page" href="#about">About Us</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link active list" aria-current="page" href="#service">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active list" aria-current="page" href="#ourteam">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active list" aria-current="page" href="#ourproject">Clients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active list" aria-current="page" href="#contact">Contact Us</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        </>
    )
}

export default Navbar