import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
    <header>
        <img className="header__image" src="/images/header.jpg" />
        <div className="header__content">
                <Link className="button__header" to="/dashboard-public">
                    <h3>Home</h3>
                </Link>
                <Link className="button__header" to="/dashboard-public">
                    <h3>Chi Siamo</h3>
                </Link>
                <Link className="button__header" to="/dashboard-public">
                    <h3>Contatta</h3>
                </Link>
            </div>
    </header>
);

export default Header;

