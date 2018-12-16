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
                    <div className="card--sport card--sport__salute">
                        <div className="card--sport__side card--sport__side__salute card--sport__side--front">
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
                                E’ un percorso dedicato al raggiungimento ed al mantenimento di un buono stato di salute e di forma fisica.
                                Lo stato di salute è fusione, equilibrio e armonia tra le componenti fisica-strutturale, biochimica-funzionale e psicologica-motivazionale di una persona.
                                Le fondamenta del Training Integrato si basano su un corretto stile di vita, su una alimentazione consapevole e su una attività fisica specifica.
                                Il colloquio viene indirizzato in modo mirato per conoscere le peculiarità dell’ individuo;
                                domande specifiche vanno ad evidenziare alcuni sintomi e le sue caratteristiche psico-fisiche, per valutare la costituzione ed individuare le metodologie di intervento.
                                Il percorso si integra con una valutazione della composizione corporea (BIA) che permette di determinare lo stato nutrizionale e l’attività metabolica della persona.
                                Si analizzano successivamente la funzionalità del Sistema Nervoso Autonomo e la variabilità della frequenza cardiaca (PPG Stress Flow), dati essenziali per recuperare un buon bilanciamento dei ritmi circadiani, associato ad un aumento della capacità reattiva, rigenerativa e di regolazione dell’organismo.
                                Questi i presupposti necessari per garantire risultati su composizione corporea, funzionalità e benessere psico-fisico.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="card--sport">
                        <div className="card--sport__side card--sport__side__salute card--sport__side--front">
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