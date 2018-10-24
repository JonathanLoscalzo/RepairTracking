import messages from '../../config/messages'
import * as yup from 'yup'
import '../../helpers/YupConfig'

const schema = yup
    .object()
    .shape({
        username: yup.string()
            .required(messages.REQUIRED),
        password: yup.string()
            .required(messages.REQUIRED)
    })

export default schema;