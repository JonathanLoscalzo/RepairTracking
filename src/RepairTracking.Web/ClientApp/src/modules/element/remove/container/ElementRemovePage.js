import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../../../common/loading/spinner'
import ElementRemove from '../presentational/ElementRemove'
import { load, remove, goBack } from '../index';

class ElementRemovePage extends React.Component {

    componentWillMount() {
        this.props.load(this.props.match.params.id)
    }

    render() {
        return (
            <Spinner loading={this.props.loading}>
                <ElementRemove {...this.props} />
            </Spinner>
        )
    }
}

const mapStateToProps = ({ element }) => ({
    element: element.remove.element,
    loading: element.list.loading,
    error: element.remove.error,
    isOpen: element.remove.isOpen
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ load, remove, goBack }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ElementRemovePage)