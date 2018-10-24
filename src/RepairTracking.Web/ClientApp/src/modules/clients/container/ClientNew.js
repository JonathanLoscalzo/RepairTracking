import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Create from '../presentational/Create'
import Spinner from '../../common/loading/spinner'
import { create, goToClients } from '../index'

class ClientNew extends React.Component {
    componentWillMount() {
    }

    render() {
        const { create, goToClients, client } = this.props

        if (this.props.loading) {
            return (<Spinner />)
        } else {
            return <Create
                onSubmit={(values) => create(values)}
                cancel={goToClients}
                initialValues={client}/>
        }
    }
}

const mapStateToProps = (state) => ({
    client: {
        firstName: '',
        lastName: '',
        email: '',
        document: {
            type: '',
            number: null
        },
        address: {
            street: '',
            number: null,
            floor: null,
            depto: null,
        },
        location: {

        },
        cellphone: '',
        telephone: ''
    },
    loading: state.client.loading
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ goToClients, create }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClientNew)