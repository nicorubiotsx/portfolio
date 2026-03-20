import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">Dev</span>
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-tagline">
              Construyendo el futuro, una línea de código a la vez.
            </p>
          </div>

          <div className="footer-links">
            <a href="#about">Sobre mí</a>
            <a href="#skills">Habilidades</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Nicolás Rubio. Todos los derechos reservados.</p>

        </div>
      </div>
    </footer>
  );
}
