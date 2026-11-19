import './App.css'
import profileImage from './assets/profile.png'

const links = [
  {
    label: 'Instagram',
    subtitle: '@rtocastro',
    href: 'https://instagram.com/rtocastro',
    icon: '📸',
  },
  {
    label: 'Threads',
    subtitle: '@rtocastro',
    href: 'https://www.threads.com/@rtocastro',
    icon: '🧵',
  },
  {
    label: 'Geek-E-Garments',
    subtitle: 'Etsy Shop',
    href: 'https://www.etsy.com/shop/GeekEGarments',
    icon: '🐱',
  },
  {
    label: "R'To",
    subtitle: 'Music + Projects',
    href: 'https://aretoe.onrender.com',
    icon: '🎛️',
  },
  {
    label: 'Thee Zombie Apocalypse',
    subtitle: 'Band',
    href: 'https://theezombieapocalypse.onrender.com',
    icon: '☣️',
  },
  {
    label: 'The Fruit Bat',
    subtitle: 'Community + Gardening',
    href: 'https://www.thefruitbat.org',
    icon: '🦇',
  },
]

function SocialLink({ label, subtitle, href, icon }) {
  return (
    <a
      className="social-link"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="social-icon">{icon}</div>

      <div className="social-copy">
        <span className="social-label">{label}</span>
        <span className="social-subtitle">{subtitle}</span>
      </div>

      <span className="social-arrow">›</span>
    </a>
  )
}


function App() {
  return (
    <main className="page">
      <div className="chip-card">
        <div className="chip-texture" aria-hidden="true" />

        <section className="profile">
          <div className="avatar">
            <img src={profileImage} alt="RToCastro avatar" />
          </div>

          <div className="profile-copy">
            <span className="eyebrow">FRESH FROM THE INTERNET</span>
            <h1>RToCastro</h1>
            <p>Just chippin' away 🥔</p>
          </div>
        </section>

        <div className="divider" aria-hidden="true">
          <span>✦ ✦ ✦</span>
        </div>

        <nav className="links" aria-label="Social links">
          {links.map((link) => (
            <SocialLink key={link.label} {...link} />
          ))}
        </nav>

        <footer className="footer">
          <span className="footer-copy">
            FRESH LINKS • EXTRA CRUNCH
          </span>
          <span className="footer-potato" aria-hidden="true">
            🥔
          </span>
        </footer>
      </div>
    </main>
  )
}

export default App
