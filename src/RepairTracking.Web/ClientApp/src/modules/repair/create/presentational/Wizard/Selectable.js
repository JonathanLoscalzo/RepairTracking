import React, { Fragment } from 'react';
import {
    Input
} from 'reactstrap';

const renderField = (props) => {
    const { elements, input, label, type, options, meta: { touched, error } } = props;
    return (
        <Fragment>
            <div className={`form-group ${touched && ((error ? 'has-error' : 'has-success'))}`}>
                <label className="control-label" htmlFor={input.name}>{label}</label>
                <div>
                    <div >
                        <Input valid={touched && !error} invalid={touched && error} {...input} {...props}>
                            <option key={0} selected>Seleccionar</option>
                            {elements.map( (each, index) => (
                                <option key={index + 1} value={each.id}>{each.name}</option>
                            ))}
                        </Input>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default renderField;