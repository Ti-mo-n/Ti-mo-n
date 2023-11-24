// Importing necessary React components and styling
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import MainDash from "./components/Maindash/MainDash";
import Sidebar from "./components/Sidebar/Sidebar";
import Bookings from "./components/Bookings/Bookings";
import HostelDetails from "./components/HostelDetails/HostelDetails";
import Analytics from "./components/RoomManagement/RoomManagement";
import EditPage from "./components/EditPage/EditPage";
import Login from "./components/Signin/Login";
import CreateAccount from "./components/Signin/CreateAccount";
import CreateAccount2 from "./components/Signin/CreateAccount2";
import Home from './components/ClientView/Home';
import DeanPage from './components/DeanPage/DeanPage';
// import ExplorePage from './components/ClientView/ExplorePage';

function App() {
  // Rendering the main App component
  return (
    <Router>
      {/* Wrapping the entire application in a div with the 'App' class */}
      <div className="App">
        {/* Adding a glass effect to the app */}
        <div className="AppGlass">
          {/* Setting up the routing for different pages */}
          <Routes>
            {/* Route for the login page */}
            <Route path="/login" element={<Login />} />
            
            {/* Route for creating a new account */}
            <Route path="/createaccount" element={<CreateAccount />} />
            
            {/* Route for the second step in creating an account */}
            <Route path="/createaccount2" element={<CreateAccount2 />} />
            
            {/* Route for the Dean's page */}
            <Route path="/DeanPage" element={<DeanPage />} />
            
            {/* Route for the home page */}
            <Route path= "/Home" element={<Home />} />
            
            {/* 
              Commenting out the ExplorePage route for now. 
              Uncomment this line when ExplorePage component is ready.
            */}
            {/* <Route path="/hostels" element={<ExplorePage />} /> */}

            {/* Wildcard route for all other pages */}
            <Route path="*" element={
              <>
                {/* Sidebar component for navigation */}
                <Sidebar />

                {/* Nested Routes for the main content */}
                <Routes>
                  {/* Route for the main dashboard */}
                  <Route path="/" element={<MainDash />} />
                  
                  {/* Route for the bookings page */}
                  <Route path="/bookings" element={<Bookings />} />
                  
                  {/* Route for the hostel details page */}
                  <Route path="/hostelDetails" element={<HostelDetails />} />
                  
                  {/* Route for the room management page */}
                  <Route path="/roomManagement" element={<Analytics />} />
                  
                  {/* Route for the edit page */}
                  <Route path="/editPage" element={<EditPage />} />
                </Routes>
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Exporting the App component as the default export
export default App;
