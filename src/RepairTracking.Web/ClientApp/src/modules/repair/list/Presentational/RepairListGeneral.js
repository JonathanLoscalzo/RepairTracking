import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadRepairs } from '../index'
import Spinner from '../../../common/loading/spinner';
import RepairList from './RepairList';


class RepairListGeneral extends Component {
    componentDidMount(){
        this.props.loadRepairs();
    }

  render() {
    return (
      <Spinner loading={this.props.loading}>
        <RepairList title="Reparaciones" repair={this.props.repairs} />
      </Spinner>
    )
  }
}


const mapStateToProps = (state) => ({
    repairs: state.repair.list.repairs,
    loading: state.repair.list.loading
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ loadRepairs }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RepairListGeneral);