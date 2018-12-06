import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadClient} from '../../../clients/index'
import {repairsForUserFunc} from '../index';
import {goToNew} from '../../create';
import RepairList from '../Presentational/RepairList'
import Spinner from '../../../common/loading/spinner';

class RepairListForUser extends React.Component{
    componentDidMount(){
        this.props.loadClient(this.props.match.params.userId);  
        this.props.repairsForUserFunc(this.props.match.params.userId);
    }

    render(){
        console.log('-----');
        console.log(this.props.repairs);
        const {userId: id} = this.props.match.params;
        let {firstname, lastname} = this.props.selectedClient;
        let titulo = 'Reparaciones de ' + firstname + " " + lastname;
        return (
            <Spinner loading={false}>
                <RepairList onNew={() => this.props.goToNew(id)} title={titulo} repair={this.props.repairs} />
            </Spinner>
        )
    }
}


const mapStateToProps = (state) => ({
    selectedClient: state.client.selectedClient,
    loading: state.client.loading,
    repairs: state.repair.list.repairs
});

const mapDispatchToProps = (dispatch) => bindActionCreators({loadClient, repairsForUserFunc, goToNew}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepairListForUser)
