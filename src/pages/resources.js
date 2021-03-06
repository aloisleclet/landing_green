import React from 'react';

import Layout from '../components/Layout';
import Card from '../components/Card';
import {Link} from 'gatsby';
import config from '../../config';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Liens et ressources</h2>
          <p>Pour mieux comprendre la problématique</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Lien et ressources</h3>
          <br/>
          <br/>
          <h3>Interview du Dauphiné</h3>
          <a href="https://www.ledauphine.com/environnement/2020/09/13/hautes-alpes-ils-prennent-des-arretes-anti-pesticides" target="_blank" rel="noreferrer">https://www.ledauphine.com/environnement/2020/09/13/hautes-alpes-ils-prennent-des-arretes-anti-pesticides</a> 
          <br/>
          <br/>
          <h3>Interview d'ici TV</h3>
          <a href="https://www.dici.fr/actu/2020/09/13/hautes-alpes-artistes-politiques-associatifs-unis-embrun-contre-pesticides-1439874" target="_blank" rel="noreferrer">
            https://www.dici.fr/actu/2020/09/13/hautes-alpes-artistes-politiques-associatifs-unis-embrun-contre-pesticides-1439874
</a>

          <br/>
          <br/>
          <h3>L'article de reporterre.net</h3>
          <a href="https://reporterre.net/Une-ferme-usine-des-mille-cochons-se-prepare-en-lisiere-du-Parc-national-des" target="_blank" rel="noreferrer" >
            https://reporterre.net/Une-ferme-usine-des-mille-cochons-se-prepare-en-lisiere-du-Parc-national-des
          </a>
          <br/>
          <br/>
          <h3>L'article de spn05.org</h3>
          <a href="http://www.sapn05.org/porcherie-de-chabottes-contre-toute-prudence-sanitaire-la-prefete-des-hautes-alpes-autorise-une-nouvelle-fois-lexploitation/" target="_blank" rel="noreferrer" >
          http://www.sapn05.org/porcherie-de-chabottes-contre-toute-prudence-sanitaire-la-prefete-des-hautes-alpes-autorise-une-nouvelle-fois-lexploitation/
          </a>
          <br/>
          <br/>
          <h3>La pétition sur change.org</h3>
          <a href="https://www.change.org/p/pour-la-suspension-d-une-porcherie-aux-1072-porcs-dans-le-parc-national-des-ecrins?recruiter=609250520&utm_source=share_petition&utm_medium=copylink&utm_campaign=share_petition" target="_blank" rel="noreferrer" >
            https://www.change.org/p/pour-la-suspension-d-une-porcherie-aux-1072-porcs-dans-le-parc-national-des-ecrins
          </a>
          <br/>
          <br/>

          <h3>L'article de verdura</h3>
          <a href="http://www.vedura.fr/economie/agriculture/impact-elevage-bovins-environnement" target="_blank" rel="noreferrer" >
            http://www.vedura.fr/economie/agriculture/impact-elevage-bovins-environnement
          </a>
          <br/>
          <br/>

          <h3>L'article de greenpeace</h3>
          <a href="https://www.greenpeace.fr/bretagne-les-algues-vertes-proliferent-letat-laisse-faire/#:~:text=Les%20algues%20vertes%20polluent%20chaque,et%20de%20la%20flore%20aquatiques.&text=Autre%20exemple%3A%20la%20mort%20d,o%C3%B9%20les%20algues%20vertes%20pullulent." target="_blank" rel="noreferrer" >
           https://www.greenpeace.fr/bretagne-les-algues-vertes-proliferent-letat-laisse-faire
          </a>
          <br/>
          <br/>
      

          <section className="features">
    
            <Card type='actors'/>
            
            <Card type='event'/>

          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
