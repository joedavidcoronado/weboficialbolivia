import React from 'react';
import styles from './FloatingWhatsapp.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function FloatingWhatsapp() {
  const phoneNumber = "59163227009"; 
  const message = encodeURIComponent("¡Hola! Me gustaría recibir más información.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      className={styles.floatBtn}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="lg" className={styles.wsSize}/>
    </a>
  );
}