import React from 'react'
import RenderMembers from './RenderMembers';
import { FieldArray } from 'redux-form';
import FormToolbar from './Toolbar';
import { reduxForm } from 'redux-form';
import validator from '../../../../helpers/YupValidator'
import schema from '../../presentational/form/Validation';
import { Container } from 'reactstrap';

const CreatePage3 = (props) => {

    
  const style = {
      width: '800px'
  }
  
  const {
      pieces,
      addPiece,
      removePiece,
      handleSubmit
  } = props;

  return (
      <form onSubmit={handleSubmit}>
          <Container style={style}>
            <fieldset>
                <legend>Piezas</legend>
                <FieldArray
                    name="pieces"
                    component={RenderMembers}
                    items={pieces}
                    add={addPiece}
                    remove={removePiece}
                    label={"Piezas"}
                    named={"piece_selectables"}
                    placeholder={"Piezas"}
                />
            </fieldset>
            <FormToolbar {...props} text="Guardar"/>
          </Container>
      </form>
  )
}

export default reduxForm({
    form: 'element/create',  // a unique identifier for this form
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: validator(schema, ["pieces", "tasks"])
})(CreatePage3)
