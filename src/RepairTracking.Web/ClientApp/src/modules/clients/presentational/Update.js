import React from 'react';
import { reduxForm } from 'redux-form';

import Validator from '../../../helpers/YupValidator'
import schema from './ClientSchema'
import ClientForm from './ClientForm'
import { Body, Header, Wrapper } from '../../common/page'

const UpdateForm = (props) => <ClientForm {...props} typeForm="Modificar" />;

const Update = (props) => {
    return (
        <Wrapper>
            <Header title='Modificar Cliente' />
            <Body title="Modificar Cliente">
                <UpdateForm {...props} />
            </Body>
        </Wrapper>
    )
}

export default reduxForm({
    form: 'client/update',
    validate: Validator(schema)
})(Update);