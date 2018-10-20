import React from 'react'
import { Field, FormSection, reduxForm } from 'redux-form'
import {
    Card, CardBody, CardTitle
} from 'reactstrap'

import * as yup from 'yup'
import Validator from '../../../helpers/YupValidator'
import renderField from '../../common/inputs/RenderField'
import selectable from '../../common/inputs/Selectable'

const options = [
    { value: '1', label: 'DNI' },
    { value: '2', label: 'PASAPORTE' },
]

const MyForm = (props) => {
    const { handleSubmit, pristine, reset, submitting, cancel } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="col">
                    <Field label="Nombre" name="firstName" component={renderField} type="text" />
                </div>
                <div className="col">
                    <Field label="Apellido" name="lastName" component={renderField} type="text" />
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <Field label="Email" name="email" component={renderField} type="text" />
                </div>
                <div className="col">
                    <FormSection className="row" name="document">
                        <div className="col-md-4">
                            <Field label="Tipo Documento" name="type" options={options} component={selectable} type="select" />
                        </div>
                        <div className="col-md-8">
                            <Field label="Número" name="number" component={renderField} type="text" />
                        </div>
                    </FormSection>
                </div>
            </div>
            <FormSection className="form-row" name="address">
                <div className="col-md-5">
                    <Field label="Domicilio" name="street" component={renderField} type="text" />
                </div>
                <div className="col">
                    <Field label="Altura" name="number" component={renderField} type="text" />
                </div>
                <div className="col">
                    <Field label="Piso" name="floor" component={renderField} type="text" />
                </div>
                <div className="col">
                    <Field label="Depto" name="depto" component={renderField} type="text" />
                </div>
            </FormSection>
            <div className="form-row ">
                <FormSection name="location">
                    {/* TODO Falta autocomplete de ciudad, provincia postal */}
                </FormSection>
            </div>
            <div className="form-row">
                <div className="col">
                    <Field label="Celular" name="cellphone" component={renderField} type="text" />
                </div>
                <div className="col">

                    <Field label="Teléfono Adicional" name="telephone" component={renderField} type="text" />
                </div>
            </div>
            <div>
                <button type="submit" className="mr-2 btn btn-primary" disabled={submitting}>Crear</button>
                <button type="button" className="mr-2 btn btn-default" disabled={pristine || submitting} onClick={reset}>Reset</button>
                <button type="button" className="mr-2 btn btn-default" onClick={() => cancel()}>Volver</button>
            </div>
        </form >)
}

const Create = (props) => {
    return (
        <div id="wrapper">
            <div className="wrapper-header">
                <div className="col-lg">
                    <h1 className="page-header">Nuevo Cliente</h1>
                </div>
            </div>
            <div className="wrapper-body">
                <div className="row">
                    <div className="col-md">
                        <Card>
                            <CardBody>
                                <CardTitle> </CardTitle>
                                <MyForm className="well" {...props} />
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>)
}

const schema = yup
    .object()
    .shape({
        firstName: yup.string().required('Este campo es requerido'),
        lastName: yup.string().required('Este campo es requerido'),
        email: yup.string().email('Este campo no respeta el formato de email').required('Este campo es requerido'),
        document: yup.object().shape({
            type: yup.string().required('Este campo es requerido'),
            number: yup.number().required('Este campo es requerido')
        }),
        address: yup.object().shape({
            street: yup.string().required('Este campo es requerido'),
            number: yup.number().nullable(true).typeError('Campo Númerico'),
            floor: yup.number().nullable(true).typeError('Campo Númerico'),
            depto: yup.number().nullable(true).typeError('Campo Númerico'),
        }),
        cellphone: yup.number().typeError('Campo Númerico').required('Este campo es requerido')
    })

export default reduxForm({
    form: 'client/create',  // a unique identifier for this form
    validate: Validator(schema)
})(Create)