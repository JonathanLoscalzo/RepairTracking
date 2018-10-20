import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Create from '../presentational/Create'
import Spinner from '../../common/loading/spinner';
import { create, goToClients } from '../index'
//import FormikForm from '../../../design-examples/FormikForm';
//import AsyncValidate from '../../../design-examples/FormValidationYup';

class ClientNew extends React.Component {
    componentWillMount() {
    }

    render() {
        const { create, goToClients, client } = this.props;

        if (this.props.loading) {
            return (<Spinner />)
        } else {
            return <Create add={create} cancel={goToClients} client={client} />
            // return <AsyncValidate
            //     initialValues={{ prueba:3, firstName: 'epepe', email: "asdf@asdf.com" }}
            //     onSubmit={(values, dispatch) => { debugger; }} />
        }
    }
}

const mapStateToProps = (state) => ({
    client: {},
    loading: false
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ goToClients, create }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClientNew);