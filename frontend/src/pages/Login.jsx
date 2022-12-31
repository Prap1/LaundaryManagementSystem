import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row ">
                    <div className="col-md-3 mx-auto">
                        <h4>Login</h4>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-3 mx-auto">
                        <div className="card ">
                            <div className="card-body">
                                <form>
                                    <div className="form-group  mb-3">
                                        <label htmlFor="exampleInputPassword1">Email</label>
                                        <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter Email" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <button type="submit" className="btn rounded-md btn-primary w-100">Submit</button>
                                    {/* goto register */}
                                    <div className="text-center mt-3">
                                        <Link to="/register">Don't have an account?</Link>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login