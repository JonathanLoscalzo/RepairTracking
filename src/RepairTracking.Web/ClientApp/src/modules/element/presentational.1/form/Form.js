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
                            <Field label="Código" name="code" placeholder="Código" component={RenderField} type="text" />
                            <Field label="Nombre" name="name" placeholder="Nombre" component={RenderField} type="text" />
                            <Field label="Marca" name="brand" placeholder="Marca" component={RenderField} type="text" />
                            <Field label="Observaciones" name="observations" placeholder="Apellido" component={RenderField} type="textarea" />
                        </FormGroup>
                        <FormGroup className="col-6">
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
                        </FormGroup>
                    </Row>
                    <FormToolbar {...props} />
                </form>
            </Body>
        </Wrapper>
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
        <div className="">
            <ToolbarMembers
                fields={fields}
                selected={selected}
                items={items.map(x => new Object({ value: x.id, label: x.name, ...x }))}
                label={label}
                name={named}
                placeholder={placeholder}
                add={add} />

            <div className="card-body">
                <InputsList
                    fields={fields}
                    remove={remove}
                />
            </div>
        </div>
    )

const ToolbarMembers = ({ fields, items, selected, add, label, name, placeholder }) => {
    let field = (<Field
        label={label}
        name={name}
        placeholder={placeholder}
        component={Selectable}
        type="select"
        options={items}
    />)
    return (
        <div className="form-row">
            <div className="col-6">
                {field}
            </div>
            <div className=" col-3 btn-group"
                role="group"
                aria-label="Basic example">
                <button type="button"
                    className="btn btn-info"
                    onClick={(elem) => {
                        add(fields, selected);
                    }}>
                    <FaPlusCircle /> Seleccionar
                    </button>
                <button type="button"
                    className="btn btn-info"
                    onClick={() => { fields.push({}) }}>
                    <FaPlusCircle /> Nuevo
                    </button>
            </div>
        </div>)
}