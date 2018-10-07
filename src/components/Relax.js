import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const relax = () => (
    <div>
        <Navigation />
        <header className="header__relax">
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Relax</span>
                </h1>

                {/*                 <Link className="btn btn--white btn--animated" to="/dashboard-public">Entra</Link>
                <Link className="btn btn--white btn--animated" to="/login">Login</Link> */}

            </div>
        </header>
        <section className="section-home-fitness" id="section-relax">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary--relax">
                    Scegli il tuo trattamento
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="card--relax">
                        <div className="card--relax__side card--relax__side--front">
                            <div className="card--relax__picture card--relax__picture--2">
                                &nbsp;
                            </div>
                            <h4 className="card--relax__heading">
                                <span className="card--relax__heading-span card--relax__heading-span--2">
                                    Massaggio Olistico
                                </span>
                            </h4>
                            <div className="card--relax__details">
                                <p>
                                Il massaggio olistico è specifico per sciogliere tensioni 
                                fisiche ed emotive.
                                Tramite le tecniche vengono migliorate la capacità di 
                                rilassamento e di ascolto corporeo;si favorisce la 
                                circolazione, l'ossigenazione dei tessuti e la depurazione 
                                dell’ organismo.
                                Il trattamento è valorizzato dalla miscelazione con 
                                oli essenziali secondo le esigenze individuali.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="card--relax">
                        <div className="card--relax__side card--relax__side--front">
                            <div className="card--relax__picture card--relax__picture--3">
                                &nbsp;
                            </div>
                            <h4 className="card--relax__heading">
                                <span className="card--relax__heading-span card--relax__heading-span--3">
                                    Trattamento Riequilibrante
                                </span>
                            </h4>
                            <div className="card--relax__details">
                                <p>
                                    Incontro di tecniche di rilassamento e tonificazione
                                    miofasciale, tramite stretching assistito e digitopressioni
                                    per trovare l’ armonia del proprio corpo dopo una gara,
                                    per uno sforzo fisico e per il benessere della persona.
                                    Il trattamento finalizza il riequilibrio della postura e
                                    l‘ allungamento di alcuni distretti muscolari e tendinei.
                                    I punti chiave del corpo stimolati, ripristinano
                                    la mobilità articolare e migliorano l’elasticità muscolare.
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

export default relax;