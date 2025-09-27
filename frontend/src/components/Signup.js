import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Simulate signup - in real app, this would make an API call
    onLogin({ username: formData.username, role: 'admin' });
  };

  return (
    <div className="auth-container">
      <div className="auth-right">
        <div className="auth-form">
          <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <button style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>
              ☰
            </button>
          </div>
          
          <h1 className="auth-title">Welcome to Skeduler</h1>
          <p className="auth-subtitle">sign in to continue</p>
          
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
                required
              />
            </div>
            
            <div className="auth-form-group">
              <label className="auth-label" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="auth-input"
                value={formData.confirmPassword}
                onChange={handleChange}
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
                />
                <label htmlFor="rememberMe">remember me</label>
              </div>
              <a href="#" className="auth-link">forgot password!</a>
            </div>
            
            <button type="submit" className="auth-button">
              Sign in
            </button>
          </form>
          
          <div className="auth-switch">
            Already have an account? <Link to="/login" className="auth-switch-link">Login</Link>
          </div>
        </div>
      </div>
      <div className="auth-left">
        {/* Background image placeholder */}
      </div>
    </div>
  );
};

export default Signup;