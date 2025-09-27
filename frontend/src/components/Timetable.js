import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { generateTimetablePDF } from '../utils/pdfGenerator';

const Timetable = ({ user, onLogout }) => {
  const location = useLocation();
  const [selectedClass, setSelectedClass] = useState('III_SEM_A');
  const [navigationInfo, setNavigationInfo] = useState(null);

  // Handle navigation from Dashboard
  useEffect(() => {
    if (location.state) {
      const { selectedClass: navClass, className, yearDept } = location.state;
      setSelectedClass(navClass);
      setNavigationInfo({ className, yearDept });
    }
  }, [location.state]);

  const handleDownloadPDF = () => {
    try {
      const className = navigationInfo?.className || selectedClass;
      const yearDept = navigationInfo?.yearDept || 'N/A';
      generateTimetablePDF(selectedClass, className, yearDept);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  // Mock timetable data from your Python program
  const timetableData = {
    'III_SEM_A': {
      periods: [
        ['DMS (Mr. T. Bhaskar)', 'JP (Mrs. M. K. Nivodhini)', 'OS (Mrs. E. Baby Anitha)', 'COA (Ms. U. Kasthuri)', 'OS (Mrs. E. Baby Anitha)', 'Library Hour (Ms. P. Priyadharshini)'],
        ['JP (Mrs. M. K. Nivodhini)', 'COA (Ms. U. Kasthuri)', 'JP_Lab (Mrs. M. K. Nivodhini [M], Mr. P. Vasuki [A])', 'DS_Lab (Ms. M. Jayanthi [M], Dr. S. Savitha [A])', 'OS (Mrs. E. Baby Anitha)', 'JP (Mrs. M. K. Nivodhini)'],
        ['DS (Mr. M. Azhagesan)', 'OS (Mrs. E. Baby Anitha)', 'JP_Lab (Mrs. M. K. Nivodhini [M], Mr. P. Vasuki [A])', 'DS_Lab (Ms. M. Jayanthi [M], Dr. S. Savitha [A])', 'SSD-III (Dr. S. Vadivel)', 'SSD-III (Dr. S. Vadivel)'],
        ['COA (Ms. U. Kasthuri)', 'DMS (Mr. T. Bhaskar)', 'JP_Lab (Mrs. M. K. Nivodhini [M], Mr. P. Vasuki [A])', 'DS_Lab (Ms. M. Jayanthi [M], Dr. S. Savitha [A])', 'JP (Mrs. M. K. Nivodhini)', 'DS (Mr. M. Azhagesan)'],
        ['MH (Dr. M. Venkatesan)', 'OS_Lab (Mrs. J. NirmalaGandhi [M], Mrs. S. Vinothini [A])', 'DST_Lab (Mr. S. Ajithkumar [M], Mr. O.K. Gowrishankar [A])', 'JP (Mrs. M. K. Nivodhini)', 'DS (Mr. M. Azhagesan)', 'COA (Ms. U. Kasthuri)'],
        ['DS (Mr. M. Azhagesan)', 'OS_Lab (Mrs. J. NirmalaGandhi [M], Mrs. S. Vinothini [A])', 'DST_Lab (Mr. S. Ajithkumar [M], Mr. O.K. Gowrishankar [A])', 'DMS (Mr. T. Bhaskar)', 'COA (Ms. U. Kasthuri)', 'OS (Mrs. E. Baby Anitha)'],
        ['SSD-III (Dr. S. Vadivel)', 'OS_Lab (Mrs. J. NirmalaGandhi [M], Mrs. S. Vinothini [A])', 'DST_Lab (Mr. S. Ajithkumar [M], Mr. O.K. Gowrishankar [A])', 'DS (Mr. M. Azhagesan)', 'DMS (Mr. T. Bhaskar)', 'DMS (Mr. T. Bhaskar)']
      ]
    },
    'III_SEM_B': {
      periods: [
        ['SSD-III (Mr. M. Namasivayam)', 'OS (Mr. V. Ramesh)', 'DS (Ms. M. Jayanthi)', 'DS (Ms. M. Jayanthi)', 'JP (Ms. R. Keerthana)', 'DS (Ms. M. Jayanthi)'],
        ['DS_Lab (Dr. S. Savitha [M], Mr. M. Namasivayam [A])', 'DMS (Mr. T. Bhaskar)', 'OS (Mr. V. Ramesh)', 'COA (Dr. S. Vadivel)', 'OS (Mr. V. Ramesh)', 'JP (Ms. R. Keerthana)'],
        ['DS_Lab (Dr. S. Savitha [M], Mr. M. Namasivayam [A])', 'DS (Ms. M. Jayanthi)', 'DMS (Mr. T. Bhaskar)', 'COA (Dr. S. Vadivel)', 'DMS (Mr. T. Bhaskar)', 'SSD-III (Mr. M. Namasivayam)'],
        ['DS_Lab (Dr. S. Savitha [M], Mr. M. Namasivayam [A])', 'JP (Ms. R. Keerthana)', 'JP (Ms. R. Keerthana)', 'COA (Dr. S. Vadivel)', 'COA (Dr. S. Vadivel)', 'MH (Dr. M. Venkatesan)'],
        ['OS_Lab (Mrs. S. Vinothini [M], Mrs. E. Baby Anitha [A])', 'DST_Lab (Ms. P. Priyadharshini [M], Mr. S. Ajithkumar [A])', 'JP_Lab (Mr. M. Naveenkumar [M], Mr. P. Vasuki [A])', 'DMS (Mr. T. Bhaskar)', 'Library Hour (Mr. Rasagopal)', 'DMS (Mr. T. Bhaskar)'],
        ['OS_Lab (Mrs. S. Vinothini [M], Mrs. E. Baby Anitha [A])', 'DST_Lab (Ms. P. Priyadharshini [M], Mr. S. Ajithkumar [A])', 'JP_Lab (Mr. M. Naveenkumar [M], Mr. P. Vasuki [A])', 'JP (Ms. R. Keerthana)', 'SSD-III (Mr. M. Namasivayam)', 'OS (Mr. V. Ramesh)'],
        ['OS_Lab (Mrs. S. Vinothini [M], Mrs. E. Baby Anitha [A])', 'DST_Lab (Ms. P. Priyadharshini [M], Mr. S. Ajithkumar [A])', 'JP_Lab (Mr. M. Naveenkumar [M], Mr. P. Vasuki [A])', 'OS (Mr. V. Ramesh)', 'DS (Ms. M. Jayanthi)', 'COA (Dr. S. Vadivel)']
      ]
    },
    'III_SEM_C': {
      periods: [
        ['JP (Ms. R. Keerthana)', 'DMS (Mr. Natarajan)', 'DMS (Mr. Natarajan)', 'JP (Ms. R. Keerthana)', 'DMS (Mr. Natarajan)', 'COA (Mr. M. Naveenkumar)'],
        ['DS (Mr. B. Rajesh)', 'DS_Lab (Dr. S. Savitha [M], Mr. M. Namasivayam [A])', 'COA (Mr. M. Naveenkumar)', 'JP_Lab (Dr. N. Mahendran [M], Mr. P. Vasuki [A])', 'DS (Mr. B. Rajesh)', 'SSD-III (Dr. S. Vadivel)'],
        ['OS (Mr. V. Ramesh)', 'DS_Lab (Dr. S. Savitha [M], Mr. M. Namasivayam [A])', 'MH (Dr. M. Venkatesan)', 'JP_Lab (Dr. N. Mahendran [M], Mr. P. Vasuki [A])', 'OS (Mr. V. Ramesh)', 'DMS (Mr. Natarajan)'],
        ['COA (Mr. M. Naveenkumar)', 'DS_Lab (Dr. S. Savitha [M], Mr. M. Namasivayam [A])', 'SSD-III (Dr. S. Vadivel)', 'JP_Lab (Dr. N. Mahendran [M], Mr. P. Vasuki [A])', 'JP (Ms. R. Keerthana)', 'JP (Ms. R. Keerthana)'],
        ['DST_Lab (Mr. S. Ajithkumar [M], Ms. P. Priyadharshini [A])', 'COA (Mr. M. Naveenkumar)', 'OS (Mr. V. Ramesh)', 'DMS (Mr. Natarajan)', 'OS_Lab (Mr. V. Ramesh [M], Mrs. J. NirmalaGandhi [A])', 'DS (Mr. B. Rajesh)'],
        ['DST_Lab (Mr. S. Ajithkumar [M], Ms. P. Priyadharshini [A])', 'SSD-III (Dr. S. Vadivel)', 'DS (Mr. B. Rajesh)', 'DS (Mr. B. Rajesh)', 'OS_Lab (Mr. V. Ramesh [M], Mrs. J. NirmalaGandhi [A])', 'Library Hour (Mr. Hari Prakash)'],
        ['DST_Lab (Mr. S. Ajithkumar [M], Ms. P. Priyadharshini [A])', 'OS (Mr. V. Ramesh)', 'JP (Ms. R. Keerthana)', 'COA (Mr. M. Naveenkumar)', 'OS_Lab (Mr. V. Ramesh [M], Mrs. J. NirmalaGandhi [A])', 'OS (Mr. V. Ramesh)']
      ]
    },
    'III_SEM_D': {
      periods: [
        ['DS (Ms. M. Jayanthi)', 'COA (Mr. M. Naveenkumar)', 'COA (Mr. M. Naveenkumar)', 'OS (Mrs. J. NirmalaGandhi)', 'DS (Ms. M. Jayanthi)', 'DMS (Mr. Natarajan)'],
        ['MH (Dr. M. Venkatesan)', 'JP_Lab (Mr. P. Vasuki [M], Dr. N. Mahendran [A])', 'DST_Lab (Mr. S. Ajithkumar [M], Ms. P. Priyadharshini [A])', 'OS (Mrs. J. NirmalaGandhi)', 'JP (Mrs. R. Vijhayalakshme)', 'SSD-III (Mr. M. Namasivayam)'],
        ['DMS (Mr. Natarajan)', 'JP_Lab (Mr. P. Vasuki [M], Dr. N. Mahendran [A])', 'DST_Lab (Mr. S. Ajithkumar [M], Ms. P. Priyadharshini [A])', 'COA (Mr. M. Naveenkumar)', 'SSD-III (Mr. M. Namasivayam)', 'JP (Mrs. R. Vijhayalakshme)'],
        ['OS (Mrs. J. NirmalaGandhi)', 'JP_Lab (Mr. P. Vasuki [M], Dr. N. Mahendran [A])', 'DST_Lab (Mr. S. Ajithkumar [M], Ms. P. Priyadharshini [A])', 'DMS (Mr. Natarajan)', 'DMS (Mr. Natarajan)', 'COA (Mr. M. Naveenkumar)'],
        ['COA (Mr. M. Naveenkumar)', 'DS (Ms. M. Jayanthi)', 'DS_Lab (Mrs. M. K. Nivodhini [M], Dr. S. Savitha [A])', 'OS (Mrs. J. NirmalaGandhi)', 'OS_Lab (Mrs. S. Vinothini [M], Mr. O.K. Gowrishankar [A])', 'DS (Ms. M. Jayanthi)'],
        ['SSD-III (Mr. M. Namasivayam)', 'DMS (Mr. Natarajan)', 'DS_Lab (Mrs. M. K. Nivodhini [M], Dr. S. Savitha [A])', 'OS (Mrs. J. NirmalaGandhi)', 'OS_Lab (Mrs. S. Vinothini [M], Mr. O.K. Gowrishankar [A])', 'JP (Mrs. R. Vijhayalakshme)'],
        ['Library Hour (Dr. N. Mahendran)', 'JP (Mrs. R. Vijhayalakshme)', 'DS_Lab (Mrs. M. K. Nivodhini [M], Dr. S. Savitha [A])', 'DS (Ms. M. Jayanthi)', 'OS_Lab (Mrs. S. Vinothini [M], Mr. O.K. Gowrishankar [A])', 'JP (Mrs. R. Vijhayalakshme)']
      ]
    },
    'V_SEM_A': {
      periods: [
        ['ED (TBD)', 'CN (Ms. U. Kasthuri)', 'WP (Mrs. R. Vijhayalakshme)', 'OOAD (TBD)', 'PCD (Dr. V. Sharmila)', 'WP (Mrs. R. Vijhayalakshme)'],
        ['WP (Mrs. R. Vijhayalakshme)', 'PCD (Dr. V. Sharmila)', 'CN (Ms. U. Kasthuri)', 'CN (Ms. U. Kasthuri)', 'CN (Ms. U. Kasthuri)', 'AI (Mr. M. Azhagesan) / OST (Mr. O.K. Gowrishankar)'],
        ['CN (Ms. U. Kasthuri)', 'WP (Mrs. R. Vijhayalakshme)', 'PCD (Dr. V. Sharmila)', 'MH (Dr. M. Venkatesan)', 'WP (Mrs. R. Vijhayalakshme)', 'SSD-IV (Mr. Krishna Pradeep)'],
        ['PCD (Dr. V. Sharmila)', 'OOAD (TBD)', 'SSD-IV (Mr. Krishna Pradeep)', 'SSD-IV (Mr. Krishna Pradeep)', 'ED (TBD)', 'ED (TBD)'],
        ['CN_Lab (Ms. U. Kasthuri [M], Ms. U. Jayanthi [A])', 'SSD-IV (Mr. Krishna Pradeep)', '--- FREE ---', 'WP_Lab (Mrs. P. Vasuki [M], Mrs. E. Baby Anitha [A])', '--- FREE ---', 'AI (Mr. M. Azhagesan) / OST (Mr. O.K. Gowrishankar)'],
        ['CN_Lab (Ms. U. Kasthuri [M], Ms. U. Jayanthi [A])', 'AI (Mr. M. Azhagesan) / OST (Mr. O.K. Gowrishankar)', 'Library Hour (Mr. Krishna Pradeep)', 'WP_Lab (Mrs. P. Vasuki [M], Mrs. E. Baby Anitha [A])', '--- FREE ---', 'OOAD (TBD)'],
        ['CN_Lab (Ms. U. Kasthuri [M], Ms. U. Jayanthi [A])', 'ED (TBD)', 'OOAD (TBD)', 'WP_Lab (Mrs. P. Vasuki [M], Mrs. E. Baby Anitha [A])', 'OOAD (TBD)', 'PCD (Dr. V. Sharmila)']
      ]
    },
    'V_SEM_B': {
      periods: [
        ['--- FREE ---', 'AI (Mr. M. Azhagesan) / OST (Mr. O.K. Gowrishankar)', 'ED (TBD)', 'CN (Mr. B. Rajesh)', 'CN (Mr. B. Rajesh)', 'PCD (Dr. V. Sharmila)'],
        ['WP (Mrs. P. Vasuki)', 'CN_Lab (Mr. B. Rajesh [M], Ms. U. Jayanthi [A])', 'SSD-IV (Mr. Hari Prakash)', 'WP_Lab (Mrs. R. Vijhayalakshme [M], Mrs. P. Vasuki [A])', '--- FREE ---', 'WP (Mrs. P. Vasuki)'],
        ['PCD (Dr. V. Sharmila)', 'CN_Lab (Mr. B. Rajesh [M], Ms. U. Jayanthi [A])', '--- FREE ---', 'WP_Lab (Mrs. R. Vijhayalakshme [M], Mrs. P. Vasuki [A])', 'ED (TBD)', 'OOAD (TBD)'],
        ['SSD-IV (Mr. Hari Prakash)', 'CN_Lab (Mr. B. Rajesh [M], Ms. U. Jayanthi [A])', 'WP (Mrs. P. Vasuki)', 'WP_Lab (Mrs. R. Vijhayalakshme [M], Mrs. P. Vasuki [A])', 'OOAD (TBD)', 'ED (TBD)'],
        ['ED (TBD)', 'PCD (Dr. V. Sharmila)', 'CN (Mr. B. Rajesh)', 'AI (Mr. M. Azhagesan) / OST (Mr. O.K. Gowrishankar)', 'PCD (Dr. V. Sharmila)', 'SSD-IV (Mr. Hari Prakash)'],
        ['OOAD (TBD)', 'OOAD (TBD)', 'OOAD (TBD)', 'PCD (Dr. V. Sharmila)', 'MH (Mr. A. Rajkannan)', 'CN (Mr. B. Rajesh)'],
        ['CN (Mr. B. Rajesh)', 'WP (Mrs. P. Vasuki)', 'Library Hour (TBD)', 'SSD-IV (Mr. Hari Prakash)', 'WP (Mrs. P. Vasuki)', 'AI (Mr. M. Azhagesan) / OST (Mr. O.K. Gowrishankar)']
      ]
    }
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const classes = Object.keys(timetableData);

  const formatSubject = (subject) => {
    if (subject === '--- FREE ---') {
      return <span style={{ color: '#9ca3af', fontStyle: 'italic' }}>--- FREE ---</span>;
    }
    
    const parts = subject.split(' (');
    if (parts.length === 2) {
      const subjectName = parts[0];
      const teacherInfo = parts[1].slice(0, -1); // Remove closing parenthesis
      return (
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '11px' }}>{subjectName}</div>
          <div style={{ fontSize: '9px', color: '#6b7280' }}>({teacherInfo})</div>
        </div>
      );
    }
    return subject;
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
              color: 'white', 
              textDecoration: 'none',
              backgroundColor: '#06b6d4',
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
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>timetable</h1>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem' }}>
              🔄
            </button>
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
          {/* Navigation Info */}
          {navigationInfo && (
            <div style={{ 
              background: '#f0f9ff', 
              border: '1px solid #06b6d4', 
              borderRadius: '6px', 
              padding: '12px', 
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ color: '#06b6d4' }}>📋</span>
              <div>
                <strong>Viewing: {navigationInfo.className} - {navigationInfo.yearDept}</strong>
                <div style={{ fontSize: '14px', color: '#6b7280' }}>
                  Navigated from Dashboard
                </div>
              </div>
            </div>
          )}

          {/* Class Selection */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ marginRight: '10px', fontWeight: '500' }}>Select Class:</label>
            <select 
              value={selectedClass} 
              onChange={(e) => setSelectedClass(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #d1d5db' }}
            >
              {classes.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>

          {/* Timetable */}
          <div className="timetable-container">
            <div className="timetable-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <h2 className="timetable-title">{selectedClass}</h2>
                {navigationInfo && (
                  <Link 
                    to="/dashboard" 
                    className="btn btn-secondary"
                    style={{ padding: '8px 16px', fontSize: '14px' }}
                  >
                    ← Back to Dashboard
                  </Link>
                )}
              </div>
              <button 
                className="btn btn-primary"
                onClick={handleDownloadPDF}
                title={`Download PDF timetable for ${selectedClass}`}
              >
                📥 Download PDF
              </button>
            </div>

            <table className="timetable-table">
              <thead>
                <tr>
                  <th>PERIODS</th>
                  {days.map(day => (
                    <th key={day}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timetableData[selectedClass].periods.map((period, index) => (
                  <tr key={index}>
                    <td className="timetable-period">Period {index + 1}</td>
                    {period.map((subject, dayIndex) => (
                      <td key={dayIndex} className="timetable-subject">
                        {formatSubject(subject)}
                      </td>
                    ))}
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

export default Timetable;