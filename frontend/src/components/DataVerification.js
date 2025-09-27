import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DataVerification = ({ user, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      {/* Sidebar Overlay */}
      {sidebarOpen && <div className="sidebar-overlay open" onClick={closeSidebar}></div>}
      
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>Skeduler</h1>
          <button 
            className="mobile-menu-toggle"
            onClick={closeSidebar}
            style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem', marginTop: '10px' }}
          >
            ×
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
              color: 'white', 
              textDecoration: 'none',
              backgroundColor: '#06b6d4',
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
              color: '#6b7280', 
              textDecoration: 'none',
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
            <h2 style={{ marginBottom: '20px', color: '#1f2937' }}>Data Verification</h2>
            <p style={{ color: '#6b7280', marginBottom: '20px' }}>
              Verify and validate the uploaded data before generating timetables.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div className="card" style={{ border: '1px solid #e5e7eb' }}>
                <h3 style={{ color: '#1f2937', marginBottom: '15px' }}>Staff Data</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ color: '#10b981' }}>✅</span>
                  <span>Staff expertise data verified</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ color: '#10b981' }}>✅</span>
                  <span>Workload distribution balanced</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#10b981' }}>✅</span>
                  <span>No conflicts detected</span>
                </div>
              </div>

              <div className="card" style={{ border: '1px solid #e5e7eb' }}>
                <h3 style={{ color: '#1f2937', marginBottom: '15px' }}>Class Data</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ color: '#10b981' }}>✅</span>
                  <span>Subject assignments verified</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ color: '#10b981' }}>✅</span>
                  <span>Lab requirements met</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#10b981' }}>✅</span>
                  <span>Period distribution valid</span>
                </div>
              </div>

              <div className="card" style={{ border: '1px solid #e5e7eb' }}>
                <h3 style={{ color: '#1f2937', marginBottom: '15px' }}>Timetable Generation</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ color: '#10b981' }}>✅</span>
                  <span>Constraints satisfied</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ color: '#10b981' }}>✅</span>
                  <span>No scheduling conflicts</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#10b981' }}>✅</span>
                  <span>Ready for generation</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <button className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '16px' }}>
                Generate Timetables
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVerification;