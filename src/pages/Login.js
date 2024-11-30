import React, { useState } from "react";
import Forgot from "./Forgotpassword"; // Import the Forgot component

export default function LoginForm({ onLogin, onSwitchToSignup }) {
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  const [showForgot, setShowForgot] = useState(false); // Toggle Forgot Password view

  // Email Validation Regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Password Validation Regex
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]).{8,16}$/;

  // Handle changes in the input fields
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validate form inputs
  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    // Validate email
    if (!loginDetails.userName) {
      newErrors.userName = "Email is required";
      formIsValid = false;
    } else if (!emailRegex.test(loginDetails.userName)) {
      newErrors.userName = "Please enter a valid email address";
      formIsValid = false;
    }

    // Validate password
    if (!loginDetails.password) {
      newErrors.password = "Password is required";
      formIsValid = false;
    } else if (!passwordRegex.test(loginDetails.password)) {
      newErrors.password =
        "Password must be 8-16 characters long, include at least one uppercase letter, lowercase letter, symbol, and number";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  // Handle form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onLogin(loginDetails);
    }
  };

  return (
    <div className="login-form">
      {showForgot ? (
        <Forgot closeModal={() => setShowForgot(false)} />
      ) : (
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              name="userName"
              value={loginDetails.userName}
              onChange={handleLoginChange}
            />
            {errors.userName && (
              <div className="text-danger">{errors.userName}</div>
            )}
          </div>

          <div>
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={loginDetails.password}
              onChange={handleLoginChange}
            />
            {errors.password && (
              <div className="text-danger">{errors.password}</div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setShowForgot(true)}
            className="btn btn-link mb-2"
          >
            Forgot Password?
          </button>

          <button
            type="submit"
            className="btn w-100"
            style={{ backgroundColor: "#FEA116", color: "#fff", border: "none" }}
          >
            Login
          </button>
          <p className="form-label">
            Don't have an account?{" "}
            <button
              type="button"
              className="btn btn-link"
              onClick={onSwitchToSignup}
            >
              Signup
            </button>
          </p>
        </form>
      )}
    </div>
  );
}
