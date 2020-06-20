import React from 'react';

import Layout from '../components/Layout';
import Card from '../components/Card';

import config from '../../config';

//pics

import picStephanie from '../assets/images/actors/eve.jpg';
import picVincent from '../assets/images/actors/eve.jpg';
import picJean from '../assets/images/actors/eve.jpg';

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
              <a href="/#" className="image">
                <img src={picStephanie} alt="" />
              </a>
              <h3 className="major">Stéphanie Bodet</h3>
              <p>
                écrivaine et championne d'escalade
              </p>
              <a href="/#" className="special">
                En savoir plus
              </a>
            </article>
            
            <article>
              <a href="/#" className="image">
                <img src={picVincent} alt="" />
              </a>
              <h3 className="major">Vincent Munier</h3>
              <p>
                photographe animalier
              </p>
              <a href="/#" className="special">
                En savoir plus
              </a>
            </article>
            
            <article>
              <a href="/#" className="image">
                <img src={picJean} alt="" />
              </a>
              <h3 className="major">Jean-François Noblet</h3>
              <p>
                écologiste
              </p>
              <a href="/#" className="special">
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
