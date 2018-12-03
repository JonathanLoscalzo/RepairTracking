import React from 'react';
import ButtonEditarCliente from './ButtonEditarCliente'
import ButtonVerCliente from './ButtonVerCliente'
import ButtonReparacionesCliente from './ButtonReparacionesCliente'

export default ({ client, index, goToEdit, goToShow, goToRepair }) => (
    <tr key={index}>
        <td>{client.firstname} {client.lastname}</td>
        <td>{client.email}</td>
        <td>{client.cellphone}</td>
        <td>
            <div className="btn-group btn-group-toggle">
                <ButtonEditarCliente goToEdit={goToEdit} id={client.id} />
                <ButtonVerCliente goToShow={goToShow} id={client.id} />
                <ButtonReparacionesCliente goToRepair={goToRepair} id={client.id} /> 
            </div>
        </td>
    </tr>)