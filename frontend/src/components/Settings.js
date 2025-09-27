import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Settings = ({ user, onLogout }) => {
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: false,
    autoGenerate: false,
    theme: 'light',
    language: 'en'
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>Skeduler</h1>
          <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem', marginTop: '10px' }}>
            ☰
          </button>
        </div>
        
        <nav style={{ padding: '20px 0' }}>
          <Link 
            to="/dashboard" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '15px 20px', 
              color: '#6b7280', 
              textDecoration: 'none',
              margin: '5px 10px',
              borderRadius: '6px'
            }}
          >
            <span style={{ marginRight: '10px' }}>📊</span>
            DASHBOARD
          </Link>
          
          <Link 
            to="/upload" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '15px 20px', 
              color: '#6b7280', 
              textDecoration: 'none',
              margin: '5px 10px',
              borderRadius: '6px'
            }}
          >
            <span style={{ marginRight: '10px' }}>📄</span>
            ADD DOCUMENT FILES
          </Link>
          
          <Link 
            to="/verification" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '15px 20px', 
              color: '#6b7280', 
              textDecoration: 'none',
              margin: '5px 10px',
              borderRadius: '6px'
            }}
          >
            <span style={{ marginRight: '10px' }}>✅</span>
            DATA VERIFICATION
          </Link>
          
          <Link 
            to="/settings" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '15px 20px', 
              color: 'white', 
              textDecoration: 'none',
              backgroundColor: '#06b6d4',
              margin: '5px 10px',
              borderRadius: '6px'
            }}
          >
            <span style={{ marginRight: '10px' }}>⚙️</span>
            SETTINGS
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Skeduler</h1>
            <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem' }}>
              ☰
            </button>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem' }}>
              🔍
            </button>
            <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem' }}>
              🔔
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span>ADMIN</span>
              <button style={{ background: 'none', border: 'none', color: 'white' }}>▼</button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="content-area">
          <div className="card">
            <h2 style={{ marginBottom: '30px', color: '#1f2937' }}>Settings</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
              {/* General Settings */}
              <div>
                <h3 style={{ color: '#1f2937', marginBottom: '20px', borderBottom: '1px solid #e5e7eb', paddingBottom: '10px' }}>
                  General Settings
                </h3>
                
                <div className="form-group">
                  <label className="form-label">Theme</label>
                  <select 
                    className="form-input"
                    value={settings.theme}
                    onChange={(e) => handleSettingChange('theme', e.target.value)}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Language</label>
                  <select 
                    className="form-input"
                    value={settings.language}
                    onChange={(e) => handleSettingChange('language', e.target.value)}
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </div>
              </div>

              {/* Notification Settings */}
              <div>
                <h3 style={{ color: '#1f2937', marginBottom: '20px', borderBottom: '1px solid #e5e7eb', paddingBottom: '10px' }}>
                  Notifications
                </h3>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <label className="form-label" style={{ marginBottom: 0 }}>Push Notifications</label>
                  <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                    <input
                      type="checkbox"
                      checked={settings.notifications}
                      onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                      style={{ opacity: 0, width: 0, height: 0 }}
                    />
                    <span style={{
                      position: 'absolute',
                      cursor: 'pointer',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: settings.notifications ? '#06b6d4' : '#ccc',
                      transition: '.4s',
                      borderRadius: '24px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        content: '""',
                        height: '18px',
                        width: '18px',
                        left: '3px',
                        bottom: '3px',
                        backgroundColor: 'white',
                        transition: '.4s',
                        borderRadius: '50%',
                        transform: settings.notifications ? 'translateX(26px)' : 'translateX(0)'
                      }}></span>
                    </span>
                  </label>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <label className="form-label" style={{ marginBottom: 0 }}>Email Alerts</label>
                  <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                    <input
                      type="checkbox"
                      checked={settings.emailAlerts}
                      onChange={(e) => handleSettingChange('emailAlerts', e.target.checked)}
                      style={{ opacity: 0, width: 0, height: 0 }}
                    />
                    <span style={{
                      position: 'absolute',
                      cursor: 'pointer',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: settings.emailAlerts ? '#06b6d4' : '#ccc',
                      transition: '.4s',
                      borderRadius: '24px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        content: '""',
                        height: '18px',
                        width: '18px',
                        left: '3px',
                        bottom: '3px',
                        backgroundColor: 'white',
                        transition: '.4s',
                        borderRadius: '50%',
                        transform: settings.emailAlerts ? 'translateX(26px)' : 'translateX(0)'
                      }}></span>
                    </span>
                  </label>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label className="form-label" style={{ marginBottom: 0 }}>Auto Generate</label>
                  <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                    <input
                      type="checkbox"
                      checked={settings.autoGenerate}
                      onChange={(e) => handleSettingChange('autoGenerate', e.target.checked)}
                      style={{ opacity: 0, width: 0, height: 0 }}
                    />
                    <span style={{
                      position: 'absolute',
                      cursor: 'pointer',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: settings.autoGenerate ? '#06b6d4' : '#ccc',
                      transition: '.4s',
                      borderRadius: '24px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        content: '""',
                        height: '18px',
                        width: '18px',
                        left: '3px',
                        bottom: '3px',
                        backgroundColor: 'white',
                        transition: '.4s',
                        borderRadius: '50%',
                        transform: settings.autoGenerate ? 'translateX(26px)' : 'translateX(0)'
                      }}></span>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <button className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '16px', marginRight: '10px' }}>
                Save Settings
              </button>
              <button className="btn btn-secondary" style={{ padding: '12px 30px', fontSize: '16px' }}>
                Reset to Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;