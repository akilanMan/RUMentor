import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="/images/rumentor5.png" alt="RU Mentor" className="logo-image" />
            <div className="logo-text">
              <span className="logo-accent">RU</span>Mentor
            </div>
          </div>
          <button className="beta-badge">BETA</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Connect with <span className="gradient-text">Mentors</span>
            <br />Who Understand Your Journey
          </h1>
          <p className="hero-subtitle">
            RU Mentor connects you with experienced post-grad students who've walked the pre-health journey.
            Get personalized guidance, career insights, and real-world advice.
          </p>
          <div className="hero-cta">
            <button className="cta-primary">Join the Waitlist</button>
            <button className="cta-secondary">Learn More</button>
          </div>
          {/* <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Mentors</div>
            </div>
            <div className="stat">
              <div className="stat-number">1,200+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat">
              <div className="stat-number">95%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>*/}
        </div> 
        <div className="hero-graphic">
          <div className="floating-card card-1">
            <div className="card-content">
              <div className="avatar">👤</div>
              <div className="card-text">
                <strong>Career Advice</strong>
                <span>From real students</span>
              </div>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="card-content">
              <div className="avatar">🎯</div>
              <div className="card-text">
                <strong>Goal Setting</strong>
                <span>Personalized guidance </span>
              </div>
            </div>
          </div>
          <div className="floating-card card-3">
            <div className="card-content">
              <div className="avatar">🚀</div>
              <div className="card-text">
                <strong>Application Help</strong>
                <span>Real feedback</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <h2 className="section-title">Why Choose RU Mentor?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>Expert Mentors</h3>
              <p>Connect with REAL students who've successfully gotten into their dream schools.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Flexible Scheduling</h3>
              <p>Book sessions at your convenience, anytime, anywhere.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Personalized Guidance</h3>
              <p>Get tailored advice based on your unique goals and challenges.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Application and Exam Prep</h3>
              <p>Get help with your applications and exams to increase your chances of getting into your dream school.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-subtitle">
            Join the beta and be among the first to experience the future of mentorship.
          </p>
          <button className="cta-button">Get Early Access</button>
          <div className="social-proof">
            <div className="avatars">
              <div className="avatar-stack">👤👤👤👤👤</div>
              <span>Join 500+ pre-health students already on the waitlist</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src="/images/rumentor5.png" alt="RU Mentor" className="logo-image" />
            <div className="logo-text">
              <span className="logo-accent">RU</span>Mentor
            </div>
          </div>
          <p className="footer-text">Building the future of mentorship.</p>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
