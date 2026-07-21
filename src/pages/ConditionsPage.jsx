import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './ConditionsPage.module.css';

const ConditionsPage = () => {
    return (
        <main>
            {/* ─── HERO SECTION ─── */}
            <section className={styles.heroSection}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={9} lg={8} className="text-center">
                            <span className={styles.heroLabel} data-aos="fade-up">
                                INFORMACIÓN LEGAL
                            </span>
                            <h1 className={styles.heroTitle} data-aos="fade-up" data-aos-delay="100">
                                Términos y condiciones
                            </h1>
                            <p className={styles.heroSubtitle} data-aos="fade-up" data-aos-delay="200">
                                Última actualización: julio de 2026
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ─── CONTENIDO SECTION ─── */}
            <section className={styles.contentSection}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={9} lg={8}>

                            <div className={styles.block} data-aos="fade-up">
                                <h2 className={styles.blockTitle}>1. Aceptación de los términos</h2>
                                <p className={styles.blockText}>
                                    Al acceder y utilizar este sitio web, perteneciente a la Asamblea Espiritual
                                    Nacional de los Bahá'ís de Bolivia, aceptás los presentes términos y condiciones.
                                    Si no estás de acuerdo con alguno de estos puntos, te pedimos no continuar
                                    utilizando el sitio.
                                </p>
                            </div>

                            <div className={styles.block} data-aos="fade-up">
                                <h2 className={styles.blockTitle}>2. Uso del sitio</h2>
                                <p className={styles.blockText}>
                                    Este sitio tiene un fin informativo: dar a conocer la Fe Bahá'í, sus enseñanzas
                                    y las actividades comunitarias que se realizan en Bolivia. El contenido puede
                                    ser consultado libremente, pero no debe utilizarse con fines comerciales,
                                    difamatorios o contrarios a las leyes bolivianas vigentes.
                                </p>
                            </div>

                            <div className={styles.block} data-aos="fade-up">
                                <h2 className={styles.blockTitle}>3. Propiedad intelectual</h2>
                                <p className={styles.blockText}>
                                    Los textos, imágenes, logotipos y demás contenido publicado en este sitio son
                                    propiedad de la Asamblea Espiritual Nacional de los Bahá'ís de Bolivia o se
                                    utilizan con la debida autorización. Está prohibida su reproducción total o
                                    parcial sin autorización previa, salvo con fines de estudio personal o
                                    devocional sin alteración del contenido.
                                </p>
                            </div>

                            <div className={styles.block} data-aos="fade-up">
                                <h2 className={styles.blockTitle}>4. Privacidad y datos personales</h2>
                                <p className={styles.blockText}>
                                    Este sitio no utiliza formularios de recolección de datos ni herramientas de
                                    seguimiento o análisis (como cookies de rastreo). No almacenamos, procesamos
                                    ni compartimos información personal de quienes visitan el sitio.
                                </p>
                                <p className={styles.blockText}>
                                    El sitio incluye un enlace directo a WhatsApp para fines de contacto. Al hacer
                                    clic en ese enlace, saldrás de nuestro sitio y cualquier conversación quedará
                                    sujeta a los términos y políticas de privacidad propios de WhatsApp/Meta, no a
                                    los nuestros.
                                </p>
                            </div>

                            <div className={styles.block} data-aos="fade-up">
                                <h2 className={styles.blockTitle}>5. Enlaces a sitios externos</h2>
                                <p className={styles.blockText}>
                                    Este sitio puede contener enlaces a redes sociales u otras páginas externas.
                                    No nos hacemos responsables por el contenido, políticas de privacidad o
                                    prácticas de dichos sitios de terceros.
                                </p>
                            </div>

                            <div className={styles.block} data-aos="fade-up">
                                <h2 className={styles.blockTitle}>6. Modificaciones</h2>
                                <p className={styles.blockText}>
                                    Nos reservamos el derecho de modificar estos términos en cualquier momento.
                                    Los cambios entrarán en vigencia desde su publicación en esta misma página.
                                </p>
                            </div>

                            <div className={styles.block} data-aos="fade-up">
                                <h2 className={styles.blockTitle}>7. Contacto</h2>
                                <p className={styles.blockText}>
                                    Ante cualquier consulta sobre estos términos, podés escribirnos a{' '}
                                    <a href="mailto:secretariat@adminbo.org" className={styles.inlineLink}>
                                        secretariat@adminbo.org
                                    </a>.
                                </p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default ConditionsPage;