import '../styles/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} Sandeep Mandal. All rights reserved.
          </p>
          <p className="footer-credit">
            Designed & Built with ❤️ using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}
