import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const InfoPage = () => (
    <div>
        <Navigation />
        <div className="info">
            <div className="bg-video">
                <img src="images/earth.jpg" alt="People writing" className="bg-video__content" />
            </div>
            <div className="row">
                <div className="info__content">
                    <figure className="info__content__shape">
                        <img src="images/alberto-1.jpeg" alt="Person on a tour" className="info__content__img" />
                    </figure>
                    <div className="info__content__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">Alberto Santarato<br />Dottore in Scienze Motorie, Personal trainer, Naturopata</h3>
                        <p>
                            Nato a Firenze il 30 Luglio 1975.<br />
                            Si laurea in scienze motorie col massimo dei voti nel 2002 presso l’Università degli Studi di Firenze.<br />
                            Svolge la sua attività dal 2002 in centri fitness e società sportive, impegnato nel campo della ricerca in protocolli di allenamento integrato allo studio del metabolismo e del condizionamento muscolare.<br />
                            Nel 2003 consegue il “ Master in traumatologia e ricondizionamento muscolare ” presso Fit-one, Milano.<br />
                            Nel 2012 ottiene la certificazione di Istruttore di Postural Pilates presso Postural Pilates Accademy, Torino.<br />
                            Nel 2013 consegue con lode il ” Master in Medicine Naturali “, presso l’Università degli Studi Tor Vergata di Roma, con tesi sperimentale “Analisi Biotipologica e allenamento Integrato”; consegue inoltre, nello stesso anno, il titolo di
                            “Doctor of Naturopathic Medicine” rilasciato dal College of Naturopathic Medicine, (CNM), Londra.<br />
                            E’ specializzato in analisi della composizione corporea e studio del metabolismo mediante Bioimpedenziometria (BIA).
                            Svolge attività di personal trainer e consulente sportivo.
                            Fondatore e promotore del metodo “Training Integrato”.
                        </p>
                    </div>
                </div>
            </div>
        </div>
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
                                <a href="#" className="footer__link">Curriculum</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Termini e privacy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer_copyright">
                        Built by <a href="" className="footer__link"> Leonardo Rosseti</a> {/* for his site
                    <a href="" className="footer__link">Advanced Site</a> Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for
                    both personal and commercial use, but NOT to claim it as your own design. A credit to the original author
                    is of cours highly appreciated! */}
                    </p>
                </div>
            </div>
        </footer>     </div>

);


export default InfoPage;