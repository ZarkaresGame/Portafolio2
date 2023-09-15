import React from 'react';
import './Intereses.css';

function Intereses() {
  return (
    <div className="intereses-container">
      <h1 className="intereses-title">Intereses</h1>
      <p>Me interesan diversos temas y actividades, pero especialmente me apasionan tres áreas:</p>
      <div className="intereses-list">
        <div className="interes">
          <h2>Magic: The Gathering</h2>
          <p>
            Magic: The Gathering es un juego de cartas coleccionables estratégico que me ha fascinado desde hace años.
            Disfruto construyendo mazos y participando en torneos locales.
          </p>
        </div>
        <div className="interes">
          <h2>Arena of Valor</h2>
          <p>
            Arena of Valor es un emocionante juego móvil de estilo MOBA. Me encanta competir en partidas en línea y
            mejorar mis habilidades como jugador.
          </p>
        </div>
        <div className="interes">
          <h2>Stremeo</h2>
          <p>
            Stremeo es una plataforma de transmisión en vivo donde comparto mi pasión por los videojuegos y el contenido
            creativo con la comunidad. ¡Espero verte en mis transmisiones!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intereses;
