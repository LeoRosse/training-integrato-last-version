import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const ComposizioneCorporea = () => (
    <div>
        <Navigation />
        <header className="header__bia">
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Composizione Corporea</span>
                </h1>

                {/*                 <Link className="btn btn--white btn--animated" to="/dashboard-public">Entra</Link>
                <Link className="btn btn--white btn--animated" to="/login">Login</Link> */}

            </div>
        </header>
        <section className="section-home-fitness section-home-fitness--studio-corporeo" id="section-relax">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary--composizione">
                    Conosci i tuoi valori
                </h2>
            </div>
            <div className="row">
                <div className="card--sport card--compocorporea">
                    <div className="card--sport__side card--sport__side--front card--sport--compocorporea">
 {/*                       <div className="card--sport__picture card--sport__picture--6">
                            &nbsp;
            </div>*/}
                        <div className="card--sport__details card--sport__details--compocorporea">
                            <p>
                                Mediante controlli periodici si facilita la comprensione dei cambiamenti della composizione corporea, valutando, al di là del peso, la reale modificazione dei tessuti.</p>
                            <ul className="feature-box__list">
                                <li><b>TBW:</b> Total Body Water: indica la quantità d’acqua corporea totale, espressa in litri ed in percentuale rispetto al peso totale del soggetto;</li>
                                <li><b>ECW:</b> ExtraCellular Water: quantità d’acqua presente nell’ambiente extracellulare, espressa in litri ed in percentuale rispetto all’acqua corporea totale (TBW);</li>
                                <li><b>ICW</b>: IntraCellular Water: quantità d’acqua presente nell’ambiente intracellulare, espressa in litri ed in percentuale rispetto all’acqua corporea totale (TBW);</li>
                                <li><b>BCM</b>: Massa Cellulare: rappresenta la totalità delle  cellule viventi metabolicamente attive.</li>
                                <li><b>FFM</b>: Fat Free Mass: quantità di massa magra presente nel corpo, espressa in chilogrammi ed in percentuale rispetto al peso totale del paziente;</li>
                                <li><b>FM</b>: Fat Mass: quantità di massa grassa presente nel corpo, espressa in chilogrammi ed in percentuale rispetto al peso totale del paziente;</li>
                                <li><b>BMR</b>: Basal Metabolic Rate: per metabolismo basale si intende la quantità di energia (espressa in Kcal giornaliere) consumata da un individuo che si trovi in condizioni di massimo riposo fisico e mentale, in una stanza a temperatura confortevole e a digiuno da circa 12 ore;</li>
                            </ul>
                            <p>Ma come funziona la BIA?<br />L’esame si basa su un test semplice e non invasivo eseguito con uno strumento, Il Bioimpedenziometro, che permette di misurare la resistenza bioelettrica dei tessuti, stimando la Composizione Corporea in termini di Massa Grassa, Massa Magra, Massa Muscolare e Idratazione.
                            E’ sufficiente applicare 4 elettrodi adesivi al soggetto disteso sul lettino.
                            <br />
                            <br />
                                <b>A chi è rivolto?</b>
                            <br />
                            <br />
                                L’ esame BIA può essere effettuato su tutte le tipologie di soggetti;
                                atleti, sportivi amatoriali, persone che intraprendono un percorso di dimagrimento, di condizionamento muscolare e di consapevolezza della salute.
                            <br />
                            <br />
                                <b>Gli obbiettivi sono:</b>
                            </p>
                            <ul className="feature-box__list">
                                <li>Identificare lo stato reale della composizione corporea all ‘inizio di un percorso (nutrizionale, sportivo, di benessere) non limitandosi al solo peso corporeo ma valutando in maniera precisa la quantità e qualità dei liquidi e dei tessuti del corpo.</li>
                                <li>Modificare la normale alimentazione per controllare ed eventualmente correggere errori alimentari o squilibri metabolici.</li>
                                <li>Controllare l’equilibrio idroelettrolitico, che è la base per migliorare vitalità, tonicità e forza muscolare.</li>
                                <li>Coprire tutti i fabbisogni di energia e nutrienti.</li>
                            </ul>
                            <br />
                            <p>La valutazione di questi dati rappresenta il punto di partenza ottimale per costruire un percorso volto a  migliorare vitalità, tonicità e forza muscolare,oltre ad eseguire uno studio analitico del metabolismo di una persona e la sua costituzione.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>

);

export default ComposizioneCorporea;