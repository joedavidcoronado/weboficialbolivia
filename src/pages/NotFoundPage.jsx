// src/pages/NotFoundPage.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './NotFoundPage.module.css';
import { NavLink } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className={`container text-center d-flex flex-column justify-content-center align-items-center ${styles.notFoundContainer}`}>
      <div>
        <h1 className={`display-1 fw-bold ${styles.errorCode}`}>404</h1>
        <h2 className={styles.errorTitle}>Página no encontrada</h2>
        <p className={`lead ${styles.errorText}`}>Lo sentimos, la ruta que buscas no existe o fue movida.</p>
        <Nav.Link as={NavLink} to="/" className={styles.homeButton}>
            Volver al inicio
        </Nav.Link>
      </div>
    </div>
  );
}