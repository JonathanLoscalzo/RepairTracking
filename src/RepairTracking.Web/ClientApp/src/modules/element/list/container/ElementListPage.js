import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../../../common/loading/spinner'
import ElementList from '../presentational/ElementList'
import ElementNewPage from '../../create/container/ElementNewPage'
import ElementUpdatePage from '../../update/container/ElementUpdatePage'
import ElementRemovePage from '../../remove/container/ElementRemovePage';
import ElementItemPage from '../../item/container/ElementItemPage';

import { load, goToCreate, goToEdit } from '../index';

class ElementListPage extends React.Component {

    componentDidMount() {
        this.props.load();
    }

    render() {
        return (
            <Spinner loading={this.props.loading}>
                <Switch>
                    <Route path={`${this.props.match.url}/new`} component={ElementNewPage} />
                    <Route path={`${this.props.match.url}/edit/:id`} component={ElementUpdatePage} />
                    <ElementList {...this.props} />
                </Switch>
                <Route path={`${this.props.match.url}/remove/:id`} component={ElementRemovePage} />
                <Route path={`${this.props.match.url}/view/:id`} component={ElementItemPage} />
            </Spinner>
        )
    }
}

const mapStateToProps = ({ element }) => ({
    elements: element.list.elements,
    loading: element.list.loading,
    error: element.list.error
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ load, goToCreate, goToEdit }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ElementListPage)