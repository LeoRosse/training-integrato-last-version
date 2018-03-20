import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => (
    /*     <div classNameName="box-layout-landing">
            <div classNameName="box-layout-landing__box">
                <h1 classNameName="box-layout-landing__title">Training Integrato</h1>
                <p>Benvenuto nel sito di Alberto Santarato</p>
                <Link classNameName="button__landing" to="/dashboard-public">Entra</Link>
                <Link classNameName="button__landing" to="/login">Login</Link>
                </div>
        </div> */
    <div className="landing">
        <div className="logo-box">
            {/* <img src="/images/logo-1.jpg" alt="Logo" className="logo" /> */}
        </div>

        <div className="text-box">
            <h1 className="heading-primary">
                <span className="heading-primary-main">Training Integrato</span>
                <span className="heading-primary-sub">Alberto Santarato</span>
            </h1>

            <Link className="btn btn-white btn-animated" to="/dashboard-public">Entra</Link>
        </div>

    </div>
);


export default LandingPage;