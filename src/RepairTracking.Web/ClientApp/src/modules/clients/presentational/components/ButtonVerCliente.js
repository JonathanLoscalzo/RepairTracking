import React from 'react';
import { FaList } from 'react-icons/fa'
import { UncontrolledTooltip as Tooltip } from 'reactstrap'

const delay = {show: 400, hide:0};

const ButtonVerCliente = ({ goToShow, id }) => (
    <div>
        <span href="#" id={'miraEsteId' + id}>
            <button type="button" className="ml-4 mb-2 mt-2 btn btn-info btn-sm" onClick={() => goToShow(id)}>
                <FaList />
            </button>
        </span>
        <Tooltip delay={ delay } placement="top" target={'miraEsteId' + id}>
            Ver Cliente
        </Tooltip>
    </div>
)

export default ButtonVerCliente;