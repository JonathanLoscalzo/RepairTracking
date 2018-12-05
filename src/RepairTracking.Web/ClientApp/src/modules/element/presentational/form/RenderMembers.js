import InputsList from './Inputs';
import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

export default (
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