import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from '../../common/loading/spinner';
import { update, goToClientsWithNoToast, goToEdit } from '../index'
import View from '../presentational/View';

class ClientView extends React.Component {
    render() {
        
        const {selectedClient, update, goToClientsWithNoToast, loading, goToEdit} = this.props;
        if (loading) {
            return (<Spinner />)
        } else {
            return <View
                client={selectedClient}
                goToEdit={(id, view) => goToEdit(id, view)}
                cancel={goToClientsWithNoToast} />
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    selectedClient: state.client.selectedClient
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ update, goToClientsWithNoToast, goToEdit }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ClientView);