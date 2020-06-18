import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Nous contacter</h2>
        <p>
          n’hésitez pas à vous présentez si vous souhaitez
          prendre part à ce rassemblement !
        </p>
        <form>
          <ul className="contact">
            <li className="fa-user">Aurelie Dauphin</li>
            <li className="fa-envelope-o">aureliedauphin@live.fr</li>
            <li className="fa-phone">06 07 27 02 24</li>
          </ul>
        </form>
        <ul className="contact">
          <li className="fa-user">Marine Larat</li>
          <li className="fa-envelope-o">marine.laratpro@gmail.com</li>
          <li className="fa-phone">07 86 36 82 56</li>
        </ul>
        <ul className="copyright">
          <li>&copy; tes rien sans la terre. All rights reserved.</li>
          <li>
            Development: <a href="https://aloisleclet.fr">Aloïs LECLET</a>
          </li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
