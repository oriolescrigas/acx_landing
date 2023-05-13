import React from 'react';
import './cta.css';

const CTA = () => {
    return (
        <div className="cta-wrapper">
            <div className="gpt3__cta">
                <div className="gpt3__cta-content">
                    <h3>WHATSAPP</h3>
                    <h1>30 Eur/mes</h1>
                    <p>Sincroniza tu cuenta Business Whatsapp con nuestro Chatbot</p>
                    <div className="gpt3__cta-btn">
                        <button type="button">Gratuito</button>
                    </div>
                </div>
            </div>
            <div className="gpt3__cta">
                <div className="gpt3__cta-content">
                    <h3>CALL CENTER</h3>
                    <h1>75 Eur/mes</h1>
                    <p>Crea un Call-Center 24/7 con nuestra inteligencia artificial de voz humana</p>
                    <div className="gpt3__cta-btn">
                        <button type="button">Gratuito</button>
                    </div>
                </div>
            </div>
            <div className="gpt3__cta">
                <div className="gpt3__cta-content">
                    <h3>EMAIL</h3>
                    <h1>50 Eur/mes</h1>
                    <p>Responde Emails complejos de forma automática y rápida con nuestra inteligencia artificial integrada</p>
                    <div className="gpt3__cta-btn">
                        <button type="button">Gratuito</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CTA