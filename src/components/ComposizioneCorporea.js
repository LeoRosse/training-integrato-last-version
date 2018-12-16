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
                    <span className="heading-primary--main">Studio Corporeo</span>
                </h1>

                {/*                 <Link className="btn btn--white btn--animated" to="/dashboard-public">Entra</Link>
                <Link className="btn btn--white btn--animated" to="/login">Login</Link> */}

            </div>
        </header>
        <section className="section-home-fitness section-home-fitness--studio-corporeo" id="section-relax">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary--composizione">
                    Conosci i tuoi valori
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="card--sport">
                        <div className="card--sport__side card--sport__side__BIA card--sport__side--front">
                            <div className="card--sport__picture card--sport__picture__compCorp card--sport__picture--7">
                                &nbsp;
                        </div>
                            <h4 className="card--sport__heading">
                                <span className="card--sport__heading-span card--sport__heading-span--2">
                                    Composizione Corporea BIA
                        </span>
                            </h4>
                            <div className="card--sport__details">
                                <p>
                                L’esame si basa su un test semplice e non invasivo eseguito con uno strumento, Il Bioimpedenziometro, che permette di misurare la resistenza bioelettrica dei tessuti, valutando la Composizione Corporea in termini di Massa Grassa, Massa Magra, Massa Muscolare e Idratazione, con i seguenti obbiettivi:
                                <br/>
                                <br/>
                                • Identificare lo stato reale della composizione corporea all’ inizio di un percorso (nutrizionale, sportivo, di    benessere) non limitandosi al solo peso corporeo ma valutando in maniera precisa la quantità e qualità dei liquidi e dei tessuti del corpo.<br/>
                                • Controllare l’equilibrio idroelettrolitico<br/>
                                • Coprire tutti i fabbisogni di energia e nutrienti.<br/>
                                La valutazione di questi dati rappresenta il punto di partenza ottimale per costruire un percorso volto a migliorare vitalità, tonicità e forza muscolare, oltre ad eseguire uno studio analitico del metabolismo di una persona e la sua costituzione.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="card--sport">
                    <div className="card--sport__side card--sport__side__BIA card--sport__side--front">
                    <div className="card--sport__picture card--sport__picture__compCorp--2 card--sport__picture--8">
                        &nbsp;
                        </div>
                            <h4 className="card--sport__heading">
                                <span className="card--sport__heading-span card--sport__heading-span--2">
                                    PPG <br/> Stress Flow
                            </span>
                            </h4>
                            <div className="card--sport__details">
                                <p>
                                Il dispositivo PPG Stress Flow, grazie a una tecnologia di misurazione pletismografica multicanale applicata alle estremità distali degli arti, permette di analizzare in modo complessivo l’attività del sistema nervoso autonomo (SNA) e la variabilità della frequenza cardiaca (HRV).
                                L’esame condotto dallo strumento ha una durata di pochi minuti e permette lo studio e il monitoraggio diretto di tutte le funzioni del Sistema Nervoso Autonomo e dei relativi processi di biofeedback, oltre a favorire i processi di valutazione differenziale dei disturbi a carattere infiammatorio cronico correlati allo stress.
                                La valutazione di queste variabili offre un ausilio di rilievo in una crescente varietà di applicazioni:<br/>
                                • Monitoraggio della sindrome generale di adattamento e dei disturbi correlati allo stress;<br/>
                                • Aumento della performance sportiva;<br/>
                                • Longevità e recupero psicofisico.<br/>
                                • Miglioramento del Lifestyle
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