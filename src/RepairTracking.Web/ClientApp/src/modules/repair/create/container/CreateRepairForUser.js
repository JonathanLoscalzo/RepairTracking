import React, { Component } from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadClient } from '../../../clients';
import { load as loadElementos } from '../../../element/list';
import { create } from '../index';
import Spinner from '../../../common/loading/spinner';
import Form from '../presentational/Form';
import { reset } from 'redux-form'


class CreateRepairForUser extends Component {
  componentDidMount(){
      this.props.loadClient(this.props.match.params.userId);
      this.props.loadElementos();
  }

  render() {
    const { loadingCliente, loadingElementos, elements, selectedClient } = this.props;
    return (
      <Spinner loading={ loadingCliente && loadingElementos }>
          <Form elements={elements} client={selectedClient}
          onSubmit={(values) => { this.props.create(values); this.props.reset('repair/create')}}/>
      </Spinner>
    )
  }
}

const mapStateToProps = (state) => ({
    selectedClient: state.client.selectedClient,
    loadingCliente: state.client.loading,
    elements: state.element.list.elements,
    loadingElementos: state.element.list.loading,
});

const mapDispatchToProps = (dispatch) => ( bindActionCreators({ loadClient, loadElementos, create, reset}, dispatch) );

export default connect(mapStateToProps, mapDispatchToProps)(CreateRepairForUser);