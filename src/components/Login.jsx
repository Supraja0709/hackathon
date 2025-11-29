import React, { useState } from 'react';
import '../styles/Login.css';

const Login = ({ onLogin, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login - in real app, validate with backend
    const mockUser = {
      email,
      role: email.includes('admin') ? 'admin' : email.includes('analyst') ? 'analyst' : email.includes('observer') ? 'observer' : 'citizen'
    };
    onLogin(mockUser);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Election Monitoring System</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="switch-text">
          Don't have an account? <span onClick={onSwitchToSignup}>Sign up</span>
        </p>
        <small>Try: admin@fedf.com, citizen@fedf.com, observer@fedf.com, analyst@fedf.com</small>
      </div>
    </div>
  );
};

export default Login;