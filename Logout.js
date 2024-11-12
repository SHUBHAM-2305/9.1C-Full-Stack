import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Updated path

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/'); // Redirect to home page after logging out
  };

  return (
    <div>
      <h2>Logging out...</h2>
      {handleLogout()}
    </div>
  );
};

export default Logout;
