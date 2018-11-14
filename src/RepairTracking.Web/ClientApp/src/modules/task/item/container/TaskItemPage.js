import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../../../common/loading/spinner'
import ElementItem from '../presentational/TaskItem'
import { load, goBack } from '../index';

class ElementItemPage extends React.Component {

    componentWillMount() {
        this.props.load(this.props.match.params.id)
    }

    render() {
        return (
            <Spinner loading={this.props.loading}>
                <ElementItem {...this.props} />
            </Spinner>
        )
    }
}

const mapStateToProps = ({ task }) => ({
    task: task.item.task,
    loading: task.item.loading,
    error: task.item.error,
    isOpen: task.item.isOpen
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ load, goBack }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ElementItemPage)