import React, { Fragment } from 'react'
import { FaPlusCircle } from 'react-icons/fa';
import { FieldArray, Field } from 'redux-form';
import { Row, FormGroup, Button } from 'reactstrap'

import FormToolbar from './Toolbar';
import InputsList from './Inputs'

import RenderField from '../../../common/inputs/RenderField'
import Selectable from '../../../common/inputs/Selectable'
import { Body, Wrapper, Header } from '../../../common/page'

export default props => {
    const {
        handleSubmit,
        title,

        selected_task,
        tasks,
        addTask,
        removeTask,

        pieces,
        addPiece,
        removePiece,
        selected_piece
    } = props
    return (
        <Wrapper>
            <Header title={title} />
            <Body >
                <form onSubmit={handleSubmit}>
                    <Row>
                        <FormGroup className="col-6">
                            <fieldset>
                                <legend>Información</legend>
                                <Field label="Código" name="code" placeholder="Código" component={RenderField} type="text" />
                                <Field label="Nombre" name="name" placeholder="Nombre" component={RenderField} type="text" />
                                <Field label="Marca" name="brand" placeholder="Marca" component={RenderField} type="text" />
                                <Field label="Observaciones" name="observations" placeholder="Apellido" component={RenderField} type="textarea" />
                            </fieldset>
                        </FormGroup>
                        <FormGroup className="col-6">
                            <fieldset>
                                <legend>Tareas</legend>
                                <FieldArray
                                    name="tasks"
                                    component={renderMembers}
                                    items={tasks}
                                    selected={selected_task}
                                    add={addTask}
                                    remove={removeTask}
                                    label={"Tareas"}
                                    named={"task_selectables"}
                                    placeholder={"tareas"}
                                />
                            </fieldset>
                            <fieldset>
                                <legend>Piezas</legend>
                                <FieldArray
                                    name="pieces"
                                    component={renderMembers}
                                    items={pieces}
                                    selected={selected_piece}
                                    add={addPiece}
                                    remove={removePiece}
                                    label={"Piezas"}
                                    named={"piece_selectables"}
                                    placeholder={"Piezas"}
                                />
                            </fieldset>
                        </FormGroup>
                    </Row>
                    <FormToolbar {...props} />
                </form>
            </Body>
        </Wrapper >
    )
}

const renderMembers = (
    {
        fields,
        meta: {
            touched,
            error,
            submitFailed
        },
        items,
        selected,
        add,
        remove,
        label,
        named,
        placeholder }
) => (
        <div className="border">
            <div className="card-body">
                <ToolbarMembers
                    fields={fields}
                    selected={selected}
                    items={items.map(x => new Object({ value: x.id, label: x.name, ...x }))}
                    label={label}
                    name={named}
                    placeholder={placeholder}
                    add={add} />
                    
                <InputsList
                    fields={fields}
                    remove={remove}
                />
            </div>
        </div>
    )

const ToolbarMembers = ({ fields }) => {

    return (
        <div className="col-3 btn-group"
            role="group"
            aria-label="Basic example">

            <button type="button"
                className="btn btn-info"
                onClick={() => { fields.push({}) }}>
                <FaPlusCircle /> Nuevo
                </button>
        </div>)
}