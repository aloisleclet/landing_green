import React from 'react';

import Layout from '../components/Layout';


//intoductions
import picPosition from '../assets/images/landscapes/village.jpg';
import picEvent from '../assets/images/landscapes/cabane_alpage.jpg';

//pics members
import picAgribio from '../assets/images/actors/agribio.jpg';
import picPaysans from '../assets/images/actors/paysans.png';
import picSapn from '../assets/images/actors/sapn.jpg';
import picGap from '../assets/images/actors/gap.jpg';
import picStephanie from '../assets/images/actors/stephanie_bodet.jpg';

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
            <img src={picPosition} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Notre position</h2>
            <p>
              A l’heure où l’écologie se trouve sur toutes les lèvres, sur toutes les affiches de marketing,
              les actions concrètes en faveur de l’environnement manquent de soutien. Nous avons voulu
              créer un espace d’expression pour les personnes qui produisent avec des solutions réellement
              écologiques

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
            <img src={picEvent} alt="" />
          </a>
          <div className="content">
            <h2 className="major">L'événement</h2>
            <p>
              Pour se retrouver et en découvrir davantage sur les liens qui se sont tissés entre paysan.nes
              et artistes, apprendre de nouvelles choses sur les modes de production paysans, voir de belles
              propositions artistiques.
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
            <img src={picStephanie} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Nos parrains et marraines</h2>
            <p>
              Cette action rassemble des personnes de tout horizons, des anonymes qui nous nourrissent,
              des anonymes qui militent pour la nature, des anonymes qui veulent donner une utilité à leur
              art. Mais aussi des personnes connues engagées pour la nature 
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
          <section className="features" id="actors">

            <article>
              <a href="https://www.youtube.com/watch?v=TOHY8FgvSag" target="_blank" rel="noreferrer" className="image">
                <img src={picStephanie} alt="" />
              </a>
              <h3 className="major">Artistes du cirque du Solei</h3>
              <p>
                Artistes qui mettent à profit leur inactivité
                temporaire pour s’engager en faveur d’une agriculture non-conventionnelle
              </p>
              <a href="https://www.youtube.com/watch?v=TOHY8FgvSag" target="_blank"  rel="noreferrer" className="special">
                En savoir plus
              </a>
            </article>

            <article>
              <a href="http://www.bio-provence.org/Agribio-05" target="_blank"  rel="noreferrer" className="image">
                <img src={picAgribio} alt="" />
              </a>
              <h3 className="major">Agribio</h3>
              <p>
                Association qui fédère les producteurs bio, défend leurs intérêts, et développe
                l’agriculture bio par la diffusion des connaissances
              </p>
              <a href="http://www.bio-provence.org/Agribio-05" target="_blank"  rel="noreferrer" className="special">
                En savoir plus
              </a>
            </article>

            <article>
              <a href="/#" target="_blank" className="image">
                <img src={picPaysans} alt="" />
              </a>
              <h3 className="major">Paysans locaux</h3>
              <p>
                  Agriculteurs qui ont vocation à remettre en question les
                  méthodes conventionnelles pour réapprendre à travailler en respectant la nature
              </p>
              <a href="https://www.ferme-vauban.com/"  rel="noreferrer" target="_blank" className="special">
                Ferme vauban
              </a>
              <a href="http://fermesaintlaurent.com/la-ferme/" target="_blank"  rel="noreferrer" className="special">
                Ferme saint laurent
              </a>
            </article>

            <article>
              <a href="https://www.ville-gap.fr/l-office-municipal-de-la-culture" target="_blank"  rel="noreferrer" className="image">
                <img src={picGap} alt="" />
              </a>
              <h3 className="major">Office Municipal de la Culture de Gap</h3>
              <p>
                Fédération de 90 associations qui soutient tout
                effort tendant à répandre et à développer la culture sous toutes ses formes
              </p>
              <a href="https://www.ville-gap.fr/l-office-municipal-de-la-culture" target="_blank"  rel="noreferrer" className="special">
                En savoir plus
              </a>
            </article>
            
            <article>
              <a href="http://www.sapn05.org/" target="_blank"  rel="noreferrer" className="image">
                <img src={picSapn} alt="" />
              </a>
              <h3 className="major">Société Alpine de Protection de la Nature :</h3>
              <p>
                Association qui vise à protéger l’environnement
                par des interventions au niveau institutionnel et l’amélioration des connaissances
              </p>
              <a href="http://www.sapn05.org/" target="_blank"  rel="noreferrer" className="special">
                En savoir plus
              </a>
            </article>

          </section>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
