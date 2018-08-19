import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
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
);

export default Footer;