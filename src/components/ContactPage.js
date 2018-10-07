import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const ContactPage = () => (
    <div>
        <Navigation />
        <div className="contact">
                <div className="bg-video">
                    <img src="images/contact-web.jpg" alt="contact" className="bg-video__content" />
                </div>
                <div className="row">
                    <div className="contact__content">
                        <ul className="contact__list">
                            <li className="contact__item__top">Puoi contattarmi qui:</li>
                            <li className="contact__item mobilesOnly" href="tel:393339760998">+39 333 97 60 998</li>
                            <li className="contact__item desktopOnly">+39 333 97 60 998</li>
                            <li className="contact__item contact__item--email">alberto.santarato@gmail.com</li>
                        </ul>
                    </div> 
                </div>    
        </div>
        <Footer />
    </div>
);

export default ContactPage;