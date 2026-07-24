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
                                    Al acceder, navegar y utilizar este sitio web, gestionado por la Asamblea Espiritual Nacional de los Bahá'ís de Bolivia, el usuario acepta de manera expresa, libre e incondicional las presentes Condiciones de Uso. Si no está de acuerdo con alguno de los términos, deberá abstenerse de utilizar este sitio.
                                </p>
                            </div>

                            <div className={styles.block} data-aos="fade-up">
                                <h2 className={styles.blockTitle}>2. Uso del sitio</h2>
                                <p className={styles.blockText}>
                                    Este portal tiene una finalidad estrictamente informativo, educacional y comunitario. Su objetivo es difundir los principios, enseñanzas y actividades de la Fe Bahá'í en Bolivia y el mundo.  
                                    ​El usuario se compromete a hacer un uso lícito del sitio. Queda estrictamente prohibido utilizar los contenidos para:
                                    ​Fines comerciales, publicitarios o de lucro indebido.  
                                    ​Actividades difamatorias, ilícitas o violatorias del orden público nacional o de tratados internacionales sobre derechos humanos.
                                    ​Introducir virus, realizar accesos no autorizados (hacking) o alterar la integridad técnica de la plataforma.
                                </p>
                            </div>

                            <div className={styles.block} data-aos="fade-up">
                                <h2 className={styles.blockTitle}>3. Propiedad intelectual</h2>
                                <p className={styles.blockText}>
                                    ​De acuerdo con la Ley N° 1322 de Derecho de Autor de Bolivia y el Convenio de Berna para la Protección de las Obras Literarias y Artísticas:
                                </p>
                                <ul>
                                    <li>​Titularidad: Todos los textos, imágenes, marcas, logotipos, elementos gráficos y compilaciones contenidas en este sitio son propiedad exclusiva de la Asamblea Espiritual Nacional de los Bahá'ís de Bolivia o cuentan con la autorización previa de sus titulares.</li>
                                    <li>​Licencia limitada de uso: Se autoriza la visualización, copia digital e impresión de los materiales exclusivamente para uso personal, devocional, educativo o de investigación no comercial, bajo la condición de no alterar el contenido y citar explícitamente la fuente.</li>
                                    <li>​Prohibición de usos comerciales: Queda expresamente prohibida la reproducción, distribución, transmisión o transformación total o parcial del contenido con fines lucrativos o en plataformas de terceros sin consentimiento escrito.</li>
                                </ul>
                            </div>

                            <div className={styles.block} data-aos="fade-up">
                                <h2 className={styles.blockTitle}>4. Privacidad y datos personales</h2>
                                <p className={styles.blockText}>
                                    En consonancia con el Artículo 21.2 de la CPE de Bolivia, la Ley N° 164 de Telecomunicaciones y los principios internacionales de protección de datos (GDPR - Privacidad por Defecto):
                                </p>
                                <ul>
                                    <li>Sin recolección de datos ni seguimiento: Este sitio no solicita, almacena ni procesa datos personales sensibles. No utiliza cookies de rastreo, almacenamiento publicitario ni scripts de perfilamiento de comportamiento.</li>
                                    <li>​Redirección a servicios externos (WhatsApp / Redes Sociales): El sitio facilita canales de contacto directo hacia plataformas de terceros (como WhatsApp/Meta). Al interactuar con dichos enlaces, el usuario abandona nuestro sitio web.</li>
                                </ul>
                                <p className={styles.blockText}>
                                    La Asamblea Espiritual Nacional no controla, procesa ni responde por el tratamiento de datos personales, datos de tráfico o privacidad gestionados por estas empresas multinacionales, rigiéndose dichos intercambios por los términos de servicio propios de cada proveedor.
                                </p>
                            </div>

                            <div className={styles.block} data-aos="fade-up">
                                <h2 className={styles.blockTitle}>5. Enlaces a sitios externos</h2>
                                <p className={styles.blockText}>
                                    <ul>
                                        <li>
                                            ​Disponibilidad técnica: No se garantiza la disponibilidad ininterrumpida o la ausencia total de fallas técnicas, vulnerabilidades cibernéticas o interrupciones ajenas al control directo de la institución.
                                        </li>
                                        <li>
                                            ​Uso de la información: La institución no se hace responsable por las interpretaciones o decisiones individuales adoptadas por los usuarios basadas en el contenido publicado.
                                        </li>
                                    </ul>
                                </p>
                            </div>

                            <div className={styles.block} data-aos="fade-up">
                                <h2 className={styles.blockTitle}>6. Modificaciones</h2>
                                <p className={styles.blockText}>
                                    ​Nos reservamos el derecho de modificar, adaptar o actualizar estas condiciones en cualquier momento para ajustarnos a cambios normativos nacionales e internacionales. Las modificaciones entrarán en vigor a partir de la fecha indicada en su publicación dentro de esta página.
                                </p>
                            </div>

                            <div className={styles.block} data-aos="fade-up">
                                <h2 className={styles.blockTitle}>​7. Jurisdicción y Ley Aplicable</h2>
                                <p className={styles.blockText}>
                                    Las presentes condiciones se rigen en su totalidad por la legislación del Estado Plurinacional de Bolivia. Cualquier controversia legal o reclamo derivado del uso de este sitio será sometido a la jurisdicción exclusiva de las autoridades y tribunales competentes de Bolivia, sin perjuicio de los mecanismos de cooperación judicial internacional vigentes.
                                </p>
                            </div>

                            <div className={styles.block} data-aos="fade-up">
                                <h2 className={styles.blockTitle}>8. Contacto</h2>
                                <p className={styles.blockText}>
                                    ​Para consultas, notificaciones legales o aclaraciones sobre el uso de este portal web, puede contactar a la institución a través del siguiente correo electrónico:{' '}
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