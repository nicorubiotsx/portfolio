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
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <div className="about-image-placeholder">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{color: 'var(--accent-primary)'}}>
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Tu foto aquí</span>
              </div>
              <div className="about-image-decoration" />
              <div className="about-image-dots" />
            </div>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p>
                Soy un <strong>Ingeniero Informático</strong> apasionado por crear soluciones 
                tecnológicas que marquen la diferencia. Me especializo en el desarrollo de 
                aplicaciones web modernas utilizando las últimas tecnologías del ecosistema JavaScript.
              </p>
              <p>
                Mi enfoque combina un sólido conocimiento técnico con una atención especial al 
                diseño y la experiencia de usuario. Creo firmemente que el código limpio y la 
                buena arquitectura son la base de productos digitales exitosos.
              </p>
              <p>
                Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a 
                proyectos open source y compartir conocimiento con la comunidad de desarrollo.
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
