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
                    <div className="button__header" >
                        <h5>Home</h5>
                    </div>
                    <div className="header__dropdown">
                        <div className="button__header" ><h5>Area Sport</h5></div>
                        <div className="header__dropdown-content">
                            <li className="button__header" >
                                <h5>Home Fitness</h5>
                            </li>
                            {/*                             <li className="button__header" >
                                <h5>Stretching attivo</h5>
                            </li> */}
                            {/*                             <li className="button__header" >
                                <h5>Programmi di Allenamento Personalizzati</h5>
                            </li> */}
                            <li className="button__header" >
                                <h5>Preparazione Atletica</h5>
                            </li>
                            {/*                             <li className="button__header" >
                                <h5>Pilates</h5>
                            </li> */}
                            <li className="button__header" >
                                <h5>Recupero Funzionale</h5>
                            </li>
                        </div>
                    </div>
                    <div className="header__dropdown">
                        <div className="button__header" ><h5>Area Salute</h5></div>
                        <div className="header__dropdown-content">
                            <li className="button__header" >
                                <h5>Training Integrato</h5>
                            </li>
                            <li className="button__header" >
                                <h5>Alimentazione Naturale</h5>
                            </li>
                            <li className="button__header" >
                                <h5>Naturopatia</h5>
                            </li>
                            {/*<li className="button__header" >
                                <h5>Trattamento Olistico</h5>
                            </li> */}
                            <li className="button__header" >
                                <h5>Postural Pilates</h5>
                            </li>
                        </div>
                    </div>
                    <div className="header__dropdown">
                        <div className="button__header" ><h5>Area Studio Corporeo</h5></div>
                        <div className="header__dropdown-content">
                            <li className="button__header" >
                                <h5>Analisi della Composizione Corporea BIA</h5>
                            </li>
                            <li className="button__header" >
                                <h5>Test Fisici e Studio del Gesto Tecnico</h5>
                            </li>
                        </div>
                    </div>
                    <div className="button__header" onClick={this.props.clickInfo}>
                        <h5>Chi Siamo</h5>
                    </div>
                    <div className="button__header" >
                        <h5>Contatta</h5>
                    </div>
                </div>
            </header>
        )
    }
};

export default Header;

