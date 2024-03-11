/***************************************************************************/
/**********            components/NavBar index.jsx                   *******/
/***************************************************************************/
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  /****  URL actuel ******/
  const pathname = window.location.pathname;

  return (
    <nav className="nav_container">
      <ul className="nav_list">
        <li className="nav_list_element">
        {/* Page Accueil (Home) */}
          <Link
            to="/"
            className={pathname === '/' ? 'nav_active_link' : ''}
          >
            Accueil
          </Link>
        </li>
        {/* Page A propos (About) */}
        <li className="nav_list_element">
          <Link
            to="/about"
            className={pathname === '/about' ? 'nav_active_link' : ''}
          >
            À propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}