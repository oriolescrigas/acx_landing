import React from 'react';
import './header.css';

import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const HEader = () => {
  return (
    <div className="gpt3__header section__padding" id="home">

      <div className="gpt3__header-content">
        <h1 className="gradient__text">ACX: Chatbots entrenados con Inteligencia Artificial para un servicio de atención al cliente personalizado </h1>
        <p>Revolucione su servicio de Atención al Cliente con Chatbots personalizados y entrenados con los datos e información de su negocio</p>

        <div className="gpt3__header-content__input">
          <button type="button" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfgVIEb4c7zTqW2-XIpZi7A4xqwQLdy1ybEGuMCPM4mjwh45w/viewform?usp=sf_link', '_blank')}>Solicita Prueba</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>Todo el mundo está empezando a usarlo</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="ai"/>
      </div>
      
    </div>
  )
}

export default HEader