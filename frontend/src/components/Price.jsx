import React from 'react'

const Price = () => {
    return (
        <>
            <div className="row ">
                <div className="col-md-6 mb-3 mx-auto mt-5 ">
                    <div className="card ">
                        <div className="card-header">
                            <span><i className="bi bi-table me-2"></i></span> Laundry Price (Per Unit)
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table
                                    id="example"
                                    className="table table-striped data-table"
                                    style={{ width: "100%" }}
                                >
                                    <thead>
                                        <tr>
                                            <th>Name </th>
                                            <th>Price </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Top Wear</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>Bottom Wear</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>Woolen Cloth</td>
                                            <td>20</td>
                                        </tr>
                                        <tr>
                                            <td>Other Price</td>
                                            <td>Other Price depend upon cloth variety</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Price