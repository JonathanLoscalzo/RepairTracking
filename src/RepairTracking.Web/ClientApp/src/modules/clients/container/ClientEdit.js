import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from '../../common/loading/spinner';
import Update from '../presentational/Update';
import { update, goToClients } from '../index'

class Clients extends React.Component {
    render() {
        const {selectedClient, update, goToClients, loading} = this.props;
        if (loading) {
            return (<Spinner />)
        } else {
            return <Update
                client={selectedClient}
                onSubmit={values => update(values)}
                cancel={goToClients} />
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    selectedClient: state.client.selectedClient
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ update, goToClients }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Clients);