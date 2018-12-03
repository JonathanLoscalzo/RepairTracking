import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import RepairList from '../Presentational/RepairList';
import RepairListForUser from './RepairListForUser';
import { loadRepairs } from '../index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from '../../../common/loading/spinner';

class RepairListPage extends Component {
    componentDidMount(){
        this.props.loadRepairs();
    }
    //To-do: Agregar rutas para creacion (dentro del switch) y por fuera del switch rutas de modificacion
    render() {
        console.log(this.props.repair);
    return (
          <Spinner loading={this.props.loading}>
              <div>
                <Switch>
                    <Route path="/repair/:userId" render={(props) => (<RepairListForUser repair={this.props.repair} {...props} />)}/>
                    <RepairList title="Reparaciones" repair={this.props.repair} />
                </Switch>
            </div>
          </Spinner>
    )
  }
}

 const mapStateToProps = (state) => ({
    repair: state.repair.list.repairs,
    loading: state.repair.list.loading,
    error: state.repair.list.error 
 });

 const mapDispatchToProps = (dispatch) => bindActionCreators({ loadRepairs }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(RepairListPage) 

