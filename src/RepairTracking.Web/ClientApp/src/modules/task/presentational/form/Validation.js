import * as yup from 'yup'
import '../../../../helpers/YupConfig'

const schema = yup
    .object()
    .shape({
        code: yup.string().required(),
        name: yup.string().required(),
        price: yup.string().required(),
        observations: yup.string().required(),
    })

export default schema;