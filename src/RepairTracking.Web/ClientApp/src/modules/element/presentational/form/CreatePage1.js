import React from 'react';
import { Field } from 'redux-form';
import FormToolbar from './Toolbar';
import RenderField from '../../../common/inputs/RenderField';
import { reduxForm } from 'redux-form';
import validator from '../../../../helpers/YupValidator'
import schema from '../../presentational/form/Validation';
import { Container } from 'reactstrap'

const style = {
    width: '800px'
}

const CreatePage1 = (props) => {
    const {
        handleSubmit
    } = props;
  return (
    <form onSubmit={handleSubmit}>
        <Container style={style} >
                    <fieldset>
                        <legend>Información</legend>
                        <Field label="Código (*)" name="code" placeholder="Código" component={RenderField} type="text" />
                        <Field label="Nombre (*)" name="name" placeholder="Nombre" component={RenderField} type="text" />
                        <Field label="Marca (*)" name="brand" placeholder="Marca" component={RenderField} type="text" />
                        <Field label="Observaciones" name="observations" placeholder="Apellido" component={RenderField} type="textarea" />
                    </fieldset>
                    <FormToolbar {...props} text="Siguiente"/>
        </Container>
    </form>
  )
}

export default reduxForm({
    form: 'element/create',  // a unique identifier for this form
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: validator(schema, ["pieces", "tasks"]),
})(CreatePage1)
