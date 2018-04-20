import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const sport = () => (
    <div>
        <Navigation />
        <header className="header__sport">
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Sport</span>
                </h1>

                {/*                 <Link className="btn btn--white btn--animated" to="/dashboard-public">Entra</Link>
                <Link className="btn btn--white btn--animated" to="/login">Login</Link> */}

            </div>
        </header>
        <section className="section-home-fitness" id="section-home-fitness">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary--home-fitness">
                    Programma il tuo allenamento
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-3">
                    <div className="card--sport">
                        <div className="card--sport__side card--sport__side--front">
                            <div className="card--sport__picture card--sport__picture--1">
                                &nbsp;
                            </div>
                            <h4 className="card--sport__heading">
                                <span className="card--sport__heading-span card--sport__heading-span--1">
                                    Personal Training
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
                <div className="col-1-of-3">
                    <div className="card--sport">
                        <div className="card--sport__side card--sport__side--front">
                            <div className="card--sport__picture card--sport__picture--2">
                                &nbsp;
                            </div>
                            <h4 className="card--sport__heading">
                                <span className="card--sport__heading-span card--sport__heading-span--2">
                                    Preparazione Atletica
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
                <div className="col-1-of-3">
                    <div className="card--sport">
                        <div className="card--sport__side card--sport__side--front">
                            <div className="card--sport__picture card--sport__picture--3">
                                &nbsp;
                            </div>
                            <h4 className="card--sport__heading">
                                <span className="card--sport__heading-span card--sport__heading-span--3">
                                    Rieducazione Funzionale
                                </span>
                            </h4>
                            <div className="card--sport__details">
                                <p>
                                    Sedute di rimuscolazione post infortunio e recupero delle capacità condizionali per la ripresa dell'attività fisica e atletica.
                                    Viene strutturato un'allenamento specifico a corpo libero e con l'uso di sovraccarichi, coadiuvato da esercizi propriocettivi per
                                    migliorare equilibrio, tono muscolare e stabilità articolare.
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

export default sport;