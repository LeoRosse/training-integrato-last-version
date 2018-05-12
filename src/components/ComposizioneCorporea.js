import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const ComposizioneCorporea = () => (
    <div>
        <Navigation />
        <header className="header__bia">
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Composizione Corporea</span>
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
                            <h4 className="card--sport__heading">
                                <span className="card--sport__heading-span card--sport__heading-span--1">
                                    Naturopatia
                                </span>
                            </h4>
                            <div className="card--sport__details">
                                <p>
                                    Sedute di allemento <b>individuali</b> o a <b>piccoli gruppi</b>, eseguite sotto la supervisione del Trainer.
                                    Ogni singolo movimento viene curato dal punto di vista della postura e della respirazione. Esercizi mirati e un piano di allenamento
                                    adeguato permettono di raggiungere in maniera pianificata e graduale uno stato di forma e di efficienza fisica, in modo da ottenere
                                    il miglior risultato nel rispetto del proprio corpo.
                                </p>
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
                                    Sedute di preparazione allo Sport sia singolo che di squadra, test fisici, periodizzazione dei cicli di carico/scarico, educazione al gesto
                                    tecnico, riequilibrio muscolare e prevenzione dagli infortuni. Per una performance di livello o semplicemente per affrontare al meglio
                                    ogni tipo di attività sia amatoriale che agonistica.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>

);

export default ComposizioneCorporea;