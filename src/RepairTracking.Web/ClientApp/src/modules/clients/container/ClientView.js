import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from '../../common/loading/spinner';
import { update, goToClientsWithNoToast, goToEdit, goToShow} from '../index';
import Client from '../presentational/Client';

class ClientView extends React.Component {
    render() {
        const { selectedClient, goToClientsWithNoToast, loading, goToEdit, goToShow } = this.props;
        return <Spinner loading={loading}>
            <Client
                client={selectedClient}
                goToEdit={(id) => goToEdit(id)}
                goToShow={(id) => goToShow(id)}
                cancel={goToClientsWithNoToast}
            />
        </Spinner>
    }
}

const mapStateToProps = (state) => ({
    selectedClient: state.client.selectedClient,
    loading: state.client.loading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ update, goToClientsWithNoToast, goToEdit, goToShow}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ClientView);