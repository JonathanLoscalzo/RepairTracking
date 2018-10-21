import React from 'react';
import {Label, Input, FormFeedback} from 'reactstrap';


const RenderFieldUpdate = (props) => {
  const {input: { name} , label, type, meta: {error, touched}} = props;
  return (
    <div className="px-0 py-0">
        <Label for={ name }>{ label }</Label>
        <Input invalid={ touched && error } valid={ touched && !error } {...props} name={ name } id={ name } placeholder={ label }></Input>
        <FormFeedback>{ error }</FormFeedback>
    </div>
  )
}

export default RenderFieldUpdate;