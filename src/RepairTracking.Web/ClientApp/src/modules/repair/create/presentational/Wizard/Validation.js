import * as yup from 'yup'
import '../../../../../helpers/YupConfig'
import messages from '../../../../../config/messages'

const schema = yup
    .object()
    .shape({
        element: yup.string().required(messages.REQUIRED),
        amount: yup.number().required(messages.REQUIRED),
        client: yup.string(),
        observations: yup.string()
    })

export default schema;