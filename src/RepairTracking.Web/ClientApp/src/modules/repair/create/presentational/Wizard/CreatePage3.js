import React from 'react';
import FormToolbar from '../../../../element/presentational/form/Toolbar';
import { Field } from 'redux-form';
import RenderField from '../../../../common/inputs/RenderField';
import { reduxForm } from 'redux-form';
import validator from '../../../../../helpers/YupValidator'
import schema from './Validation';
import Selectable from '../../../../common/inputs/Selectable';
import RenderFieldDisabled from './RenderFieldDisabled'

const CreatePage3 = (props) => {
  return (
    <div>
        <form onSubmit={props.handleSubmit}>
            <h4>Futura feature: "Seleccionar Tareas Genéricas"</h4>
            <FormToolbar {...props} text="Guardar"/>
        </form>
    </div>
  )
}

export default reduxForm({
    form: 'repair/create',  // a unique identifier for this form
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: validator(schema),
})(CreatePage3)
