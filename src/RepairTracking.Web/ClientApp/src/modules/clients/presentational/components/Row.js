import React from 'react';
import { FaEdit, FaList } from 'react-icons/fa'

export default ({ client, index, goToEdit, goToShow }) => <tr>
    <td>{client.firstname} {client.lastname}</td>
    <td>{client.email}</td>
    <td>{client.cellphone}</td>
    <td>
        <div className="btn-group btn-group-toggle">
            <button type="button" className="btn btn-primary btn-sm" onClick={() => goToEdit(client.id)}><FaEdit /></button>
            <button type="button" className="btn btn-info btn-sm" onClick={() => goToShow(client.id)}><FaList /></button>
        </div>
    </td>
</tr>