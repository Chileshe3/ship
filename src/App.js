import { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <nav className="nav-menu">
        <div className="nav-brand">RelationshipTips</div>
        <div className="nav-links">
          <button onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</button>
          <button onClick={() => setActiveSection('dating')} className={activeSection === 'dating' ? 'active' : ''}>Dating</button>
          <button onClick={() => setActiveSection('marriage')} className={activeSection === 'marriage' ? 'active' : ''}>Marriage</button>
          <button onClick={() => setActiveSection('conflict')} className={activeSection === 'conflict' ? 'active' : ''}>Conflict Resolution</button>
        </div>
        <button className="mobile-menu">☰</button>
      </nav>

      <main className="main-content">
        <header className="App-header">
          <h1>Building Better Relationships</h1>
          <p className="subtitle">Expert tips and advice for healthier connections</p>

          <div className="featured-section">
            <h2>Featured Topics</h2>
            <div className="tips-container">
              <div className="tip-card">
                <span className="card-icon">💝</span>
                <h3>Communication</h3>
                <p>Master the art of effective communication in relationships.</p>
                <ul>
                  <li>Active listening techniques</li>
                  <li>Express feelings clearly</li>
                  <li>Non-verbal communication</li>
                </ul>
              </div>

              <div className="tip-card">
                <span className="card-icon">🤝</span>
                <h3>Trust Building</h3>
                <p>Essential steps to build and maintain trust.</p>
                <ul>
                  <li>Consistency in actions</li>
                  <li>Keeping promises</li>
                  <li>Transparency</li>
                </ul>
              </div>

              <div className="tip-card">
                <span className="card-icon">⏰</span>
                <h3>Quality Time</h3>
                <p>Ways to strengthen your bond through shared experiences.</p>
                <ul>
                  <li>Date night ideas</li>
                  <li>Meaningful conversations</li>
                  <li>Shared hobbies</li>
                </ul>
              </div>

              <div className="tip-card">
                <span className="card-icon">🎯</span>
                <h3>Setting Boundaries</h3>
                <p>Learn to establish healthy relationship boundaries.</p>
                <ul>
                  <li>Personal space</li>
                  <li>Emotional boundaries</li>
                  <li>Mutual respect</li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </main>

      <footer className="site-footer">
        <p>© 2023 RelationshipTips - Your guide to better relationships</p>
      </footer>
    </div>
  );
}

export default App;
