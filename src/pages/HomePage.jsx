import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <>
        <Header />
        
        <main>
            {/* HERO SECTION */}
            <section className={styles.heroSection}>
            <Container>
                <Row className="align-items-center">
                <Col lg={7}>
                    <span className={styles.sectionLabel}>Bienvenida a la Comunidad</span>
                    <h1 className={styles.heroTitle}>
                    Construyendo una Bolivia <br /> 
                    <span style={{ color: 'var(--cbb-ocre-tierra)' }}>más luminosa.</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                    "Trabajamos con amor, humildad y esperanza por el bienestar 
                    espiritual y material de todo el pueblo boliviano."
                    </p>
                    <div className="d-flex gap-3">
                    <Button className={styles.mainButton}>Conocer más</Button>
                    <Button variant="outline-success" className="rounded-pill px-4">
                        Nuestras Acciones
                    </Button>
                    </div>
                </Col>
                <Col lg={5} className="d-none d-lg-block">
                    {/* Aquí iría una imagen orgánica, por ejemplo, naturaleza boliviana */}
                    <div style={{
                    backgroundColor: 'var(--cbb-verde-limon)',
                    height: '400px',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    opacity: 0.8
                    }}></div>
                </Col>
                </Row>
            </Container>
            </section>

            {/* PURPOSE SECTION */}
            <section className={styles.purposeSection}>
            <Container>
                <div className="text-center mb-5">
                <h2 className={styles.heroTitle} style={{fontSize: '2.5rem'}}>Nuestro Propósito</h2>
                <p className="text-muted mx-auto" style={{maxWidth: '600px'}}>
                    Buscamos tender puentes y fortalecer vínculos para contribuir, desde lo sencillo, 
                    a una sociedad más unida.
                </p>
                </div>
                
                <Row className="g-4">
                <Col md={4}>
                    <Card className={styles.purposeCard}>
                    <div className={styles.iconCircle}>❤</div>
                    <h4 style={{fontFamily: 'var(--font-primary)'}}>Amor y Servicio</h4>
                    <p style={{fontFamily: 'var(--font-secondary)'}}>
                        Acciones guiadas por la oración para generar un cambio real en nuestro entorno.
                    </p>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className={styles.purposeCard}>
                    <div className={styles.iconCircle}>🤝</div>
                    <h4 style={{fontFamily: 'var(--font-primary)'}}>Unidad</h4>
                    <p style={{fontFamily: 'var(--font-secondary)'}}>
                        Compartimos enseñanzas que invitan a la justicia y la igualdad sin distinciones.
                    </p>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className={styles.purposeCard}>
                    <div className={styles.iconCircle}>🌱</div>
                    <h4 style={{fontFamily: 'var(--font-primary)'}}>Crecimiento</h4>
                    <p style={{fontFamily: 'var(--font-secondary)'}}>
                        Ambientes donde niños y jóvenes descubren su propósito y florecen juntos.
                    </p>
                    </Card>
                </Col>
                </Row>
            </Container>
            </section>

            {/* QUOTE SECTION */}
            <section className={styles.quoteSection}>
            <Container>
                <p className={styles.quoteText}>
                "Un mundo mejor es posible, y comienza aquí, entre nosotros."
                </p>
            </Container>
            </section>
        </main>

        <Footer />
        </>
    );
};

export default HomePage;