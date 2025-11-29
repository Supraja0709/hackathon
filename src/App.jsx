import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import './styles/globals.css';

function App() {
  const [currentView, setCurrentView] = useState('login'); // 'login', 'signup', 'dashboard'
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentView('dashboard');
  };

  const handleSignup = () => {
    setCurrentView('login');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('login');
  };

  return (
    <>
      {currentView === 'login' && <Login onLogin={handleLogin} onSwitchToSignup={() => setCurrentView('signup')} />}
      {currentView === 'signup' && <Signup onSignup={handleSignup} onSwitchToLogin={() => setCurrentView('login')} />}
      {currentView === 'dashboard' && <Dashboard user={user} onLogout={handleLogout} />}
    </>
  );
}

export default App;