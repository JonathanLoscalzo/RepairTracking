import React from 'react'
import RenderMembers from './RenderMembers';
import { FieldArray } from 'redux-form';
import FormToolbar from './Toolbar';
import { reduxForm } from 'redux-form';
import validator from '../../../../helpers/YupValidator'
import schema from '../../presentational/form/Validation';
import { Container } from 'reactstrap'

const CreatePage2 = (props) => {

  const style = {
      width: '800px'
  }

  const {
      tasks,
      selected_task,
      addTask,
      removeTask,
      handleSubmit
  } = props;

  return (
      <form onSubmit={handleSubmit}>
        <Container style={style}>
            <fieldset>
                <legend>Tareas</legend>
                <FieldArray
                    name="tasks"
                    component={RenderMembers}
                    items={tasks}
                    add={addTask}
                    remove={removeTask}
                    label={"Tareas"}
                    named={"task_selectables"}
                    placeholder={"tareas"}
                />
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
    validate: validator(schema, ["pieces", "tasks"])
})(CreatePage2)
