import React from 'react'
import { MdCreateNewFolder } from 'react-icons/md'

const NuevaTarea = ({ goToCreate }) => (
    <div style={{marginLeft: '1275px', marginBottom: "10px"}}>
        <button
            onClick={() => goToCreate()}
            type="button"
            className="float-right ml-auto btn btn-info add-new">
            <MdCreateNewFolder /> Nueva Tarea
    </button>
    </div>)

export default NuevaTarea;