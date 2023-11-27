import "./index.css";
import React, { useState } from "react";
function Login() {
  const [user, setUser] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Sends a request to the backend to create the account
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // userType,
          email: event.target.elements.email.value,
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
        console.error("Login failed:", await response.text());
      }
    } catch (error) {
      console.error("Error signing in account:", error);
    }
  };

  return (
    <div>
      <div className="Login-card">
        <div className="Login-container">
          <div className="login-card2">
            <div className="card-image"></div>
            <div className="login-page">
              <h1 align="center">Sign In</h1>
              <p2>Please enter your details here</p2>
              <form onSubmit={handleSubmit}>
                <div className="input-fields">
                  <input
                    type="email"
                    placeholder="Enter you email"
                    name="email"
                  />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                  />
                </div>

                <div className="checkboxes">
                  <label>
                    <input type="checkbox" /> Remember Me
                  </label>
                  <a class="forgot" href="/forgot-password">
                    Forgot Password
                  </a>
                </div>

                <button className="login-button">Login</button>
              </form>
              <div className="already-have-account">
                Do not have an account? <a href="/CreateAccount2">Sign Up</a>
              </div>
              <div className="divider">
                <hr />
                <span>OR</span>
                <hr />
              </div>
              <div className="api-options">
                <button className="google-api-button">
                  {" "}
                  Signup with Google
                </button>
                <button className="facebook-api-button">
                  Signup with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
