import React from 'react'
import ReactTable from 'react-table';
import columns from './ColumnConfig'
import Toolbar from './Toolbar'
import {Row, Container, Col} from "reactstrap";
import { Body, Wrapper, Header } from '../../../common/page'

export default props => {

    const { tasks: data } = props;

    return (
        <Wrapper>
            <Header title="Listado de Tareas Génericas" />
            <Body>
                <Row>
                    <Toolbar {...props}/>
                </Row>
                    <Col md={{ size: 7, offset: 3 }} style={{marginLeft:"350px"}}>
                        <ReactTable
                            {...props}
                            defaultPageSize={10}
                            className="-striped -highlight"
                            data={data}
                            columns={columns}
                            previousText="Anterior"
                            nextText="Siguiente"
                            showPageSizeOptions= {false}
                            pageText= "Página"
                            ofText= "de"
                        />
                    </Col>
            </Body>
        </Wrapper>
    )
}