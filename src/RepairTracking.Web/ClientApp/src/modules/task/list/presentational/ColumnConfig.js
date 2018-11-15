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

    return <div style={{justifyContent:'center',
                        marginLeft: '40px'}}>
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
    </div>
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
        width: 150,
        Cell: props => props.value
    },
    {
        Header: () => (
            <div style={{
                textAlign: "left",
                fontWeight: 'bold'
            }}>
                Nombre
              </div>
        ),
        accessor: 'name',
        width: 450,
        Cell: props => props.value
    },
    {
        Header: () => (
            <div style={{
                textAlign: "left",
                fontWeight: 'bold'
            }}>
                Precio
              </div>
        ),
        accessor: 'price',
        width: 150,
        Cell: props => props.value
    },
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
        width: 150,
        Cell: renderToolbar
    }
]

export default columns;