import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/landscapes/village.jpg';
import pic2 from '../assets/images/landscapes/cabane_alpage.jpg';
import pic3 from '../assets/images/actors/stephanie_bodet.jpg';
import pic4 from '../assets/images/actors/aurelie.jpg';
import pic5 from '../assets/images/actors/eve.jpg';
import pic6 from '../assets/images/actors/camille_judic.jpeg';
import pic7 from '../assets/images/actors/camille_judic.jpeg';

//pics members
import picAgribio from '../assets/images/actors/agribio.jpg';
import picPaysans from '../assets/images/actors/paysans.png';


import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/Elements" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Notre position</h2>
            <p>
              Nous sommes unis:
              pour la protection de notre eau, de notre air pur et la qualité de nos vies,
              pour des modes de productions paysans respectueux de l'environnement et du bien être animal,
              pour une consommation éthique, locale et responsable dont les paysans puissent vivre.
            </p>
            <a href="/position" className="special">
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">L'événement</h2>
            <p>
              Concrétisation de notre réflexion
            </p>
            <a href="/event" className="special">
              Découvrir
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Nos parrains et marraines</h2>
            <p>
              Ils nous font confiance
            </p>
            <a href="/godmother" className="special">
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1 index">
        <div className="inner">
          <h2 className="major">Les membres</h2>
          <p>
            Ils ont rejoint le mouvement
          </p>
          <section className="features">

            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Aurelie</h3>
              <p>
                Artistes du cirque du Soleil
              </p>
              <a href="/#" className="special">
                En savoir plus
              </a>
            </article>

            <article>
              <a href="/#" className="image">
                <img src={picAgribio} alt="" />
              </a>
              <h3 className="major">Agribio</h3>
              <p>
              </p>
              <a href="/#" className="special">
                En savoir plus
              </a>
            </article>

            <article>
              <a href="/#" className="image">
                <img src={picPaysans} alt="" />
              </a>
              <h3 className="major">Paysan.es du 05</h3>
              <p>
              </p>
              <a href="/#" className="special">
                En savoir plus
              </a>
            </article>

          </section>
          <ul className="actions">
            <li>
              <a href="/actors" className="button">
                Tout voir
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
