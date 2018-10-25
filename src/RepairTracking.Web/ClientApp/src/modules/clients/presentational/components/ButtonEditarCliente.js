import React from 'react';
import { FaEdit } from 'react-icons/fa'
import { UncontrolledTooltip as Tooltip } from 'reactstrap'

const delay = {show: 500, hide:0};

const ButtonEditarCliente = ({ goToEdit, id }) => (
    <div>
        <span href="#" id={'miraElOtroId' + id}>
            <button type="button" className="mr-2 mb-2 mt-2 btn btn-primary btn-sm" onClick={() => goToEdit(id)}>
                <FaEdit />
            </button>
        </span>
        <Tooltip delay={delay} placement="top" target={'miraElOtroId' + id}>
            Editar Cliente
        </Tooltip>
    </div>
)

export default ButtonEditarCliente