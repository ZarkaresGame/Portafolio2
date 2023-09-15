import React from 'react';
import './Inicio.css';
import Slider from './Slider';

function Inicio() {
  return (
    <><div>
          <Slider />
      </div><div className="inicio-container">
              <h1 className="inicio-title">Bienvenido a mi portafolio</h1>
              <div className="inicio-content">
                  <p>Hola, soy Jaeden Stybell Vasquez Gutierrez, Si tienes un proyecto en mente o simplemente deseas conectarte, no dudes en ponerte en contacto conmigo. Estoy disponible para nuevas oportunidades de colaboración.</p>
              </div>
          </div></>
  );
}

export default Inicio;
