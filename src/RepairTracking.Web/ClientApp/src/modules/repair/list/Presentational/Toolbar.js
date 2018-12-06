import React from 'react'
import { MdCreateNewFolder } from 'react-icons/md'

const Toolbar = (props) => (
    <div style={{marginLeft: '1240px', marginBottom: "10px"}}>
        <button
            type="button"
            className="float-right ml-auto btn btn-info add-new"
            onClick={props.onNew}>
            <MdCreateNewFolder /> Nueva Reparación
    </button>
    </div>)

export default Toolbar;