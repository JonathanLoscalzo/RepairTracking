import React from 'react'
import {
    Input, InputGroup, CustomInput, Label
} from 'reactstrap'

const renderField = (props) => {
    const { client, input, label, type, meta: { touched, error } } = props
    return (
        <div className={`form-group ${touched && ((error ? 'has-error' : 'has-success'))}`}>
        <label className="control-label" htmlFor={input.name}>{label}</label>
            <div>
                <Input {...input} {...props} type="select" disabled>
                    <option key={1} value={client.id} selected>{client.firstname + ' ' + client.lastname}</option>
                </Input>
            </div>
        </div>
    )
}

export default renderField;