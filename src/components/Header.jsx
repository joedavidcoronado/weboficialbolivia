import React from 'react';
import { NavLink } from 'react-router';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Header.module.css';

const Header = () => {
    return (
        <Navbar expand="lg" sticky="top" className={styles.navbarCustom}>
        <Container>
            {/* Logo / Nombre de la Comunidad */}
            <Navbar.Brand as={NavLink} to="/" className={styles.brandLogo}>
            CBB <span style={{ color: 'var(--cbb-ocre-tierra)' }}>BOLIVIA</span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggleIcon} />

            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
                <Nav.Link as={NavLink} to="/identidad" className={styles.navLink}>
                Quienes Somos
                </Nav.Link>
                <Nav.Link as={NavLink} to="/creencias" className={styles.navLink}>
                Que creemos
                </Nav.Link>
                <Nav.Link as={NavLink} to="/acciones" className={styles.navLink}>
                Que hacemos
                </Nav.Link>
                <Nav.Link as={NavLink} to="/actualidad" className={styles.navLink}>
                Actualidad
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;