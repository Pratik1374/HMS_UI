import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const handleLoginClick = (userType) => {
    // Use the navigate function to redirect to the login page with the role as a URL parameter
    navigate(`/login?role=${userType}`);
  };

  return (
    <div className="homepage">
      <div className="title">Welcome to Online Hotel Management System</div>
      <div className="login-options">
        <div
          className="login-option owner"
          onClick={() => handleLoginClick('owner')}
        >
          Owner Login
        </div>
        <div
          className="login-option manager"
          onClick={() => handleLoginClick('manager')}
        >
          Manager Login
        </div>
        <div
          className="login-option receptionist"
          onClick={() => handleLoginClick('receptionist')}
        >
          Receptionist Login
        </div>
      </div>
    </div>
  );
};

export default Homepage;
