import React from 'react';

const List = ({ clients, goToEdit, goToCreate }) => {
    return (
        <div id="wrapper">
            <div className="wrapper-header">
                <div className="col-lg">
                    <h1 className="page-header">
                        Listado de <b>Clientes</b>
                    </h1>
                </div>
            </div>
            <div className="wrapper-body">
                <div className="row">
                    <div className="table-wrapper">
                        <div className="table-toolbar">
                            <button
                                onClick={() => goToCreate()}
                                type="button"
                                className="btn btn-info add-new">
                                <i className="fa fa-plus"></i> Nuevo Cliente
                            </button>
                        </div>
                        <table className="table table-bordered table-condensed table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Phone</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clients && clients.map((client, index) => (
                                    <tr key={index}>
                                        <td>John Doe</td>
                                        <td>Administration</td>
                                        <td>(171) 555-2222</td>
                                        <td>
                                            <button type="button" className="btn btn-primary btn-sm" onClick={() => goToEdit(index)}><i className="glyphicon glyphicon-pencil"></i> </button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List;