import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import renderField from '../../../common/inputs/RenderField'
import { FaTrash } from 'react-icons/fa';


export default class InputsForm extends React.Component {
    render() {
        const { fields, remove } = this.props;
        return (
            <div>
                {
                    fields.map((member, index) => (
                        <InputRow
                            key={index}
                            member={member}
                            index={index}
                            fields={fields}
                            remove={remove} />)
                    )
                }
            </div>
        )
    }
}

const InputRow = ({ member, index, fields, remove }) => {
    const item = fields.get(index)

    return (
        <div className="form-row" key={index}>
            <div className="col-11">
                <div className="form-row">
                    <div className="col-9">
                        <Field
                            name={`${member}.name`}
                            type="text"
                            component={renderField}
                            label={`Nombre`} />
                    </div>
                    <div className="col-3">
                        <Field
                            name={`${member}.price`}
                            type="text"
                            component={renderField}
                            label={`Precio`} />
                    </div>
                </div>
            </div>
            <div className="col-1 d-flex align-items-center">
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    title="Remove Member"
                    onClick={() => remove(fields, index)}>
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}