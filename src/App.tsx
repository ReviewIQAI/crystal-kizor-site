import './App.css'

const initiatives = [
  {
    number: '01',
    name: 'Studio COKA',
    category: 'ARCHITECTURE · INTERIORS · CONSTRUCTION',
    description: 'Designing thoughtful spaces shaped by people, place and climate.',
  },
  {
    number: '02',
    name: 'AKO Alliance',
    category: 'EDUCATION · OPPORTUNITY',
    description: 'Creating pathways to learning and opportunity for the next generation.',
  },
  {
    number: '03',
    name: 'ELEvated',
    category: 'FURNITURE · PRODUCT DESIGN',
    description: 'Contemporary objects grounded in African contexts, materials and ideas.',
  },
  {
    number: '04',
    name: 'The Effective Architect',
    category: 'LEARNING · MEDIA · ARCHITECTURE',
    description: 'Making architectural knowledge more accessible to emerging practitioners.',
  },
]

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="wordmark" href="#home">CK<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Initiatives</a>
          <a href="#ideas">Ideas &amp; speaking</a>
        </div>
        <a className="nav-cta" href="mailto:hello@studiocoka.com">Get in touch ↗</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="dot" /> DESIGNING BEYOND THE OBVIOUS</p>
          <h1>Ideas that shape<br />spaces, <em>people</em><br />and possibilities.</h1>
          <p className="hero-description">
            I’m Crystal Kizor — architect, designer, entrepreneur and researcher
            exploring how design can create a more meaningful world.
          </p>
          <div className="hero-actions">
            <a className="button-dark" href="#work">Explore my work ↗</a>
            <a className="text-link" href="#about">A little about me ↓</a>
          </div>
          <div className="hero-note">ARCHITECTURE　·　IMPACT　·　IDEAS　·　PURPOSE</div>
        </div>
        <div className="hero-visual">
          <img src="/images/crystal-portrait.png" alt="Portrait of Crystal Kizor"
            onError={(event) => { event.currentTarget.style.display = 'none' }} />
          <div className="visual-overlay">
            <span>DESIGNING WITH INTENTION</span>
            <span>LAGOS, NIGERIA · WORKING EVERYWHERE</span>
          </div>
          <div className="visual-stamp">CK<br /><span>✳</span></div>
        </div>
        <div className="hero-index">INDEPENDENT THINKER — MULTIDISCIPLINARY PRACTICE</div>
      </section>

      <section className="intro section-pad" id="about">
        <p className="eyebrow">01 / A CONNECTING THREAD</p>
        <div>
          <h2>Different disciplines.<br /><em>One intentional life.</em></h2>
          <p className="intro-text">
            My work moves between the built environment, creative enterprise,
            education, faith and ideas. Each pursuit is connected by a belief
            that what we create should make life better — thoughtfully,
            responsibly and for more people.
          </p>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / THE WORK IN MOTION</p>
            <h2>A connected <em>practice.</em></h2>
          </div>
          <p>Independent initiatives, connected by curiosity and purpose.</p>
        </div>
        <div className="initiative-grid">
          {initiatives.map((item) => (
            <article className="initiative" key={item.number}>
              <div className="initiative-top">
                <span>{item.number} / 04</span><span className="arrow">↗</span>
              </div>
              <p className="initiative-category">{item.category}</p>
              <h3>{item.name}</h3>
              <p className="initiative-description">{item.description}</p>
              <a href="mailto:hello@studiocoka.com">Explore initiative ↗</a>
            </article>
          ))}
        </div>
        <div className="extra-initiative">
          <div><span className="eyebrow">ALSO PART OF THE JOURNEY</span><h3>Alive and Free</h3></div>
          <p>A Christian youth movement centred on truth, healing, identity, purpose and life in Christ.</p>
          <span className="extra-star">✳</span>
        </div>
      </section>

      <section className="ideas section-pad" id="ideas">
        <p className="eyebrow">03 / IDEAS, VOICE &amp; PERSPECTIVE</p>
        <h2>Good questions make<br />room for <em>new futures.</em></h2>
        <p className="ideas-copy">
          Through research, writing, authorship and speaking, I explore
          climate-responsive design, African cities, entrepreneurship and the
          future of the built environment.
        </p>
        <a className="button-light" href="mailto:hello@studiocoka.com">Start a conversation ↗</a>
      </section>

      <footer className="footer">
        <a className="wordmark" href="#home">CK<span>.</span></a>
        <p>Designing with intention. Building with purpose.</p>
        <a href="mailto:hello@studiocoka.com">CONTACT ↗</a>
        <span>© 2026 CRYSTAL KIZOR</span>
      </footer>
    </main>
  )
}

export default App


