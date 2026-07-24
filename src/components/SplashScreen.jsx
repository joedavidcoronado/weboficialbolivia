import { useEffect, useState } from "react";
import "./SplashScreen.css";

const spokes = [0, 40, 80, 120, 160, 200, 240, 280, 320];

export default function SplashScreen({ onFinish }) {
  const [isFading, setIsFading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Paso 1: Inicia el desvanecimiento a los 3500ms
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 3500);

    // Paso 2: Finaliza y desmonta a los 4000ms (dando 500ms para la animación)
    const doneTimer = setTimeout(() => {
      setDone(true);
      onFinish?.();
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinish]);

  if (done) return null;

  return (
    // Agregamos la clase "fade-out" condicionalmente
    <div className={`splash ${isFading ? "fade-out" : ""}`}>
      <div className="logo-row">
        <div className="star-wrap">
          {spokes.map((deg, i) => (
            <div
              key={i}
              className="spoke"
              style={{
                "--ar": `${deg}deg`,
                animationDelay: `${0.04 + i * 0.06}s`,
              }}
            />
          ))}
        </div>
        <div className="text-col">
          <div className="t1">Bahá’ís</div>
          <div className="t2">de Bolivia</div>
        </div>
      </div>
      <div className="loader-bar" />
    </div>
  );
}