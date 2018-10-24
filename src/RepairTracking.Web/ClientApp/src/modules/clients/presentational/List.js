import React from 'react';
import { Body, Header, Wrapper } from '../../common/page'

import EmptyRow from './components/EmptyRow'
import Row from './components/Row'

const List = ({ clients, goToEdit, goToCreate, goToShow }) => {
    return (
        <Wrapper>
            <Header title={'Listado de Clientes'} />
            <Body>
                <div className="table-wrapper row">
                    <div className="table-toolbar mb-2 ml-auto">
                        <button
                            onClick={() => goToCreate()}
                            type="button"
                            className="ml-auto btn btn-info add-new">
                            <i className="fa fa-plus"></i> Nuevo Cliente
                        </button>
                    </div>
                    <table className="table table-sm table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Teléfono de contacto</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.length > 0
                                ? clients.map((client, index) => (
                                    <Row client={client}
                                        index={index}
                                        key={index}
                                        goToEdit={(id) => goToEdit(id)}
                                        goToShow={(id) => goToShow(id)} />
                                ))
                                : <EmptyRow />}

                        </tbody>
                    </table>
                </div>
            </Body >
        </Wrapper >
    )
}

export default List;