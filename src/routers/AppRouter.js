import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LandingPage from '../components/LandingPage';
import InfoPage from '../components/InfoPage';
import AddArticlePage from '../components/AddArticlePage';
import EditArticlePage from '../components/EditArticlePage';
import ContactPage from '../components/ContactPage';
import Sport from '../components/Sport';
import Relax from '../components/Relax';
import Salute from '../components/Salute';
import ComposizioneCorporea from '../components/ComposizioneCorporea';
import ScrollToTop from './ScrollToTop/ScrollToTop';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history} >
        <ScrollToTop>
            <Switch>
                <PublicRoute path="/" component={LandingPage} exact={true} />
                <PublicRoute path="/chi-sono" component={InfoPage} />
                <PublicRoute path="/login" component={LoginPage} exact={true} />
                <PublicRoute path="/sport" component={Sport} />
                <PublicRoute path="/recupero" component={Relax} />
                <PublicRoute path="/salute" component={Salute} />
                <PublicRoute path="/composizionecorporea" component={ComposizioneCorporea} />
                <PublicRoute path="/contact" component={ContactPage} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/create" component={AddArticlePage} />
                <PrivateRoute path="/edit/:id" component={EditArticlePage} />
                <PublicRoute component={NotFoundPage} />
            </Switch>
        </ScrollToTop>
    </Router>
)

export default AppRouter;