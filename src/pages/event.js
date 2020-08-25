import React from 'react';

import Layout from '../components/Layout';

import Card from '../components/Card';
import OsmMap from '../components/OsmMap';
import Video from '../components/Video';
import ReactPlayer from 'react-player';

const EventPage = () => (
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
          <p>Parcours artistique et paysan le 12 juillet 2020 à partir de 11h au d'eau des iscles (05) </p>

          <OsmMap lat="47.358760" lng="2.435320" text="Plan d'eau des iscles" />
          
          <br/>
          <br/>
          <h3 className="major">Le reportage et les rencontres</h3>
          <p>L'événement en images</p>

          <Video url="https://youtu.be/AuALX0LKc4M" /> 
          <Video url="https://youtu.be/vfYoB0JGhRQ" /> 

          <section className="features">

            <Card type='godmother'/>
            
            <Card type='position'/>

          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default EventPage;
