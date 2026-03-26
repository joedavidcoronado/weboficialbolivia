import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
        <Container>
            <Row className="gy-4">
            {/* Columna 1: Propósito */}
            <Col md={5}>
                <h5 className={styles.footerTitle}>Comunidad Bahá’í de Bolivia</h5>
                <p className={styles.footerText}>
                Trabajamos con amor, humildad y esperanza por el bienestar espiritual 
                y material de todo el pueblo boliviano, desde lo sencillo y cotidiano.
                </p>
            </Col>

            {/* Columna 2: Enlaces Rápidos */}
            <Col md={3} className="ms-auto">
                <h5 className={styles.footerTitle}>Explorar</h5>
                <NavLink to="/identidad" className={styles.footerLink}>Nuestra Identidad</NavLink>
                <NavLink to="/creencias" className={styles.footerLink}>Creencias</NavLink>
                <NavLink to="/acciones" className={styles.footerLink}>Acciones de Servicio</NavLink>
                <NavLink to="/contacto" className={styles.footerLink}>Contacto</NavLink>
            </Col>

            {/* Columna 3: Legal */}
            <Col md={3}>
                <h5 className={styles.footerTitle}>Institucional</h5>
                <NavLink to="/condiciones" className={styles.legalLink}>
                Términos y Condiciones
                </NavLink>
            </Col>
            </Row>

            {/* Bottom Bar */}
            <Row className={styles.copyrightSection}>
            <Col>
                <p className="mb-0 small text-muted">
                © {currentYear} Comunidad Bahá’í de Bolivia. 
                <br className="d-md-none" /> Construyendo juntos una Bolivia más unida.
                </p>
            </Col>
            </Row>
        </Container>
        </footer>
    );
};

export default Footer;