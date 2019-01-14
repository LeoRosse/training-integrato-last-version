import React from 'react';

export default class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }

    onEmailChange = (e) => {
        e.persist();
        this.setState(() => ({ email: e.target.value }))
    }

    onPasswordChange = (e) => {
        e.persist();
        this.setState(() => ({ password: e.target.value }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.email,this.state.password)
        if (!this.state.email || !this.state.password) {
            // Set error state equal to 'Please provide description and amount.'
            this.setState(() => ({ error: 'Please provide email and password.' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit(
                this.state.email,
                this.state.password
            );
        }
    };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    autoFocus //questo feature punta subito il selettore quando si visita la pagina in questo input!
                    className="text-input"
                    value={this.state.email}
                    onChange={this.onEmailChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="text-input"
                    value={this.state.password}
                    onChange={this.onPasswordChange}
                />
                <div>
                    <button className="button">Login</button>
                </div>
            </form>
        )
    }
}