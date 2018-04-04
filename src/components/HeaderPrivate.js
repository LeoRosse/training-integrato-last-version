import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const HeaderPrivate = ({ startLogout }) => (
    <header className="header2">
        <div className="header2__container">
            <div className="header2__content">
                <div className="header2__logo-box">
                    <img src="images/logo-trasparente.png" alt="Full Logo" className="header2__logo" />
                </div>
                <Link className="header2__title" to="/dashboard">
                    <h1>Bentornato Alberto</h1>
                </Link>
                <Link to="#" className="btn btn__hprivate btn--white" onClick={startLogout}>Logout</Link>
            </div>
        </div>
    </header>
);


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(HeaderPrivate);