import * as yup from 'yup'
import '../../../../helpers/YupConfig'
import messages from '../../../../config/messages'

const schema = yup
    .object()
    .shape({
        code: yup.string().required(messages.REQUIRED),
        name: yup.string().required(messages.REQUIRED),
        price: yup.number().typeError(messages.NUMERIC).required(messages.REQUIRED),
        observations: yup.string(),
    })

export default schema;