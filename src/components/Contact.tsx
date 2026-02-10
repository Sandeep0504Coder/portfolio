import '../styles/Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's collaborate and build something amazing</p>
        </div>

        <div className="contact-content">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <a href="mailto:sandeepmandal0504@gmail.com">sandeepmandal0504@gmail.com</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📱</div>
            <h3>Phone</h3>
            <a href="tel:+917439623426">+91 7439623426</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🔗</div>
            <h3>Social Media</h3>
            <div className="social-links">
              <a href="https://github.com/Sandeep0504Coder" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/isandeepmandal" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <p>Whether you have a project in mind or just want to chat, feel free to reach out!</p>
          <a href="mailto:sandeepmandal0504@gmail.com" className="btn btn-primary btn-large">
            Send me an email
          </a>
        </div>
      </div>
    </section>
  )
}
