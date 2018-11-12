import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa'

const renderToolbar = ({ ...props }) => {
    let editButton;
    editButton = (
        <Link to={`/element/edit/${props.value}`}>
            <button >
                <FaEdit />
            </button>
        </Link>
    )

    return <span>
        <Link to={`/element/view/${props.value}`}>
            <button>
                <FaSearch />
            </button>
        </Link> {' '}
        {editButton} {' '}
        <Link to={`/element/remove/${props.value}`}>
            <button>
                <FaTrash />
            </button>
        </Link>
    </span>
}

const columns = [
    {
        Header: 'Código',
        accessor: 'code',
        Cell: props => props.value
    },
    {
        Header: 'Elemento',
        accessor: 'name',
        Cell: props => props.value
    },
    {
        Header: 'Cantidad Piezas',
        accessor: 'pieces',
        Cell: props => props.value.length
    },
    {
        Header: 'Cantidad Tareas',
        accessor: 'tasks',
        Cell: props => { return props.value.length }
    },
    {
        Header: 'Acciones',
        accessor: 'id',
        Cell: renderToolbar
    }
]

export default columns;