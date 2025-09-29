import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { generateTimetablePDF, generateAllTimetablesPDF } from '../utils/pdfGenerator';

const Dashboard = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock data for dashboard
  const dashboardStats = [
    { title: 'TOTAL TIMETABLE', value: '16', icon: '📊' },
    { title: 'RECENT UPLOAD', value: '16', icon: '📤' },
    { title: 'SUCCESS RATE', value: '99', icon: '📈' }
  ];

  const timetableData = [
    { id: 1, name: 'CHE-DEPARTMENT', yearDept: 'VI', classCode: 'III_SEM_A', action: 'view' },
    { id: 2, name: 'CSE-DEPARTMENT', yearDept: 'VIII', classCode: 'III_SEM_B', action: 'view' },
    { id: 3, name: 'CSE-DEPARTMENT', yearDept: 'VIII', classCode: 'III_SEM_C', action: 'view' },
    { id: 4, name: 'EEE-DEPARTMENT', yearDept: 'VI', classCode: 'III_SEM_D', action: 'view' },
    { id: 5, name: 'EEE-DEPARTMENT', yearDept: 'VIII', classCode: 'V_SEM_A', action: 'view' },
    { id: 6, name: 'CSE-DEPARTMENT', yearDept: 'X', classCode: 'V_SEM_B', action: 'view' }
  ];

  const handleViewTimetable = (classCode, name, yearDept) => {
    // Navigate to timetable page with class information
    navigate('/timetable', { 
      state: { 
        selectedClass: classCode,
        className: name,
        yearDept: yearDept
      } 
    });
  };

  const handleDownloadTimetable = (classCode, name, yearDept) => {
    try {
      generateTimetablePDF(classCode, name, yearDept);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  const handleDownloadAllTimetables = () => {
    try {
      generateAllTimetablesPDF();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className={`mobile-overlay ${sidebarOpen ? 'active' : ''}`}
          onClick={closeSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? '' : 'mobile-hidden'}`}>
        <div style={{ padding: '20px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          <h1 style={{ color: '#0B005F', fontSize: '1.5rem', fontWeight: 'bold' }}>Skeduler</h1>
          <button 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#333', 
              fontSize: '1.2rem', 
              marginTop: '10px',
              padding: '8px',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#8CD0D2'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            onClick={toggleSidebar}
          >
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
              color: 'white', 
              textDecoration: 'none',
              backgroundColor: '#8CD0D2',
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
              color: '#333', 
              textDecoration: 'none',
              margin: '5px 10px',
              borderRadius: '6px',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#8CD0D2'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
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
              color: '#333', 
              textDecoration: 'none',
              margin: '5px 10px',
              borderRadius: '6px',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#8CD0D2'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
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
              color: '#333', 
              textDecoration: 'none',
              margin: '5px 10px',
              borderRadius: '6px',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#8CD0D2'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <span style={{ marginRight: '10px' }}>⚙️</span>
            SETTINGS
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`main-content ${sidebarOpen ? '' : 'sidebar-hidden'}`}>
        {/* Header */}
        <div className="header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Skeduler</h1>
            <button 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'white', 
                fontSize: '1.2rem',
                padding: '8px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(140, 208, 210, 0.3)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              onClick={toggleSidebar}
            >
              ☰
            </button>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <button 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'white', 
                fontSize: '1.2rem',
                padding: '8px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(140, 208, 210, 0.3)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              🔍
            </button>
            <button 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'white', 
                fontSize: '1.2rem',
                padding: '8px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(140, 208, 210, 0.3)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              🔔
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ fontSize: '14px' }}>{user?.name || user?.username || 'ADMIN'}</span>
              <button 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'white',
                  padding: '4px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(140, 208, 210, 0.3)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                ▼
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="content-area">
          {/* Dashboard Cards */}
          <div className="dashboard-cards">
            {dashboardStats.map((stat, index) => (
              <div key={index} className="dashboard-card">
                <div className="dashboard-card-title">{stat.title}</div>
                <div className="dashboard-card-value">{stat.value}</div>
                <div className="dashboard-card-icon">{stat.icon}</div>
              </div>
            ))}
          </div>

          {/* Download All Button */}
          <div style={{ marginBottom: '20px', textAlign: 'right' }}>
            <button 
              className="btn btn-primary"
              onClick={handleDownloadAllTimetables}
              style={{ padding: '10px 20px', fontSize: '14px' }}
              title="Download all timetables as a single PDF"
            >
              📥 Download All Timetables
            </button>
          </div>

          {/* Timetable Table */}
          <div className="card">
            <table className="table">
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>NAME</th>
                  <th>YEAR/DEPT</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {timetableData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.yearDept}</td>
                    <td>
                       <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                         <button 
                           className="btn-view"
                           onClick={() => handleViewTimetable(item.classCode, item.name, item.yearDept)}
                           title={`View timetable for ${item.name} - ${item.yearDept}`}
                         >
                           VIEW
                         </button>
                         <button 
                           className="btn-download"
                           onClick={() => handleDownloadTimetable(item.classCode, item.name, item.yearDept)}
                           title={`Download PDF timetable for ${item.name} - ${item.yearDept}`}
                         >
                           DOWNLOAD
                         </button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;