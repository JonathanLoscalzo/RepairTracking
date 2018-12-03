import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadClient} from '../../../clients/index'
import RepairList from '../Presentational/RepairList'
import Spinner from '../../../common/loading/spinner';

class RepairListForUser extends React.Component{
    componentDidMount(){
        this.props.loadClient(this.props.match.params.userId);  
    }

    render(){
        let {firstname, lastname} = this.props.selectedClient;
        let titulo = 'Reparaciones de ' + firstname + " " + lastname;
        return (
            <Spinner loading={this.props.loading}>
                <RepairList title={titulo} repair={this.props.repair} />
            </Spinner>
        )
    }
}


const mapStateToProps = (state) => ({
    selectedClient: state.client.selectedClient,
    loading: state.client.loading
});

const mapDispatchToProps = (dispatch) => bindActionCreators({loadClient}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepairListForUser)
