import '../styles/About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>

        <div className="about-content">
          <p className="about-text">
            I'm a results-driven Full Stack Developer with <strong>2.5+ years of experience</strong> building scalable web and mobile applications using modern technologies like MERN stack and Flutter.
          </p>

          <p className="about-text">
            My expertise spans across secure authentication, payment integrations, real-time workflows, ERP systems, analytics-driven platforms, and high-volume CRM solutions. I've successfully <strong>led small teams, enhanced existing systems, and delivered measurable business impact</strong> across ecommerce, SaaS, fintech, manufacturing, and training platforms.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">🎯</div>
              <h3>Problem Solver</h3>
              <p>Passionate about tackling complex technical challenges and delivering efficient solutions</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">👥</div>
              <h3>Team Leader</h3>
              <p>Experience leading small teams, mentoring developers, and fostering collaborative environments</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">⚡</div>
              <h3>Performance Focused</h3>
              <p>Committed to writing clean, maintainable code and optimizing application performance</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🚀</div>
              <h3>Innovation Driven</h3>
              <p>Always exploring new technologies and best practices to deliver cutting-edge solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
