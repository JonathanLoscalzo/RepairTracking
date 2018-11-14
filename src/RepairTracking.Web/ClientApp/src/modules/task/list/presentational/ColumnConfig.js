import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa'

const renderToolbar = ({ ...props }) => {
    let editButton;
    editButton = (
        <Link to={`/task/edit/${props.value}`}>
            <button >
                <FaEdit />
            </button>
        </Link>
    )

    return <span>
        <Link to={`/task/view/${props.value}`}>
            <button>
                <FaSearch />
            </button>
        </Link> {' '}
        {editButton} {' '}
        <Link to={`/task/remove/${props.value}`}>
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
        Header: 'Nombre',
        accessor: 'name',
        Cell: props => props.value
    },
    {
        Header: 'Precio',
        accessor: 'price',
        Cell: props => props.value
    },
    {
        Header: 'Acciones',
        accessor: 'id',
        Cell: renderToolbar
    }
]

export default columns;