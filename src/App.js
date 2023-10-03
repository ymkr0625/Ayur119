// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import RegistrationForm from './Components/Registration/RegistrationForm';
import LoginForm from './Components/Login/LoginForm';



function App() {
  return (
    <Router>
      <div>
        <Home/>
        <Routes>
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
