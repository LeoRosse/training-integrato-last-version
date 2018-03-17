import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div style={{ alignItems: "center", display: "flex" }}>
                    <img src="/images/logo-1.jpg" style={{ width: "auto", height: "90px", borderRadius: "3px", marginTop: "5px" }} />
                    <h1 style={{ margin: "0 0 0 20px", color: "white" }}>TRAINING INTEGRATO</h1>
                </div>
                 <nav>
                        <ul>
                            <li className="sub-menu-parent" tab-index="0">
                                <Link to="/dashboard-public">Home</Link>
                            </li>
                            <li className="sub-menu-parent" tab-index="0">
                                <a>Area Sport</a>
                                <ul className="sub-menu-1">
                                    <Link to="/home-fitness">Home Fitness</Link>
                                    <Link to="/athletic-training">Preparazione Atletica</Link>
                                    <li><a>Recupero Funzionale</a></li>
                                </ul>
                            </li>
                            <li className="sub-menu-parent" tab-index="0">
                                <a>Area Salute</a>
                                <ul className="sub-menu-2">
                                    <li><a>Training Integrato</a></li>
                                    <li><a>Alimentazione Integrata</a></li>
                                    <li><a>Naturopatia</a></li>
                                </ul>
                            </li>
                            <li className="sub-menu-parent" tab-index="0">
                                <a>Area Studio Corporeo</a>
                                <ul className="sub-menu-3">
                                    <li><a>Composizione Corporea - BIA</a></li>
                                    <li><a>Test Fisici e Studio del Gesto Tecnico</a></li>
                                </ul>
                            </li>
                            <li className="sub-menu-parent" tab-index="0">
                                <a>Area Didattica</a>
                                <ul className="sub-menu-4">
                                    <li><a>Archivio Articoli</a></li>
                                    <li><a>Contenuti</a></li>
                                    <li><a>Ricerca</a></li>
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
            </header>
        )
    }
};

export default Header;