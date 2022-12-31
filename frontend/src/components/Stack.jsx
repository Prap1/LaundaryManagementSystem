import React from 'react'

const Stack = ({ request, status }) => {
    return (
        <>
            <div className="card-body py-5 " > {request} {status} </div>
            <div className="card-footer d-flex " style={{ cursor: "pointer" }}>
                View Details
                <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                </span>
            </div>
        </>
    )
}

export default Stack