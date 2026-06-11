import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './IdentityPage.module.css';

const IdentityPage = () => {
    return (
        <>
            <Header />

            {/* ─── HERO 1 ─── */}
            <div className={styles.heroContainer} data-aos="fade">
                <img src="/assets/identidadImages/hero.png" alt="Comunidad bahá'í" className={styles.heroImg} />
            </div>

            {/* ─── COMUNIDAD EN BOLIVIA ─── */}
            <section className={styles.comunidadSection}>
                <Container>
                    <div className={styles.comunidadInner}>

                        <aside className={styles.citeCol} data-aos="fade-right" data-aos-delay="200">
                            <p className={styles.citeText}>
                                "Vosotros debéis dar gran importancia a la enseñanza de los
                                pueblos indígenas, es decir, a los aborígenes de América. [...]
                                Si estos aborígenes fuesen educados y obtuvieseen guía, no hay
                                duda de que llegarán a ser tan iluminados que a su vez podrán
                                derramar luz sobre las regiones".
                            </p>
                            <span className={styles.citeAuthor}>Abdu'l-Bahá</span>
                        </aside>

                        <div className={styles.contentCol} data-aos="fade-left">
                            <span className={styles.sectionLabel}>Quiénes somos</span>
                            <h2 className={styles.sectionTitle}>Comunidad en Bolivia</h2>

                            <p className={styles.bodyText}>
                                La Fe Bahá'í en Bolivia comienza con referencias al país en la
                                literatura bahá'í en 1916. La primera bahá'í en llegar a Bolivia
                                fue la Sra. Eleanor Adler, quien llegó a la ciudad de La Paz en
                                1940. Meses después, en 1941, la Sra. Yvonne de Cuellar reconoce
                                el Mensaje de Bahá'u'lláh, convirtiéndose en la "Madre Espiritual
                                de Bolivia".
                            </p>

                            <p className={styles.bodyText}>
                                En 1945 ya se cuenta con un buen grupo de creyentes en La Paz,
                                que elige a su primera institución, la Asamblea Espiritual Local,
                                encargada de atender los asuntos de la creciente comunidad. En
                                1956, Andrés Jachacollo fue el primer boliviano nativo en reconocer
                                el Mensaje de Bahá'u'lláh como una respuesta a las profecías que
                                tenían sus antepasados y junto con otros amigos que pronto
                                ingresaron a la Fe, se dedican a llevar el Mensaje de Bahá'u'lláh
                                a numerosas comunidades especialmente del altiplano boliviano y de
                                esta manera la Fe crece rápidamente y se crea un movimiento muy
                                grande, especialmente en las áreas rurales. En 1961, la comunidad
                                bahá'í de Bolivia eligió su primera Asamblea Espiritual Nacional.
                            </p>

                            <img
                                src="/assets/identidadImages/asamblea.png"
                                alt="Primera Asamblea Espiritual Nacional de Bolivia"
                                className={styles.historicImg}
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            />

                            <p className={styles.bodyText}>
                                La Fe Bahá'í es actualmente la minoría religiosa internacional más
                                grande en Bolivia, y está distribuida en todos los departamentos y
                                regiones del país, tanto en el campo como en las ciudades, donde
                                los bahá'ís, junto con amigos de todo tipo de creencias y orígenes,
                                se esfuerzan por aplicar en sus vidas, en sus familias y en sus
                                vecindarios los principios y enseñanzas que trajo Bahá'u'lláh para
                                la transformación de la sociedad.
                            </p>
                        </div>

                    </div>
                </Container>
            </section>

            {/* ─── HERO 2 ─── */}
            <div className={styles.heroContainer2} data-aos="fade">
                <img src="/assets/identidadImages/hero2.png" alt="Comunidad bahá'í estudiando" className={styles.heroImg2} />
            </div>

            {/* ─── UNA FE MUNDIAL ─── */}
            <section className={styles.feMundialSection}>
                <Container>
                    <div className={styles.feMundialInner}>

                        <aside className={styles.citeCol} data-aos="fade-right" data-aos-delay="200">
                            <p className={styles.citeText}>
                                "La diversidad en la familia humana debería ser causa de amor
                                y armonía, como lo es en la música, donde muchas notas diferentes
                                se mezclan en la creación de un acorde perfecto".
                            </p>
                            <span className={styles.citeAuthor}>Abdu'l-Bahá</span>
                        </aside>

                        <div className={styles.contentCol} data-aos="fade-left">
                            <span className={styles.sectionLabel}>Quiénes somos</span>
                            <h2 className={styles.sectionTitle}>Una fe mundial</h2>

                            <p className={styles.bodyText}>
                                El mensaje principal que trajo Bahá'u'lláh para el mundo es la unidad.
                                Nos dice que somos los frutos de un solo árbol y las hojas de una sola
                                rama. Seamos mujeres u hombres, campesinos o citadinos, todos somos hijos
                                de un solo Dios, todos somos hermanos. Debemos ser unidos como las flores
                                de un mismo jardín y celebrar que somos algo diferentes, porque eso hace
                                que el jardín de la humanidad sea más colorido y hermoso.
                            </p>

                            <p className={styles.bodyText}>
                                Hace unos 200 años atrás, cuando vino Bahá'u'lláh, solo conocíamos los
                                lugares más cercanos a nosotros y solo podíamos conversar con las personas
                                que estaban a nuestro lado, pero ahora ya podemos viajar más rápido que el
                                sonido y podemos conversar y vernos en tiempo real con personas que están al
                                otro lado del mundo, ya ha llegado el tiempo para la unidad de la humanidad.
                            </p>

                            <p className={styles.bodyText}>
                                La película <a href="https://www.youtube.com/watch?v=luNPE1V8TW0" className={styles.bodyLink}>Luz para el Mundo</a> celebra
                                el bicentenario del nacimiento de Bahá'u'lláh y nos permite conocer un poco
                                sobre el impacto que han tenido Sus enseñanzas y cómo están ayudando a
                                transformar la sociedad en lugares muy diversos del mundo.
                            </p>

                            <div className={styles.videoWrapper} data-aos="zoom-in" data-aos-delay="100">
                                <iframe
                                    src="https://www.youtube.com/embed/luNPE1V8TW0"
                                    title="Luz para el Mundo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className={styles.videoIframe}
                                />
                            </div>

                            <p className={styles.bodyText}>
                                Bahá'u'lláh nos enseña que hay un solo Dios, en el cual todos creemos,
                                solo que en diferentes idiomas la palabra Dios suena un poco diferente.
                                También nos enseña que a lo largo de los tiempos Dios nos ha mandado
                                Mensajeros Divinos, entre ellos Abraham, Moisés y Jesús, que nos han
                                traído la Guía de Dios, de acuerdo con el desarrollo que tenía la
                                humanidad en cada época, construyendo siempre sobre las enseñanzas que
                                trajo el Mensajero de Dios que vino antes, y avisando también que vendría
                                otro en un futuro. Así, para traer el remedio que necesita la humanidad
                                en esta época tan importante que estamos viviendo, Dios nos mandó a dos
                                Mensajeros: El Báb (que significa La Puerta) y Bahá'u'lláh (que significa
                                La Gloria de Dios).
                            </p>

                            <p className={styles.bodyText}>
                                En esta página oficial podemos conocer más sobre{' '}
                                <a href="#" className={styles.bodyLink}>Bahá'u'lláh y Su Alianza</a>.
                            </p>
                        </div>

                    </div>
                </Container>

                {/* ─── EN QUÉ CREEMOS BANNER ─── */}
                <div className={styles.creeemosCont}>
                    <div className={styles.creemosBanner} data-aos="fade-up">
                        <div className={styles.creemosBannerLeft}>
                            <h2 className={styles.creemosTitle}>En qué creemos</h2>
                            <p className={styles.creemosBody}>
                                Desde el comienzo de la historia, algo hermoso ha estado ocurriendo en
                                silencio: un solo Dios, lleno de amor, he estado enviando mensajeros a
                                todos los pueblos de la tierra.
                            </p>
                            <a href="#" className={styles.creemosLink}>Descubre más →</a>
                        </div>
                        <div className={styles.creemosBannerRight}>
                            <img src="/assets/identidadImages/somos.png" alt="Comunidad bahá'í boliviana" />
                        </div>
                    </div>
                </div>

            </section>

            {/* ─── QUOTE FINAL ─── */}
            <section className={styles.quoteFinalSection}>
                <div className={styles.bAdornoWrapper}>
                    <img src="/assets/identidadImages/b.png" alt="" className={styles.bAdorno}  />
                </div>

                <div className={styles.quoteFinalContent} data-aos="fade-up" data-aos-delay="150">
                    <blockquote className={styles.quoteFinalText}>
                        «Tan potente es la luz de la unidad que puede iluminar toda la tierra.»
                    </blockquote>
                    <cite className={styles.quoteFinalAuthor}>Bahá'u'lláh</cite>
                    <Button className={styles.quoteFinalBtn} data-aos="fade-up" data-aos-delay="300">
                        BAHÁ'ÍS CERCA DE TÍ
                    </Button>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default IdentityPage;