import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import RepairList from '../Presentational/RepairList';
import RepairListForUser from './RepairListForUser';
import { loadRepairs, load } from '../index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from '../../../common/loading/spinner';
import CreateRepairForUser from '../../create/container/CreateRepairForUser'; 
import RepairListGeneral from '../Presentational/RepairListGeneral';

export default class RepairListPage extends Component {
    //To-do: Agregar rutas para creacion (dentro del switch) y por fuera del switch rutas de modificacion
    render() {
        
    return (
          <Spinner loading={this.props.loading}>
              <div>
                <Switch>
                    <Route path="/repair/new/:userId" component={CreateRepairForUser} />
                    <Route path="/repair/:userId" component={RepairListForUser} />
                    <RepairListGeneral />
                </Switch>
            </div>
          </Spinner>
    )
  }
}
