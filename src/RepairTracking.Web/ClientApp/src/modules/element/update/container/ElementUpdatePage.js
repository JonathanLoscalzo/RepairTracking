import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, formValueSelector } from 'redux-form'

import Form from '../../presentational/form/Form'
import { load, update, goBack, addTask, removeTask, addPiece, removePiece } from '../index';
import validator from '../../../../helpers/YupValidator'
import schema from '../../presentational/form/Validation';
import Spinner from '../../../common/loading/spinner'

class ElementUpdatePage extends React.Component {

    componentWillMount() {
        this.props.load(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        if (this.props.pristine && !prevProps.pristine) {
            debugger;
        }
    }

    render() {
        return (
            <Spinner loading={this.props.loading}>
                <UpdateForm
                    {...this.props}
                    title="Editar"
                    initialValues={this.props.element}
                    onSubmit={(values) => { this.props.update(values); }}
                />
            </Spinner>
        )
    }
}

const UpdateForm = reduxForm({
    form: 'element/update',  // a unique identifier for this form
    validate: validator(schema, ["pieces", "tasks"]),
    enableReinitialize: true
})(Form)

const selector = formValueSelector('element/update');

const mapStateToProps = ({ element, ...state }) => ({
    element: element.update.element,
    tasks: element.update.tasks,
    selected_task: selector(state, 'task_selectables'),
    selected_piece: selector(state, 'piece_selectables'),
    pieces: element.update.pieces,
    loading: element.update.loading,
    error: element.update.error,
})

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        load,
        update,
        goBack,
        addTask,
        removeTask,
        addPiece,
        removePiece
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ElementUpdatePage)