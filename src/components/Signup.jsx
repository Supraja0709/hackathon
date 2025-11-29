import React, { useState } from 'react';
import '../styles/Signup.css';

const Signup = ({ onSignup, onSwitchToLogin }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'citizen' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Account created! Redirecting to login...');
    onSignup();
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h3>Create your account</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="citizen">Citizen</option>
            <option value="observer">Election Observer</option>
            <option value="analyst">Data Analyst</option>
            <option value="admin">Admin (Request Access)</option>
          </select>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="switch-text">
          Already have an account? <span onClick={onSwitchToLogin}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;