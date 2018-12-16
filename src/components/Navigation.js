import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

        <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link to="/" className="navigation__link">
                        Home</Link>
                </li>
                <li className="navigation__item">
                    <Link to="/chi-sono" className="navigation__link">
                        Chi siamo</Link>
                </li>
                <li>
                    <Link to="/sport" className="navigation__link">
                        Sport</Link>
                </li>
                <li>
                    <Link to="/relax" className="navigation__link">
                        Relax</Link>
                </li>
                <li>
                    <Link to="/salute" className="navigation__link">
                        Salute</Link>
                </li>
                <li>
                    <a href="/composizionecorporea" className="navigation__link">
                        Studio Corporeo</a>
                </li>
                <li>
                    <Link to="/contact" className="navigation__link">
                        Contatta</Link>
                </li>
            </ul>
        </nav>
    </div>
)



export default Navigation;

