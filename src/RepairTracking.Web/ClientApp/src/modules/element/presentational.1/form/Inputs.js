import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import { Row } from 'reactstrap'
import renderField from '../../../common/inputs/RenderField'
import selectable from '../../../common/inputs/Selectable';
import { FaTrash } from 'react-icons/fa';


export default class InputsForm extends React.Component {
    render() {
        const { fields, remove } = this.props;
        return (
            <ul className="list-group">
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
            </ul>
        )
    }
}

const InputRow = ({ member, index, fields, remove }) => {
    const item = fields.get(index)
    if (!!item.id) {
        return (
            <li className="col-12 list-group-item">
                <div className="form-row" key={index}>
                    <div className="col">
                        {`${item.name} - $${item.price}`}
                    </div>
                    <div className="col-1 d-flex align-items-center">
                        <button
                            type="button"
                            className="btn float-right btn-outline-danger"
                            title="Remove Member"
                            onClick={() => remove(fields, index, item)}>
                            <FaTrash />
                        </button>
                    </div>
                </div>
            </li >
        )
    } else {
        return (
            <li className="list-group-item">
                <div className="form-row" key={index}>
                    <div className="col-8">
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
            </li>
        )
    }
}