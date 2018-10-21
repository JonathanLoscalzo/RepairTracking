import React from 'react';
import {Card, Button, CardHeader, CardBody, InputGroup, Input, InputGroupAddon, InputGroupText, Col, Container, Row, FormGroup, Label} from 'reactstrap';
import {Field, reduxForm, FormSection, Form} from 'redux-form';
import * as yup from 'yup';

import RenderField from '../../common/inputs/RenderFieldUpdate';
import RenderSelectableField from '../../common/inputs/SelectableUpdate';
import Validator from '../../../helpers/YupValidator'


const schema = yup.object().shape({
    firstName: yup.string().required('El nombre es requerido'),
    lastName: yup.string().required('El apellido es requerido'),
    document: yup.object().shape({
        type: yup.string(),
        number: yup.number().typeError('Se esperaba un número').required('El número de documento es requerido')
    }),
    email: yup.string().email('Este email no respeta el formato').required('El email es requerido'),
    address: yup.object().shape({
        street: yup.string().required('La dirección es requerida'),
        number: yup.number().typeError('Se esperaba un número').nullable(true),
        floor: yup.number().typeError('Se esperaba un número').nullable(true),
        depto: yup.number().typeError('Se esperaba un número').nullable(true)
    }),
    cellphone: yup.number().required('Un teléfono de contacto es requerido'),
    telephone: yup.number().nullable(true)
});

const options = [
    { value: '1', label: 'DNI' },
    { value: '2', label: 'PASAPORTE' },
]

const UpdateForm = ({pristine, submitting, reset, handleSubmit, cancel}) => {
    return(
            <Form onSubmit={handleSubmit}>
                <Row>
                    <FormGroup className="col-md-6">
                        <Field label="Nombre *" name="firstName" placeholder="Nombre" component={RenderField} type="text" />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Field label="Apellido *" name="lastName"  placeholder="Apellido" component={RenderField} type="text" />
                    </FormGroup>
                </Row>
                <FormSection name="document">
                    <Row>
                        <FormGroup className="col-md-2">
                            <Field label="Tipo de documento" name="type" component={RenderSelectableField} type="select" options={options} />
                        </FormGroup>
                        <FormGroup className="col-md-10">
                            <Field label="Documento de identidad *" name="number"  placeholder="Documento de identidad" component={RenderField} type="text" />
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
                            <Field label="Altura" name="number"  placeholder="Altura" component={RenderField} type="text" />
                        </FormGroup>
                        <FormGroup className="col-md-2">
                            <Field label="Piso" name="floor"  placeholder="Piso" component={RenderField} type="text" />
                        </FormGroup>
                        <FormGroup className="col-md-2">
                            <Field label="Depto" name="depto"  placeholder="Depto" component={RenderField} type="text" />
                        </FormGroup>
                    </Row>
                    </FormSection>
                <Row>
                    <FormGroup className="col-md-4">
                        <Field label="Provincia" name="province"  placeholder="Provincia" component={RenderField} type="text" />
                    </FormGroup>
                    <FormGroup className="col-md-4">
                        <Field label="Ciudad" name="city"  placeholder="Ciudad" component={RenderField} type="text" />
                    </FormGroup>
                    <FormGroup className="col-md-4">
                        <Field label="Código postal" name="cp"  placeholder="CP" component={RenderField} type="text" />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup className="col-md-6">
                        <Field label="Teléfono celular *" name="cellphone"  placeholder="Teléfono celular" component={RenderField} type="text" />  
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Field label="Teléfono adicional" name="additionalTel"  placeholder="Teléfono adicional" component={RenderField} type="text" />
                    </FormGroup>
                </Row>
                <div className="clearfix">
                    <Button color="default" className="float-right ml-2" onClick={() => cancel()}>Cancelar</Button>
                    <Button color="primary" type="submit" className="float-right" disabled={submitting}>Modificar</Button>
                    <span className="float-left mt-2 text-danger"><small>* Campo requerido</small></span>
                </div>
            </Form>
    );
};

const Update = (props) => {
    return (
        <div id="wrapper">
            <div className="wrapper-header">
                <div className="col-lg">
                </div>
            </div>
            <div className="wrapper-body py-4">
                <Container>
                    <Card>
                        <CardHeader className="text-white bg-secondary"><b>Modificar Cliente</b></CardHeader>
                        <CardBody className="mx-3 my-3">
                            <UpdateForm {...props} />
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'client/update',
    validate: Validator(schema) 
})(Update);