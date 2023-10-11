import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav>


        <ul>
          <li>
            <NavLink to="/">INICIO</NavLink>
          </li>
          <li>
            <NavLink to="/AboutMePage">SOBRE MI</NavLink>
          </li>
          <li>
          <NavLink  to="/MyWorkPage">MIS TRABAJOS</NavLink>
          </li>
          <li>
          <NavLink to="/ServicesPage">SERVICIOS</NavLink>
          </li>
          <li>
          <NavLink to="/ContactMePage">CONTACTAME</NavLink>

          </li>
        </ul>


      </nav> 
    </div>
  );
}

export default Nav;
