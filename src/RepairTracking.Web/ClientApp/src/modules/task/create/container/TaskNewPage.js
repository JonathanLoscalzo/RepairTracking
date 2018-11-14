import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, formValueSelector } from 'redux-form'

import Form from '../../presentational/form/Form'
import { load, create, goBack, addTask, removeTask, addPiece, removePiece } from '../index';
import validator from '../../../../helpers/YupValidator'
import schema from '../../presentational/form/Validation';
import Spinner from '../../../common/loading/spinner'

class TaskNewPage extends React.Component {

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
    form: 'task/create',  // a unique identifier for this form
    validate: validator(schema),
})(Form)

const selector = formValueSelector('task/create');

const mapStateToProps = ({ task, ...state }) => ({
    task: task.create.task,
    loading: task.create.loading,
    error: task.create.error,
})

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        load,
        create,
        goBack,
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskNewPage)