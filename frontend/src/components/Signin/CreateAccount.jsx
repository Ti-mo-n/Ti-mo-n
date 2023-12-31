import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreateAccount.css";

function CreateAccount() {
  const [userType, setUserType] = useState("Dean");
  const [user, setUser] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Sends a request to the backend to create the account
    try {
      const response = await fetch("https://appback-rki9qe7dr-timons-projects-d9c8ae5c.vercel.app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: event.target.elements.firstName.value,
          lastName: event.target.elements.lastName.value,
          email: event.target.elements.email.value,
          phoneContact: event.target.elements.phoneContact.value,
          password: event.target.elements.password.value,
        }),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData.user);
        // Access user information from the response
        console.log("user:", user);
        //hav to save the user into the state
      } else {
        //response is not success
        console.error("Signup failed:", await response.text());
      }
    } catch (error) {
      console.error("Error signing up account:", error);
    }
  };

  return (
    <div className="create-account-container">
      <div className="create-account-card">
        <div className="login-card2">
          <div className="create-account-page">
            <h1>Create an Account</h1>
            <div className="slide-button">
              <button
                className={`slide-button-option ${
                  userType === "Dean" ? "selected" : ""
                }`}
                onClick={() => setUserType("Dean")}
              >
                Dean
              </button>
              <Link to="/CreateAccount2">
                <button
                  className={`slide-button-option ${
                    userType === "Custodian" ? "selected" : ""
                  }`}
                  onClick={() => setUserType("Custodian")}
                >
                  Custodian
                </button>
              </Link>
              <div
                className={`slider ${userType === "Custodian" ? "right" : ""}`}
              ></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-fields">
                <input
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                />

                <input
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                />

                <input
                  type="text"
                  placeholder="Enter your Phone Contact"
                  name="phoneContact"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                />
              </div>

              <button className="create-account-button" type="submit">
                Create Account
              </button>
            </form>
            <div className="already-have-account">
              Already have an account? <Link to="/login">Log In</Link>
            </div>

            <div className="divider">
              <hr />
              <span>OR</span>
              <hr />
            </div>

            <div className="api-options">
              <button className="google-api-button">Sign Up with Google</button>
              <button className="facebook-api-button">
                Sign Up with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
