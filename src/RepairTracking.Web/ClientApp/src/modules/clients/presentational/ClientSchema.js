
import messages from '../../../config/messages'
import * as yup from 'yup'
import '../../../helpers/YupConfig'

const schema = yup
    .object()
    .shape({
        firstname: yup.string()
            .required(messages.REQUIRED),
        lastname: yup.string()
            .required(messages.REQUIRED),
        email: yup.string()
            .email(messages.EMAIL)
            .required(messages.REQUIRED),
        document: yup.object().shape({
            type: yup.string()
                .notOneOf(['-1'], messages.OTHER)
                .required(messages.REQUIRED),
            number: yup.number()
                .typeError(messages.NUMERIC)
                .required(messages.REQUIRED)
        }),
        address: yup.object().shape({
            street: yup.string()
                .required(messages.REQUIRED),
            number: yup.number()
                .format()
                .nullable(true)
                .typeError(messages.NUMERIC),
            floor: yup.number()
                .format()
                .nullable(true)
                .typeError(messages.NUMERIC),
            depto: yup.number()
                .format()
                .nullable(true)
                .typeError(messages.NUMERIC),
        }),
        cellphone: yup.number()
            .format()
            .typeError(messages.NUMERIC)
            .required(messages.REQUIRED)
    })

export default schema;