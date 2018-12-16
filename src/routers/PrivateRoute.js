import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';
import HeaderPrivate from '../components/HeaderPrivate';

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthenticated ? (
            <div>
                <HeaderPrivate />
                <Component {...props} />
            </div>
        ) : (
                <Redirect to="/" />
            )
    )} />
);


const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute)