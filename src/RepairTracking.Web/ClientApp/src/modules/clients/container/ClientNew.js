import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Create from '../presentational/Create'
import Spinner from '../../common/loading/spinner';
import { create, goToClients } from '../index'

class ClientNew extends React.Component {
    componentWillMount() {
    }

    render() {
        const { create, goToClients, client } = this.props;
        debugger
        if (this.props.loading) {
            return (<Spinner />)
        } else {
            return <Create add={create} cancel={goToClients} client={client} />
        }
    }
}

const mapStateToProps = (state) => ({
    client: {},
    loading: false
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ goToClients, create }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClientNew);