import React from 'react';
import { Link } from 'react-router-dom';
import './AuthCard.css';

const Signup = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Sign Up</h2>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Full Name" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" required />
          </div>
          <button type="submit" className="btn btn-auth">Sign Up</button>
          <div className="auth-switch">
            Already have an account? <Link to="/">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
