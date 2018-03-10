import React, { Component } from 'react';

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
                            <li class="sub-menu-parent" tab-index="0">
                                <a>Home</a>
                            </li>
                            <li class="sub-menu-parent" tab-index="0">
                                <a>Area Sport</a>
                                <ul class="sub-menu">
                                    <li><a>Home Fitness</a></li>
                                    <li><a>Preparazione Atletica</a></li>
                                    <li><a>Recupero Funzionale</a></li>
                                </ul>
                            </li>
                            <li class="sub-menu-parent" tab-index="0">
                                <a>Area Salute</a>
                                <ul class="sub-menu">
                                    <li><a>Training Integrato</a></li>
                                    <li><a>Alimentazione Naturale</a></li>
                                    <li><a>Naturopatia</a></li>
                                    <li><a>Postural Pilates</a></li>
                                </ul>
                            </li>
                            <li class="sub-menu-parent" tab-index="0">
                                <a>Area Studio Corporeo</a>
                                <ul class="sub-menu">
                                    <li><a>Analisi della Composizione Corporea BIA</a></li>
                                    <li><a>Test Fisici e Studio del Gesto Tecnico</a></li>
                                </ul>
                            </li>
                            <li class="sub-menu-parent" tab-index="0" onClick={this.props.clickInfo}>
                                <a>Chi Siamo</a>
                            </li>
                            <li class="sub-menu-parent" tab-index="0">
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

