import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/position"
            >
              Notre position
            </Link>
          </li>
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/event"
            >
              L'événement
            </Link>
          </li>
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/godmother"
            >
              Notre marraine
            </Link>
          </li>
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/resources"
            >
              Liens et ressources
            </Link>
          </li>
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/actors"
            >
              Les paysans / militants / artistes 
            </Link>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/#footer"
            >
              Nous contacter
            </Link>
          </li>
        </ul>
        <a
          className="close"
          onClick={e => {
            e.preventDefault();
            onMenuToggle();
          }}
          href="#menu"
        >
          {''}
        </a>
      </div>
    </nav>
  );
}
