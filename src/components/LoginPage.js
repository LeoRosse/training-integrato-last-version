import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import SignInForm from './SignInForm';

export class LoginPage extends React.Component {
    onSubmit = (email,password) => {
        console.log(this.props)
        this.props.startLogin(email, password);
    };
    render() {
        return (
            <div>
                <div>
                    <h1>Login Page</h1>
                    <div>
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
    startLogin: (email, password) => dispatch(startLogin( email, password ))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);


