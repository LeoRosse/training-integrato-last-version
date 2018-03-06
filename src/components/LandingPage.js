import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => (
    <div className="box-layout-landing">
        <div className="box-layout-landing__box">
            <h1 className="box-layout-landing__title">Training Integrato</h1>
            <p>Benvenuto nel sito di Alberto Santarato</p>
            <Link className="button__landing" to="/dashboard-public">Entra</Link>
            </div>
    </div>
);


export default LandingPage;