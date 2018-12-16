import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetArticles } from './actions/articles';
import { login, logout } from './actions/auth';
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

import './index.css';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
};


ReactDOM.render(<LoadingPage />, document.getElementById('root'));

//logica per la autenticazione e per il logout
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid)); //così ho settato l'id dell'utente che fa il login
        store.dispatch(startSetArticles()).then(() => {
            ReactDOM.render(jsx, document.getElementById('root'))
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout());
        renderApp();
    }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
