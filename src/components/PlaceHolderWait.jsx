import styles from './PlaceHolderWait.module.css';

export default function PlaceHolderWait({ title = "Sección en desarrollo", subtitle, link, linkLabel = "Ir al enlace" }) {
  // Acción por defecto para el botón (ej. volver atrás)
  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* Ilustración SVG minimalista de un engranaje y código */}
       <div className={styles.bAdornoWrapper}>
            <img src="/flor.jpg" alt="letra b" className={styles.imgPlaceHolder} />
       </div>

        <h2 className={styles.title}>{title}</h2>
        
        <p className={styles.description}>
          {subtitle || "Estamos trabajando en los últimos detalles de esta sección para ofrecerte la mejor experiencia posible. ¡Vuelve pronto!"}
          <span><br /><a 
          href={link}
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.link}
        >
           {linkLabel}
        </a></span>
        </p>

        

        <button onClick={handleGoBack} className={styles.button}>
          Volver a la página anterior
        </button>
      </div>
    </section>
  );
}