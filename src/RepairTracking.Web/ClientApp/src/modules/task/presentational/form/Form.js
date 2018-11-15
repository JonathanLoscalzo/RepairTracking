import React, { Fragment } from 'react'
import { FaPlusCircle } from 'react-icons/fa';
import { FieldArray, Field } from 'redux-form';
import { Row, FormGroup, Button } from 'reactstrap'

import FormToolbar from './Toolbar';

import RenderField from '../../../common/inputs/RenderField'
import { Body, Wrapper, Header } from '../../../common/page'

export default props => {
    const {
        handleSubmit,
        title,
    } = props
    return (
        <Wrapper>
            <Header title={title} />
            <Body >
                <form onSubmit={handleSubmit}>
                    <Row>
                        <FormGroup className="col-6">
                            <fieldset>
                                <legend>Información</legend>
                                <Field label="Código (*)" name="code" placeholder="Código" component={RenderField} type="text" />
                                <Field label="Nombre (*)" name="name" placeholder="Nombre" component={RenderField} type="text" />
                                <Field label="Precio (*)" name="price" placeholder="Precio" component={RenderField} type="text" />
                                <Field label="Observaciones" name="observations" placeholder="Observaciones" component={RenderField} type="textarea" />
                            </fieldset>
                        </FormGroup>
                    </Row>
                    <FormToolbar {...props} />
                </form>
            </Body>
        </Wrapper >
    )
}
