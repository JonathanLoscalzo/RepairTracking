import React from 'react';
import { FaEdit } from 'react-icons/fa'
import { UncontrolledTooltip as Tooltip } from 'reactstrap'

const ButtonEditarCliente = ({ goToEdit, id }) => (
    <div>
        <span href="#" id="UncontrolledTooltipExample">
            <button type="button" className="btn btn-primary btn-sm" onClick={() => goToEdit(id)}>
                <FaEdit />
            </button>
        </span>
        <Tooltip placement="top" target="UncontrolledTooltipExample">
            Editar Cliente
        </Tooltip>
    </div>
)

export default ButtonEditarCliente