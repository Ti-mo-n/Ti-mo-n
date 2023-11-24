import image5 from './images/logo.png';
import './Login.css';

function Login() {
  return (
    <div>
      <div className="Login-card">
        {/* Container for the login card */}
        <div className="Login-container">
          {/* Actual login card */}
          <div className="login-card2">
            <div className="card-image">
              {/* Logo image */}
              <img src={image5} alt="Logo" />
            </div>
            <div className="login-page">
              {/* Login form */}
              <h1>Log In</h1>
              <p2>Please enter your details here</p2>

              {/* Input fields for email and password */}
              <div className="input-fields">
                <input type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Enter your password" />
              </div>

              {/* Checkboxes for Remember Me and Forgot Password */}
              <div className="checkboxes">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
                <label>
                  <input type="checkbox" /> Forgot Password
                </label>
              </div>

              {/* Login button */}
              <button className="login-button">Login</button>

              {/* Link for signing up if the user doesn't have an account */}
              <div className="already-have-account">
                Do not have an account? <a href="/Signup">Sign Up</a>
              </div>

              {/* Divider with OR */}
              <div className="divider">
                <hr />
                <span>OR</span>
                <hr />
              </div>

              {/* Buttons for signing up with Google and Facebook */}
              <div className="api-options">
                <button className="google-api-button"> Signup with Google</button>
                <button className="facebook-api-button">Signup with Facebook</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
