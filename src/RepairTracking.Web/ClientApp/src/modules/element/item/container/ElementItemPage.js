import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../../../common/loading/spinner'
import ElementItem from '../presentational/ElementItem'
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

const mapStateToProps = ({ element }) => ({
    element: element.item.element,
    loading: element.item.loading,
    error: element.item.error,
    isOpen: element.item.isOpen
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ load, goBack }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ElementItemPage)