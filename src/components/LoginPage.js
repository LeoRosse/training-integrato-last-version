import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import SignInForm from './SignInForm';

export class LoginPage extends React.Component {
    onSubmit = ({ email, password }) => {
        this.props.startLogin({ email, password });
        // this.props.history.push('/dashboard');
    };
    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Login Page</h1>
                    <div className="content-container">
                        <SignInForm
                            onSubmit={this.onSubmit}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: ({email, password}) => dispatch(startLogin({ email, password }))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);


