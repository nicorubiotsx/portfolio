import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Experience.css';

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Desarrollador Full-Stack',
    company: 'Empresa Tecnológica',
    period: '2023 - Presente',
    description: 'Desarrollo de aplicaciones web escalables utilizando React, Node.js y bases de datos relacionales. Implementación de CI/CD y mejora continua de la arquitectura.',
    achievements: [
      'Reducción del 40% en tiempos de carga',
      'Migración exitosa a microservicios',
      'Mentoring a desarrolladores junior',
    ],
  },
  {
    id: 2,
    type: 'work',
    title: 'Desarrollador Frontend',
    company: 'Agencia Digital',
    period: '2022 - 2023',
    description: 'Creación de interfaces de usuario modernas y responsivas para clientes internacionales. Trabajo en equipo ágil con metodología Scrum.',
    achievements: [
      'Desarrollo de 10+ landing pages de alto impacto',
      'Implementación de design system reutilizable',
    ],
  },
  {
    id: 3,
    type: 'education',
    title: 'Ingeniería Informática',
    company: 'Universidad',
    period: '2018 - 2023',
    description: 'Formación integral en ciencias de la computación, ingeniería de software, bases de datos, redes y sistemas operativos.',
    achievements: [
      'Proyecto de tesis: aplicación web full-stack',
      'Distinción académica',
    ],
  },
];

export default function Experience() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="experience" className="section experience">
      <div className="container" ref={ref}>
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-label">// Trayectoria</span>
          <h2 className="section-title">Experiencia & Educación</h2>
          <p className="section-description">
            Mi camino profesional y formación académica.
          </p>
        </div>

        <div className={`timeline ${isVisible ? 'animate-in' : ''}`}>
          <div className="timeline-line" />
          {experiences.map((exp, idx) => (
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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{color: 'var(--success)', flexShrink: 0}}>
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
