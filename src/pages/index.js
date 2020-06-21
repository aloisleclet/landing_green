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
import picCirque from '../assets/images/actors/aurelie.jpg';
import picRemerciement from '../assets/images/landscapes/cabane.png';

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
          <a href="/position" className="image">
            <img src={picPosition} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Notre position</h2>
            <p>
                A l’heure où l’écologie est au cœur de la parole publique et des campagnes de marketing, il est temps d'agir concrètement en faveur de l’environnement. Notre évènement a pour but de créer un espace d’expression pour les personnes qui produisent de façon écologique
            </p>
            <a href="/position" className="special">
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/event" className="image">
            <img src={picEvent} alt="" />
          </a>
          <div className="content">
            <h2 className="major">L'événement</h2>
            <p>
                Le rendez-vous festif de cette convergence des milieux artistiques et paysans pour une présentation de leurs savoirs faire respectifs et une réflexion sur les changements nécessaires et urgents
            </p>
            <a href="/event" className="special">
              Découvrir
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/godmother" className="image">
            <img src={picStephanie} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Nos parrains et marraines</h2>
            <p>
              Aux côtés des anonymes qui nous nourrissent, qui militent pour la nature, qui veulent donner un sens et une utilité à leur expression artistique, des personnalités connues et engagées pour la nature nous soutiennent 
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
                <img src={picCirque} alt="" />
              </a>
              <h3 className="major">Artistes du cirque du Soleil</h3>
              <p>
                Des artistes engagés pour une transition dès aujourd’hui vers une agriculture non-conventionnelle
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
                Groupement de producteurs bio pour la défense de leurs intérêts, la diffusion de connaissances et le développement de l’agriculture bio
              </p>
              <a href="http://www.bio-provence.org/Agribio-05" target="_blank"  rel="noreferrer" className="special">
                En savoir plus
              </a>
            </article>

            <article>
                <img src={picPaysans} alt="" className="image"/>
              <h3 className="major">Paysans locaux</h3>
              <p>
                Agriculteurs questionnant les procédés conventionnels pour un réapprentissage de méthodes respectueuses de la nature
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
                Fédération de 90 associations visant à répandre et développer la culture sous toutes ses formes
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
                Association pour la protection de l’environnement en agissant au niveau institutionnel et pédagogique
              </p>
              <a href="http://www.sapn05.org/" target="_blank"  rel="noreferrer" className="special">
                En savoir plus
              </a>
            </article>

            <article>
              <img src={picRemerciement} alt="" className="image"/>
              <h3 className="major">Remerciements</h3>
              <p>
                Tous nos remerciements à deux bénévoles précieux : Aloïs Leclet qui n'a pas compté ses heures pour bâtir ce beau site et Stéphane Cantet qui nous a gentiment permis d'utiliser ses photos pour illustrer le site et les éléments de diffusion.
              </p>
              <a href="https://aloisleclet.fr/" target="_blank"  rel="noreferrer" className="special">
                Aloïs LECLET
              </a>
            </article>

          </section>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
