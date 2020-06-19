import React from 'react';

import Layout from '../components/Layout';
import Card from '../components/Card';

import config from '../../config';

import pic1 from '../assets/images/actors/eve.jpg';


const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Les paysans / militants / artistes</h2>
          <p>Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Les paysans / militants / artistes</h3>

          <section className="features">
    
            <Card type='actors'/>
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>
            
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>
            
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>

            
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>

            
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>

            
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>

            
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>

            
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>

            
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>

            
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>

            
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>

            
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>
            <Card type='custom' title="Keanu reeves" image={pic1} tagline="eve aime l'accordeon peux etre" path="/#"/>


          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
