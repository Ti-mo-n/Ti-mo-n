// DeanPage.jsx
import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { FaHome, FaCog, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './DeanPage.css';

function createData(name, location, application, status) {
  return { name, location, application, status };
}

const rows = [
  createData('Hostel A', 'Location A', 'Application PDF ', 'Pending'),
  createData('Hostel B', 'Location B', 'Application PDF ', 'Accepted'),
  createData('Hostel C', 'Location C', 'Application PDF ', 'Rejected'),
];

// Updated Sidebar Component
const Sidebar = ({ onToggle }) => (
  <div className="Sidebar">
    <div className="d-flex flex-column p-3 text-white bg-dark">
      <h2 className="mb-3">Dean Dashboard</h2>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active">
            <FaHome className="me-2" />
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link">

            <FaCog className="me-2" />
            Settings
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            <FaSignOutAlt className="me-2" />
            Logout
          </Link>
        </li>
      </ul>
      <div className="dropdown">
        <div
          className="nav-link dropdown-toggle text-white"
          id="dropdownUser"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaBars className="me-2" />
          Toggle
        </div>
        <ul className="dropdown-menu dropdown-menu-dark text-small" aria-labelledby="dropdownUser">
          <li onClick={onToggle}>
            <FaTimes className="me-2" />
            Close
          </li>
        </ul>
      </div>
    </div>
  </div>
);

// DeanPage Component
export default function DeanPage() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleAccept = (name) => {
    const row = rows.find((row) => row.name === name);
    row.status = 'Accepted';
    forceUpdate();
  };

  const handleReject = (name) => {
    const row = rows.find((row) => row.name === name);
    row.status = 'Rejected';
    forceUpdate();
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="DeanPage">
      <Sidebar onToggle={toggleSidebar} />
      <div className="Content">
        <div className="Header">
          <div className="Toggle" onClick={toggleSidebar}>
            <FaBars />
          </div>
          <h2>Hostel Applications</h2>
        </div>
        <TableContainer component={Paper} className="mb-4">
          <Table className="table table-striped" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Location</TableCell>
                <TableCell align="left">Application</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="left">{row.location}</TableCell>
                  <TableCell align="left">
                    {row.application}
                    <Button variant="contained" color="primary" onClick={() => window.open(row.application, '_blank')}>
                      View Application
                    </Button>
                  </TableCell>
                  <TableCell align="left" style={{ color: row.status === 'Accepted' ? 'green' : row.status === 'Rejected' ? 'red' : 'black', border: '2px solid', borderColor: row.status === 'Accepted' ? 'green' : row.status === 'Rejected' ? 'red' : 'black' }}>
                    {row.status}
                  </TableCell>
                  <TableCell align="left">
                    <Button variant="contained" style={{ backgroundColor: 'green', color: 'white' }} onClick={() => handleAccept(row.name)}>
                      Accept
                    </Button>
                    <Button variant="contained" style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleReject(row.name)}>
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
