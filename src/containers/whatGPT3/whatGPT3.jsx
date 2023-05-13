import React from 'react';
import './whatGPT3.css';

import Feature from '../../components/feature/Feature';

const whatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            
            <div className="gpt3__whatgpt3-feature">
                <Feature title="Multi-platforma" text="
La principal ventaja de un servicio multiplataforma es la accesibilidad que ofrece a los usuarios al estar disponible en diversas plataformas, lo que aumenta la comodidad y la disponibilidad del servicio. Además, esto permite llegar a una audiencia más amplia, lo que aumenta el potencial de ingresos al poder llegar a más usuarios."/>
            </div>

            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">¡Aumenta tus ventas! Con la integración multi-plataforma de nuestros chatbots</h1>
                {/*<p>Explore the Library</p>*/}
            </div>

            <div className="gpt3__whatgpt3-container">
                <Feature title="Instagram y Whatsapp" text="Mejora la atención a tus clientes mediante los canales directos de las plataformas META. ACX te permite ofrecer recomendaciones de productos, promociones y ofertas personalizadas basadas en las preferencias de los clientes." />
                <Feature title="Call Center" text="Integra nuestros chatbots que simulan voz de una persona real con nuestro servicio de Call Center. Nuestros servicios te permiten reducir el tiempo de espera de los clientes al proporcionar respuestas rápidas a preguntas comunes. Reduce la carga de trabajo de tus agentes de atención al cliente y permteles centrarse en casos más complejos." />
                <Feature title="Email" text="Nuestro chatbot integrado en el correo electrónico puede ayudar a los clientes a resolver consultas más complejas y obtener información sobre productos y servicios. Genera y envía recomendaciones de productos y ofertas personalizadas en función del interés detectado en el cliente." />
            </div>
        </div>
    )
}

export default whatGPT3