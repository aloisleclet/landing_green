import React from 'react';

import Layout from '../components/Layout';
import Card from '../components/Card';

import config from '../../config';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Notre marraine</h2>
          <p>Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Notre marraine</h3>
          <blockquote>
Nous disons NON à un système qui parle d’écologie mais privilégie les fermes-usines plutôt que l’agriculture paysanne respectueuse de l’environnement.<br/><br/>
          </blockquote>
          <blockquote>
Nous disons NON à un système qui parle d’écologie mais privilégie les fermes-usines plutôt que l’agriculture paysanne respectueuse de l’environnement.<br/><br/>
          </blockquote>
          <blockquote>
Nous disons NON à un système qui parle d’écologie mais privilégie les fermes-usines plutôt que l’agriculture paysanne respectueuse de l’environnement.<br/><br/>
          </blockquote>
          <blockquote>
Nous disons NON à un système qui parle d’écologie mais privilégie les fermes-usines plutôt que l’agriculture paysanne respectueuse de l’environnement.<br/><br/>
          </blockquote>
          <blockquote>
Nous disons NON à un système qui parle d’écologie mais privilégie les fermes-usines plutôt que l’agriculture paysanne respectueuse de l’environnement.<br/><br/>
          </blockquote>
          <blockquote>
Nous disons NON à un système qui parle d’écologie mais privilégie les fermes-usines plutôt que l’agriculture paysanne respectueuse de l’environnement.<br/><br/>
          </blockquote>

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
