import React, { useEffect, useRef, useState } from 'react';
import { BarChart3, Upload, TrendingUp, Eye, Download as DownloadIcon, LayoutDashboard, FilePlus2, CheckSquare, Settings as SettingsIcon, Menu as MenuIcon, Search, Bell, ChevronDown, LogOut, User } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { generateTimetablePDF, generateAllTimetablesPDF } from '../utils/pdfGenerator';

const Dashboard = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mock data for dashboard
  const dashboardStats = [
    { title: 'TOTAL TIMETABLE', value: '16', icon: BarChart3 },
    { title: 'RECENT UPLOAD', value: '16', icon: Upload },
    { title: 'SUCCESS RATE', value: '99', icon: TrendingUp }
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
      <div className={`sidebar ${sidebarOpen ? '' : 'mobile-hidden'}`} aria-hidden={!sidebarOpen}>
        <div className="sidebar-header">
          <div className="sidebar-brand">Skeduler</div>
          <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
            <MenuIcon size={18} />
          </button>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dashboard" className={`sidebar-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </Link>
          <Link to="/upload" className={`sidebar-link ${location.pathname === '/upload' ? 'active' : ''}`}>
            <FilePlus2 size={18} />
            <span>Add Document Files</span>
          </Link>
          <Link to="/verification" className={`sidebar-link ${location.pathname === '/verification' ? 'active' : ''}`}>
            <CheckSquare size={18} />
            <span>Data Verification</span>
          </Link>
          <Link to="/settings" className={`sidebar-link ${location.pathname === '/settings' ? 'active' : ''}`}>
            <SettingsIcon size={18} />
            <span>Settings</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`main-content ${sidebarOpen ? 'with-sidebar' : 'sidebar-hidden'}`}>
        {/* Header */}
        <div className="header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <h1 style={{ fontSize: '2.25rem', fontWeight: '800' }}>Skeduler</h1>
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
              <MenuIcon size={18} />
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
              <Search size={18} />
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
              <Bell size={18} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'relative' }} ref={userMenuRef}>
              <button className="user-toggle" onClick={() => setUserMenuOpen((v) => !v)}>
                <User size={18} />
                <span className="user-toggle-label">{user?.name || user?.username || 'Administrator'}</span>
                <ChevronDown size={16} />
              </button>
              {userMenuOpen && (
                <div className="user-menu">
                  <button className="user-menu-item" onClick={onLogout}>
                    <LogOut size={16} />
                    <span>Log out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="content-area">
          {/* Dashboard Cards */}
          <div className="dashboard-cards">
            {dashboardStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="dashboard-card">
                  <div className="dashboard-card-title">{stat.title}</div>
                  <div className="dashboard-card-value">{stat.value}</div>
                  <div className="dashboard-card-icon" aria-hidden>
                    <Icon size={48} strokeWidth={2.5} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Download All Button */}
          <div style={{ marginBottom: '20px', textAlign: 'right' }}>
            <button 
              className="btn btn-primary"
              onClick={handleDownloadAllTimetables}
              style={{ padding: '10px 20px', fontSize: '14px' }}
              title="Download all timetables as a single PDF"
            >
              <DownloadIcon size={16} /> Download All Timetables
            </button>
          </div>

          {/* Timetable Table */}
          <div className="card">
            <table className="table">
              <thead>
                <tr>
                  <th>SNO</th>
                  <th>NAME</th>
                  <th>YEAR/SEM</th>
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
                      <div className="actions">
                        <button 
                          className="btn-view"
                          onClick={() => handleViewTimetable(item.classCode, item.name, item.yearDept)}
                          title={`View timetable for ${item.name} - ${item.yearDept}`}
                        >
                          <Eye size={16} />
                          <span>VIEW</span>
                        </button>
                        <button 
                          className="btn-download"
                          onClick={() => handleDownloadTimetable(item.classCode, item.name, item.yearDept)}
                          title={`Download PDF timetable for ${item.name} - ${item.yearDept}`}
                        >
                          <DownloadIcon size={16} />
                          <span>DOWNLOAD</span>
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