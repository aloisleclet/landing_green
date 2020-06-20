import React from 'react';

import Layout from '../components/Layout';
import Card from '../components/Card';


const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>L'événement</h2>
          <p>Concrétisation de notre réflexion</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">L'événement</h3>
          <p>Parcours artistique et paysan le 12 juillet 2020 à partir de 11h dans le parc de Charance (05) </p>


          <h1>TODO : map</h1>

          <section className="features">

            <Card type='godmother'/>
            
            <Card type='position'/>

          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
