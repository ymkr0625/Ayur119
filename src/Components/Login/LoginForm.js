import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8084/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${email}&password=${password}`,
      });
      if (response.ok) {
        setLoginStatus('Login successful.');
      } else {
        const data = await response.json();
        setLoginStatus(data);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginStatus('invalid email or password.');
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {loginStatus && <div>{loginStatus}</div>}
    </div>
  );
};

export default LoginForm;
