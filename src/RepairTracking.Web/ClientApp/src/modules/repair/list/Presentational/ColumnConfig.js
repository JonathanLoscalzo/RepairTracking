import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa'

const renderToolbar = ({ ...props }) => {
    let editButton;
    editButton = (
        <Link to={`/repair/edit/${props.value}`}>
            <button >
                <FaEdit />
            </button>
        </Link>
    )

    return <span>
        <Link to={`/repair/view/${props.value}`}>
            <button>
                <FaSearch />
            </button>
        </Link> {' '}
        {editButton} {' '}
        <Link to={`/repair/remove/${props.value}`}>
            <button>
                <FaTrash />
            </button>
        </Link>
    </span>
}

const columns = [
    {
        Header: () => (
            <div style={{
                textAlign: "left",
                fontWeight: 'bold'
            }}>
                Código
              </div>
        ),
        accessor: 'code',
        width:125,
        Cell: props => props.value
    },
    {
        Header: () => (
            <div style={{
                textAlign: "left",
                fontWeight: 'bold'
            }}>
                Elemento
              </div>
        ),
        width:350,
        accessor: 'element.name',
        Cell: props => props.value
    },
    {
        Header: () => (
            <div style={{
                textAlign: "left",
                fontWeight: 'bold'
            }}>
                Estado 
              </div>
        ),
        accessor: 'status',
        width:350,
        Cell: props => props.value
    },
/*    {
        Header: () => (
            <div style={{
                textAlign: "left",
                fontWeight: 'bold'
            }}>
                Cantidad Piezas
              </div>
        ),
        accessor: 'pieces',
        width:150,
        Cell: props => props.value.length
    },
    {
        Header: () => (
            <div style={{
                textAlign: "left",
                fontWeight: 'bold'
            }}>
                Cantidad Tareas
              </div>
        ),
        accessor: 'tasks',
        width:150,
        Cell: props => { return props.value.length }
    },*/
    {
        Header: () => (
            <div style={{
                textAlign: "left",
                fontWeight: 'bold'
            }}>
                Acciones
              </div>
        ),
        accessor: 'id',
        width:150,
        Cell: renderToolbar
    }
]

export default columns;