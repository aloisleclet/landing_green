import React from 'react';

import config from '../../config';

import picGodmother from '../assets/images/actors/stephanie_bodet.jpg';
import picEvent from '../assets/images/landscapes/village.jpg';
import picPosition from '../assets/images/landscapes/village.jpg';
import picActors from '../assets/images/landscapes/village.jpg';
import picResources from '../assets/images/landscapes/village.jpg';

export default function Card(props) {

  let current = {};
  if (props.type == 'godmother')
  {
    current.path = '/godmother';
    current.title = 'Notre marraine';
    current.image = picGodmother;
    current.tagline = 'Championne d\'escalade elle aime manger du chocolat et c\'est pas tout';  
  }
  else if (props.type == 'event')
  {
    current.path = '/event';
    current.title = 'L\'événement';
    current.image = picEvent;
    current.tagline = 'event Championne d\'escalade elle aime manger du chocolat et c\'est pas tout';  
    
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
    current.title = 'Les paysans / militants / artistes';
    current.image = picActors;
    current.tagline = 'actors Championne d\'escalade elle aime manger du chocolat et c\'est pas tout';  
    
  }
  else if (props.type == 'resources')
  {
    current.path = '/resources';
    current.title = 'Lien et ressources';
    current.image = picResources;
    current.tagline = 'resourcesChampionne d\'escalade elle aime manger du chocolat et c\'est pas tout';  
    
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
