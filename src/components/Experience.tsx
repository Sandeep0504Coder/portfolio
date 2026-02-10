import '../styles/Experience.css'

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">My career journey</p>
        </div>

        <div className="experience-timeline">
          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
            </div>
            <div className="timeline-content">
              <div className="experience-header">
                <h3 className="job-title">Junior Software Engineer</h3>
                <span className="company">Defineway Technologies Pvt. Ltd.</span>
              </div>
              <p className="job-period">Aug 2023 – Present</p>
              <ul className="job-responsibilities">
                <li>Contributed to and led development of multiple production-grade web and mobile applications using MERN stack and Flutter</li>
                <li>Led small teams, owned feature delivery, improved security, performance, and system reliability</li>
                <li>Collaborated with cross-functional teams to translate complex business workflows into scalable technical solutions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experience-note">
          <p>Currently working at <strong>Defineway Technologies</strong>, focusing on building scalable applications and mentoring junior developers.</p>
        </div>
      </div>
    </section>
  )
}
