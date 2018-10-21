import React from 'react';
import {Card, Button, CardHeader, CardBody, InputGroup, Input, InputGroupAddon, InputGroupText, Col, Container, Row, FormGroup, Label, Form} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';

import RenderField from '../../common/inputs/RenderFieldUpdate';



const UpdateForm = ({pristine, submiting, reset, handleSubmit, cancel, update, client}) => {
    return(
            <form onSubmit={handleSubmit}>
                <Row>
                    <FormGroup className="col-md-6">
                        <Field label="Nombre" name="firstName" component={RenderField} type="text" />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Field label="Apellido" name="lastName" component={RenderField} type="text" />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup className="col-md-2">
                        <Label for="exampleSelect">Tipo de documento</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>DNI</option>
                            <option>Pasaporte</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className="col-md-10">
                        <Field label="Documento de identidad" name="number" component={RenderField} type="text" />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup className="col-md-6">
                        <Field label="Email" name="email" component={RenderField} type="text" />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup className="col-md-6">
                        <Field label="Dirección" name="street" component={RenderField} type="text" />
                    </FormGroup>
                    <FormGroup className="col-md-2">
                        <Field label="Altura" name="number" component={RenderField} type="text" />
                    </FormGroup>
                    <FormGroup className="col-md-2">
                        <Field label="Piso" name="floor" component={RenderField} type="text" />
                    </FormGroup>
                    <FormGroup className="col-md-2">
                        <Field label="Depto" name="depto" component={RenderField} type="text" />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup className="col-md-4">
                        <Field label="Provincia" name="province" component={RenderField} type="text" />
                    </FormGroup>
                    <FormGroup className="col-md-4">
                        <Field label="Ciudad" name="city" component={RenderField} type="text" />
                    </FormGroup>
                    <FormGroup className="col-md-4">
                        <Field label="Código postal" name="cp" component={RenderField} type="text" />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup className="col-md-6">
                        <Field label="Teléfono celular" name="cellphone" component={RenderField} type="text" />  
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Field label="Teléfono adicional" name="aditonalTelephone" component={RenderField} type="text" />
                    </FormGroup>
                </Row>
                <div className="clearfix">
                    <Button color="default" className="float-right ml-2" onClick={() => cancel()}>Cancelar</Button>
                    <Button color="primary"className="float-right" onClick={() => update(client)}>Modificar</Button>
                </div>
            </form>
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
    form: 'updateForm'
})(Update);