import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Modal from './UI/Modal';

class LandingPage extends Component {

    state = {
        showModal: false
    }

    modalCancelHandler = () => {
        this.setState({ showModal: false });
    }

    modalHandler = () => {
        this.setState({ showModal: true });
    }

    renderModal = () => {

        return (
            <Modal show={this.state.showModal} modalClosed={this.modalCancelHandler}>
                <div className="popup__content">
                    <div className="popup__left">
                        <img src="images/sport_popup-web.jpg" alt="Sport" className="popup__img" />
                    </div>
                    <div className="popup__right">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            <b>Percorso:</b>
                        </h3>
                        <div className="paragraph">
                            <ul className="paragraph__list">
                                <li className="paragraph__item">Colloquio Iniziale</li>
                                <li className="paragraph__item">Studio della costituzione</li>
                                <li className="paragraph__item">Analisi BIA</li>
                                <li className="paragraph__item">Educazione Alimentare</li>
                            </ul>
                        </div>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            <b>Al termine della consulenza vengono indicati:</b>
                        </h3>
                        <div className="paragraph">
                            <ul className="paragraph__list">
                                <li className="paragraph__item">Consigli per un sano stile di vita</li>
                                <li className="paragraph__item">Regole generali per una corretta alimentazione</li>
                                <li className="paragraph__item">Suggerimenti di tecniche da praticare a casa</li>
                                <li className="paragraph__item">Indicazione per una adeguata attività fisica</li>
                            </ul>
                        </div>
                        <a href="/contact" className="btn btn--green" style={{ float: 'right' }}>Contatta</a>
                    </div>
                </div>
            </Modal>
        );
    }

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
                            {/*                            <p className="paragraph">
                                E’ un percorso dedicato al raggiungimento e al
                                mantenimento di un buono stato di salute e di forma fisica.
                                Le fondamenta si basano su un corretto stile di vita, su una
                                alimentazione consapevole e su una attività fisica mirata.
                                Lo stato di salute è fusione, equilibrio e armonia tra le varie
                                componenti essenziali del corpo.
                                Il colloquio con la persona viene indirizzato in modo mirato
                                per conoscere le peculiarità dell’individuo, anche attraverso
                                domande specifiche che vanno ad evidenziare alcuni
                                sintomi e le sue caratteristiche psico-fisiche, per valutarne
                                la costituzione ed individuare le tipologie di intervento.
                                Il colloquio viene integrato con una valutazione della
                                composizione corporea (BIA) che permette di valutare
                                lo stato nutrizionale della persona per modulare
                                eventuali squilibri alimentari e sviluppare un programma
                                di attività fisica mirata.
        </p>*/}
                            <p className="paragraph"><i>Il metodo Training Integrato partendo da un accurato studio corporeo ci permette di pianificare in maniera approfondita la strategia di intervento da
                            adottare per raggiungere uno stile di vita che esprima le proprie potenzialità a 360 gradi.</i></p>
                            <Link to="/salute" className="buttonText buttonPopup">Scopri di più &rarr;</Link>
                        </div>
                    </section>

                    <section className="section-features">
                        <div className="row">
                            <div className="feature-box">
                                <h3 className="heading-tertiary u-margin-bottom-small" style={{fontSize:'2rem'}}>Studio Corporeo</h3>
                                <span className="feature-box__text">
                                    Effettuare lo studio analitico del corpo nelle sue componenti regolatorie e metaboliche è di primaria importanza e ci 
                                    aiuta a capire in modo scientifico come cambiano nel tempo, per avere chiare indicazioni su come raggiungere i propri obbiettivi
                                    di salute e di performance.
{/*                                <br />
                                    <br />
                                    Attraverso la <b>metodica BIA</b> siamo in grado di analizzare:
                                <ul className="feature-box__list">
                                        <li>lo stato di idratazione</li>
                                        <li>valutare la quantità di muscolo e grasso corporeo</li>
                                        <li>stimare il metabolismo basale</li>
                                        <li>analizzare lo stato di stress cellulare</li>
</ul>*/}
                                </span>
                                <br/>
                                <br/>
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
                                    <Link to="/salute" className="card__side card__side--link" ><div className="card__side card__side--front">
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
                                                <li>Training Integrato</li>
                                                <li>Alimentazione Consapevole</li>
                                            </ul>
                                        </div>
                                    </div></Link>
                                    <div className="card__side card__side--back card__side--back-3">
                                        <div className="card__cta">
                                            {/*                                     <div className="card__price-box">
                                                <p className="card__price-value">€75</p>
                                            </div> */}
                                            {/*<a href="#popup_2" className="btn btn--white">Scopri di più</a>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-of-3">
                                <div className="card">
                                    <div className="card__side card__side--front">
                                        <Link to="/sport" className="card__side card__side--link"><div className="card__picture card__picture--1">
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
                                            </div></Link>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-1">
                                        <div className="card__cta">
                                            {/*                                     <div className="card__price-box">
                                            <p className="card__price-value">€50</p>
                                        </div> */}
                                            {/*<a href="#popup_2" className="btn btn--white">Scopri di più</a>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-of-3">
                                <div className="card">
                                    <div className="card__side card__side--front">
                                        <Link to="/relax" className="card__side card__side--link"><div className="card__picture card__picture--2">
                                            &nbsp;
                                </div>
                                            <h4 className="card__heading">
                                                <span className="card__heading-span">
                                                    Recupero
                                    </span>
                                            </h4>
                                            <div className="card__details">
                                                <ul>
                                                    <li>Massaggio Olistico</li>
                                                    <li>Trattamento Riequilibrante</li>
                                                </ul>
                                            </div></Link>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-2">
                                        <div className="card__cta">
                                            {/*                                     <div className="card__price-box">
                                            <p className="card__price-value">€60</p>
                                        </div> */}
                                            {/*<a href="#popup_2" className="btn btn--white">Scopri di più</a>*/}
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
                        <img src="images/Logo3dtrasp.png" alt="Full Logo" className="footer__logo" />
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            <div className="footer__logo--box">
                                <a href="http://www.facebook.com/trainingintegrato.it" target="blank"><i className="fab fa-facebook-square icon"></i></a>
                                <a href="https://www.youtube.com/user/albertosantarato" target="blank"><i className="fab fa-youtube icon"></i></a>
                                <a href="https://www.instagram.com/trainingintegrato/" target="blank"><i className="fab fa-instagram icon"></i></a>
                            </div>
                            <div className="footer__copyright">
                                <ul className="footer__list">
                                    <li className="footer__item">
                                        <a href="#" className="footer__link">Partner</a>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/contact" className="footer__link">
                                            Contattaci</Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/chi-sono" className="footer__link">Curriculum</Link>
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
                                Built by <a href="" className="footer__link"> Leonardo Rosseti</a>,<br className="mobilesOnly" /> Design by  <a href="http://codingheroes.io/resources/" className="footer__link">Jonas Schmedtmann</a>
                            </p>
                            <p className="footer__copyright footer__copyright--noborder">
                                <a href="#" className="footer__link">Copyright © Training Integrato 2018</a> All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>



            </div>
        )
    }
}

export default LandingPage;
