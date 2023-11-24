// Importing necessary React components, styles, and images
import { useState } from "react";
import { Link } from 'react-router-dom';
import image5 from './images/logo.png';
import './CreateAccount.css';

// CreateAccount2 component
function CreateAccount2() {
  // State to manage the user type (Dean or Custodian)
  const [userType, setUserType] = useState('Custodian');

  // Rendering the CreateAccount2 component
  return (
    <div className="create-account-container">
      {/* Container for the main create account card */}
      <div className="create-account-card">
        {/* Container for the login card with logo */}
        <div className="login-card2">
          {/* Image/logo section */}
          <div className ="card-image">
            <img src={image5} alt=""/>
          </div>

          {/* Create account page section */}
          <div className="create-account-page">
            <h1>Create an Account</h1>

            {/* Slide button for selecting user type (Dean or Custodian) */}
            <div className="slide-button">
              {/* Link to navigate back to Signup page */}
              <Link to="/Signup">
                <button
                  className={`slide-button-option ${userType === 'Dean' ? 'selected' : ''}`}
                  onClick={() => setUserType('Dean')}
                >
                  Dean
                </button>
              </Link>

              {/* Button for selecting Custodian user type */}
              <button
                className={`slide-button-option ${userType === 'Custodian' ? 'selected' : ''}`}
                onClick={() => setUserType('Custodian')}
              >
                Custodian
              </button>

              {/* Slider to indicate user type (Dean or Custodian) */}
              <div className={`slider ${userType === 'Custodian' ? 'right' : ''}`}></div>
            </div>

            {/* Input fields for user details */}
            <div className="input-fields">
              <p>Full Name</p>
              <input type="" placeholder= "Enter name & surname" />
              <p>Hostel Name</p>
              <input type="" placeholder= "Enter hostel name" />
              <p>Email Address</p>
              <input type="email" placeholder="Enter your email" />
              <p>Password</p>
              <input type="password" placeholder="Enter your password" />
            </div>

            {/* Button to create the account */}
            <button className="create-account-button">Create Account</button>

            {/* Link to navigate to the login page */}
            <div className="already-have-account">
              Already have an account? <a href="/login">Log In</a>
            </div>

            {/* Divider for visual separation */}
            <div className="divider">
              <hr />
              <span>OR</span>
              <hr />
            </div>

            {/* API options for signing up with Google or Facebook */}
            <div className="api-options">
              <button className="google-api-button">Sign Up with Google</button>
              <button className="facebook-api-button">Sign Up with Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exporting the CreateAccount2 component as the default export
export default CreateAccount2;
