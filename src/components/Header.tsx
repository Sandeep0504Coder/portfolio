import { useState } from 'react'
import '../styles/Header.css'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Sandeep</span>
            <span className="logo-dot">.</span>
          </div>

          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => {
                  // e.preventDefault()
                  setActiveSection(item.id)
                  setIsMenuOpen(false)
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
