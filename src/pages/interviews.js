import React from 'react';

import Layout from '../components/Layout';
import Card from '../components/Card';
import Video from '../components/Video';


import config from '../../config';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Interviews & reportages</h2>
          <p>Ils nous soutiennent !</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Interviews & reportages</h3>
          
          <section className="features">
            <Video url="https://www.youtube.com/watch?v=vfYoB0JGhRQ&t=108s" />
            <p>En amont de l'événement : "T'es rien sans la Terre" à Veynes (05) le 12 Juillet 2020 nous sommes allées à la rencontre des parrains ainsi que des agriculteurs afin de recueillir leurs réflexions et connaissances. </p>
            <Video url="https://www.youtube.com/watch?v=hbeEdLzCWKA" />
            <p>Bande annonce de Denis Bois du reportage de l'événement de "T'es rien sans la Terre" du 12 Juillet 2020 au plan d'eau de Veynes. Des artistes au service de l'environnement auprès d'agriculteurs locaux et d'associations du 05</p>
            <Video url="https://www.youtube.com/watch?v=AuALX0LKc4M" />
            <p>Reportage de Denis Bois de l'événement de "T'es rien sans la Terre" du 12 Juillet 2020 au plan d'eau de Veynes. Des artistes au service de l'environnement auprès d'agriculteurs locaux et d'associations du 05. </p>
          </section>
          
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
