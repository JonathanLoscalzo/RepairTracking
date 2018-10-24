import React from 'react'
import { Row, FormGroup, Button } from 'reactstrap'
import { Field, FormSection, Form } from 'redux-form';

import RenderField from '../../common/inputs/RenderFieldUpdate';
import RenderSelectableField from '../../common/inputs/Selectable';

const options = [
    { value: '-1', label: 'Elija una opción' },
    { value: '0', label: 'DNI' },
    { value: '1', label: 'PASAPORTE' },
]

export default ({ submitting, handleSubmit, cancel, typeForm }) => {
    return <Form onSubmit={handleSubmit}>
        <Row>
            <FormGroup className="col-md-6">
                <Field label="Nombre *" name="firstname" placeholder="Nombre" component={RenderField} type="text" />
            </FormGroup>
            <FormGroup className="col-md-6">
                <Field label="Apellido *" name="lastname" placeholder="Apellido" component={RenderField} type="text" />
            </FormGroup>
        </Row>
        <FormSection name="document">
            <Row>
                <FormGroup className="col-md-4">
                    <Field label="Tipo de documento" name="type" component={RenderSelectableField} type="select" options={options} />
                </FormGroup>
                <FormGroup className="col-md-8">
                    <Field label="Documento de identidad *" name="number" placeholder="Documento de identidad" component={RenderField} type="text" />
                </FormGroup>
            </Row>
        </FormSection>
        <Row>
            <FormGroup className="col-md-6">
                <Field label="Email *" name="email" placeholder="Email" component={RenderField} type="text" />
            </FormGroup>
        </Row>
        <FormSection name="address">
            <Row>
                <FormGroup className="col-md-6">
                    <Field label="Dirección *" name="street" placeholder="Dirección" component={RenderField} type="text" />
                </FormGroup>
                <FormGroup className="col-md-2">
                    <Field label="Altura" name="number" placeholder="Altura" component={RenderField} type="text" />
                </FormGroup>
                <FormGroup className="col-md-2">
                    <Field label="Piso" name="floor" placeholder="Piso" component={RenderField} type="text" />
                </FormGroup>
                <FormGroup className="col-md-2">
                    <Field label="Depto" name="depto" placeholder="Depto" component={RenderField} type="text" />
                </FormGroup>
            </Row>
        </FormSection>
        {/* <Row style={{display: 'none'}}>
            <FormGroup className="col-md-4">
                <Field label="Provincia" name="province" placeholder="Provincia" component={RenderField} type="text" />
            </FormGroup>
            <FormGroup className="col-md-4">
                <Field label="Ciudad" name="city" placeholder="Ciudad" component={RenderField} type="text" />
            </FormGroup>
            <FormGroup className="col-md-4">
                <Field label="Código postal" name="cp" placeholder="CP" component={RenderField} type="text" />
            </FormGroup>
        </Row> */}
        <Row>
            <FormGroup className="col-md-6">
                <Field label="Teléfono celular *" name="cellphone" placeholder="Teléfono celular" component={RenderField} type="text" />
            </FormGroup>
            <FormGroup className="col-md-6">
                <Field label="Teléfono adicional" name="telephone" placeholder="Teléfono adicional" component={RenderField} type="text" />
            </FormGroup>
        </Row>
        <div className="clearfix">
            <Button color="default" className="float-right ml-2" onClick={() => cancel()}>Cancelar</Button>
            <Button color="primary" type="submit" className="float-right" disabled={submitting}>{typeForm}</Button>
            <span className="float-left mt-2 text-danger"><small>* Campo requerido</small></span>
        </div>
    </Form>
}