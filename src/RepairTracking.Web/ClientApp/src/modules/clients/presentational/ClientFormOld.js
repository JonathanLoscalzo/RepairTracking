import React from 'react'
import { Field, FormSection } from 'redux-form';

import RenderField from '../../common/inputs/RenderFieldUpdate';
import RenderSelectableField from '../../common/inputs/Selectable';

const options = [
    { value: '-1', label: 'SELECCIONÁ' },
    { value: '0', label: 'DNI' },
    { value: '1', label: 'PASAPORTE' },
]

export default ({ submitting, handleSubmit, cancel, pristine, reset, typeForm }) =>
    <form onSubmit={handleSubmit}>
        <div className="form-row">
            <div className="col">
                <Field label="Nombre" name="firstName" component={RenderField} type="text" />
            </div>
            <div className="col">
                <Field label="Apellido" name="lastName" component={RenderField} type="text" />
            </div>
        </div>
        <div className="form-row">
            <div className="col">
                <Field label="Email" name="email" component={RenderField} type="text" />
            </div>
            <div className="col">
                <FormSection className="row" name="document">
                    <div className="col-md-5">
                        <Field label="Tipo Documento" name="type" options={options} component={RenderSelectableField} type="select" />
                    </div>
                    <div className="col-md-7">
                        <Field label="Número" name="number" component={RenderField} type="text" />
                    </div>
                </FormSection>
            </div>
        </div>
        <FormSection className="form-row" name="address">
            <div className="col-md-5">
                <Field label="Domicilio" name="street" component={RenderField} type="text" />
            </div>
            <div className="col">
                <Field label="Altura" name="number" component={RenderField} type="text" />
            </div>
            <div className="col">
                <Field label="Piso" name="floor" component={RenderField} type="text" />
            </div>
            <div className="col">
                <Field label="Depto" name="depto" component={RenderField} type="text" />
            </div>
        </FormSection>
        <div className="form-row ">
            <FormSection name="location">
                {/* TODO Falta autocomplete de ciudad, provincia postal */}
            </FormSection>
        </div>
        <div className="form-row">
            <div className="col">
                <Field label="Celular" name="cellphone" component={RenderField} type="text" />
            </div>
            <div className="col">                 <Field label="Teléfono Adicional" name="telephone" component={RenderField} type="text" />
            </div>
        </div>
        <div>
            <button type="submit" className="mr-2 btn btn-primary" disabled={submitting}>{typeForm}</button>
            <button type="button" className="mr-2 btn btn-default" disabled={pristine || submitting} onClick={reset}>Reset</button>
            <button type="button" className="mr-2 btn btn-default" onClick={() => cancel()}>Volver</button>
        </div>
    </form >