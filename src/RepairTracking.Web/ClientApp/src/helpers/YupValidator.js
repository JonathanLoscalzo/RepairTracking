import { set } from "lodash";

const Validator = schema => values => {
    const formErrors = {};
    try {
        schema.validateSync(values, { abortEarly: false });
    } catch (errors) {
        errors.inner.forEach((error) => {
            set(formErrors, error.path, error.message);
        });
    }
    return formErrors;
}

export default Validator;