import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/Dashboard.css';

const Dashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const roleConfig = {
    admin: {
      name: "Admin",
      color: "#7c3aed",
      welcome: "System Overview & Security Center",
      pages: {
        dashboard: { title: "Admin Dashboard", content: "Manage users, monitor system health, and ensure platform security." },
        security: { title: "Platform Security", content: "View login attempts, active sessions, and security logs." },
        reports: { title: "System Reports", content: "Generate audit trails and compliance reports." }
      }
    }, // ← THIS COMMA WAS MISSING!

    citizen: {
      name: "Citizen",
      color: "#2563eb",
      welcome: "Track Elections & Stay Informed",
      pages: {
        track: { title: "Track Elections", content: "Live results, polling station status, and voter turnout." },
        report: { title: "Report Issue", content: "Report voting irregularities or fraud instantly." },
        forum: { title: "Civic Forum", content: "Join discussions with fellow voters and observers." }
      }
    },

    observer: {
      name: "Election Observer",
      color: "#16a34a",
      welcome: "Monitor Fairness & Transparency",
      pages: {
        monitor: { title: "Live Monitoring", content: "Real-time feed from polling stations across the country." },
        anomalies: { title: "Report Anomalies", content: "Flag suspicious patterns or violations." },
        insights: { title: "Fairness Insights", content: "Transparency score: 94.7% — Excellent" }
      }
    },

    analyst: {
      name: "Data Analyst",
      color: "#ea580c",
      welcome: "Analyze Election Data",
      pages: {
        data: { title: "Election Data", content: "Access raw voting data, demographics, and trends." },
        realtime: { title: "Real-time Updates", content: "Live data stream with 2-second refresh rate." },
        generate: { title: "Generate Reports", content: "Export PDF/Excel reports with one click." }
      }
    }
  };

  const config = roleConfig[user.role] || roleConfig.citizen;
  const currentPage = config.pages[activeTab] || Object.values(config.pages)[0];

  return (
    <div className="dashboard">
      {/* Header */}
      <header style={{ backgroundColor: config.color }}>
        <div className="header-content">
          <div className="logo">
    
            <h1>Election Monitoring System</h1>
          </div>
          <div className="user-info">
            <div>
              <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>{config.name}</span>
              <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>{user.email}</p>
            </div>
            <button onClick={onLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <div className="main-layout">
        <Sidebar role={user.role} activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="content">
          <h2>{config.welcome}</h2>

          <div className="role-dashboard">
            <div className="page-header">
              <h3>{currentPage.title}</h3>
              <p>{currentPage.content}</p>
            </div>

            <div className="cards-grid">
              {user.role === 'admin' && (
                <>
                  <div className="big-card admin"><p>Users Online</p><h2>1,284</h2></div>
                  <div className="big-card admin"><p>Reports Today</p><h2>68</h2></div>
                  <div className="big-card admin"><p>System Health</p><h2>Excellent</h2></div>
                </>
              )}
              {user.role === 'citizen' && (
                <>
                  <div className="big-card citizen"><p>Active Elections</p><h2>7</h2></div>
                  <div className="big-card citizen"><p>Voter Turnout</p><h2>78.4%</h2></div>
                  <div className="big-card citizen"><p>Reports Submitted</p><h2>1,247</h2></div>
                </>
              )}
              {user.role === 'observer' && (
                <>
                  <div className="big-card observer"><p>Polling Stations</p><h2>3,421</h2></div>
                  <div className="big-card observer"><p>Anomalies</p><h2>23</h2></div>
                  <div className="big-card observer"><p>Transparency</p><h2>94.7%</h2></div>
                </>
              )}
              {user.role === 'analyst' && (
                <>
                  <div className="big-card analyst"><p>Data Points</p><h2>8.2M</h2></div>
                  <div className="big-card analyst"><p>Live Connections</p><h2>342</h2></div>
                  <div className="big-card analyst"><p>Reports Generated</p><h2>89</h2></div>
                </>
              )}
            </div>

            <div className="motivation">
              <p>Together, we ensure every vote counts</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;