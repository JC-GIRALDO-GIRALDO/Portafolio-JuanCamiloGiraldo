import React, { useState, useEffect } from "react";

import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import "./Header.css";

function Header() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleSetActive = (to) => {
    setActiveMenuItem(to);
  };

  const menuItems = [
    "inicio",
    "sobre-mi",
    "mis-trabajos",
    "servicios",
    "contacto",
  ];

  useEffect(() => {
    // Establece el desplazamiento suave en toda la página
    scrollSpy.update();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <div className="row w-100 align-items-center">
          <div className="col-9 text-center">
            <div className="text-center mb-3 menu">
              <ul className="navbar-nav">
                {menuItems.map((item) => (
                  <li
                    key={item}
                    className={`nav-item ${
                      activeMenuItem === item ? "active" : ""
                    }`}
                  >
                    <Link
                      to={item}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-50} // Ajusta el valor de desplazamiento
                      onSetActive={handleSetActive}
                    >
                      {item.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-3 text-center">
            <div className="navbar-brand brand-text">Juan Camilo Giraldo</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
