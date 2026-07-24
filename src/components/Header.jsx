import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Header.module.css';

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            variant="dark"
            className={styles.navbarCustom}
            expanded={expanded}
            ref={navRef}
        >
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
                    <img 
                        src="/logo.png" 
                        alt="Logo CBB" 
                        className={styles.logoImg} 
                    />
                </Navbar.Brand>

                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    className={styles.toggleIcon}
                    onClick={() => setExpanded(prev => !prev)}
                />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/" className={styles.navLink} onClick={() => setExpanded(false)}>
                            Inicio
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/identidad" className={styles.navLink} onClick={() => setExpanded(false)}>
                            Quiénes somos
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/creencias" className={styles.navLink} onClick={() => setExpanded(false)}>
                            Qué creemos
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/acciones" className={styles.navLink} onClick={() => setExpanded(false)}>
                            Qué hacemos
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/recursos" className={styles.navLink} onClick={() => setExpanded(false)}>
                            Recursos
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;