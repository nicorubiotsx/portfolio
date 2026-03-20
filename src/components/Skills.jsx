import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    description: 'Interfaces modernas e interactivas',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'Astro', icon: '🚀' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    description: 'APIs robustas y escalables',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express', icon: '🚂' },
      { name: 'Python', icon: '🐍' },
      { name: 'REST APIs', icon: '🔗' },
    ],
  },
  {
    title: 'Base de Datos',
    icon: '🗄️',
    description: 'Almacenamiento y gestión de datos',
    skills: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Prisma', icon: '△' },
    ],
  },
  {
    title: 'Herramientas',
    icon: '🛠️',
    description: 'DevOps y productividad',
    skills: [
      { name: 'Git / GitHub', icon: '🐙' },
      { name: 'Docker', icon: '🐳' },
      { name: 'CI/CD', icon: '🔄' },
      { name: 'VS Code', icon: '💙' },
    ],
  },
];

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="skills" className="section skills">
      <div className="container" ref={ref}>
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-label">// Habilidades</span>
          <h2 className="section-title">Mi Stack Tecnológico</h2>
          <p className="section-description">
            Herramientas y tecnologías con las que trabajo día a día para crear soluciones robustas.
          </p>
        </div>

        <div className={`skills-grid ${isVisible ? 'animate-in' : ''}`}>
          {skillCategories.map((category, catIdx) => (
            <div
              className="skill-card card"
              key={category.title}
              style={{ transitionDelay: `${catIdx * 0.1 + 0.2}s` }}
            >
              <div className="skill-card-header">
                <span className="skill-card-icon">{category.icon}</span>
                <div>
                  <h3 className="skill-card-title">{category.title}</h3>
                  <p className="skill-card-desc">{category.description}</p>
                </div>
              </div>

              <div className="skill-tags">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    className="skill-chip"
                    key={skill.name}
                    style={{
                      transitionDelay: isVisible
                        ? `${catIdx * 0.1 + skillIdx * 0.05 + 0.3}s`
                        : '0s',
                    }}
                  >
                    <span className="skill-chip-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
