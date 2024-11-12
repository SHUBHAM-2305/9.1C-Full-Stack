import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Updated path
import '../styles/Home.css';
import { FaSearch, FaSignInAlt, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';

const Home = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/'); // Navigate back to the home page after logging out
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Shubham_Rana@Deakin</h1>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-bar" />
          <FaSearch className="search-icon" />
        </div>
        <div className="button-container">
          {currentUser ? (
            <button className="logout-button" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          ) : (
            <>
              <button className="login-button" onClick={() => navigate('/login')}>
                <FaSignInAlt /> Login
              </button>
              <button className="signup-button" onClick={() => navigate('/signup')}>
                <FaUserPlus /> Sign Up
              </button>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Home;
