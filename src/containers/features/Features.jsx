import React from 'react';
import './features.css';

import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title: 'Información personalizada',
    text: 'Entrenamos la inteligencia artificial con toda la información y datos de tu negocio de forma gratuita para que puedan atender cualquier tipo de consulta',
  },
  {
    title: 'Precios competitivos',
    text: 'Pagarás lo mismo por un servicio de atención al cliente 24/7 que por todas tu plataformas de Streaming en casa',
  },
  {
    title: 'Interoperabilidad',
    text: 'Una vez entrenada la inteligencia artificial con tu información, se puede usar desde cualquiera de vuestros canales de atención al cliente',
  },
  {
    title: 'Monitorización del funcionamiento',
    text: 'Proporcionamos una plataforma de monitorización de los servicios del chatbot. Desde ella podrás recuperar todas las consultas, evaluar todas las respuesta e incluso testear vuestro propio chatbot.',
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">El futuro es ahora y solo necesitas darte cuenta. Da un paso hacia el futuro hoy y haz que suceda.</h1>
        <p>¡Súbete al tren de la inteligencia artificial antes que lo hagan tus competidores!</p>
      </div>

      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features