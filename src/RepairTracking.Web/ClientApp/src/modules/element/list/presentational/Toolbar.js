import React from 'react'
import { MdCreateNewFolder } from 'react-icons/md'

const NuevoReporte = ({ goToCreate }) => (
    <div style={{marginLeft: '1240px', marginBottom: "10px"}}>
        <button
            onClick={() => goToCreate()}
            type="button"
            className="float-right ml-auto btn btn-info add-new">
            <MdCreateNewFolder /> Nuevo Elemento
    </button>
    </div>)

export default NuevoReporte;