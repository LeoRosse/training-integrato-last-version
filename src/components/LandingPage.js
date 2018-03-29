import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => (
    <div>
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            Chi siamo</a>
                    </li>
                    {/*                     <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            <span>02</span>Your Benefits</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            <span>03</span>Popular tours</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            <span>04</span>Stories</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            <span>05</span>Book now</a>
                    </li> */}
                </ul>
            </nav>
        </div>
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
                            Preparazione atletica
                        </h3>
                        <p className="paragraph">
                            La preparazione atletica e lo studio del gesto tecnico sono la base per raggiungere obiettivi per qualsiasi sport.
                            La struttura e la funzione del gesto tecnico possono cambiare il punto di vista del tuo sport.
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Il percorso prevede:
                        </h3>
                        <p className="paragraph">
                            <ul>
                                <li>Colloquio iniziale e valutazione motoria</li>
                                <li>Analisi Bioimpedenziometrica BIA</li>
                                <li>Test fisici sul campo (Vo2, forza, flessibilità, equilibrio)</li>
                                <li>Consulenza e integrazione alimentare</li>
                                <li>Sviluppo dei programmi di preparazione atletica</li>
                                <li>Incontri di follow up itineranti</li>
                            </ul>
                        </p>

                        <a href="" className="btn-text">Scopri di più &rarr;</a>

                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src="images/movimento.jpg" alt="Movimento" className="composition__photo composition__photo--p1" />
                            <img src="images/preparazione-atletica.jpg" alt="Preparazione Atletica" className="composition__photo composition__photo--p2" />
                            <img src="images/recupero-funzionale.jpg" alt="Recupero Funzionale" className="composition__photo composition__photo--p3" />
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
            <section className="section-stories">
                <div className="bg-video">
                    {/*                  <video className="bg-video__content" autoplay muted loop>
                    <source src="img/video.mp4" type="video/mp4">
                    <source src="img/video.webm" type="video/webm"> Your browser is not supported!
                </video>  */}
                    <img src="images/people-writing.jpg" alt="People writing" className="bg-video__content" />
                </div>
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Allenamenti al passo con la ricerca
                </h2>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src="img/nat-8.jpg" alt="Person on a tour" className="story__img" />
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
                            <img src="img/nat-9.jpg" alt="Person on a tour" className="story__img" />
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
            </section>
        </main>

        <div className="popup" id="popup">
        <div className="popup__content">
            <div className="popup__left">
{/*                 <img src="img/nat-8.jpg" alt="Tour photo" className="popup__img" />
                <img src="img/nat-9.jpg" alt="Tour photo" className="popup__img" /> */}
            </div>
            <div className="popup__right">
                <a href="#section-tours" className="popup__close">&times;</a>
                <h2 className="heading-secondary u-margin-bottom-medium">Start booking now</h2>
                <h3 className="heading-teartiary u-margin-bottom-small">Important &ndash; Please read these terms before booking!</h3>
                <p className="popup__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Nisi est sit amet facilisis. Arcu ac tortor dignissim convallis aenean et tortor. Ullamcorper sit amet
                    risus nullam eget. Nec feugiat in fermentum posuere urna. Potenti nullam ac tortor vitae purus faucibus
                    ornare suspendisse sed. Nisl rhoncus mattis rhoncus urna neque viverra. Sed nisi lacus sed viverra tellus
                    in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Diam donec adipiscing tristique
                    risus nec feugiat in fermentum. Purus in massa tempor nec feugiat nisl pretium. Tortor vitae purus faucibus
                    ornare.
                </p>
                <a href="#" className="btn btn--green">Book now</a>
            </div>
        </div>
    </div>
    </div>
);


export default LandingPage;