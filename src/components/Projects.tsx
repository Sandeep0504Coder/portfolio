import '../styles/Projects.css'

export default function Projects() {
  const projects = [
    {
      title: 'Simply Refund',
      subtitle: 'CRM & Intelligent Dialer Platform',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Twilio'],
      highlights: [
        'CRM platform handling 200,000+ contact records annually',
        'Browser-based batch dialer with automated calling workflows',
        'Concurrent outbound calling (3 calls at a time)',
        'Twilio integration for call labeling and recording',
        'Inbound call routing and SMS capability',
      ],
      links: {
        live: 'https://simplyrefund.vercel.app/login'
      }
    },
    {
      title: 'CLASS WEEKLY',
      subtitle: 'E-Learning Platform – Subscription & Billing System',
      tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
      highlights: [
        'Integrated PayPal subscriptions alongside Stripe billing',
        'Built 6+ REST API endpoints for subscription lifecycle management',
        'Implemented webhooks for automatic role and feature access updates',
        'Developed cron jobs for subscription expiration management',
      ],
      links: {
        live: 'https://www.classweekly.com/'
      }
    },
    {
      title: 'Date Castle',
      subtitle: 'Dating Web Application – Client Project',
      tech: ['React', 'Node.js', 'Express.js', 'Supabase'],
      highlights: [
        'Led 3-member team to enhance and scale existing platform',
        'Improved security by ~75% using RBAC and CSP',
        'Designed 15+ RESTful APIs, reducing integration issues by 30%',
        'Integrated PayPal Checkout for in-app purchases',
        'Implemented multi-language support (3 languages)',
      ],
      links: {
        live: 'https://datecastle.com/'
      }
    },
    {
      title: 'Innovationx',
      subtitle: 'Patent Document Creation Web Application',
      tech: ['React', 'NestJS', 'TypeScript', 'Redux', 'MySQL'],
      highlights: [
        'Led 2-member team on patent documentation platform',
        'Reduced document preparation time by ~35%',
        'Integrated Stripe subscription billing with RBAC',
        'Implemented admin-controlled user management',
        'Secure REST APIs with 99.9% uptime',
      ],
      links: {
        live: 'https://dev.innovationx.ai/projects'
      }
    },
    {
      title: 'ShopSphere',
      subtitle: 'Ecommerce Platform (Web & Mobile)',
      tech: ['MERN Stack', 'Flutter'],
      highlights: [
        'Full-featured ecommerce platform with 100+ products',
        'Admin dashboards for inventory and content management',
        'API optimization reducing response times by ~40%',
        'JWT-based authentication and RBAC implementation',
        'Extended to Flutter mobile app with feature parity',
      ],
      links: {
        live: 'https://mern-ecommerce-frontend-kohl.vercel.app/'
      }
    },
    {
      title: '10KHOURS',
      subtitle: 'Billiards Practice & Shot Trainer',
      tech: ['Flutter', 'Provider', 'ColdFusion', 'MySQL'],
      highlights: [
        'Led 3-member team to build app from scratch',
        'Interactive shot designer with drag-and-drop functionality',
        'Guided practice sessions with analytics dashboards',
        'Shot libraries and skill progression tracking',
        'Google & Apple Sign-In integration',
      ],
    },
    {
      title: 'Kingsmen Kava',
      subtitle: 'ERP-Style Factory Product Tracking System',
      tech: ['Flutter', 'Provider', 'ColdFusion', 'MySQL'],
      highlights: [
        'Mobile-first ERP managing complete production lifecycle',
        'Supplier management and 5-stage production workflow',
        'Inventory tracking by grade with batch-level traceability',
        'Custom product mixing and multi-market support',
        'Shipment coordination and tracking',
      ],
    },
    {
      title: 'mnkysoft',
      subtitle: 'Online Food Ordering & Delivery Management',
      tech: ['ColdFusion', 'ColdBox', 'JavaScript', 'Bootstrap', 'SQL Server'],
      highlights: [
        'Developed Checkout, Order Review, and Account pages',
        'Google Maps API integration for address suggestions',
        'Google Analytics for ecommerce tracking',
        'Increased performance by 25% through optimization',
        'Reduced maintenance costs by 30%',
      ],
    },
    {
      title: 'SecureSign',
      subtitle: 'User Authentication Application',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
      highlights: [
        'Developed a user authentication system using MERN stack',
        'Ensured secure login & registration mechanisms',
        'Implemented JWT-based authentication for security',
      ],
      links: {
        github: 'https://github.com/Sandeep0504Coder/UserAuthenticationApp',
      },
    },
    {
      title: 'ClimaLive',
      subtitle: 'Api Based Weather Application',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Handlebars', 'Node.js', 'Express.js'],
      highlights: [
        'Built a real-time weather app fetching live data using APIs',
        'Developed a responsive UI with HTML, CSS, Bootstrap, JavaScript, and Handlebars',
        'Implemented Node.js and Express.js for backend functionality',
      ],
      links: {
        live: 'https://weatherappproject-esdz.onrender.com/',
      },
    },
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcase of my best work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>

              <div className="project-body">
                <ul className="project-highlights">
                  {project.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                  {project.highlights.length > 3 && (
                    <li className="more-items">+{project.highlights.length - 3} more</li>
                  )}
                </ul>
              </div>

              <div className="project-footer">
                <div className="tech-stack">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                {project.links && (
                  <div className="project-links">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link" title="View on GitHub">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link" title="Visit Live Site">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
