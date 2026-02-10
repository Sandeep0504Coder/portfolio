import '../styles/Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Flutter', 'TypeScript', 'JavaScript (ES6+)', 'HTML', 'CSS', 'Redux', 'Provider'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'NestJS', 'ColdFusion (Taffy)', 'REST APIs', 'Webhooks'],
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'SQL Server'],
    },
    {
      title: 'Auth & Security',
      skills: ['JWT', 'RBAC', 'Supabase RLS', 'Flutter Secure Storage', 'Google Sign-In', 'Apple Sign-In', 'CSP'],
    },
    {
      title: 'Integrations',
      skills: ['PayPal', 'Stripe', 'Twilio (Calls, SMS, Webhooks)', 'Google Maps API', 'Google Analytics'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Agile/Scrum', 'Cron Jobs', 'Docker basics', 'MVC Framework'],
    },
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-metrics">
          <div className="metric-card">
            <div className="metric-value">15+</div>
            <div className="metric-label">Technologies</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">4.8★</div>
            <div className="metric-label">Problem Solving</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">200+</div>
            <div className="metric-label">LeetCode Problems</div>
          </div>
        </div>
      </div>
    </section>
  )
}
