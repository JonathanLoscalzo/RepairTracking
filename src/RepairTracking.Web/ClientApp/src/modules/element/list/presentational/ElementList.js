import React from 'react'
import ReactTable from 'react-table';
import columns from './ColumnConfig'
import Toolbar from './Toolbar'
import { Body, Wrapper, Header } from '../../../common/page'

export default props => {

    const { elements: data } = props;

    return (
        <Wrapper>
            <Header title="Listado de Elementos Reparables" />
            <Body>
                <div className="row">
                    <Toolbar {...props} />
                    <div className="col-12">
                        <ReactTable
                            {...props}
                            defaultPageSize={10}
                            className="-striped -highlight"
                            data={data}
                            columns={columns}
                        />
                    </div>
                </div>
            </Body>
        </Wrapper>
    )
}