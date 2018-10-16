import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from '../../common/loading/spinner';
import Update from '../presentational/Update';
import { update, goToClients} from '../index'

class Clients extends React.Component {
    render() {
        if (this.props.loading) {
            return (<Spinner />)
        } else {
            return <Update
                client={this.props.selectedClient}
                update={this.props.update}
                cancel={this.props.goToClients} />
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    selectedClient: state.selectedClient
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ update, goToClients }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Clients);