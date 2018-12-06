import React from 'react'
import { Field } from 'redux-form';
import RenderField from '../../../../common/inputs/RenderField';
import { reduxForm } from 'redux-form';
import validator from '../../../../../helpers/YupValidator'
import schema from './Validation';
import FormToolbar from '../../../../element/presentational/form/Toolbar';
import Selectable from './Selectable';
import RenderFieldDisabled from './RenderFieldDisabled'

const CreatePage1 = (props) => {
  const { handleSubmit, client, elements } = props;
  return (
      <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Información</legend>
                <Field label="Elemento (*)" name="element" placeholder="Código" component={Selectable} type="select" elements={elements}/>
                <Field label="Monto (*)" name="amount" placeholder="Monto" component={RenderField} type="text" />
                <Field label="Cliente (*)" name="client" placeholder="Cliente" client={client} component={RenderFieldDisabled} />
                <Field label="Observaciones" name="observations" placeholder="Notas" component={RenderField} type="textarea" />
            </fieldset>
            <FormToolbar {...props} text="Siguiente"/>
          </form>
      </div>
  )
}

export default reduxForm({
    form: 'repair/create',  // a unique identifier for this form
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: validator(schema),
    onSubmitFail: (errors) => console.log('errores')
})(CreatePage1)