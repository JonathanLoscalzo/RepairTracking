import React from 'react';
import { FaList } from 'react-icons/fa'
import { UncontrolledTooltip as Tooltip } from 'reactstrap'

const ButtonVerCliente = ({ goToShow, id }) => (
    <div>
        <span href="#" id="UncontrolledTooltipExample2">
            <button type="button" className="btn btn-info btn-sm" onClick={() => goToShow(id)}>
                <FaList />
            </button>
        </span>
        <Tooltip placement="top" target="UncontrolledTooltipExample2">
            Ver Cliente
        </Tooltip>
    </div>
)

export default ButtonVerCliente;