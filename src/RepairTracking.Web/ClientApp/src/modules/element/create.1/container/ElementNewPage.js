import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, formValueSelector } from 'redux-form'

import Form from '../../presentational/form/Form'
import { load, create, goBack, addTask, removeTask, addPiece, removePiece } from '../index';
import validator from '../../../../helpers/YupValidator'
import schema from '../../presentational/form/Validation';
import Spinner from '../../../common/loading/spinner'

class OrderCreatePage extends React.Component {

    componentWillMount() {
        this.props.load()
    }

    componentDidUpdate(prevProps) {
        if (this.props.pristine && !prevProps.pristine) {
            debugger;
        }
    }

    render() {
        return (
            <Spinner loading={this.props.loading}>
                <CreateForm
                    {...this.props}
                    title="Nuevo"
                    initialValues={this.props.element}
                    onSubmit={(values) => { this.props.create(values); }}
                />
            </Spinner>
        )
    }
}

const CreateForm = reduxForm({
    form: 'element/create',  // a unique identifier for this form
    validate: validator(schema, ["pieces", "tasks"]),
})(Form)

const selector = formValueSelector('element/create');

const mapStateToProps = ({ element, ...state }) => ({
    element: element.create.element,
    tasks: element.create.tasks,
    selected_task: selector(state, 'task_selectables'),
    selected_piece: selector(state, 'piece_selectables'),
    pieces: element.create.pieces,
    loading: element.create.loading,
    error: element.create.error,
})

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        load,
        create,
        goBack,
        addTask,
        removeTask,
        addPiece,
        removePiece
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderCreatePage)