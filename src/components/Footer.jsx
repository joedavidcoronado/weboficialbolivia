import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.footerContent}>
                <Row className="gy-4">
                    {/* Columna 1: Branding */}
                    <Col lg={4} md={12}>
                        <img src="/logo.png" alt="Logo CBB" className={styles.logoImg} />
                        <p className={styles.footerCopy}>
                            CONSTRUYENDO JUNTOS UNA SOCIEDAD UNIDA
                        </p>
                        <div className={styles.socialWrapper}>
                            <a href="https://www.facebook.com/Bahaibolivia" className={styles.footerSocial} aria-label="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://wa.me/59163227009" 
                                className={styles.footerSocial} 
                                aria-label="WhatsApp" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                            </a>
                            <a 
                                href="https://bahai.org" 
                                className={styles.footerSocial2}
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faCircleInfo} size="lg" /> Web Oficial Bahai
                            </a>
                            {/* Puedes agregar más iconos aquí */}
                        </div>
                    </Col>

                    {/* Columna 2: Contacto con estilo */}
                    <Col lg={4} md={6}>
                        <h4 className={styles.footerHeading}>Contacto</h4>
                        <div className={styles.footerText}>
                            <strong>Sede Nacional:</strong><br />
                            Av. del Libertador, Pasaje Libertad #1, Obrajes <br />
                            Casilla 20010• La Paz, Bolivia
                        </div>
                        <div className={styles.footerText}>
                            <a href="mailto:secretariat@adminbo.org" style={{color: 'inherit', textDecoration: 'none'}}>
                                <strong>secretariat@adminbo.org</strong>
                            </a><br />
                            Tel: (591-2) 2785058 / Fax: (591-2) 2782387
                        </div>
                    </Col>

                    {/* Columna 3: Navegación */}
                    <Col lg={4} md={6}>
                        <h4 className={styles.footerHeading}>Explorar</h4>
                        <ul className={styles.footerLinks}>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/identidad">Quiénes somos</a></li>
                            <li><a href="/creencias">Qué creemos</a></li>
                            <li><a href="/acciones">Qué hacemos</a></li>
                            <li><a href="/recursos">Biblioteca de recursos</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            {/* Sección Inferior Extra-Limpia */}
            <Container className={styles.copyrightSection}>
                <Row>
                    <Col>
                        <p className="mb-0">
                            © 2026 ASAMBLEA ESPIRITUAL NACIONAL DE LOS BAHÁ’ÍS DE BOLIVIA • CONSTRUYENDO JUNTOS UNA SOCIEDAD UNIDA
                        </p>
                        <a href="/condiciones" className={styles.termsLink}>
                            Términos y condiciones
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;