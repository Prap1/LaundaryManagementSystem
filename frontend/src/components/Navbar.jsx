import React from 'react'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#sidebar"
                    aria-controls="offcanvasExample"
                >
                    <span className="navbar-toggler-icon" data-bs-target="#sidebar"></span>
                </button>
                
                <a
                    className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
                    href="/"
                >Laundry Management
                </a>
              
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#topNavBar"
                    aria-controls="topNavBar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="topNavBar">
                    <ul className="navbar-nav d-flex ms-auto my-3 my-lg-0">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle ms-2"
                                href="/"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-person-fill"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li>
                                    <a className="dropdown-item" href="/">Something else here</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar