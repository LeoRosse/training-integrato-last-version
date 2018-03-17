import React from 'react';
import Header from './Header';

const HomeFitness = () => (
    <div>
        <Header />
        <div className="container-home__fitness">
            <img src="/images/home-fitness1.jpg" style={{ width: "auto", height: "600px"}} />
            <p className="container-home__fitness__text">
                Il progetto <b>Home Fitness</b> risulta efficace per diverse tipologie di persone, consiste in un programma di esercizi per eseguire un perfetto allenamento a casa.
            Con l’ aiuto di piccoli attrezzi possiamo allenarci in maniera sicura ed efficace tranquillamente tra le mura domestiche o in giardino/terrazzo.
            <br />
                <br />
                <b>Scegli fra 3 tipologie di servizi e programma il Tuo allenamento</b>
                <br />
                <br />
                <img src="/images/tabella-home-fitness.jpg" />
            </p>
        </div>
    </div>
)

export default HomeFitness;

