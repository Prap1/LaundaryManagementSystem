import React from 'react'
import Navbar from '../components/Navbar'
import Price from '../components/Price'
import { Sidebar } from '../components/Sidebar'
import Stack from '../components/Stack'



export const Dashboard = () => {

    const fName = localStorage.getItem("fullName")
    
    return (
        <>
            {/* top navigation bar */}
            <Navbar />
            {/* top navigation bar 
            
            offcanvas */}
            <Sidebar />

            {/* <!-- offcanvas --> */}

            <main className="mt-5 pt-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Dashboard</h4>
                        </div>

                        <div className="col-md-2 d-flex ms-auto my-3 my-lg-0 ">
                            <h4> Hi, {fName} </h4>
                        </div>

                    </div>

                    <div className="row ">
                        <div className="col-md-3 mb-3 " id='stack' >
                            <div className="card bg-primary text-white h-100">
                                <Stack request={0} status={"Accepted!"} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card bg-warning text-dark h-100">
                                <Stack request={0} status={"New Request"} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card bg-success text-white h-100">
                                <Stack request={0} status={"Inprocess!"} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card bg-danger text-white h-100">
                                <Stack request={1} status={"Finished!"} />
                            </div>
                        </div>
                    </div>

                    {/* Price Table */}
                    <Price />
                    {/* Price Table End */}

                </div>
            </main>
        </>
    )
}
