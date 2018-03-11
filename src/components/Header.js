import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header__content__top">
                    <img className="header__image" src="/images/logo.jpg" />
                    <div className="header__title"><h1>Training Integrato</h1></div>
                </div>
                <div className="header__bottom"></div>
                <div className="header__content">
                    <nav>
                        <ul>
                            <li className="sub-menu-parent" tab-index="0">
                                <Link to="/dashboard-public">Home</Link>
                            </li>
                            <li className="sub-menu-parent" tab-index="0">
                                <a>Area Sport</a>
                                <ul className="sub-menu">
                                    <Link to="/home-fitness">Home Fitness</Link>
                                    <li><a>Preparazione Atletica</a></li>
                                    <li><a>Recupero Funzionale</a></li>
                                </ul>
                            </li>
                            <li className="sub-menu-parent" tab-index="0">
                                <a>Area Salute</a>
                                <ul className="sub-menu">
                                    <li><a>Training Integrato</a></li>
                                    <li><a>Alimentazione Naturale</a></li>
                                    <li><a>Naturopatia</a></li>
                                    <li><a>Postural Pilates</a></li>
                                </ul>
                            </li>
                            <li className="sub-menu-parent" tab-index="0">
                                <a>Area Studio Corporeo</a>
                                <ul className="sub-menu">
                                    <li><a>Analisi della Composizione Corporea BIA</a></li>
                                    <li><a>Test Fisici e Studio del Gesto Tecnico</a></li>
                                </ul>
                            </li>
                            <li className="sub-menu-parent" tab-index="0">
                                <Link to="/info">Chi Siamo</Link>
                            </li>
                            <li className="sub-menu-parent" tab-index="0">
                                <a>Contatta</a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </header>
        )
    }
};

export default Header;

