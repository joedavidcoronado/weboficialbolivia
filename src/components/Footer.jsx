import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.footerContent}>
                <Row className="gy-4">
                    {/* Columna 1: Branding */}
                    <Col lg={4} md={12}>
                        <img src="/logo.png" alt="Logo CBB" className={styles.logoImg} />
                        <p className={styles.footerCopy}>
                            Promoviendo la unidad de la humanidad y el desarrollo espiritual en cada rincón de Bolivia.
                        </p>
                        <div className={styles.socialWrapper}>
                            <a href="#" className={styles.footerSocial} aria-label="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                </svg>
                            </a>
                            {/* Puedes agregar más iconos aquí */}
                        </div>
                    </Col>

                    {/* Columna 2: Contacto con estilo */}
                    <Col lg={4} md={6}>
                        <h4 className={styles.footerHeading}>Contacto</h4>
                        <div className={styles.footerText}>
                            <strong>Sede Nacional:</strong><br />
                            Calle No recuerdo 32, Obrajes<br />
                            La Paz, Bolivia
                        </div>
                        <div className={styles.footerText}>
                            <a href="mailto:secretaria@bahai.bo" style={{color: 'inherit', textDecoration: 'none'}}>
                                secretaria@bahai.bo
                            </a><br />
                            +591 (2) 2XXXXXX
                        </div>
                    </Col>

                    {/* Columna 3: Navegación */}
                    <Col lg={4} md={6}>
                        <h4 className={styles.footerHeading}>Explorar</h4>
                        <ul className={styles.footerLinks}>
                            <li><a href="/identidad">Nuestra Identidad</a></li>
                            <li><a href="/creencias">Creencias Centrales</a></li>
                            <li><a href="/comunidad">Vida Comunitaria</a></li>
                            <li><a href="/recursos">Biblioteca de Recursos</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            {/* Sección Inferior Extra-Limpia */}
            <Container className={styles.copyrightSection}>
                <Row>
                    <Col>
                        <p className="mb-0">
                            © 2026 COMUNIDAD BAHÁ'Í DE BOLIVIA • CONSTRUYENDO JUNTOS UNA SOCIEDAD UNIDA
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;