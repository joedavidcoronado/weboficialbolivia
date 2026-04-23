import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <>
        <Header />
        
        <main>
            {/* ─── HERO/MAIN SECTION ─── */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay} />
                <Container className={styles.heroContent}>
                    <Row>
                        <Col md={5} sm={8} xs={12}>
                            <h1 className={styles.heroTitle} data-aos="fade-right">
                                La tierra es un 
                                solo país
                            </h1>
                            <p className={styles.heroText} data-aos="fade-right" data-aos-delay="150">
                                Creemos que es hora de que la humanidad se una como una sola familia, 
                                para crear un mundo donde todos puedan prosperar.
                            </p>
                            <Button className={styles.heroBtn} data-aos="fade-up" data-aos-delay="300">
                                BAHÁ'ÍS CERCA DE TÍ
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ─── QUOTE/CITA SECTION ─── */}
            <section className={styles.quoteSection}>
                <img src="/assets/flor-deco.png" alt="" className={`${styles.florDeco} ${styles.florTopRight}`} aria-hidden="true" />
                <img src="/assets/flor-deco.png" alt="" className={`${styles.florDeco} ${styles.florBottomLeft}`} aria-hidden="true" />

                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={7}>
                            <blockquote 
                                className={styles.quoteText}
                                data-aos="fade-up"
                            >
                                "…todo hombre ha sido creado para llevar adelante una civilización en continuo progreso"
                            </blockquote>
                            <p 
                                className={styles.quoteBody}
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >
                                Los bahá'ís de Bolivia y del resto del mundo, junto con otras personas de todos los 
                                orígenes étnicos, culturales y sociales, estamos aprendiendo a aplicar las enseñanzas de 
                                Bahá'u'lláh para contribuir al cambio social.
                            </p>
                            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                                <Button className={styles.quoteBtn}>
                                    ÚNETE EN TU LOCALIDAD
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ─── EN QUE CREEMOS BAHÁI SECTION ─── */}
            <section className={styles.feSection}>
                <Container>
                    <Row className="align-items-center">

                        {/* Columna imágenes */}
                        <Col md={6} className={styles.feImagesCol} data-aos="fade-right" data-aos-duration="900">
                            <div className={styles.feImagesWrapper}>
                                <div className={`${styles.feImgCard} ${styles.feImgLeft}`}>
                                    <img src="/assets/fe-1.jpg" alt="Comunidad bahá'í" />
                                </div>
                                <div className={`${styles.feImgCard} ${styles.feImgCenter}`}>
                                    <img src="/assets/fe-2.jpg" alt="Templo bahá'í" />
                                </div>
                                <div className={`${styles.feImgCard} ${styles.feImgRight}`}>
                                    <img src="/assets/fe-3.jpg" alt="Persona bahá'í" />
                                </div>
                            </div>
                        </Col>

                        {/* Columna texto */}
                        <Col md={6} className={styles.feTextCol} data-aos="fade-left" data-aos-duration="900">
                            <span className={styles.feLabel}>LA FE BAHÁ'Í</span>
                            <h2 className={styles.feTitle}>En que creémos<br />los bahá'ís</h2>
                            <p className={styles.feBody}>
                                En miles y miles de lugares alrededor del mundo, las enseñanzas de 
                                la Fe Bahá'í inspiran a individuos y comunidades mientras trabajan 
                                para mejorar sus propias vidas y contribuir al avance de la civilización.
                            </p>
                            <a href="#" className={styles.feLink}>
                                Explorar más <span className={styles.feLinkArrow}>→</span>
                            </a>
                        </Col>

                    </Row>
                </Container>
            </section>

            {/* ─── QUIENES SOMOS LOS BAHÁI SECTION ─── */}
            <section className={styles.vidaSection}>
                <div className={styles.vidaTop}>
                    <div className={styles.vidaTopImg} data-aos="fade-right" data-aos-duration="1000">
                        <img src="/assets/vida-principal.png" alt="Niños bahá'ís con mapa del mundo" />
                    </div>
                    <div className={styles.vidaTopText} data-aos="fade-left" data-aos-duration="1000">
                        <span className={styles.vidaLabel}>VIDA BAHÁ'Í</span>
                        <h2 className={styles.vidaTitle}>
                            Quiénes son los<br />bahá'ís de Bolivia
                        </h2>
                        <p className={styles.vidaBody}>
                            La comunidad bahá'í de Bolivia cuenta con miembros de procedencias 
                            culturales y étnicas diversas, tanto de dentro como de fuera de sus 
                            fronteras; diversidad que se ve reflejada en su riqueza artística y lingüística.
                        </p>
                        <a href="#" className={styles.vidaLink}>
                            Explorar más <span className={styles.vidaLinkArrow}>→</span>
                        </a>
                    </div>
                </div>

                {/* Galería inferior */}
                <div className={styles.vidaGallery}>
                    {['vida-g1.jpg','vida-g2.jpg','vida-g3.jpg','vida-g4.jpg'].map((img, i) => (
                        <div 
                            key={i}
                            className={styles.vidaGalleryItem}
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <img src={`/assets/${img}`} alt="Comunidad bahá'í" />
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── QUE HACEMOS SECTION ─── */}
            <section className={styles.comunidadSection}>
                <Container fluid className={styles.comunidadInner}>
                    <Row className="align-items-center">

                        {/* Columna texto */}
                        <Col md={5} className={styles.comunidadTextCol} data-aos="fade-right">
                            <span className={styles.comunidadLabel}>VIDA COMUNITARIA</span>
                            <h2 className={styles.comunidadTitle}>
                                Qué hacemos<br />los bahá'ís
                            </h2>
                            <p className={styles.comunidadBody}>
                                En colaboración con otras personas y organizaciones, nos esforzamos 
                                por contribuir al avance de la sociedad inspirados por la vision de 
                                Bahá'u'lláh de un mundo próspero, justo y unificado.
                            </p>
                            <Button className={styles.comunidadBtn}>
                                ENCONTRAR ACTIVIDADES LOCALES
                            </Button>
                        </Col>

                        {/* Columna visual */}
                        <Col md={7} className={styles.comunidadVisualCol} data-aos="fade-left" data-aos-delay="150">
                            <div className={styles.comunidadComposicion}>

                                <div className={styles.dotGrid} aria-hidden="true">
                                    {Array.from({ length: 25 }).map((_, i) => (
                                        <span key={i} className={styles.dot} />
                                    ))}
                                </div>

                                <div className={`${styles.comunidadCard} ${styles.cardMain}`}>
                                    <img src="/assets/comunidad-main.png" alt="Templo bahá'í" />
                                </div>
                                {[1,2,3,4,5,6].map(n => (
                                    <div key={n} className={`${styles.comunidadCard} ${styles[`avatar${n}`]}`}>
                                        <img src={`/assets/avatar${n}.jpg`} alt="Miembro bahá'í" />
                                    </div>
                                ))}

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ─── MAPA SECTION ─── */}
            <section className={styles.mapaSection}>
                <Container>
                    <Row className="align-items-center justify-content-center">

                        <Col md={6} xs={12} className={styles.mapaTextCol} data-aos="fade-right">
                            <span className={styles.mapaLabel}>ESTÁS INVITADO A PARTICIPAR</span>
                            <h2 className={styles.mapaTitle}>
                                Una comunidad global construida sobre conexiones locales
                            </h2>
                            <p className={styles.mapaBody}>
                                La mayoría de las actividades comunitarias bahá'ís (reuniones de 
                                oración, grupos de estudio, actividades para niños y adolescentes) 
                                están abiertas a todos y tienen lugar en hogares y centros 
                                comunitarios en todo el país.
                            </p>
                            <Button className={styles.mapaBtn}>
                                ENCONTRAR ACTIVIDADES LOCALES
                            </Button>
                        </Col>

                        <Col 
                            md={5} xs={12} 
                            className={`d-flex justify-content-center ${styles.mapaVisualCol}`}
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            <img 
                                src="/assets/mapa.png" 
                                alt="Mapa de Bolivia" 
                                style={{ maxWidth: '100%', height: 'auto' }} 
                            />
                        </Col>

                    </Row>
                </Container>

                <div className={styles.bAdornoWrapper}>
                    <img src="/assets/b.png" alt="letra b" className={styles.bAdorno} />
                </div>
            </section>

            {/* ─── QUOTE/CITA 2 SECTION ─── */}
            <section className={styles.quoteSection2}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={10} lg={8} className="text-center">
                            <div className={styles.quoteWrapper}>

                                <div className={styles.quoteDecorationTop} />

                                <blockquote 
                                    className={styles.quote2Text}
                                    data-aos="fade-up"
                                >
                                    «Dedicad vuestra mente y voluntad a la educación de los pueblos y razas de la tierra, 
                                    para que quizás sean borradas de su faz las disensiones que la dividen, por la fuerza 
                                    del Más Grande Nombre, y todos los seres humanos se conviertan en sostenedores de 
                                    un Orden único y en habitantes de una sola Ciudad»
                                </blockquote>

                                <cite 
                                    className={styles.quoteAuthor}
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    BAHÁ'U'LLÁH
                                </cite>

                                <div className={styles.quoteDecorationSide} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
        <Footer />
        </>
    );
};

export default HomePage;