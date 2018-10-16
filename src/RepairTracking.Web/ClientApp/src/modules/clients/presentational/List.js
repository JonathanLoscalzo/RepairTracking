import React from 'react';
import { Button } from 'react-bootstrap';

const List = ({ clients, goToEdit }) => {
    return (<div>
        <div className="">
            <div className="table-wrapper">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-6"><h2>Listado de <b>Clientes</b></h2></div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Nuevo Cliente</button>
                        </div>
                    </div>
                </div>
                <table className="table table-bordered">
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
    </div>)
}

export default List;