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
          <p>Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Notre position</h3>
          <blockquote>
            A l’heure où les prises de position se multiplient sur la nécessité de changer nos modèles économiques et agricoles,<br/><br/> 
A l’heure où les choix des consommateurs se portent sur des modes de production éthiques, durables et respectueux de l’environnement et des animaux,<br/><br/>
A l’heure où toute une jeunesse se lève aux quatre coins du monde pour protester contre l’inaction des gouvernements et le lourd héritage que leur transmettent les générations précédentes,<br/><br/>
L’exploitation d’une ferme de 1.000 cochons dans le Champsaur a été autorisée par la préfecture durant le confinement après avoir été refusé par la justice à de nombreuses reprises pourtant depuis plus de 20 ans.<br/><br/>
Pour la protection de notre eau, pour la préservation de notre air pur et la qualité de nos vies, nous ne pouvons accepter que des tonnes de lisier soient déversés à la lisière du Parc des Ecrins.<br/><br/>
Pour notre santé et celle des générations à venir, nous ne pouvons accepter qu’on autorise une ferme-usine de 1.072 porcs sur quelques milliers de mètres carrés alors que l’on protège des espèces sauvages sur plus de 17.000 hectares depuis près de 50 ans.<br/><br/>
Pour que le territoire Haut-Alpin continue à être connu et reconnu pour la qualité de son environnement.<br/><br/>
Nous disons NON à un système qui parle d’écologie mais privilégie les fermes-usines plutôt que l’agriculture paysanne respectueuse de l’environnement.<br/><br/>
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
