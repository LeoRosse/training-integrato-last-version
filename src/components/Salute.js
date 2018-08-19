import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Salute = () => (
    <div>
        <Navigation />
        <header className="header__salute">
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Salute</span>
                </h1>

                {/*                 <Link className="btn btn--white btn--animated" to="/dashboard-public">Entra</Link>
                <Link className="btn btn--white btn--animated" to="/login">Login</Link> */}

            </div>
        </header>
        <section className="section-home-fitness" id="section-relax">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Rispetta il tuo corpo
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="card--sport">
                        <div className="card--sport__side card--sport__side--front">
                            <div className="card--sport__picture card--sport__picture--5">
                                &nbsp;
                            </div>
{/*                            <h4 className="card--sport__heading card--sport__heading--black">
                                <span className="card--sport__heading-span card--sport__heading-span--1">
                                    Training Integrato
                                </span>
            </h4>*/}
                            <div className="card--sport__details">
                                <p>
                                    Dopo una prima presentazione libera da parte del cliente, il colloquio verrà indirizzato in modo mirato per conoscere le peculiarità dell’individuo, attraverso domande specifiche si affronteranno sintomi e caratteristiche psico-fisiche, per valutarne la costituzione ed intervenire di conseguenza.
                                Si integra poi il colloquio con una valutazione della composizione corporea (BIA)
                                <br />
                                    Al termine della Consulenza Naturopatica  verranno indicati:
                                </p>
                                <ul className="feature-box__list">
                                    <li>Consigli per un sano stile di vita, Regole generali per una corretta alimentazione, Suggerimenti di tecniche da praticare in casa, Indicazioni per una adeguata attività fisica</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="card--sport">
                        <div className="card--sport__side card--sport__side--front">
                            <div className="card--sport__picture card--sport__picture--4">
                                &nbsp;
                            </div>
                            <h4 className="card--sport__heading">
                                <span className="card--sport__heading-span card--sport__heading-span--2">
                                    Alimentazione Consapevole
                                </span>
                            </h4>
                            <div className="card--sport__details">
                                <p>
                                    Il Percorso di Alimentazione Integrata non è una dieta, ma una serie di consigli alimentari che suggeriscono una sana e corretta alimentazione finalizzata al benessere psico-fisico e alla salute della persona.
                                    <br />
                                    Il Piano Personalizzato risponde alle diverse esigenze individuali in base a:
                                </p>
                                <ul className="feature-box__list">
                                    <li>costituzione, composizione corporea, attività fisica, ritmi di vita, gusti e preferenze</li>
                                </ul>
                                <p>Un’attenta analisi costituzionale della persona, permette di individuare un programma mirato per arrivare ad una alimentazione consapevole</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>

);

export default Salute;