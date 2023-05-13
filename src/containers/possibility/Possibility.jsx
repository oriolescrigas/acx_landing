import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Utiliza la inteligencia artificial para aumentar tus ventas...</h4>
        <h1 className="gradient__text">Las posibilidades están <br /> por encima de lo imaginado</h1>
        <p>Contrata el servicio de nuestros chatbots para brindar respuestas rápidas y eficientes, mejorar la experiencia del usuario y aumentar la satisfacción del cliente.</p>
        <h4>... y mejorar la experiencia de atención al cliente</h4>
      </div>
      
    </div>
  )
}

export default Possibility