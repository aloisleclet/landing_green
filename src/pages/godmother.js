import React from 'react';

import Layout from '../components/Layout';
import Card from '../components/Card';

import config from '../../config';

//pics

import picStephanie from '../assets/images/actors/stephanie_bodet.jpg';
import picVincent from '../assets/images/actors/vincent_meunier.jpg';
import picJean from '../assets/images/actors/noblet.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Nos parrains et marraines</h2>
          <p>Ils nous soutiennent !</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Nos parrains et marraines</h3>
          
          <section className="features">

            <article>
              <a href="https://fr.wikipedia.org/wiki/St%C3%A9phanie_Bodet" target="_blank" rel="noreferrer" className="image">
                <img src={picStephanie} alt="" />
              </a>
              <h3 className="major">Stéphanie Bodet</h3>
              <p>
                Grimpeuse et écrivaine Haute Alpine qui s’engage régulièrement dans des
                actions militantes et dans la valorisation de la simplicité
              </p>
              <a href="https://fr.wikipedia.org/wiki/St%C3%A9phanie_Bodet" target="_blank" rel="noreferrer" className="special">
                En savoir plus
              </a>
            </article>
            
            <article>
              <a href="https://fr.wikipedia.org/wiki/Vincent_Munier" target="_blank" rel="noreferrer" className="image">
                <img src={picVincent} alt="" />
              </a>
              <h3 className="major">Vincent Munier</h3>
              <p>
                Photographe animalier qui s’emploie à montrer la beauté de la nature
                sauvage et à mettre en lumière des espèces animales menacées
              </p>
              <a href="https://fr.wikipedia.org/wiki/Vincent_Munier" target="_blank" rel="noreferrer" className="special">
                En savoir plus
              </a>
            </article>
            
            <article>
              <a href="http://ecologienoblet.fr/" target="_blank" rel="noreferrer" className="image">
                <img src={picJean} alt="" />
              </a>
              <h3 className="major">Jean-François Noblet</h3>
              <p>
                Scientifique, objecteur de conscience pour la rigolade, l’amour, la
                nature, la liberté, l’humanisme et la paresse
              </p>
              <a href="http://ecologienoblet.fr/" target="_blank" rel="noreferrer" className="special">
                En savoir plus
              </a>
            </article>
          </section>

        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
