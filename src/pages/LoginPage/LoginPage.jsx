import React, { useState } from 'react';
import './LoginPage.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email:"",
    password:"",
  });

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    console.log('Sending login request:', user);

    try {
      const response = await axios.post("https://tick-dzls.onrender.com/auth/login", user);
      console.log('Login response:', response.data);

      if (response.data) {
        setMessage("Login Successful");
          navigate("/user-dashboard", {state: {name: response.data.profile.name, email: response.data.profile.email}});

      } else {
        setMessage(response.data.message || "Invalid Credential. Wrong Email Or Password");
      }

    } catch (error) {
      console.error('Login error:', error);
      setMessage('Invalid Credential. Please Check Info and try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h1>Welcome Back</h1>
        <p className="subtitle">Enter your email and password to sign in</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Your email address" name='email' value={user.email} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Your password" name='password' value={user.password} onChange={handleChange} />
          </div>


          <div className="remember-me">
            {/* <img src={switchBase} alt="Switch" /> */}
            <label>Remember me</label>
          </div>

        <div className="remember-me">
          <img src='/assets/switch-base.svg' alt="Switch" />
          <label>Remember me</label>
        </div>

        <button type="submit" disabled={isSubmitting} className="button">
                    {isSubmitting ? "Signing in..." : "Sign in"}
                </button>
      </form>

        <p className="signup-link">
          Don't have an account? <a href="#signup">Sign up</a>
        </p>
      </div>

      <div className="sidebar">
        <img src='/assets/owl-logo.svg' alt="Owl" />
      </div>
    </div>
  )
};

export default LoginPage;
