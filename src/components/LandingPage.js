import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <header className="header">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Training Integrato</span>
              <span className="heading-primary--sub">Alberto Santarato</span>
            </h1>
          </div>
        </header>
        <main>
          <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Scienze Motorie <br /> Naturopatia
              </h2>
            </div>
            <div className="row">
              <p className="paragraph">
                <i>
                  Il metodo Training Integrato inizia da un accurato studio
                  corporeo e permette di pianificare in maniera approfondita la
                  strategia di intervento da adottare per raggiungere uno stile
                  di vita che esprima le proprie potenzialità a 360 gradi.
                </i>
              </p>
              <Link to="/salute" className="buttonText buttonPopup">
                Scopri di più &rarr;
              </Link>
            </div>
          </section>

          <section className="section-features">
            <div className="row">
              <div className="feature-box">
                <h3
                  className="heading-tertiary u-margin-bottom-small"
                  style={{ fontSize: "2rem" }}
                >
                  Studio Corporeo
                </h3>
                <span className="feature-box__text">
                  Effettuare lo studio analitico del corpo nelle sue componenti
                  regolatorie e metaboliche è di primaria importanza e ci aiuta
                  a capire in modo scientifico come cambiano nel tempo, per
                  avere chiare indicazioni su come raggiungere i propri
                  obbiettivi di salute e di performance.
                </span>
                <br />
                <br />
                <a href="/studiocorporeo" className="btn-text">
                  Scopri di più &rarr;
                </a>
              </div>
            </div>
          </section>
          <section className="section-tours" id="section-tours">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">Scopri la tua necessità</h2>
            </div>
            <div className="row">
              <div className="col-1-of-3">
                <div className="card">
                  <Link to="/salute" className="card__side card__side--link">
                    <div className="card__side card__side--front">
                      <div className="card__picture card__picture--3">
                        &nbsp;
                      </div>
                      <h4 className="card__heading__salute">
                        <span>Salute</span>
                      </h4>

                      <div className="card__details">
                        <ul>
                          <li>Training Integrato</li>
                          <li>Alimentazione Consapevole</li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta"></div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <Link to="/sport" className="card__side card__side--link">
                      <div className="card__picture card__picture--1">
                        &nbsp;
                      </div>

                      <h4 className="card__heading card__heading--sport">
                        <span className="card__heading-span">Sport</span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>Personal Training</li>
                          <li>Preparazione Atletica</li>
                          <li>Rieducazione Funzionale</li>
                        </ul>
                      </div>
                    </Link>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta"></div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <Link
                      to="/riequilibrio"
                      className="card__side card__side--link"
                    >
                      <div className="card__picture card__picture--2">
                        &nbsp;
                      </div>
                      <h4 className="card__heading card__heading--recupero">
                        <span className="card__heading-span">Riequilibrio</span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>Massaggio Olistico</li>
                          <li>Trattamento Riequilibrante</li>
                        </ul>
                      </div>
                    </Link>
                  </div>
                  <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta"></div>
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
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
