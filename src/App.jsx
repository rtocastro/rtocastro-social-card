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
      <div className="dino-card">

        {/* prehistoric background */}
        <div className="sun" />

        <div className="mountain mountain-one" />
        <div className="mountain mountain-two" />

        <div className="plant fern-one">🌿</div>
        <div className="plant fern-two">🌿</div>
        <div className="plant leaf-one">🍃</div>

        <section className="profile">
          <div className="avatar">
            <img src={profileImage} alt="RToCastro" />
          </div>

          <div className="profile-copy">
            <span className="eyebrow">WELCOME TO MY CORNER OF THE WEB</span>
            <h1>RToCastro</h1>
            <p>Herbivore online 🦕🌱</p>
          </div>
        </section>

        <div className="divider">
          <span>•••</span>
        </div>

        <section className="links">
          {links.map((link) => (
            <SocialLink key={link.label} {...link} />
          ))}
        </section>

        <footer className="footer">
          <div className="ground">
            <span className="dino">🦕</span>
            <span className="grass">🌱 🌿 🌱</span>
          </div>

          <span className="footer-copy">
            TAP • EXPLORE • DON'T GO EXTINCT
          </span>
        </footer>
      </div>
    </main>
  )
}

export default App