import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../../../common/loading/spinner'
import ElementList from '../presentational/TaskList'
import TaskNewPage from '../../create/container/TaskNewPage'
import TaskUpdatePage from '../../update/container/TaskUpdatePage'
import TaskRemovePage from '../../remove/container/TaskRemovePage';
import TaskItemPage from '../../item/container/TaskItemPage';

import { load, goToCreate, goToEdit } from '../index';

class TaskListPage extends React.Component {

    componentDidMount() {
        this.props.load();
    }

    render() {
        return (
            <Spinner loading={this.props.loading}>
                <Switch>
                    <Route path={`${this.props.match.url}/new`} component={TaskNewPage} />
                    <Route path={`${this.props.match.url}/edit/:id`} component={TaskUpdatePage} />
                    <ElementList {...this.props} />
                </Switch>
                <Route path={`${this.props.match.url}/remove/:id`} component={TaskRemovePage} />
                <Route path={`${this.props.match.url}/view/:id`} component={TaskItemPage} />
            </Spinner>
        )
    }
}

const mapStateToProps = ({ task }) => ({
    tasks: task.list.tasks,
    loading: task.list.loading,
    error: task.list.error
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ load, goToCreate, goToEdit }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskListPage)