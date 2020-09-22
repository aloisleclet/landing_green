import React from 'react';

import Layout from '../components/Layout';

import Card from '../components/Card';
import OsmMap from '../components/OsmMap';
import Video from '../components/Video';
import ReactPlayer from 'react-player';

import picPlaquette from '../assets/images/event/plaquette.png';
import picPresse1 from '../assets/images/event/presse1.jpg';
import picPresse2 from '../assets/images/event/presse2.jpg';

const EventPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Les évènements</h2>
          <p>Concrétisation de notre réflexion</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Évènement à venir</h3>
          <h4>Conférence de presse artistique </h4>
          <Video url="https://www.youtube.com/watch?v=_PxB5bHx-wc" />
          <br/>
          <h5>La plaquette :</h5>
          <br/>
          <img src={picPlaquette} />
          <br/>
          <br/>
          <h5>La presse en parle :</h5>
          <a href="https://www.ledauphine.com/environnement/2020/09/13/hautes-alpes-ils-prennent-des-arretes-anti-pesticides?fbclid=IwAR39zjPwtI8_YtD_69CVYci-JJMTiG-FscVjub10dq5fe8wtjWiYQMRslDU" target="_blank" rel="noreferrer">Interview Dauphine</a> 
          <br/>
          <a href="https://www.dici.fr/actu/2020/09/13/hautes-alpes-artistes-politiques-associatifs-unis-embrun-contre-pesticides-1439874?fbclid=IwAR39zjPwtI8_YtD_69CVYci-JJMTiG-FscVjub10dq5fe8wtjWiYQMRslDU
" target="_blank" rel="noreferrer">Interview d'ici TV</a>
          <br/>
          <br/>
          <h5>Ce sera ici: </h5>
          <br/>
          <OsmMap lat="44.5471869" lng="6.4212282" text="Plan d'eau d'Embrun" />
          
          <br/>
          <br/>
          
          <h3 className="major">Évènement passé</h3>
          <h4 className="">Parcours artistique et paysan</h4>

          <p>
            Le 12 juillet dernier, le groupe avait organisé son premier événement à Veynes, où le maire, Christian GILARDEAU, avait annoncé la signature d’un arrêté « zéro pesticide ». Pour ne pas le laisser seul dans cette démarche, T’es rien sans la Terre a décidé de contacter les communes du département les plus engagées en faveur de l’environnement pour les inciter à se joindre à cette initiative. Dix de ces communes ont répondu favorablement, notamment Puy-Saint-André, dont l’ancien maire, Pierre LEROY, a pris un arrêté identique en 2019. Ledit arrêté a été retoqué par la préfecture, comme la quasi-totalité de ces arrêtés en France. Optimiste, le groupe a ensuite contacté toutes les autres communes du 05 pour les inviter à rejoindre le mouvement, sans grand succès.
          </p>

          <p>
Si l’événement a pu avoir lieu, c’est aussi grâce à l’aide de l’association Génépi qui proposait ce jour-là un marché bio et artisan, sorte de version miniature de leur foire annuelle, covid oblige. À 15h00, c’est Aurélie Dauphin, fondatrice de T’es rien sans la Terre, qui a ouvert la conférence avec un numéro de tissu aérien empli de poésie, à la fin duquel l’ensemble des artistes ont traversé le public, poignée de terre en main, pour rejoindre la scène. « La terre ne peut pas prendre le micro, nous choisissons de prendre sa voix, son langage, nous l’écoutons et nous mobilisons tous ensemble unis pour la même cause » a-t-elle déclaré avant de donner la parole à Pierre LEROY, adjoint à la mairie de Puy-Saint-André et ancien maire. Celui qui avait été le premier du département à prendre un arrêté interdisant l’utilisation de produits phytosanitaires, n’a pas perdu espoir puisqu’il était là pour soutenir les autres communes dans cette démarche. 
          </p>

          <p>
Se sont enchaînées prestations artistiques sur le thème de l’environnement et déclarations d’élus, associations et agriculteurs pendant près de deux heures. Si tous ont abordé une facette différente de la transition écologique, un message était bien commun : ne surtout pas pénaliser les agriculteurs conventionnels mais travailler avec eux, main dans la main, pour rendre la transition écologique possible et sereine. C’est pour cette raison que deux communes, Guillestre et Eygliers, ont choisi de ne pas signer d’arrêté mais un engagement de transition sur trois ans, pour épauler les agriculteurs conventionnels implantés sur leur commune et signer l’arrêté avant la fin du mandat. 
          </p>

          <p>
Nombre d’autres communes présentes, comme Montbrand, La Faurie, Montdauphin, Rabou, ou encore Éourres, sont « vertes » depuis si longtemps que le glyphosate n’est pour elles qu’un lointain souvenir. Pour elles, l’arrêté ne représente pas un changement aussi important que pour Veynes ou Baratier, qui ont signé l’arrêté grâce à un travail conjoint avec leurs employés municipaux et agriculteurs, pour changer le fonctionnement de la commune de façon viable et durable. 
          </p>
          
          <p>
Car les agriculteurs sont ceux qui souffrent le plus des pesticides, et la transition écologique est semée d’embûche. Pour les accompagner, Marc VIOSSAT est venu témoigner, non pas en tant que politicien mais en tant qu’agriculteur. Bien qu’il pratique le bio depuis 20 ans, c’est pourtant dans le conventionnel qu’il a commencé l’agriculture. Alors les difficultés rencontrées par les agriculteurs qui veulent changer pour une agriculture sans pesticide, Marc les connait bien, et son expérience est une aide précieuse pour les communes et les agriculteurs. 
          </p>

          <p>
Côté associations, la SAPN, la Confédération Paysanne et les Coquelicots étaient présents pour s’engager aux côtés de T’es rien sans la Terre. Unies, ces associations vont poursuivre leur travail de façon collaborative pour donner une suite à cette conférence. Car le travail ne s’arrête pas là, tout est encore à faire pour convaincre les autres communes de suivre le mouvement, et ça commence bien puisque le lendemain de la conférence, la commune de Barcillonnette a annoncé vouloir y prendre part. Le but est aussi de dépasser les frontières du département, car comme l’a rappelé Aurélie, « la Terre ne connaît pas de frontières, l’écologie non plus ».
          </p>
          <br/>
          <br/>
          <h5>La presse en parle :</h5>
          <img src={picPresse1} />
          <img src={picPresse2} />

          <section className="features">

            <Card type='resources'/>
            
            <Card type='position'/>

          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default EventPage;
