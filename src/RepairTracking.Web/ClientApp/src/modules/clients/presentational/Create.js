import React from 'react'
import { reduxForm } from 'redux-form'

import Validator from '../../../helpers/YupValidator'
import schema from './ClientSchema'

import ClientForm from './ClientForm'
import { Body, Header, Wrapper } from '../../common/page'

const CreateForm = (props) => <ClientForm {...props} typeForm="Crear" />

const Create = (props) => (
    <Wrapper>
        <Header title='Nuevo Cliente' />
        <Body title="Crear Cliente">
            <CreateForm {...props} />
        </Body>
    </Wrapper>
)


export default reduxForm({
    form: 'client/create',  // a unique identifier for this form
    validate: Validator(schema)
})(Create)