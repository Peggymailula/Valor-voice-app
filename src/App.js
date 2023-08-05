import React from 'react';
import logo from './components/assets/logo.png';
import './App.css';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            Valor Voice
          </div>
          <ul className="nav-links">
            <li><a href="#info">About</a></li>
            <li><a href="#cycle-tracker">Reporting</a></li>
            <li><a href="#fitness-nutrition">Forum</a></li>
            <li><a href="#contact">Support</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="center-container">
          <div>
            <img src={logo} alt="ValorVoiceLogo" className="mx-auto max-w-full h-auto" />
          </div>
        </section>
        <div className="flex h-screen w-full bg-blue-400 justify-center items-center">
          {/* Your content here */}
        </div>
        <section id="info">
          <h1>Welcome to Valor Voice</h1>
          <p>Welcome to our groundbreaking Gender-Based Violence (GBV) Support and Intervention Platform: Valor Voice. Our mission is to address the pressing challenges posed by GBV in South Africa through the power of technology, community, and resources.</p>
        </section>

        {/* Other sections */}

        <section id="contact">
          <div className="content">
            <h2>Contact Us</h2>
            <p>Have any questions or feedback? Reach out to our team of experts to get the help you need.</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Valor Voice All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
