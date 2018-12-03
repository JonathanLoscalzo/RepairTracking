import React from 'react';
import { FaHammer } from 'react-icons/fa'
import { UncontrolledTooltip as Tooltip } from 'reactstrap'

const delay = {show: 400, hide:0};

const ButtonReparacionesCliente = ({ goToRepair, id }) => (
    <div>
        <span href="#" id={'OtroID' + id}>
            <button type="button" className="ml-4 mb-2 mt-2 btn btn-primary btn-sm" onClick={() => goToRepair(id)}>
                <FaHammer />
            </button>
        </span>
        <Tooltip delay={delay} placement="top" target={'OtroID' + id}>
            Reparaciones del cliente
        </Tooltip>
    </div>
)

export default ButtonReparacionesCliente