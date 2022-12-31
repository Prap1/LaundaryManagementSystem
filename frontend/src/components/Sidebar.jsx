import React from 'react'

export const Sidebar = () => {
  return (
    <>
    <div
                className="offcanvas offcanvas-start sidebar-nav bg-dark"
                tabIndex="-1"
                id="sidebar"
            >
                <div className="offcanvas-body p-0">
                    <nav className="navbar-dark">
                        <ul className="navbar-nav">
                            <li>
                                <div className="text-muted small fw-bold text-uppercase px-3">

                                </div>
                            </li>
                            <li>
                                <a href="/" className="nav-link px-3 active">
                                    <span className="me-2"><i className="bi bi-speedometer2"></i></span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="nav-link px-3 active">
                                    <span className="me-2"><i className="bi bi-folder-fill"></i></span>
                                    <span>Laundry Request</span>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="nav-link px-3 active">
                                    <span className="me-2"><i className="bi bi-folder-fill"></i></span>
                                    <span>Laundry Status</span>
                                </a>
                            </li>
                            <li className="my-4"><hr className="dropdown-divider bg-light" /></li>

                        </ul>
                    </nav>
                </div>
            </div>
    </>
  )
}
