import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export const LandingPage = () => (
    <div>
        <Navigation />
        <header className="header">
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Training Integrato</span>
                    <span className="heading-primary--sub">Alberto Santarato</span>
                </h1>

                {/*                 <Link className="btn btn--white btn--animated" to="/dashboard-public">Entra</Link>
                <Link className="btn btn--white btn--animated" to="/login">Login</Link> */}

            </div>
        </header>
        <main>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Scienze Motorie - Personal Training - Naturopatia
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        {/*                         <h3 className="heading-tertiary u-margin-bottom-small">
                            Preparazione atletica
                        </h3>
                        <p className="paragraph">
                            La preparazione atletica e lo studio del gesto tecnico sono la base per raggiungere obiettivi per qualsiasi sport.
                            La struttura e la funzione del gesto tecnico possono cambiare il punto di vista del tuo sport.
                        </p> */}
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Attività:
                        </h3>
                        <div className="paragraph">
                            <ul className="paragraph__list">
                                <li className="paragraph__item">Percorsi di Training integrato</li>
                                <li className="paragraph__item">Trattamenti Olistici</li>
                                <li className="paragraph__item">Consulenza Nutrizionale</li>
                            </ul>
                        </div>

                        <a href="#section-tours" className="btn-text">Scopri di più &rarr;</a>

                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <video src="video/intro.mov" controls className="video"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-features">
                <div className="row">
                    <div className="feature-box">
                        <h3 className="heading-tertiary u-margin-bottom-small">Composizione Corporea</h3>
                        <span className="feature-box__text">
                            Conoscere la <b>composizione corporea</b> non vuol dire solo conoscere il proprio peso, ma significa capire in modo oggettivo ed analitico da cosa è composto e come le componenti cambiano nel tempo.
                            <br />
                            <br />
                            Attraverso la <b>metodica BIA</b> siamo in grado di analizzare:
                            <ul className="feature-box__list">
                                <li>lo stato di idratazione</li>
                                <li>valutare la quantità di muscolo e grasso corporeo</li>
                                <li>stimare il metabolismo basale</li>
                                <li>analizzare lo stato di stress cellulare</li>
                            </ul>
                        </span>
                        <a href="/composizionecorporea" className="btn-text">Scopri di più &rarr;</a>

                    </div>

                </div>
            </section>
            <section className="section-tours" id="section-tours">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Scopri la tua necessità
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
                                    <span className="card__heading-span">
                                        Sport
                                </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Personal Training</li>
                                        <li>Preparazione Atletica</li>
                                        <li>Rieducazione Funzionale</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    {/*                                     <div className="card__price-box">
                                        <p className="card__price-value">€50</p>
                                    </div> */}
                                    <a href="#popup_1" className="btn btn--white">Scopri di più</a>
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
                                    <span className="card__heading-span">
                                        Relax
                                </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Massaggio Olistico</li>
                                        <li>Trattamento Energetico</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    {/*                                     <div className="card__price-box">
                                        <p className="card__price-value">€60</p>
                                    </div> */}
                                    <a href="#popup_2" className="btn btn--white">Scopri di più</a>
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
                                    <span className="card__heading-span">
                                        Salute
                                </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Naturopatia</li>
                                        <li>Alimentazione Consapevole</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    {/*                                     <div className="card__price-box">
                                            <p className="card__price-value">€75</p>
                                        </div> */}
                                    <a href="#popup_3" className="btn btn--white">Scopri di più</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*             <section className="section-stories">
                <div className="bg-video">
                    <img src="images/people-writing.jpg" alt="People writing" className="bg-video__content" />
                </div>
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Percorsi al passo con la ricerca
                </h2>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                         <figcaption className="story__caption">
                                Mary Smith
                        </figcaption>
                        </figure>

                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, molestias architecto? Asperiores, totam numquam culpa similique
                            commodi, modi maxime delectus dolore, ipsum eum odio ab voluptatum distinctio aliquid. Numquam,
                            nulla!
                        </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                         <figcaption className="story__caption">
                                Jack Wilson
                        </figcaption>
                        </figure>

                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">Wow my life is completely different now</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, molestias architecto? Asperiores, totam numquam culpa similique
                            commodi, modi maxime delectus dolore, ipsum eum odio ab voluptatum distinctio aliquid. Numquam,
                            nulla!
                        </p>
                        </div>
                    </div>
                </div>

                <div className="u-center-text u-margin-top-huge">
                    <a href="#" className="btn-text">Vai agli articoli &rarr;</a>
                </div>
            </section> */}
        </main>
        <footer className="footer">
            <div className="footer__logo-box">
                <img src="images/logo-trasparente.png" alt="Full Logo" className="footer__logo" />
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">Partner</a>
                            </li>
                            <li className="footer__item">
                                <Link to="/contact" className="footer__link">
                                    Contattaci</Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/info" className="footer__link">Curriculum</Link>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Termini e privacy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="footer__logo--box">
                        <a href="http://www.cnmitalia.com/"><img src="images/CNM-Logo.png" alt="CNM Logo" className="footer__logo__cnm" /></a>
                        <a href="https://www.unifi.it"><img src="images/logo-unifi.png" alt="Unifi Logo" className="footer__logo__unifi" /></a>
                        <a href="https://web.uniroma2.it/"><img src="images/logo-TorVergata.png" alt="CNM Logo" className="footer__logo__vergata" /></a>
                    </div>
                    <p className="footer__copyright">
                        Built by <a href="" className="footer__link"> Leonardo Rosseti</a> {/* for his site
                    <a href="" className="footer__link">Advanced Site</a> Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for
                    both personal and commercial use, but NOT to claim it as your own design. A credit to the original author
                    is of cours highly appreciated! */}
                    </p>
                </div>
            </div>
        </footer>




        <div className="popup" id="popup_1">
            <div className="popup__content">
                <div className="popup__left">
                    <img src="images/sport_popup.jpg" alt="Sport" className="popup__img" />
                </div>
                <div className="popup__right">
                    <a href="#section-tours" className="popup__close">&times;</a>
                    <h2 className="heading-secondary u-margin-bottom-medium">Sport</h2>
                    <h2 className="heading-teartiary u-margin-bottom-small">&ndash; Personal Training</h2>
                    <p className="popup__text">
                        Sedute di allenamento individuali o a piccoli gruppi, eseguite sotto la supervisione del Trainer.
                </p>
                    <h2 className="heading-teartiary u-margin-bottom-small">&ndash; Preparazione Atletica</h2>
                    <p className="popup__text">
                        Sedute di preparazione allo sport sia singolo che di squadra.
                </p>
                    <h2 className="heading-teartiary u-margin-bottom-small">&ndash; Rieducazione Funzionale</h2>
                    <p className="popup__text">
                        Sedute di rieducazione post infortunio e recupero della capacità condizionali.
                </p>
                    <a href="/contact" className="btn btn--green">Contatta</a>

                </div>
            </div>
        </div>
        <div className="popup" id="popup_2">
            <div className="popup__content">
                <div className="popup__left">
                    <img src="images/relax_popup.jpg" alt="Sport" className="popup__img" />
                </div>
                <div className="popup__right">
                    <a href="#section-tours" className="popup__close">&times;</a>
                    <h2 className="heading-secondary u-margin-bottom-medium">Relax</h2>
                    <h2 className="heading-teartiary u-margin-bottom-small">&ndash; Massaggio Olistico</h2>
                    <p className="popup__text">
                        Sedute di rilassamento e tonificazione miofasciale con tecniche di stretching assistito.
                </p>
                    <h2 className="heading-teartiary u-margin-bottom-small">&ndash; Massaggio Energetico</h2>
                    <p className="popup__text">
                        Trattamento eseguito con oli ed essenze essenziali.
                </p>
                    <a href="/contact" className="btn btn--green">Contatta</a>
                </div>
            </div>
        </div>
        <div className="popup" id="popup_3">
            <div className="popup__content">
                <div className="popup__left">
                    <img src="images/salute_popup.jpg" alt="Sport" className="popup__img" />
                </div>
                <div className="popup__right">
                    <a href="#section-tours" className="popup__close">&times;</a>
                    <h2 className="heading-secondary u-margin-bottom-medium">Salute</h2>
                    <h2 className="heading-teartiary u-margin-bottom-small">&ndash; Alimentazione Consapevole</h2>
                    <p className="popup__text">
                        Indicazioni sulla alimentazione da seguire per un corretto stile di vita e attività sportiva.
                </p>
                    <h2 className="heading-teartiary u-margin-bottom-small">&ndash; Naturopatia</h2>
                    <p className="popup__text">
                        Sedute di ripristino e mantenimento dell'equilibrio energetico della persona.
                </p>
                    <a href="/contact" className="btn btn--green">Contatta</a>
                </div>
            </div>
        </div>
    </div>
);


export default LandingPage;


/* <img src="images/movimento.jpg" alt="Movimento" className="composition__photo composition__photo--p1" />
        <img src="images/preparazione-atletica.jpg" alt="Preparazione Atletica" className="composition__photo composition__photo--p2" />
        <img src="images/recupero-funzionale.jpg" alt="Recupero Funzionale" className="composition__photo composition__photo--p3" /> */