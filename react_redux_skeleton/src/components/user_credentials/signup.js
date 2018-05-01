import React, { Component } from 'react';
import CredentialsForm from './credentials_form';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as userActions from '../../actions/user-actions';

class Signup extends Component {
    formHandler(values) {
        this.props.userActions.createUser(values);
    }

    render() {
        return (
            <div>
                <CredentialsForm
                    formHandler={this.formHandler.bind(this)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        routerActions: bindActionCreators({ changePage: () => { push('/') }}, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
