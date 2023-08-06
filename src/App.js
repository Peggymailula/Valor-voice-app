import React, { useState } from 'react';
import logo from './components/assets/logo.png';
import './App.css';
import ReportForm from './components/pages/Report';
import Support from './components/pages/Support';
import Forum from './components/pages/Forum';

const App = () => {
  const [currentForm, setCurrentForm] = useState("about");

  const backgroundImageUrl = 'https://www.autismhampshire.org.uk/assets/images/International-Womens-Day-2019-social.jpg';

  return (
    <div className="app-container" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', height: '100vh' }}>
      <header>
        <nav>
          <div className="logo">
            Valor Voice
          </div>
          <ul className="nav-links">
            <li onClick={() => setCurrentForm("about")}>About</li>
            <li onClick={() => setCurrentForm("report")}>Reporting</li>
            <li onClick={() => setCurrentForm("support")}>Support</li>
            <li onClick={() => setCurrentForm("forum")}>Community Forum</li>
          </ul>
        </nav>
      </header>

      {currentForm === "about" && (
        <div>
          <section className="center-container">
            <div style={{ padding: '10px' }}>
              <img src={logo} alt="ValorVoiceLogo" className="mx-auto max-w-full h-auto p-5" />
            </div>
          </section>

          <section id="info">
            <h1 className="text-2xl font-semibold text-black mb-2">Welcome to Valor Voice</h1>
            <p >
              Welcome to Valor Voice. This is a safe space where a victim or a reporter can report any Gender-Based Violence (GBV) incidents they may experience in their homes, community, and workplaces. A victim/reporter will remain anonymous should they wish to.
            </p>
          </section>
        </div>
      )}

      {currentForm === "report" && <ReportForm />}
      {currentForm === "support" && <Support />}
      {currentForm === "forum" && <Forum />}
    </div>
  );
};

export default App;
