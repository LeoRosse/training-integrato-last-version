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
import AthleticTraining from '../components/AthleticTraining';
import AddArticlePage from '../components/AddArticlePage';
import EditArticlePage from '../components/EditArticlePage';
import ContactPage from '../components/ContactPage';
import Sport from '../components/Sport';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LandingPage} exact={true} />
                <PublicRoute path="/dashboard-public" component={DashboardPublicPage}  />
                <PublicRoute path="/home-fitness" component={HomeFitness}  />
                <PublicRoute path="/athletic-training" component={AthleticTraining} />
                <PublicRoute path="/info" component={InfoPage} />
                <PublicRoute path="/login" component={LoginPage} exact={true}/>
                <PublicRoute path="/sport" component={Sport} />
                <PublicRoute path="/contact" component={ContactPage} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/create" component={AddArticlePage} />
                <PrivateRoute path="/edit/:id" component={EditArticlePage} />
                <PublicRoute component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;