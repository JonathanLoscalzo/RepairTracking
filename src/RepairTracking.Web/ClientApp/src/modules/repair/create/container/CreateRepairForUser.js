import React, { Component } from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadClient } from '../../../clients';
import { load as loadElementos } from '../../../element/list';
import { load as loadTasks } from '../../../task/list';
import Spinner from '../../../common/loading/spinner';
import Form from '../presentational/Form';


class CreateRepairForUser extends Component {
  componentDidMount(){
      console.log(this.props.match.params.userId)
      //this.props.loadClient(this.props.match.params.userId);
      this.props.loadElementos();
      //this.props.loadTasks();
  }

  render() {
    const { loadingCliente, loadingElementos, elements, selectedClient } = this.props;
    return (
      <Spinner loading={ loadingCliente && loadingElementos }>
          <Form elements={elements} client={selectedClient}/>
      </Spinner>
    )
  }
}

const mapStateToProps = (state) => ({
    selectedClient: state.client.selectedClient,
    loadingCliente: state.client.loading,
    elements: state.element.list.elements,
    loadingElementos: state.element.list.loading,
    tasks: state.task.list.tasks,
    loadingTasks: state.task.list.loading
});

const mapDispatchToProps = (dispatch) => ( bindActionCreators({ loadClient, loadElementos, loadTasks}, dispatch) );

export default connect(mapStateToProps, mapDispatchToProps)(CreateRepairForUser);