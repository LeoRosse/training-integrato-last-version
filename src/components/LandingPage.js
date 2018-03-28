import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => (
    <div>
        <header className="header">
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Training Integrato</span>
                    <span className="heading-primary--sub">Alberto Santarato</span>
                </h1>

                {/*<Link className="btn btn--white btn--animated" to="/dashboard-public">Entra</Link>
                <Link className="btn btn--white btn--animated" to="/login">Login</Link> */}

            </div>
        </header>
        <main>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Sviluppo di allenamenti elaborati su misura
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            You're going to fall in love with nature
                        </h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, molestias architecto? Asperiores, totam numquam culpa similique
                        commodi, modi maxime delectus dolore, ipsum eum odio ab voluptatum distinctio aliquid. Numquam, nulla!
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Live adventures like you never have before
                        </h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, molestias architecto? Asperiores, totam numquam culpa similique
                        commodi, modi maxime delectus dolore, ipsum eum odio ab voluptatum distinctio aliquid. Numquam, nulla!
                        </p>

                        <a href="" className="btn-text">Learn more &rarr;</a>

                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src="images/movimento.jpg" alt="Movimento" className="composition__photo composition__photo--p1" />
                            <img src="images/equilibrio1.jpg" alt="Equilibrio" className="composition__photo composition__photo--p2" />
                            <img src="images/salute.jpg" alt="Salute" className="composition__photo composition__photo--p3" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-features">
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="feature-box">
                        <img className="feature-box__icon" src="/png/basic_heart.png" />                            
                        <h3 className="heading-tertiary u-margin-bottom-small">Composizione Corporea</h3>
                            <p className="feature-box__text">
                                Cos'è la Bioimpedenza
                        </p>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <img className="feature-box__icon" src="/png/basic_accelerator.png" />                            
                            <h3 className="heading-tertiary u-margin-bottom-small">Test Fisici</h3>
                            <p className="feature-box__text">
                                Come vengono effettuati
                        </p>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <img className="feature-box__icon" src="/png/basic_target.png" />
                            <h3 className="heading-tertiary u-margin-bottom-small">Allenamenti Personalizzati</h3>
                            <p className="feature-box__text">
                                Trova il tuo allenamento
                        </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-tours" id="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Programma il tuo allenamento
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">
                                    Light
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>Colloquio iniziale a domicilio</li>
                                    <li>Invio del programma di allenamento e descrizione figurata degli esercizi</li>
{/*                                     <li>2 tours guides</li>
                                    <li>Sleep in cozy hostels</li>
                                    <li>Difficulty: easy</li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Solo</p>
                                    <p className="card__price-value">€100</p>
                                </div>
                                <a href="#popup" className="btn btn--white">Scopri di più</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--2">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--2">
                                    Medium
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>Colloquio iniziale a domicilio</li>
                                    <li>Invio del programma di allenamento e descrizione figurata degli esercizi</li>
                                    <li>Analisi della composizione corporea BIA</li>
{/*                                     <li>Sleep in provided tents</li>
                                    <li>Difficulty: medium</li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-2">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Solo</p>
                                    <p className="card__price-value">€200</p>
                                </div>
                                <a href="#popup" className="btn btn--white">Scopri di più</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--3">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--3">
                                    Full
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>Colloquio iniziale a domicilio</li>
                                    <li>Invio del programma di allenamento e descrizione figurata degli esercizi</li>
                                    <li>Analisi della composizione corporea BIA</li>
                                    <li>Sacca con materiale di allenamento</li>
                                    {/* <li>Difficulty: hard</li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-3">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Solo</p>
                                    <p className="card__price-value">€300</p>
                                </div>
                                <a href="#popup" className="btn btn--white">Scopri di più</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

{/*             <div className="u-center-text u-margin-top-huge">
                <a href="#" className="btn btn--green">Discover All Tours</a>
            </div> */}
        </section>
        </main>
    </div>
);


export default LandingPage;