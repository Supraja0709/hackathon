import React from 'react';
import '../styles/Dashboard.css'; // Make sure this file exists

const menuItems = {
  admin: [
    { id: 'dashboard', label: 'Dashboard', icon: 'Dashboard' },
    { id: 'security', label: 'Platform Security', icon: 'Lock' },
    { id: 'reports', label: 'System Reports', icon: 'FileText' }
  ],
  citizen: [
    { id: 'track', label: 'Track Elections', icon: 'Map' },
    { id: 'report', label: 'Report Issue', icon: 'Alert' },
    { id: 'forum', label: 'Civic Forum', icon: 'Message' }
  ],
  observer: [
    { id: 'monitor', label: 'Live Monitoring', icon: 'Eye' },
    { id: 'anomalies', label: 'Report Anomalies', icon: 'Warning' },
    { id: 'insights', label: 'Fairness Insights', icon: 'Chart' }
  ],
  analyst: [
    { id: 'data', label: 'Election Data', icon: 'Database' },
    { id: 'realtime', label: 'Real-time Updates', icon: 'Activity' },
    { id: 'generate', label: 'Generate Reports', icon: 'Download' }
  ]
};

const Sidebar = ({ role, activeTab, setActiveTab }) => {
  const items = menuItems[role] || menuItems.citizen;

  return (
    <aside className="sidebar">
      <nav>
        {items.map((item) => (
          <button
            key={item.id}
            className={`sidebar-btn ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;