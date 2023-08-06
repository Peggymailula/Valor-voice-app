import React, { useState } from 'react';
import logo from './components/assets/logo.png';
import './App.css';
import ReportForm from './components/pages/Report';
import Support from './components/pages/Support';
import Forum from './components/pages/Forum';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

const App = () => {
  const [currentForm, setCurrentForm] = useState("about");
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to Valor Voice',
      trigger: 'AskName'
    },
    {
      id: 'AskName',
      message: 'Would you like to find out more about GBV or would you like to get assistance?',
      options: [
        { value: 'Info', label: 'More Information', trigger: 'Info' },
        { value: 'Assist', label: 'Get Assistance', trigger: 'Assist' }
      ]
    },
    {
      id: 'Info',
      message: 'Thank you for reaching out! More Info about GBV is available under our "Support" section where we have all the professionals & articles available for you',
      end: true
    },
    {
      id: 'Assist',
      message: 'Thank you for reaching out! Reporting any suspicions with regards to GBV is available under our "Reporting" section where we have all services available to help as soon as possible',
      end: true
    }
  ];

  const backgroundImageUrl = 'https://www.autismhampshire.org.uk/assets/images/International-Womens-Day-2019-social.jpg';
  const botTitle = isChatbotOpen ? "Close Chat" : "Open Chat"

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
            <p>
              Welcome to Valor Voice. This is a safe space where victims or reporters can report any Gender-Based Violence (GBV) incidents they may experience in their homes, community, and workplaces. Victims/reporters will remain anonymous should they wish to.
            </p>
          </section>
        </div>
      )}

      {currentForm === "report" && <ReportForm />}
      {currentForm === "support" && <Support />}
      {currentForm === "forum" && <Forum />}
      <Segment style={{ float: "right" }}>
        <button className="toggle-button" onClick={() => setIsChatbotOpen(prevState => !prevState)}>{botTitle}</button> {/* Button to open the chat */}
        <ChatBot steps={steps} opened={isChatbotOpen} // Pass the opened state to ChatBot
          toggleFloating={false} />
      </Segment>
    </div>


  );
};

export default App;
