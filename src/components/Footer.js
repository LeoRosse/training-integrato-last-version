import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo-box">
      <img
        src="images/Logo3dtrasp.png"
        alt="Full Logo"
        className="footer__logo"
      />
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer__logo--box">
          <a href="http://www.facebook.com/trainingintegrato.it" target="blank">
            <i className="fab fa-facebook-square icon" />
          </a>
          <a
            href="https://www.youtube.com/user/albertosantarato"
            target="blank"
          >
            <i className="fab fa-youtube icon" />
          </a>
          <a href="https://www.instagram.com/trainingintegrato/" target="blank">
            <i className="fab fa-instagram icon" />
          </a>
        </div>
        <div className="footer__copyright">
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/chi-sono" className="footer__link">
                Partner
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/contact" className="footer__link">
                Contattaci
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/chi-sono" className="footer__link">
                Curriculum
              </Link>
            </li>
          </ul>
        </div>
        <p className="footer__copyright footer__copyright--noborder">
          Si riceve presso:
          <a
            href="https://www.google.com/maps/place/Fisioner+-+Studio+di+Fisioterapia+e+Riabilitazione/@43.7752199,11.2099584,17z/data=!3m1!4b1!4m5!3m4!1s0x132a56d47364f9ed:0x7e4e0c795e4f1e5e!8m2!3d43.775216!4d11.2121471"
            className="footer__link"
          >
            <i class="fas fa-map-marker marker"></i> Fisioner
          </a>
          <a
            href="https://www.google.com/maps/place/C.M.O.+Centro+Medicina+Osteopatica+di+Andrea+Corti+e+Nicola+Barsotti/@43.7575831,11.292416,17z/data=!3m1!4b1!4m5!3m4!1s0x132a538251b085a1:0x66c2abfc38649820!8m2!3d43.7575792!4d11.2946047"
            className="footer__link"
          >
            <i class="fas fa-map-marker marker"></i> Cmo Firenze
          </a>
        </p>
      </div>
      <div className="col-1-of-2">
        <div className="footer__logo--box">
          <a href="http://www.cnmitalia.com/">
            <img
              src="images/CNM-Logo.png"
              alt="CNM Logo"
              className="footer__logo__cnm"
            />
          </a>
          <a href="https://www.unifi.it">
            <img
              src="images/logo-unifi.png"
              alt="Unifi Logo"
              className="footer__logo__unifi"
            />
          </a>
          <a href="https://web.uniroma2.it/">
            <img
              src="images/logo-TorVergata.png"
              alt="CNM Logo"
              className="footer__logo__vergata"
            />
          </a>
        </div>
        <p className="footer__copyright">
          Built by{" "}
          <a href="https://www.facebook.com/l.rosseti" className="footer__link">
            {" "}
            Leonardo Rosseti
          </a>
          ,<br className="mobilesOnly" /> Design by{" "}
          <a href="http://codingheroes.io/resources/" className="footer__link">
            Jonas Schmedtmann
          </a>
        </p>
        <p className="footer__copyright footer__copyright--noborder">
          Copyright
          <a href="http://www.trainingintegrato.com/" className="footer__link">
            {" "}
            © Training Integrato {moment().format("YYYY")}
          </a>{" "}
          <br className="mobilesOnly" />
          All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
