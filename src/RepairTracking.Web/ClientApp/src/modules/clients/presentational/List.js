import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap'

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
                <div >
                    <Card>
                        <CardBody>
                            <CardTitle> </CardTitle>
                            <div className="table-wrapper row">
                                <div className="table-toolbar mb-2 ml-auto">
                                    <button
                                        onClick={() => goToCreate()}
                                        type="button"
                                        className="ml-auto btn btn-info add-new">
                                        <i className="fa fa-plus"></i> Nuevo Cliente
                                    </button>
                                </div>
                                <table className="table table-sm table-bordered table-hover">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Name</th>
                                            <th>Department</th>
                                            <th>Phone</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {clients.length > 0
                                            ? clients.map((client, index) => (
                                                <tr key={index}>
                                                    <td>John Doe</td>
                                                    <td>Administration</td>
                                                    <td>(171) 555-2222</td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary btn-sm" onClick={() => goToEdit(index)}><i className="glyphicon glyphicon-pencil"></i> </button>
                                                    </td>
                                                </tr>
                                            ))
                                            : <tr><td className={'text-center'} colSpan={4}> No hay clientes para visualizar</td></tr>}

                                    </tbody>
                                </table>
                            </div>

                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default List;