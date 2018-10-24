import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../../common/loading/spinner';
import LoginForm from '../presentational/Login'

import { login } from '../index';

class LoginPage extends React.Component {

    render() {
        const { credentials, loading, errorMessage, login } = this.props;
        if (loading) {
            return (<Spinner />)
        } else {
            return <LoginForm
                errorMessage={errorMessage}
                onSubmit={login}
                initialValues={credentials} />
        }
    }
}

const mapStateToProps = (state) => {
    return ({
        credentials: { username: '', password: '' },
        loading: state.auth.loading,
        errorMessage: state.auth.errorMessage
    });
};

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ login }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);