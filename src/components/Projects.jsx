import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Jara Motors',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos, panel de administración y sistema de autenticación.',
    image: null,
    tags: ['Next.js', 'Tailwind CSS', 'Resend'],
    demo: 'https://jaramotors.cl',
    featured: true,
  },
  {
    id: 2,
    title: 'AJPielGenuina',
    description: 'E-commerce de artículos de piel genuina con catálogo de productos, carrito de compras y diseño responsive.',
    image: null,
    tags: ['Next.js', 'Tailwind CSS'],
    demo: 'https://ajpielgenuina.cl',
    featured: true,
  },
  {
    id: 3,
    title: 'Social Network',
    description: 'Red social con sistema de posts, likes, comentarios, perfiles de usuario y feeds personalizados.',
    image: null,
    tags: ['Next.js', 'Express', 'PostgreSQL', 'Socket.io', 'Tailwind CSS', 'JWT'],
    demo: null,
    featured: true,
  },


];

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation(0.05);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="section projects">
      <div className="container" ref={ref}>
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-label">// Proyectos</span>
          <h2 className="section-title">Trabajo seleccionado</h2>
          <p className="section-description">
            Una selección de proyectos que reflejan mi pasión por el desarrollo y la innovación tecnológica.
          </p>
        </div>

        <div className={`projects-grid ${isVisible ? 'animate-in' : ''}`}>
          {projects.map((project, idx) => (
            <div
              className={`project-card card ${project.featured ? 'featured' : ''}`}
              key={project.id}
              style={{ transitionDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--accent-primary)' }}>
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                  <span>Vista previa</span>
                </div>
                <div className={`project-overlay ${hoveredId === project.id ? 'show' : ''}`}>
                  <div className="project-links">

                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" title="Ver demo">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
