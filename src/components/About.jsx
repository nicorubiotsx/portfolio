import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

export default function About() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="about" className="section about">
      <div className="container" ref={ref}>
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-label">// Sobre mí</span>
          <h2 className="section-title">Conóceme un poco más</h2>
        </div>

        <div className={`about-grid ${isVisible ? 'animate-in' : ''}`}>

          <div className="about-content">
            <div className="about-text">
              <p>
                <strong>Ingeniero informático</strong> y desarrollador full-stack con experiencia 
                en aplicaciones web, móviles y sistemas a medida. He colaborado con empresas 
                como AID PROF y Stage On VR, y actualmente trabajo de forma independiente.
              </p>
              <p>
                Mi stack principal gira en torno a React, Next.js, Node.js, TypeScript y 
                PostgreSQL. Me apasiona construir productos que combinen buen código con una 
                experiencia de usuario pensada al detalle.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎓</div>
                <div className="highlight-info">
                  <h4>Educación</h4>
                  <p>Ingeniería Informática</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">💼</div>
                <div className="highlight-info">
                  <h4>Enfoque</h4>
                  <p>Full-Stack Development</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🌍</div>
                <div className="highlight-info">
                  <h4>Ubicación</h4>
                  <p>Disponible remoto</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-info">
                  <h4>Metodología</h4>
                  <p>Ágil & Clean Code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
