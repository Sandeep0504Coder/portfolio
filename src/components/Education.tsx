import '../styles/Education.css'

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background</p>
        </div>

        <div className="education-card">
          <div className="education-icon">🎓</div>
          <div className="education-content">
            <h3 className="degree">B.Tech – Electronics & Communication Engineering</h3>
            <p className="institution">B. P. Poddar Institute of Management & Technology</p>
            <div className="education-stats">
              <span className="stat">
                <strong>CGPA:</strong> 9.24
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
