import React from 'react';
import { NavLink } from 'react-router'; // Asegúrate de que sea 'react-router-dom' si usas v6
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Header.module.css';

const Header = () => {
    return (
        <Navbar expand="lg" fixed="top" variant="dark" className={styles.navbarCustom}>
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
                    <img 
                        src="/logo.png" 
                        alt="Logo CBB" 
                        className={styles.logoImg} 
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggleIcon} />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/identidad" className={styles.navLink}>
                            Identidad
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/creencias" className={styles.navLink}>
                            Creencias
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/comunidad" className={styles.navLink}>
                            Comunidad
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/recursos" className={styles.navLink}>
                            Recursos
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;