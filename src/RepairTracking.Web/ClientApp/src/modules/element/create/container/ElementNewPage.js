import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reset } from 'redux-form'

import Form from '../../presentational/form/Form'
import { load, create, goBack, addTask, removeTask, addPiece, removePiece } from '../index';
import Spinner from '../../../common/loading/spinner'

class ElementNewPage extends React.Component {

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
                <Form
                    {...this.props}
                    title="Nuevo elemento"
                    initialValues={this.props.element}
                    onSubmit={(values) => { this.props.create(values); this.props.reset('element/create')}}
                />
            </Spinner>
        )
    }
}

const mapStateToProps = ({ element, ...state }) => ({
    element: element.create.element,
    tasks: element.create.tasks,
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
        removePiece,
        reset
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ElementNewPage)