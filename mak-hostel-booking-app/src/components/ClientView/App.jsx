// Importing necessary components and styles
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Importing individual page components
import Home from './Home';
import CreateAccount from './CreateAccount';
import Login from './Login';
import HostelDetails from './HostelDetails';
import CreateAccount2 from './CreateAccount2';
import BookingDetails from './BookingDetails';
import ExplorePage from './ExplorePage';

// App component
function App() {
  // Rendering the main App component
  return (
    <Routes>
      {/* Route for the Home page */}
      <Route path= "/Home" element={<Home />} />

      {/* Route for the signup page */}
      <Route path="/signup" element={<CreateAccount/>} />

      {/* Route for the login page */}
      <Route path="/login" element={<Login/>} />

      {/* Route for the hostels page */}
      <Route path="/hostels" element={<ExplorePage />} />

      {/* Route for a specific hostel details page */}
      <Route path="/hostels/:id" element={<HostelDetails />} />

      {/* 
        Commenting out the HostelDetails route for now. 
        Uncomment this line when HostelDetails component is ready.
      */}
      {/* <Route path="/HostelDetails" element={<HostelDetails/>} /> */}

      {/* Route for the CreateAccount2 page */}
      <Route path="/CreateAccount2" element={<CreateAccount2/>} />

      {/* Route for the BookingDetails page */}
      <Route path="/BookingDetails" element={<BookingDetails/>} />
    </Routes>
  );
}

// Exporting the App component as the default export
export default App;
