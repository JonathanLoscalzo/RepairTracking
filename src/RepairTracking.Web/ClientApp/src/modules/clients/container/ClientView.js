import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from '../../common/loading/spinner';
import { update, goToClients } from '../index'
import View from '../presentational/View';

class ClientView extends React.Component {
    render() {
        const {selectedClient, update, goToClients, loading} = this.props;
        if (loading) {
            return (<Spinner />)
        } else {
            return <View
                client={selectedClient}
                onSubmit={values => update(values)}
                cancel={goToClients} />
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    selectedClient: state.selectedClient
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ update, goToClients }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ClientView);