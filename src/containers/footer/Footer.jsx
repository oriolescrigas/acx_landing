import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">¿Quieres dar un paso hacia el futuro antes que los demás?</h1>
      </div>

      <div className="gpt3__footer-btn">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfgVIEb4c7zTqW2-XIpZi7A4xqwQLdy1ybEGuMCPM4mjwh45w/viewform" target="_blank" rel="noreferrer">Solicita prueba de nuestro servicio</a>
      </div>

      <div className="gpt3__footer-links">
        {/*<div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
          <p> All Rights Reserved</p>
  </div>*/}

        {/*<div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>*/}

        {/*<div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
      </div>*/}

        {/*<div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
      </div>*/}
      </div>

      <div className="gpt3__footer-copyright">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <a href="/terms" target="_blank" rel="noreferrer"><br/>Términos y Condiciones</a>
        <a href="/privacy" target="_blank" rel="noreferrer"><br/>Política de Privacidad</a>
        <p className="gpt3__footer-copyright_reserved">@2023 solucionsdedades.cat All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer