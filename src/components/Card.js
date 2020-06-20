import React from 'react';

import config from '../../config';

import picPosition from '../assets/images/landscapes/village.jpg';
import picEvent from '../assets/images/landscapes/cabane_alpage.jpg';
import picGodmother from '../assets/images/actors/stephanie_bodet.jpg';
import picActors from '../assets/images/actors/aurelie.jpg';
import picResources from '../assets/images/landscapes/chapelle.jpg';

export default function Card(props) {

  let current = {};
  if (props.type == 'godmother')
  {
    current.path = '/godmother';
    current.title = 'Nos parrains et marraines';
    current.image = picGodmother;
    current.tagline = 'Ils nous font confiance';  
  }
  else if (props.type == 'event')
  {
    current.path = '/event';
    current.title = 'L\'événement';
    current.image = picEvent;
    current.tagline = 'Concrétisation de notre réflexion';  
    
  }
  else if (props.type == 'position')
  {
    current.path = '/position';
    current.title = 'Notre position';
    current.image = picPosition;
    current.tagline = 'position Championne d\'escalade elle aime manger du chocolat et c\'est pas tout';  
    
  }
  else if (props.type == 'actors')
  {
    current.path = '/actors';
    current.title = 'Les membres';
    current.image = picActors;
    current.tagline = 'Ils nous soutiennent';  
    
  }
  else if (props.type == 'resources')
  {
    current.path = '/resources';
    current.title = 'Lien et ressources';
    current.image = picResources;
    current.tagline = 'Pour mieux comprendre la problématique';  
    
  }
  else if (props.type == 'custom')
  {
    current.path = props.path;
    current.title = props.title;
    current.image = props.image;
    current.tagline = props.tagline;
  }

  
  return (
     <article>
       <a href={current.path} className="image">
         <img src={current.image} alt="" />
       </a>
       <h3 className="major">{current.title}</h3>
       <p>{current.tagline}</p>
       <a href={current.path} className="special">
         En savoir plus
       </a>
     </article>
  );
}
