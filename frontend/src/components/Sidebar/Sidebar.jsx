import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Logo from '../../imgs/man.png';
import { sidebarData } from '../../Data/Data';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; 

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Initially, the sidebar is open
  
  // Function to handle the logout process
  const handleLogout = async () => {
    try {
      const response = await fetch("https://appback-rki9qe7dr-timons-projects-d9c8ae5c.vercel.app", {
        method: "GET", // Assuming your server uses GET for logout
      });

      if (response.ok) {
        console.log("Logged out");
        // Redirect or perform any other actions after logout
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Function to toggle sidebar open/close
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample user data, replace it with your user authentication logic
  const [user, setUser] = useState({ firstName: "Bahat" });

  return (
    <>
      {/* Toggle Button */}
      <button className={`toggle-button ${isSidebarOpen ? 'hide' : ''}`} onClick={toggleSidebar}>
        <MenuIcon />
      </button>

      {/* Sidebar */}
      <aside className={`Sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        {/* Close Button */}
        <button className="close-button" onClick={toggleSidebar}>
          <CloseIcon />
        </button>
        
        {/* Logo and User Info */}
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <div className="user-info">
            <span className="user-name">Mr. John{user.firstName}</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="menu">
          {sidebarData.map((item, index) => (
            <Link
              to={item.to}
              className={`Link ${selected === index ? 'menuItem active' : 'menuItem'}`}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </Link>
          ))}

          {/* Logout Button */}
          <button className="menuItem logout" onClick={handleLogout}>
            <LogoutIcon />
            <span><a href='/Login'>Logout</a></span>
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
