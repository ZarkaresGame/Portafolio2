// import React from 'react'
// import BasicButtons from './BasicButtons'


// const Navbar = () => {
//   return (
//     <div>
//       <h1 className='titulo'>React</h1>
//       <div className='nav'>
//         <nav>
//             <li>Inicio</li>
//             <li>Nosotros</li>
//             <li>Contacto</li>
//             <img className='{Imagen}'></img>
//         </nav>
//       </div>
//     </div>
//   )
// }

// import React from 'react';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <h2>Mi Portafolio</h2>
//       </div>
//       <ul className="nav-links">
//         <li><a href="#inicio">Inicio</a></li>
//         <li><a href="#acerca-de">Acerca de</a></li>
//         <li><a href="#proyectos">Proyectos</a></li>
//         <li><a href="#contacto">Contacto</a></li>
//       </ul>
//     </nav>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/Inicio">Inicio</Link></li>
        <li><Link to="/Biografia">Biografia</Link></li>
        <li><Link to="/Desarrollador">Desarrollador</Link></li>
        <li><Link to="/Contacto">Contacto</Link></li>
        <li><Link to="/Login">Iniciar Sesion</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;





