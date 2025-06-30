import React from 'react';
import { Link } from 'react-router-dom';
import './AuthCard.css';

const Login = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>
        <form>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" required />
          </div>
          <button type="submit" className="btn btn-auth">Login</button>
          <div className="auth-switch">
            Don't have an account? <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
