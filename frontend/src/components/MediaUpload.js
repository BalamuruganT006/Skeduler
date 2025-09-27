import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MediaUpload = ({ user, onLogout }) => {
  const [uploadState, setUploadState] = useState('idle'); // 'idle', 'uploading', 'error'
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const [urlInput, setUrlInput] = useState('');

  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setUploadState('uploading');
      // Simulate upload process
      setTimeout(() => {
        setUploadState('idle');
        alert('File uploaded successfully!');
      }, 2000);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setUploadState('uploading');
      // Simulate upload process
      setTimeout(() => {
        setUploadState('idle');
        alert('File uploaded successfully!');
      }, 2000);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (urlInput.trim()) {
      const newUrl = {
        id: Date.now(),
        name: urlInput,
        avatar: urlInput.charAt(0).toUpperCase()
      };
      setUploadedUrls([...uploadedUrls, newUrl]);
      setUrlInput('');
    }
  };

  const handleUrlDelete = (id) => {
    setUploadedUrls(uploadedUrls.filter(url => url.id !== id));
  };

  const renderUploadArea = () => {
    switch (uploadState) {
      case 'uploading':
        return (
          <div className="upload-loading">
            <div className="upload-spinner"></div>
            <div className="upload-text">Uploading...</div>
            <button 
              className="btn btn-secondary" 
              onClick={() => setUploadState('idle')}
            >
              Cancel
            </button>
          </div>
        );
      case 'error':
        return (
          <div className="upload-error">
            <div className="upload-error-icon">⚠️</div>
            <div className="upload-text">File upload failed</div>
            <div className="upload-subtext">Please try again</div>
            <button 
              className="btn btn-primary" 
              onClick={() => setUploadState('idle')}
            >
              Try Again
            </button>
          </div>
        );
      default:
        return (
          <div 
            className="upload-area"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="upload-icon">☁️</div>
            <div className="upload-text">Drag your file(s) or browse</div>
            <div className="upload-subtext">Max 10 MB files are allowed</div>
            <input
              type="file"
              multiple
              accept=".docx,.xlsx,.png,.jpeg"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
              id="file-upload"
            />
            <label htmlFor="file-upload" className="btn btn-primary" style={{ marginTop: '15px' }}>
              Browse Files
            </label>
          </div>
        );
    }
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
              color: 'white', 
              textDecoration: 'none',
              backgroundColor: '#06b6d4',
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
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Skeduler</h1>
            <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem' }}>
              ☰
            </button>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem' }}>
              🔗
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
          <div className="upload-container">
            <div className="upload-header">
              <h2 className="upload-title">Media Upload</h2>
              <button className="upload-close">×</button>
            </div>
            
            <p style={{ color: '#6b7280', marginBottom: '20px' }}>
              Add your documents here, and you can upload up to 5 files max
            </p>

            {renderUploadArea()}

            <div style={{ color: '#6b7280', fontSize: '14px', marginBottom: '20px' }}>
              Only support .docx, .xlsx, .png and .jpeg files.
            </div>

            <div className="upload-separator">
              <span>OR</span>
            </div>

            <div className="upload-url-section">
              <h3 className="upload-url-title">Upload from URL</h3>
              <form onSubmit={handleUrlSubmit} className="upload-url-input">
                <input
                  type="url"
                  className="form-input"
                  placeholder="Add file URL"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Upload
                </button>
              </form>

              {uploadedUrls.length > 0 && (
                <div className="upload-url-list">
                  {uploadedUrls.map((url) => (
                    <div key={url.id} className="upload-url-item">
                      <div className="upload-url-info">
                        <div className="upload-url-avatar">{url.avatar}</div>
                        <span>{url.name}</span>
                      </div>
                      <button 
                        className="upload-url-delete"
                        onClick={() => handleUrlDelete(url.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaUpload;