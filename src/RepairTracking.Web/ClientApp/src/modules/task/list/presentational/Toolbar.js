import React from 'react'
import { MdCreateNewFolder } from 'react-icons/md'

const NuevaTarea = ({ goToCreate }) => (
    <div className="col-12 table-toolbar mb-2 ml-auto">
        <button
            onClick={() => goToCreate()}
            type="button"
            className="float-right ml-auto btn btn-info add-new">
            <MdCreateNewFolder /> Nueva Tarea
    </button>
    </div>)

export default NuevaTarea;