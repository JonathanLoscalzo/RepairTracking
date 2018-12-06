import React, { Component } from 'react'
import {reduxForm, Field} from 'redux-form'; 



class Tracker extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
            <Field type="text" name="Código" placeholder="Ej: A1B2" />
            <button type="submit">Buscar</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
    form: 'tracking'
});