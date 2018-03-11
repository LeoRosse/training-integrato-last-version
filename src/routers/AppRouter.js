import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LandingPage from '../components/LandingPage';
import DashboardPublicPage from '../components/DashboardPublicPage';
import InfoPage from '../components/InfoPage';
import HomeFitness from '../components/HomeFitness';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LandingPage} exact={true} />
                <PublicRoute path="/dashboard-public" component={DashboardPublicPage} exact={true} />
                <PublicRoute path="/home-fitness" component={HomeFitness} exact={true} />
                <PublicRoute path="/info" component={InfoPage} exact={true} />
                <PublicRoute path="/login" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PublicRoute component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;