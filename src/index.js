import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as firebase from 'firebase/app';
import 'firebase/auth'; // Import other Firebase services as needed
import firebaseConfig from './firebaseConfig.js';

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


