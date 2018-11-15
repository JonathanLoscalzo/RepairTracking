import * as yup from 'yup'
import '../../../../helpers/YupConfig'
import messages from '../../../../config/messages'

const schema = yup
    .object()
    .shape({
        code: yup.string().required(messages.REQUIRED),
        name: yup.string().required(messages.REQUIRED),
        brand: yup.string().required(messages.REQUIRED),
        pieces: yup.array().of(yup.object().shape({
            name: yup.string().required(messages.REQUIRED),
            price: yup.number().typeError(messages.NUMERIC).required(messages.REQUIRED)
        })).notOneOf(['-1'], "asdf"),
        tasks: yup.array().of(yup.object().shape({
            name: yup.string().required(messages.REQUIRED),
            price: yup.number().typeError(messages.NUMERIC).required(messages.REQUIRED)
        })).notOneOf(['-1'], "asdf"),
        observations: yup.string(),
    })

export default schema;