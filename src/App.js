import React, { useState } from 'react';
import logo from './components/assets/logo.png';
import './App.css';
import ReportForm from './components/pages/Report';

const App = () => {
  const [currentForm, setCurrentForm] = useState("about")
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            Valor Voice
          </div>
          <ul className="nav-links">
            <li onClick={() => setCurrentForm("about")}>About</li>
            <li onClick={() => setCurrentForm("report")}>Reporting</li>
            <li onClick={() => setCurrentForm("support")}>Support</li>
          </ul>
        </nav>
      </header>

      {currentForm === "about" &&
        <div>
          <section className="center-container">
            <div>
              <img src={logo} alt="ValorVoiceLogo" className="mx-auto max-w-full h-auto" />
            </div>
          </section>

          <section id="info">
            <h1 className="text-2xl font-semibold text-black mb-2">Welcome to Valor Voice</h1>
            <p className="text-black">
              Welcome to Valor Voice. This is a safe space where a victim or a reporter can report any Gender-Based Violence (GBV) incidents they may experience in their homes, community, and workplaces. A victim/reporter will remain anonymous should they wish to.
            </p>
          </section>

        </div>
      }
      {
        currentForm === "about"
      }
      {
        currentForm === "report" &&
        <ReportForm />
      }

    </div>
  );
};

export default App;
