import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class LastStep extends Component {
    constructor(props){
        super(props);
        this.state = {
            isClicked: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({isClicked: true});
    }

  render() {
    return (
      <div>
        <h3>A cargado una nueva reparación!</h3>
        <h5>Por favor, anote su código: {this.props.code.code}</h5>
        <Button color="info" onClick={this.handleClick}>Volver</Button>
        {this.state.isClicked && <Redirect to='/repair'/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    code: state.repair.create.code
});


export default connect(mapStateToProps)(LastStep); 