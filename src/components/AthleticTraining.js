import React from 'react';
import Header from './Header';


const AthleticTraining = () => (
    <div>
        <Header />
        <div>
            <div className="container-home__fitness">
                <img src="/images/preparazione-atletica.jpg" />
            </div>
            <div className="container-athelitic__training__text">
                Preparazione atletica e studio del gesto tecnico sono la base per raggiungere obiettivi  per qualsiasi sport.
                <br />
                <br />
                La struttura e la funzione del gesto tecnico sono cambiare il punto di vista del tuo sport
                <br />
                <br />
                <b>Il percorso prevede:</b>
                <br />
                <ul>
                    <li>Colloquio iniziale e valutazione motoria</li>
                    <li>Analisi Bioimpedenziometrica BIA</li>
                    <li>Test fisici sul campo (Vo2, forza, flessibilità, equilibrio)</li>
                    <li>Consulenza e integrazione alimentare</li>
                    <li>Sviluppo dei programmi di preparazione atletica</li>
                    <li>Incontri di follow up itineranti</li>
                </ul>
            </div>
        </div>
    </div>
)

export default AthleticTraining;