import React from 'react';

import Layout from '../components/Layout';

//intoductions
import picPosition from '../assets/images/landscapes/village.jpg';
import picEvent from '../assets/images/landscapes/cabane_alpage.jpg';

//pics partners
import picAgribio from '../assets/images/actors/agribio.jpg';
import picPaysans from '../assets/images/actors/paysans.png';
import picSapn from '../assets/images/actors/sapn.jpg';
import picGap from '../assets/images/actors/gap.jpg';
import picCirque from '../assets/images/actors/aurelie.jpg';
import picRemerciement from '../assets/images/landscapes/cabane.png';
import picStephanie from '../assets/images/actors/stephanie_bodet.jpg';
import picVincent from '../assets/images/actors/vincent_meunier.jpg';
import picJean from '../assets/images/actors/noblet.jpg';

import picInterview from '../assets/images/actors/noblet.jpg';
import picYouth from '../assets/images/actors/youth.png';
import picTerre from '../assets/images/actors/terre.jpg';
import picPomme from '../assets/images/actors/pommes.jpg';
import picEcrin from '../assets/images/actors/ecrin.jpg';
import picLpo from '../assets/images/actors/lpo.png';


import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>Mouvement qui rassemble artistes et acteurs locaux de la défense environnementale par des reportages et des évènements qui visent à sensibiliser le grand public et obtenir la prise d’actions concrètes par les politiques publiques.</p>
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
              A l’heure où l’écologie est au cœur de la parole publique et des campagnes de marketing, il est temps d'agir concrètement en faveur de l’environnement. Notre évènement a pour but de créer un espace d’expression pour les personnes qui agissent face à l’urgence de la crise écologique.
            </p>
            <a href="https://youtu.be/hbeEdLzCWKA" target="_blank" rel="noreferrer" className="special">
              Visionner le teaser
            </a>
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
            <h2 className="major">Évènement à venir</h2>
            <p>
              Le 13 Septembre 2020 au plan d’eau d’Embrun : marché de producteurs bio, artisans et associations engagées de 10h à 17h.
Conférence de presse artistique à 15H : 10 communes aux côtés des artistes pour bâtir le monde écologique de demain.
            </p>
            <a href="/event" className="special">
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/interviews" className="image">
            <img src={picInterview} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Interviews et reportages</h2>
            <p>
              En amont de l'événement : "T'es rien sans la Terre" à Veynes (05) le 12 Juillet 2020 nous sommes allées à la rencontre des parrains ainsi que des agriculteurs afin de recueillir leurs réflexions et connaissances. 
            </p>
            <a href="/interviews" className="special">
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1 index">
        <div className="inner">
          <h2 className="major">Nos partenaires</h2>
          <p>
            Ils se sont investis pour des événements passés ou à venir 
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
              <h3 className="major">Confédération paysanne 05</h3>
              <p>
                Syndicat Agricole intégrant pleinement les dimensions sociales, agronomiques et environnementales dans le projet pour une agriculture paysanne qu’elle défend depuis sa création.
              </p>
              <a href="http://www.confederationpaysanne.fr/index.php"  rel="noreferrer" target="_blank" className="special">
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
              <a href="https://www.lpo.fr/" target="_blank" rel="noreferrer" className="image">
                <img src={picLpo} alt="" />
              </a>
              <h3 className="major">Ligue de Protection des Oiseaux</h3>
              <p>
                Première association de protection de la nature en France elle œuvre au quotidien pour la protection des espèces, la préservation des espaces et pour l'éducation et la sensibilisation à l'environnement.
              </p>
              <a href="https://www.lpo.fr/" target="_blank" rel="noreferrer" className="special">
                En savoir plus
              </a>
            </article>
            
            <article>
              <a href="http://www.ecrins-parcnational.fr/ " target="_blank" rel="noreferrer" className="image">
                <img src={picEcrin} alt="" />
              </a>
              <h3 className="major">Parc National des Ecrins </h3>
              <p>
                Préserver les espèces et les milieux, transmettre les savoirs et l'assurance d'une bonne accessibilité au massif, sont les trois priorités du Parc national des Ecrins.  
              </p>
              <a href="http://www.ecrins-parcnational.fr/ " target="_blank" rel="noreferrer" className="special">
                En savoir plus
              </a>
            </article>
            
            <article>
              <a href="https://terredeliens.org/" target="_blank" rel="noreferrer" className="image">
                <img src={picTerre} alt="" />
              </a>
              <h3 className="major">Terre de liens</h3>
              <p>
                Terre de Liens est née en 2003 de la convergence de plusieurs mouvements liant l’éducation populaire, l’agriculture biologique et biodynamique, la finance éthique, l’économie solidaire et le développement rural. 
              </p>
              <a href="https://terredeliens.org/" target="_blank" rel="noreferrer" className="special">
                En savoir plus
              </a>
            </article>
            
            <article>
              <a href="https://croqueurs-national.fr/" target="_blank" rel="noreferrer" className="image">
                <img src={picPomme} alt="" />
              </a>
              <h3 className="major">Les croqueurs de pommes </h3>
              <p>
                Association qui milite pour la sauvegarde des variétés fruitières régionales en voie de disparition, ses activités principales sont la pomologie (connaissance des variétés fruitières) et l'arboriculture (taille, greffe, soins du verger).
              </p>
              <a href="https://croqueurs-national.fr/" target="_blank" rel="noreferrer" className="special">
                En savoir plus
              </a>
            </article>
            
            <article>
              <a href="https://youthforclimate.fr/" target="_blank" rel="noreferrer" className="image">
                <img src={picYouth} alt="" />
              </a>
              <h3 className="major">Youth for Climate</h3>
              <p>
                Mouvement de jeunes qui se mobilisent pour la justice climatique et sociale, la protection de l’environnement et de la biodiversité. Véritable carrefour des mobilisations écologistes jeunes, Youth for Climate France crée des liens entre les différentes mobilisations locales, et référence les nombreuses initiatives militantes à travers toute la France
              </p>
              <a href="https://youthforclimate.fr/" target="_blank" rel="noreferrer" className="special">
                En savoir plus
              </a>
            </article>
            
            
            <article>
              <a href="https://fr.wikipedia.org/wiki/St%C3%A9phanie_Bodet" target="_blank" rel="noreferrer" className="image">
                <img src={picStephanie} alt="" />
              </a>
              <h3 className="major">Stéphanie Bodet</h3>
              <p>
                Grimpeuse et écrivaine Haute Alpine régulièrement engagée dans des actes militants et dans la valorisation de la simplicité
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
                Photographe animalier dont l’œuvre met en lumière la beauté de la nature sauvage et les espèces animales menacées
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
                Scientifique, objecteur de conscience pour la rigolade, l’amour, la nature, la liberté, l’humanisme et la paresse 
              </p>
              <a href="http://ecologienoblet.fr/" target="_blank" rel="noreferrer" className="special">
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
