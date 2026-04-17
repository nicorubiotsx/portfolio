import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Experience.css';

const experiences = [

  {
    id: 1,
    type: 'work',
    title: 'Desarrollador Web',
    company: 'AID PROF',
    period: '2021',
    description: 'Creación de interfaces de usuario dinámicas y robustas aplicando estándares actuales de desarrollo para un sistema estudiantil.',
    achievements: [
      'Desarrollo de interfaces de alto rendimiento utilizando React.js y TypeScript.',
      'Modelamiento de la base de datos del proyecto y construcción de la base del proyecto en Django (Python) con PostgreSQL.',
      'Implementación del patrón Modelo Vista Controlador.',
    ],
  }, {
    id: 2,
    type: 'work',
    title: 'Desarrollador Móvil',
    company: 'Stage On VR',
    period: '2022',
    description: 'Desarrollo y mantenimiento de aplicaciones móviles utilizando tecnologías modernas para experiencias inmersivas.',
    achievements: [
      'Construcción de aplicaciones móviles escalables utilizando React Native.',
      'Implementación de sistemas de notificaciones push e integración de librerías externas.',
      'Creación y despliegue de nuevos módulos funcionales desde cero.',
    ],
  },
  {
    id: 3,
    type: 'work',
    title: 'Desarrollador Full-Stack Freelance',
    company: 'Independiente',
    period: '2023 - Presente',
    description: 'Diseño y despliegue de aplicaciones web a medida, centradas en la eficiencia y el uso de arquitecturas modernas.',
    achievements: [
      'Arquitectura e implementación de soluciones robustas utilizando TypeScript y Node.js para la lógica de servidor y persistencia.',
      'Despliegue de aplicaciones escalables con gestión de autenticación segura y bases de datos relacionales.',
      'Desarrollo de interfaces interactivas y optimizadas para garantizar una experiencia de usuario fluida.',
    ],
  }
]

export default function Experience() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="experience" className="section experience">
      <div className="container" ref={ref}>
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-label">// Trayectoria</span>
          <h2 className="section-title">Experiencia & educación</h2>
          <p className="section-description">
            Mi camino profesional y formación académica.
          </p>
        </div>

        <div className={`timeline ${isVisible ? 'animate-in' : ''}`}>
          <div className="timeline-line" />
          {[...experiences]
            .sort((a, b) => parseInt(b.period) - parseInt(a.period))
            .map((exp, idx) => (
              <div
                className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
                key={exp.id}
                style={{ transitionDelay: `${idx * 0.15 + 0.2}s` }}
              >
                <div className="timeline-dot">
                  <span>{exp.type === 'work' ? '💼' : '🎓'}</span>
                </div>

                <div className="timeline-card card">
                  <span className="timeline-period">{exp.period}</span>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-description">{exp.description}</p>

                  <ul className="timeline-achievements">
                    {exp.achievements.map((a, i) => (
                      <li key={i}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--success)', flexShrink: 0 }}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
