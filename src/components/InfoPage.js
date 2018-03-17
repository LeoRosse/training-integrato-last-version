import React from 'react';
import Header from './Header';

const InfoPage = () => (
    <div>
        <Header />
        <div className="container-info">
            <div className="container-info__photo">
                <img src="/images/alberto.jpg" className="info__image" />
            </div>
            <div className="info__text">
                <h2>Alberto Santarato,<br />
                    Dottore in Scienze Motorie, Personal trainer, Naturopata</h2>

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
        </div>
        </div>
    </div>
);


export default InfoPage;