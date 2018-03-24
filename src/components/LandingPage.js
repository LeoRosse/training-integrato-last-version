import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => (
    <div className="header">
        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Training Integrato</span>
                <span className="heading-primary--sub">Alberto Santarato</span>
            </h1>

            <Link className="btn btn--white btn--animated" to="/dashboard-public">Entra</Link>
            <Link className="btn btn--white btn--animated" to="/login">Login</Link>

        </div>

    </div>
);


export default LandingPage;