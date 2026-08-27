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
      <div className="cheese-card">
        <div className="cheese-hole hole-one" />
        <div className="cheese-hole hole-two" />
        <div className="cheese-hole hole-three" />
        <div className="cheese-hole hole-four" />
        <div className="cheese-hole hole-five" />
        <div className="cheese-hole hole-six" />

        <section className="profile">
          <div className="avatar">
            <img src={profileImage} alt="RToCastro" />
          </div>

          <div className="profile-copy">
            <h1>RToCastro</h1>
            <p>Pick a slice 🧀</p>
          </div>
        </section>

        <section className="links">
          {links.map((link) => (
            <SocialLink key={link.label} {...link} />
          ))}
        </section>

        <footer className="footer">
          <span>scan • tap • explore</span>
        </footer>
      </div>
    </main>
  )
}

export default App