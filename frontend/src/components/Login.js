import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Mock user data
  const mockUsers = [
    { username: 'admin', password: 'admin123', role: 'admin', name: 'Administrator' },
    { username: 'teacher1', password: 'teacher123', role: 'teacher', name: 'Dr. M. Venkatesan' },
    { username: 'teacher2', password: 'teacher123', role: 'teacher', name: 'Mrs. E. Baby Anitha' },
    { username: 'coordinator', password: 'coord123', role: 'coordinator', name: 'Mr. M. Azhagesan' },
    { username: 'demo', password: 'demo123', role: 'admin', name: 'Demo User' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    setTimeout(() => {
      const user = mockUsers.find(
        u => u.username === formData.username && u.password === formData.password
      );

      if (user) {
        // Store user data in localStorage if remember me is checked
        if (formData.rememberMe) {
          localStorage.setItem('skeduler_user', JSON.stringify(user));
        }
        onLogin(user);
      } else {
        setError('Invalid username or password. Please try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        {/* Background image placeholder */}
      </div>
      <div className="auth-right">
        <div className="auth-form">
          <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <button 
              style={{ 
                background: 'none', 
                border: 'none', 
                fontSize: '1.5rem', 
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '4px',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <MenuIcon size={18} />
            </button>
          </div>
          
          <h1 className="auth-title">Welcome Back!</h1>
          <p className="auth-subtitle">login to continue</p>
          
          {/* Demo credentials info */}
          <div style={{ 
            background: '#f0f9ff', 
            border: '1px solid #06b6d4', 
            borderRadius: '6px', 
            padding: '12px', 
            marginBottom: '20px',
            fontSize: '14px'
          }}>
            <strong>Demo Credentials:</strong><br/>
            Admin: <code>admin</code> / <code>admin123</code><br/>
            Teacher: <code>teacher1</code> / <code>teacher123</code><br/>
            Demo: <code>demo</code> / <code>demo123</code>
          </div>

          {error && (
            <div style={{ 
              background: '#fef2f2', 
              border: '1px solid #ef4444', 
              borderRadius: '6px', 
              padding: '12px', 
              marginBottom: '20px',
              color: '#dc2626',
              fontSize: '14px'
            }}>
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="auth-form-group">
              <label className="auth-label" htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="auth-input"
                value={formData.username}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="Enter your username"
                required
              />
            </div>
            
            <div className="auth-form-group">
              <label className="auth-label" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="auth-input"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="Enter your password"
                required
              />
            </div>
            
            <div className="auth-options">
              <div className="auth-checkbox">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <button 
                type="button" 
                className="auth-link" 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                onClick={() => alert('Forgot password functionality coming soon!')}
              >
                Forgot Password?
              </button>
            </div>
            
            <button 
              type="submit" 
              className="auth-button"
              disabled={isLoading}
              style={{ 
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
            >
              {isLoading ? (
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid #ffffff',
                    borderTop: '2px solid transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                  Logging in...
                </span>
              ) : (
                'Login now'
              )}
            </button>
          </form>
          
          <div className="auth-switch">
            Don't have an account? <Link to="/signup" className="auth-switch-link">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;