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
            A l’heure où les prises de position se multiplient sur la nécessité de changer nos modèles économiques et agricoles,
            <br/><br/>            
            A l’heure où les choix des consommateurs se portent sur des modes de production éthiques, durables et respectueux de l’environnement et des animaux,
            <br/><br/>            
            
            A l’heure où toute une jeunesse se lève aux quatre coins du monde pour protester contre l’inaction des gouvernements et le lourd héritage que leur transmettent les générations précédentes,
            <br/><br/>            
            
            L’exploitation d’une ferme de 1.000 cochons dans le Champsaur a été autorisée par la préfecture durant le confinement après avoir été refusé par la justice à de nombreuses reprises pourtant depuis plus de 20 ans notamment pour le non respect des normes environnementales
            <br/><br/>            
            
            Céréales locales produites via intrants chimiques, importation de soja transgénique cultivé sur les terres arrachées à la forêt Amazonienne : nourrir ainsi nos bêtes n’est pas viable pour la santé des terres, des plantes, des animaux et des humains.
            <br/><br/>            
            
            Cette crise sanitaire est l’occasion de prendre conscience de l’impact de nos choix à l’heure de la mondialisation
            <br/><br/>            
            
            Des agricultures durables pour l’environnement et les paysan.es ont déjà fait leurs preuves
            <br/><br/>            
            
            Nous sommes unis :
            <br/><br/>            
            
            Pour la protection de notre eau, de notre air pur et la qualité de nos vies
            <br/><br/>            
            
            Pour des modes de productions paysans respectueux de l'environnement et du bien être animal
            <br/><br/>            
            
            Pour une consommation éthique, locale et responsable dont les paysans puissent vivre
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
