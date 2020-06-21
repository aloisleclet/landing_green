import React from 'react';

import Layout from '../components/Layout';
import Card from '../components/Card';

import config from '../../config';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Notre position</h2>
          <p></p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Notre position</h3>
          <blockquote>
            A l’heure où toute une jeunesse se lève aux quatre coins du monde pour protester contre l’inaction des gouvernements et le lourd héritage que leur transmettent les générations précédentes
            <br/><br/>
            Cette crise sanitaire est l'occasion de prendre conscience de l'impact de nos choix dans un contexte de mondialisation
            <br/><br/>
            Artistes et paysan.nes élèvent leurs voix de concert pour enfin être entendus
            <br/><br/>
            L'importation de soja transgénique cultivé sur les terres arrachées à la forêt Amazonienne pour nourrir nos bêtes n’est pas viable pour la santé des terres, des plantes, des animaux et des humains 
            <br/><br/>
            L'environnement Haut-Alpin est encore relativement préservé des dégâts de l'agriculture intensive
            <br/><br/>
            A nous d'agir pour le garder intact
            <br/><br/>
            Des agricultures durables pour l’environnement et les paysan.es ont déjà fait leurs preuves
            <br/><br/>
            Nous demandons à ce qu'elles soient concrètement soutenues
            <br/><br/>
            <b>Nous sommes unis</b>
            <br/><br/>
            Pour la protection de notre eau, de notre air pur et la qualité de nos vies
            <br/><br/>
            Pour des modes de productions paysans respectueux de l'environnement et du bien-être animal 
            <br/><br/>
            Pour une consommation éthique, locale et responsable dont les paysans puissent vivre
            <br/><br/>
            Pour des changements réels en faveur de l’environnement par des actions économiques et législatives, dépasser les simples paroles, effets d’annonces et consultations stériles
            <br/><br/>
            Des propositions concrètes seront faites le 12 Juillet grâce aux rencontres avec les paysans et dans la lignée des réformes proposées par la convention climat
            <br/><br/>
            

          </blockquote>

          <section className="features">
    
            <Card type='godmother'/>
            
            <Card type='event'/>

          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
