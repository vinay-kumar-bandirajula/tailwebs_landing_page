import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm py-3">
        <div className="container">
            <a className="navbar-brand text-primary fw-bold fs-4" href="#">
                <span className="text-warning">e</span>Gov
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav align-items-center gap-3">
                    <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">About Us</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">Programs</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">Platforms & Solutions</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">The Network</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">Resources</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">Team & Board</a></li>
                    <li className="nav-item">
                        <a className="btn btn-outline-primary rounded-pill px-4 ms-2" href="#">Donate</a>
                    </li>
                    <li className="nav-item">
                        <select className="form-select border-0 shadow-none bg-transparent fw-medium" aria-label="Language">
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
