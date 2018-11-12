import * as yup from 'yup'
import '../../../../helpers/YupConfig'

const schema = yup
    .object()
    .shape({
        code: yup.string().required(),
        name: yup.string().required(),
        brand: yup.string().required(),
        pieces: yup.array().of(yup.object().shape({
            name: yup.string().required(),
            price: yup.string().required()
        })).notOneOf(['-1'], "asdf"),
        tasks: yup.array().of(yup.object().shape({
            name: yup.string().required(),
            price: yup.string().required()
        })).notOneOf(['-1'], "asdf"),
        observations: yup.string().required(),
    })

export default schema;